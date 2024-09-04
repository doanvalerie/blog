import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(import.meta.url);
const stylesDirectory = fileURLToPath(
  path.join(__dirname, 'src/app/(pages)/_globals/styles')
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [stylesDirectory],
  },
};

export default nextConfig;
