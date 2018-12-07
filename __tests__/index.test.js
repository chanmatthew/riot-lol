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
