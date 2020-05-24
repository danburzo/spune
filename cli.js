#!/usr/bin/env node
let spune = require('./index');
let args = process.argv.slice(2);
let flags = args.filter(i => i.match(/^\-[a-z\-]/));
let params = args.filter(i => !i.match(/^\-[a-z\-]/));

let matches_flag = str => {
	let re = new RegExp(`^\\-(\\-)?${str[0]}(${str.slice(1)})?`);
	return flag => flag.match(re);
}

let scurt = flags.some(matches_flag('scurt'));

let gen = 0;
if (flags.some(matches_flag('feminin'))) {
	gen = 1;
} else if (flags.some(matches_flag('neutru'))) {
	gen = 2;
}

let res = spune(
	params[0], 
	gen, 
	scurt,
	params.length > 1 ? params.slice(1) : undefined
);

console.log(res);