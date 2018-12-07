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

export default ({ method, url }) => {
  return new Promise((resolve, reject) => {
    if (url.match(/\/champion.json$/)) {
      process.nextTick(() => resolve({ data: { data: champions } }));
    }
    else {
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
    }
  });
};
