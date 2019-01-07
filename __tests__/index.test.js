import lol from "../index";

jest.mock("axios");

test("fetches Aatrox data from the LoL static data cdn", async () => {
  const champion = await lol.getChampion({
    champion: "Aatrox"
  });
  return expect(champion.id).toEqual("Aatrox");
});

test("fetches champions data from the LoL static data cdn", async () => {
  const champions = await lol.getChampions();
  return expect(champions.length).toBe(2);
});

test("fetches Boots of Speed data from the LoL static data cdn", async () => {
  const item = await lol.getItem({
    item: "Boots of Speed"
  });
  return expect(item.name).toEqual("Boots of Speed");
});

test("fetches items data from the LoL static data cdn", async () => {
  const items = await lol.getItems();
  return expect(items.length).toBe(2);
});

test("fetches Lesser Glyph of Attack Damage data from the LoL static data cdn", async () => {
  const rune = await lol.getRune({
    rune: "Lesser Glyph of Attack Damage"
  });
  return expect(rune.description).toEqual("+0.16 attack damage");
});

test("fetches runes data from the LoL static data cdn", async () => {
  const runes = await lol.getRunes();
  return expect(runes.length).toBe(2);
});
