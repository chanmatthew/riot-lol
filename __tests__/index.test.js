import lol from "../index";

jest.mock("axios");

test("fetches Aatrox data from the LoL static data cdn", async () => {
  const champion = await lol.getChampion("Aatrox");
  return expect(champion.id).toEqual("Aatrox");
});

test("fetches champions data from the LoL static data cdn", async () => {
  const champions = await lol.getChampions();
  return expect(champions.length).toBe(2);
});

test("fetches Boots of Speed data from the LoL static data cdn", async () => {
  const item = await lol.getItem("Boots of Speed");
  return expect(item.name).toEqual("Boots of Speed");
});

test("fetches items data from the LoL static data cdn", async () => {
  const items = await lol.getItems();
  return expect(items.length).toBe(2);
});

test("fetches Lesser Glyph of Attack Damage data from the LoL static data cdn", async () => {
  const rune = await lol.getRune("Lesser Glyph of Attack Damage");
  return expect(rune.description).toEqual("+0.16 attack damage");
});

test("fetches runes data from the LoL static data cdn", async () => {
  const runes = await lol.getRunes();
  return expect(runes.length).toBe(2);
});

test("fetches Thunderlord's Decree data from the LoL static data cdn", async () => {
  const mastery = await lol.getMastery("Thunderlord's Decree");
  return expect(mastery.description).toEqual([
    "Your 3rd attack or damaging spell against the same enemy champion calls down a lightning strike, dealing magic damage in the area. <br><br>Damage: 10 per level, plus 30% of your Bonus Attack Damage, and 10% of your Ability Power (25-15 second cooldown, based on level)."
  ]);
});

test("fetches masteries data from the LoL static data cdn", async () => {
  const masteries = await lol.getMasteries();
  return expect(masteries.length).toBe(2);
});

test("fetches Flash data from the LoL static data cdn", async () => {
  const summoner = await lol.getSummoner("Flash");
  return expect(summoner.description).toEqual(
    "Teleports your champion a short distance toward your cursor's location."
  );
});

test("fetches summoner spells data from the LoL static data cdn", async () => {
  const summoners = await lol.getSummoners();
  return expect(summoners.length).toBe(2);
});
