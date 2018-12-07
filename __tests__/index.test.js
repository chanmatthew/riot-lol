import lol from "../index";

jest.mock("axios");

test("fetches Aatrox data from the LoL static data cdn", () => {
  return lol
    .getChampion({ champion: "Aatrox" })
    .then(champion => expect(champion.id).toEqual("Aatrox"));
});

test("fetches champions data from the LoL static data cdn", () => {
  return lol.getChampions().then(champions => expect(champions.length).toBe(2));
});
