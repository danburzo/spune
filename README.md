# spune

Spell any number from zero to a trillion, in Romanian.

_The rest of the documentation is in Romanian:_

Spune pe litere orice număr de la zero la un trilion.

## Utilizare

### Din linia de comandă

Se poate rula cu `npx` fără a instala pachetul:

```bash
$ npx spune 12304
# => douăsprezece mii trei sute patru
```

Se poate instala global cu `npm` sau `yarn`:

```bash
# versiunea pt npm
npm install -g spune

# versiunea pt yarn
yarn global add spune
```

Opțiuni disponibile:

* `-m` sau `--masculin` acordă numărul cu un substantiv masculin; opțiunea poate fi omisă;
* `-f` sau `--feminin` acordă numărul cu un substantiv feminin;
* `-n` sau `--neutru` acordă numărul cu un substantiv neutru;
* `-s` sau `--scurt` folosește forma scurtă pentru 11 - 19 (_unșpe_, etc.)
* `-p` sau `--prep` adaugă prepoziția _de_ în cazurile care o necesită

Exemple:

```bash
spune 212322
# două sute douăsprezece mii trei sute douăzeci și doi

spune -f 212322
# două sute douăsprezece mii trei sute douăzeci și două

spune -f -s 212322
# două sute doișpe mii trei sute douăzeci și două

spune -f -s -p 212322
# două sute doișpe mii trei sute douăzeci și două de
```

### API programatic

```js
let spune = require('spune');
spune(4); // => "patru"
```

__spune__(_număr_, _gen = 0_, _scurt = false_, _prep = false_) → _String_

Returnează reprezentarea pe litere a unui număr cuprins între 0 și un trilion. Pentru numere mai mari de-atît, sau lucruri care nu sunt numere, returnează string-ul `nu știu`.

Opțiuni:

* __gen__ (boolean / number, implicit `0`) — `0` pt. masculin (implicit), `1` pt. feminin, `2` pt. neutru;
* __scurt__ (boolean, implicit `false`) — dacă se dorește forma scurtă pentru 11 - 19 (_unșpe_, etc.);
* __prep__ (boolean, implicit `false`) — dacă se dorește adăugarea prepoziției _de_ după număr, în cazurile care o necesită; 

## Referințe

* [Romanian numbers](https://en.wikipedia.org/wiki/Romanian_numbers)