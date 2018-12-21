# Riot LoL

<p>
  <a href="https://circleci.com/gh/chanmatthew/riot-lol"><img src="https://circleci.com/gh/chanmatthew/riot-lol.svg?style=svg" alt="CircleCI"/></a>
  <a href="https://npmjs.org/package/riot-lol"><img src="https://img.shields.io/npm/v/riot-lol.svg?style=flat" alt="NPM" /></a>
  <a href="https://github.com/chanmatthew/riot-lol"><img src="https://img.shields.io/badge/PRs%20-welcome-brightgreen.svg" alt="PR's welcome"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

> Library for Riot's League of Legends Static CDN Data.

## Install

```
$ npm install --save riot-lol
```

## Usage

```js
import lol from "./lol-champions";

lol.getChampions().then(champions => {
  console.log(champions);
});
//=> array of champions

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

lol.getItems().then(items => {
  console.log(items);
});
//=> array of items

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

// in the case of multiple items having the same name:
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

## License

MIT
