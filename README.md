# Riot LoL

<p>
  <a href="https://circleci.com/gh/chanmatthew/riot-lol"><img src="https://circleci.com/gh/chanmatthew/riot-lol.svg?style=svg" alt="CircleCI"/></a>
  <a href="https://npmjs.org/package/riot-lol"><img src="https://img.shields.io/npm/v/riot-lol.svg?style=flat" alt="NPM" /></a>
  <a href="https://github.com/chanmatthew/riot-lol"><img src="https://img.shields.io/badge/PRs%20-welcome-brightgreen.svg" alt="PR's welcome"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

> Library for Riot's League of Legends Static CDN Data.

### Installation

```
$ npm install --save riot-lol
```

### Usage

#### Import

```js
import lol from "./lol-champions";
```

#### `getChampions()`

```js
lol.getChampions().then(champions => {
  console.log(champions);
});
//=> array of champions
```

#### `getChampion()`

```js
lol
  .getChampion({
    champion: "Aatrox"
  })
  .then(champion => {
    console.log(champion.spriteCss);
  })
  .catch(err => {
    console.log(err);
  });
//=> sprite CSS of the champion "Aatrox"
```

#### `getItems()`

```js
lol.getItems().then(items => {
  console.log(items);
});
//=> array of items
```

#### `getItem()`

```js
lol
  .getItem({
    item: "Boots of Speed"
  })
  .then(item => {
    console.log(item.plaintext);
  })
  .catch(err => {
    console.log(err);
  });
//=> plain text description of the item "Boots of Speed"
```

For the cases in which multiple items share the same name:

```js
lol
  .getItem({
    item: "Enchantment: Warrior"
  })
  .then(item => {
    console.log(item);
  })
  .catch(err => {
    console.log(err);
  });
//=> array of items with the name "Enchantment: Warrior"
```

#### `getRunes()`

```js
lol.getRunes().then(runes => {
  console.log(runes);
});
//=> array of runes
```

#### `getRune()`

```js
lol
  .getRune({
    rune: "Lesser Glyph of Attack Damage"
  })
  .then(rune => {
    console.log(rune.description);
  })
  .catch(err => {
    console.log(err);
  });
//=> description of the rune "Lesser Glyph of Attack Damage"
```

#### `getMasteries()`

```js
lol.getMasteries().then(masteries => {
  console.log(masteries);
});
//=> array of masteries
```

#### `getMastery()`

```js
lol
  .getMastery({
    mastery: "Precision"
  })
  .then(mastery => {
    console.log(mastery.description);
  })
  .catch(err => {
    console.log(err);
  });
//=> array with the descriptions of the mastery "Precision"
```

## License

MIT
