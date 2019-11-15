# spune

Say any number from zero to a trillion, in Romanian.

## Usage

You can run it with `npx` without installing:

```bash
$ npx spune 12304
# => douăsprezece mii trei sute patru
```

Install it with `npm` or `yarn`:

```bash
# npm version
npm install -g spune

# yarn version
yarn global add spune
```

Then throw any number at it:

```bash
$ spune 4
# => patru
```

## API

```js
let spune = require('spune');
spune(4); // => "patru"
```