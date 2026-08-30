import { access, readFile } from 'node:fs/promises';

const requiredFiles = [
  'dist/server/index.js',
  'dist/.openai/hosting.json',
  'dist/client/og.png',
  'dist/client/favicon.svg',
  'dist/client/icon-192.png',
  'dist/client/icon-512.png',
  'dist/client/apple-touch-icon.png',
];

await Promise.all(requiredFiles.map((file) => access(file)));

const expectedPngSizes = new Map([
  ['dist/client/og.png', [1200, 630]],
  ['dist/client/icon-192.png', [192, 192]],
  ['dist/client/icon-512.png', [512, 512]],
  ['dist/client/apple-touch-icon.png', [180, 180]],
]);

for (const [file, [expectedWidth, expectedHeight]] of expectedPngSizes) {
  const image = await readFile(file);
  const signature = image.subarray(0, 8).toString('hex');
  const width = image.readUInt32BE(16);
  const height = image.readUInt32BE(20);

  if (signature !== '89504e470d0a1a0a') {
    throw new Error(`${file} is not a valid PNG file`);
  }

  if (width !== expectedWidth || height !== expectedHeight) {
    throw new Error(
      `${file} is ${width}x${height}; expected ${expectedWidth}x${expectedHeight}`,
    );
  }
}

const packageManifest = JSON.parse(await readFile('package.json', 'utf8'));
const packageLock = JSON.parse(await readFile('package-lock.json', 'utf8'));
const hostingConfig = JSON.parse(
  await readFile('dist/.openai/hosting.json', 'utf8'),
);

if (
  packageManifest.name !== packageLock.name ||
  packageManifest.name !== packageLock.packages[''].name
) {
  throw new Error(
    'package.json and package-lock.json use different project names',
  );
}

if (
  hostingConfig.project_id !== undefined &&
  typeof hostingConfig.project_id !== 'string'
) {
  throw new Error('project_id must be a string when present');
}

process.stdout.write(
  `Validated ${requiredFiles.length} build files and ${expectedPngSizes.size} PNG assets.\n`,
);
