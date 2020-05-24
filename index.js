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
	
	*	`prep` (bool) 
	
		include, sau nu, prepoziția `de`
 */

function spune(n, gen, scurt, prep) {

	if (n === 0) {
		return 'zero';
	}

	if (n <= 10) {
		switch (+n) {
			case 1: return gen && gen !== 2 ? 'una' : 'unu';
			case 2: return gen ? 'două' : 'doi';
			case 3: return 'trei';
			case 4: return 'patru';
			case 5: return 'cinci';
			case 6: return 'șase';
			case 7: return 'șapte';
			case 8: return 'opt';
			case 9: return 'nouă';
			case 10: return 'zece';
		}
	}

	// zeci
	if (n < 20) {
		let cifra = n % 10;
		let prefix = 
			cifra === 1 ? 'un' : 
			cifra === 2 && scurt ? 'doi' :
			cifra === 4 ? 'pai' : 
			cifra === 5 && scurt ? 'cin' : 
			cifra === 6 ? 'șai' : 
			cifra === 8 && scurt ? 'optî' :
			spune(cifra, gen, scurt);
		return `${prefix}${ scurt ? 'șpe' : 'sprezece'}`;
	}

	// zeci
	if (n < 100) {
		let zeci = Math.floor(n / 10);
		let cifra = n % 10;
		let prefix = zeci === 6 ? 'șai' : spune(zeci, 1, scurt);
		let num = `${prefix}zeci`;
		if (cifra !== 0) {
			num += ` și ${spune(cifra, gen, scurt)}`;
		}
		return num + (prep ? ' de' : '');
	}

	// sute
	if (n < 1000) {
		let sute = Math.floor(n / 100);
		let rest = n % 100;
		let num = sute === 1 ? 'o sută' : spune(sute, 1, scurt) + ' sute';
		if (rest) {
			return `${num} ${spune(rest, gen, scurt, prep)}`;
		}
		return num;
	}

	// mii
	if (n < 1000 * 1000) {
		let mii = Math.floor(n / 1000);
		let rest = n % 1000;
		let num = mii === 1 ? 'o mie' : spune(mii, 1, scurt) + (mii % 100 < 20 ? '' : ' de') + ' mii';
		if (rest) {
			return `${num} ${spune(rest, gen, scurt, prep)}`;
		}
		return num;
	}

	// milioane
	let M = 1000 * 1000;
	if (n < 1000 * M) {
		let milioane = Math.floor(n / M);
		let rest = n % M;
		let num = milioane === 1 ? 'un milion' :
			spune(milioane, 1, scurt) + (milioane % 100 < 20 ? '' : ' de') + ' milioane';
		if (rest) {
			return `${num} ${spune(rest, gen, scurt, prep)}`;
		}
		return num;
	}

	// miliarde
	let MM = 1000 * 1000 * 1000;
	if (n < 1000 * MM) {
		let miliarde = Math.floor(n / MM);
		let rest = n % MM;
		let num = miliarde === 1 ? 'un miliard' : spune(miliarde, 1, scurt) + (miliarde % 100 < 20 ? '' : ' de') + ' miliarde';
		if (rest) {
			return `${num} ${spune(rest, gen, scurt, prep)}`;
		}
		return num;
	}

	return 'nu știu';
}

module.exports = spune;
