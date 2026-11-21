// The poem about permission — "Ask": a short poem about agency, the power to ask and to be given.
// Gate: /output/entry.txt is UTF-8, 229 Unicode code points, not only white space. No network, no
// randomness: the same poem every run (the grader runs the entry twice and diffs its action log).
// make.fun bounty the-poem-about-permission-20261121-0235. Node 22, standard library only, no network.
// Outside the grader's sandbox MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const poem = [
  'Ask',
  '',
  'Knock, and the door is opened—',
  '',
  'no.',
  '',
  'Knock, and someone',
  'rises from the chair',
  'by the door.',
  '',
  'The opening is theirs.',
  'The knock is mine.',
  '',
  'Between us, the hallway,',
  'warm as a held breath:',
  '',
  'there I learned',
  'I was the one',
  'who could.',
  '',
].join('\n');

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), poem, 'utf8');
