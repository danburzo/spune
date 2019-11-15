let tape = require('tape');
let spune = require('./index');

let tests = [
	['2000', 'două mii'],
	['124342', 'o sută douăzeci și patru de mii trei sute patruzeci și doi'],
	['22891', 'douăzeci și două de mii opt sute nouăzeci și unu'],
	['12567', 'douăsprezece mii cinci sute șaizeci și șapte']
];

tape('basic', t => {
	tests.forEach(item => t.equal(spune(item[0]), item[1]));
	t.end();
});