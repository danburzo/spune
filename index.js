function spune(n, feminin) {

	if (n === 0) {
		return 'zero';
	}

	if (n <= 10) {
		switch (n) {
			case 1: return 'unu';
			case 2: return 'doi';
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
			cifra === 4 ? 'pai' : 
			cifra === 6 ? 'șai' : 
			spune(cifra);
		return `${prefix}sprezece`;
	}

	// zeci
	if (n < 100) {
		let zeci = Math.floor(n / 10);
		let cifra = n % 10;
		let prefix = 
			zeci === 2 ? 'două' : 
			zeci === 6 ? 'șai' : 
			spune(zeci);
		let num = `${prefix}zeci`;
		if (cifra !== 0) {
			num += ` și ${spune(cifra)}`;
		}
		return num;
	}

	// sute
	if (n < 1000) {
		let sute = Math.floor(n / 100);
		let rest = n % 100;
		let num = sute === 1 ? 'o sută' :
			sute === 2 ? 'două sute' :
			spune(sute) + ' sute';
		if (rest) {
			return `${num} ${spune(rest)}`;
		}
		return num;
	}

	// mii
	if (n < 1000 * 1000) {
		let mii = Math.floor(n / 1000);
		let rest = n % 1000;
		let num = mii === 1 ? 'o mie' :
			mii === 2 ? 'două mii' :
			spune(mii) + (mii < 20 ? '' : ' de') + ' mii';
		if (rest) {
			return `${num} ${spune(rest)}`;
		}
		return num;
	}

	// milioane
	let M = 1000 * 1000;
	if (n < 1000 * M) {
		let milioane = Math.floor(n / M);
		let rest = n % M;
		let num = milioane === 1 ? 'un milion' :
			milioane === 2 ? 'două milioane' :
			spune(milioane) + (milioane < 20 ? '' : ' de') + ' milioane';
		if (rest) {
			return `${num} ${spune(rest)}`;
		}
		return num;
	}

	// miliarde
	let MM = 1000 * 1000 * 1000;
	if (n < 1000 * MM) {
		let miliarde = Math.floor(n / MM);
		let rest = n % MM;
		let num = miliarde === 1 ? 'un miliard' :
			miliarde === 2 ? 'două miliarde' :
			spune(miliarde) + (miliarde < 20 ? '' : ' de') + ' miliarde';
		if (rest) {
			return `${num} ${spune(rest)}`;
		}
		return num;
	}

	return 'nu știu';
}

module.exports = spune;
