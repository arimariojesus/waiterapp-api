import { addAliases } from 'module-alias';
import { join, resolve } from 'node:path';

const srcDir = join(__dirname, '..');

addAliases({ '@': resolve(srcDir) });
