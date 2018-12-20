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
