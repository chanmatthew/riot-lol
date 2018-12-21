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
    }
  });
};
