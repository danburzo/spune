#!/usr/bin/env node
let spune = require('./index');
let args = process.argv.slice(2);
let feminin = args.some(i => i.match(/\-\-?f(eminin)?/));
let neutru = args.some(i => i.match(/\-\-?n(eutru)?/));
let masculin = args.some(i => i.match(/\-\-?m(asculin)?/));
let short = args.some(i => i.match(/\-\-?s(curt)?/));
let prep = args.some(i => i.match(/\-\-?p(rep)?/));
let number = args.find(i => !isNaN(parseInt(i, 10)));
console.log(spune(number, masculin ? 0 : feminin ? 1 : neutru ? 2 : 0, short, prep));