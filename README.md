# Riot LoL

> Simplified, up-to-date, League of Legends champions list.


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