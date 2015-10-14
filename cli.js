#! /usr/bin/env node
console.log(require('./index').assemble(require('fs').readFileSync(process.argv[2], 'utf8'), process.argv[3]));
