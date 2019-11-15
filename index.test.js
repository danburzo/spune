let tape = require('tape');
let spune = require('./index');

let tests = [
	[2000, 'două mii'],
	[124342, 'o sută douăzeci și patru de mii trei sute patruzeci și doi'],
	[22891, 'douăzeci și două de mii opt sute nouăzeci și unu'],
	[12567, 'douăsprezece mii cinci sute șaizeci și șapte'],
	[129432147144, 'o sută douăzeci și nouă de miliarde patru sute treizeci și două de milioane o sută patruzeci și șapte de mii o sută patruzeci și patru']
];

tape('basic', t => {
	tests.forEach(item => t.equal(spune(item[0]), item[1], item[0]));
	t.end();
});