import { addAliases } from 'module-alias';
import { join, resolve } from 'path';

const srcDir = join(__dirname, '..');

addAliases({ '@': resolve(srcDir) });
