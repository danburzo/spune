# spune

Spell any number from zero to a trillion, in Romanian.

_The rest of the documentation is in Romanian:_

Scrie pe litere orice număr de la zero la un trilion.

## Utilizare

### Din linia de comandă

Se poate rula cu `npx` fără a instala pachetul:

```bash
npx spune 12304
# => douăsprezece mii trei sute patru
```

Se poate instala global cu `npm` sau `yarn`:

```bash
# versiunea pt npm
npm install -g spune

# versiunea pt yarn
yarn global add spune
```

Apoi se poate folosi sub forma:

```bash
spune [optiuni] numar [singular, [plural]]
```

Opțiuni disponibile:

* `-m` sau `--masculin` acordă numărul cu un substantiv masculin; opțiunea poate fi omisă;
* `-f` sau `--feminin` acordă numărul cu un substantiv feminin;
* `-n` sau `--neutru` acordă numărul cu un substantiv neutru;
* `-s` sau `--scurt` folosește forma scurtă pentru 11 - 19 (_unșpe_, etc.)

Exemple:

```bash
spune 212322
# două sute douăsprezece mii trei sute douăzeci și doi

spune -f 212322
# două sute douăsprezece mii trei sute douăzeci și două

spune -f -s 212322
# două sute doișpe mii trei sute douăzeci și două

spune -f -s 212322 comandă comenzi
# două sute doișpe mii trei sute douăzeci și două de comenzi
```

### API programatic

```js
let spune = require('spune');
spune(4); // => "patru"
```

__spune__(_număr_, _gen = 0_, _scurt = false_, _forme_) → _String_

Returnează reprezentarea pe litere a unui număr cuprins între 0 și un trilion. Pentru numere mai mari de-atît, sau lucruri care nu sunt numere, returnează string-ul `nu știu`.

Opțiuni:

* __gen__ (boolean / number, implicit `0`) — `0` pt. masculin (implicit), `1` pt. feminin, `2` pt. neutru;
* __scurt__ (boolean, implicit `false`) — dacă se dorește forma scurtă pentru 11 - 19 (_unșpe_, etc.);
* __forme__ (Array, opțional) — forma singulară și plurală a substantivului, de exemplu `["carte", "cărți"]`.

Exemple:

```js
let spune = require('spune');

spune(22, 0, false);
// => douăzeci și doi

spune(22, 1, false, ['carte', 'cărți']);
// => douăzeci și două de cărți
```

## Referințe

* [Romanian numbers](https://en.wikipedia.org/wiki/Romanian_numbers)