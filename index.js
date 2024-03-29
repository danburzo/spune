/*
	Spune numărul `n`. 

	Opțiuni:

	* 	`gen` (number)
		
		0 — masculin
		1 — feminin
		2 — neutru

	* 	`scurt` (bool) 
		
		pentru 11-19, folosește forma scurtă:
		de la "unșpe" la "nouășpe"

	*	`forme` (Array)
		
		forma la singular și la plural a unui substantiv
		de introdus după număr
 */

function spune(n, gen, scurt, forme) {
	
	n = +n;

	let fem = gen && gen !== 2;

	if (n === 0) {
		if (forme) {
			let num = fem ? 'nicio' : 'niciun';
			if (forme[0]) {
				num += ' ' + forme[0];
			}
			return num;
		}
		return 'zero';
	}

	if (n <= 10) {
		let num;
		switch (n) {
			case 1: 
				num = forme ? 
					fem ? 'o' : 'un' :
					fem ? 'una' : 'unu';
				break;
			case 2: num = gen ? 'două' : 'doi'; break;
			case 3: num = 'trei'; break;
			case 4: num = 'patru'; break;
			case 5: num = 'cinci'; break;
			case 6: num = 'șase'; break;
			case 7: num = 'șapte'; break;
			case 8: num = 'opt'; break;
			case 9: num = 'nouă'; break;
			case 10: num = 'zece'; break;
		}

		let sufix = forme ? n === 1 ? forme[0] : forme[1] : null;
		if (sufix) {
			num += ' ' + sufix;
		}
		return num;
	}

	if (n < 20) {
		let cifra = n % 10;
		let prefix = 
			cifra === 1 ? 'un' : 
			cifra === 2 && scurt ? 'doi' :
			cifra === 4 ? 'pai' : 
			cifra === 5 && scurt ? 'cin' : 
			cifra === 6 ? 'șai' : 
			cifra === 8 && scurt ? 'optî' :
			spune(cifra, gen);
		let num = `${prefix}${ scurt ? 'șpe' : 'sprezece'}`;
		return forme && forme[1] ? num + ' ' + forme[1] : num;
	}

	// zeci
	if (n < 100) {
		let zeci = Math.floor(n / 10);
		let cifra = n % 10;
		let num;
		if (zeci === 6) {
			num = 'șai';
		} else if (zeci === 5 && scurt) {
			num = 'cin';
		} else {
			num = spune(zeci, 1, scurt);
		}
		if (cifra !== 0 && scurt) {
			num += cifra === 6 ? '' : 'ș';
		} else {
			num += 'zeci';
		}
		if (cifra !== 0) {
			num += `${scurt ? '' : ' și '}${spune(cifra, gen, scurt)}`;
		}
		if (forme) {
			num += ' de';
		}
		return forme && forme[1] ? num + ' ' + forme[1] : num;
	}

	// sute
	if (n < 1000) {
		let sute = Math.floor(n / 100);
		let rest = n % 100;
		let num = spune(sute, 1, scurt, ['sută', 'sute']);
		if (rest) {
			num += ' ' + spune(rest, gen, scurt);
		}
		if (forme && rest >= 20) {
			num += ' de';
		}
		return forme && forme[1] ? num + ' ' + forme[1] : num;
	}

	let marimi = [
		[Math.pow(10, 3), 'mie', 'mii', 1],
		[Math.pow(10, 6), 'milion', 'milioane', 2],
		[Math.pow(10, 9), 'miliard', 'miliarde', 2],
		[Math.pow(10, 12), 'trilion', 'trilioane', 2],
		[Math.pow(10, 15), 'catralion', 'catralioane', 2],
		[Math.pow(10, 18), 'cvintilion', 'cvintilioane', 2]
		[Math.pow(10, 21), 'sextilion', 'sextilioane', 2],
		[Math.pow(10, 24), 'septilion', 'septilioane', 2]
	];

	let m = marimi.find(m => n < 1000 * m[0]);
	if (m) {
		let div = Math.floor(n / m[0]);
		let rest = n % m[0];
		let num = spune(div, m[3], scurt, [m[1], m[2]]);
		if (rest) {
			num += ' ' + spune(rest, gen, scurt);
		}
		if (forme && rest >= 20) {
			num += ' de';
		}
		return forme && forme[1] ? num + ' ' + forme[1] : num;
	}

	return `nu știu${forme && forme[1] ? ' cîte ' + forme[1] : ''}`;
}

module.exports = spune;