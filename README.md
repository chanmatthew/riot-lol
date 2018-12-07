# Riot LoL

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
```


## License

MIT