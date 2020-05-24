let tape = require('tape');
let spune = require('./index');

let tests = [
	[1, 'unu', 'una'],
	[2000, 'două mii'],
	[124342, 
		'o sută douăzeci și patru de mii trei sute patruzeci și doi',
		'o sută douăzeci și patru de mii trei sute patruzeci și două'
	],
	[22891, 
		'douăzeci și două de mii opt sute nouăzeci și unu',
		'douăzeci și două de mii opt sute nouăzeci și una',
	],
	[12567, 'douăsprezece mii cinci sute șaizeci și șapte'],
	[129432147144, 'o sută douăzeci și nouă de miliarde patru sute treizeci și două de milioane o sută patruzeci și șapte de mii o sută patruzeci și patru'],
	[3213213123, 'trei miliarde două sute treisprezece milioane două sute treisprezece mii o sută douăzeci și trei']
];

tape('basic', t => {
	tests.forEach(item => t.equal(spune(item[0]), item[1], item[0]));
	t.end();
});

tape('feminine', t => {
	tests.forEach(item => {
		t.equal(spune(item[0], true), item[2] || item[1], item[0]);
	});
	t.end();
});

tape('short', t => {
	let short = [
		[12, 'doișpe'],
		[18300, 'optîșpe mii trei sute']
	];

	short.forEach(item => {
		t.equal(spune(item[0], false, true), item[1], item[0]);
	});
	t.end();
});

tape('prep', t => {
	let prep = [
		[3, 'trei'],
		[12, 'doisprezece'],
		[20, 'douăzeci de'],
		[125, 'o sută douăzeci și cinci de'],
		[1010, 'o mie zece']
	];

	prep.forEach(item => {
		t.equal(spune(item[0], false, false, []), item[1], item[0]);
	});
	t.end();
})