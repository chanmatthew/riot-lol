const champions = {
  Aatrox: {
    id: "Aatrox",
    image: {
      full: "Aatrox.png",
      sprite: "champion0.png",
      group: "champion",
      x: 0,
      y: 0,
      w: 48,
      h: 48
    }
  },
  Ahri: {
    id: "Ahri",
    image: {
      full: "Ahri.png",
      sprite: "champion0.png",
      group: "champion",
      x: 48,
      y: 0,
      w: 48,
      h: 48
    }
  }
};

const items = {
  "1001": {
    name: "Boots of Speed",
    description:
      "<groupLimit>Limited to 1.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed",
    plaintext: "Slightly increases Movement Speed"
  },
  "1004": {
    name: "Faerie Charm",
    description: "<stats><mana>+25% Base Mana Regen </mana></stats>",
    plaintext: "Slightly increases Mana Regen"
  }
};

const runes = {
  "5011": {
    name: "Lesser Mark of Health",
    description: "+1.93 health"
  },
  "5031": {
    name: "Lesser Glyph of Attack Damage",
    description: "+0.16 attack damage"
  }
};

const masteries = {
  "6351": {
    name: "Precision",
    description: [
      "Gain 1.7 Lethality and 0.6 + 0.06 per level Magic Penetration",
      "Gain 3.4 Lethality and 1.2 + 0.12 per level Magic Penetration",
      "Gain 5.1 Lethality and 1.8 + 0.18 per level Magic Penetration",
      "Gain 6.8 Lethality and 2.4 + 0.24 per level Magic Penetration",
      "Gain 8.5 Lethality and 3 + 0.3 per level Magic Penetration"
    ]
  },
  "6362": {
    name: "Thunderlord's Decree",
    description: [
      "Your 3rd attack or damaging spell against the same enemy champion calls down a lightning strike, dealing magic damage in the area. <br><br>Damage: 10 per level, plus 30% of your Bonus Attack Damage, and 10% of your Ability Power (25-15 second cooldown, based on level)."
    ]
  }
};

const summoners = {
  SummonerExhaust: {
    name: "Exhaust",
    description:
      "Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 2.5 seconds."
  },
  SummonerFlash: {
    name: "Flash",
    description:
      "Teleports your champion a short distance toward your cursor's location."
  }
};

export default ({ method, url }) => {
  return new Promise((resolve, reject) => {
    if (url.match(/\/champion.json$/)) {
      process.nextTick(() => resolve({ data: { data: champions } }));
    } else if (url.match(/\/champion\/(\w+).json$/)) {
      const match = url.match(/\/(\w+).json$/)[1];
      const champion = `${match.toUpperCase()[0]}${match.slice(1)}`;
      process.nextTick(() =>
        champions[champion]
          ? resolve({
              data: {
                data: {
                  [champion]: champions[champion]
                }
              }
            })
          : reject({
              error: `${champion} Not Found`
            })
      );
    } else if (url.match(/\/item.json$/)) {
      process.nextTick(() => resolve({ data: { data: items } }));
    } else if (url.match(/\/rune.json$/)) {
      process.nextTick(() => resolve({ data: { data: runes } }));
    } else if (url.match(/\/mastery.json$/)) {
      process.nextTick(() => resolve({ data: { data: masteries } }));
    } else if (url.match(/\/summoner.json$/)) {
      process.nextTick(() => resolve({ data: { data: summoners } }));
    }
  });
};
