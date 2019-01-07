export const normalizeChampion = (champion, imageCdnUrl) => {
  champion.spriteCss = {
    "background-image": `url('${imageCdnUrl}/sprite/${champion.image.sprite}')`,
    "background-position": `${champion.image.x * -1}px ${champion.image.y *
      -1}px`,
    width: `${champion.image.w}px`,
    height: `${champion.image.h}px`
  };

  champion.imageUrl = `${imageCdnUrl}/champion/${champion.image.full}`;
  champion.description = champion.blurb;
  delete champion.blurb;
  delete champion.version;

  return champion;
};

export const normalizeItem = (item, itemId) => {
  item.id = itemId;
  delete item.colloq;

  return item;
};

export const normalizeRune = (rune, runeId) => {
  rune.id = runeId;
  delete rune.colloq;
  delete rune.plaintext;

  return rune;
};

export const normalizeMastery = mastery => {
  delete mastery.prereq;

  return mastery;
};

export const normalizeSummoner = summoner => {
  delete summoner.resource;

  return summoner;
};
