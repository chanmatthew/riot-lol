import axios from "axios";
import {
  CDN_URL,
  LATEST_PATCH,
  DEFAULT_LANG,
  PRE_REFORGE_PATCH,
  ITEMS_MAP,
  RUNES_MAP
} from "./enums";
import { normalizeChampion, normalizeItem, normalizeRune } from "./utils";

class RiotLoL {
  constructor() {
    this.config();
  }

  config(
    {
      patchVersion = LATEST_PATCH,
      language = DEFAULT_LANG,
      preReforgePatchVersion = PRE_REFORGE_PATCH
    } = {
      patchVersion: LATEST_PATCH,
      language: DEFAULT_LANG,
      preReforgePatchVersion: PRE_REFORGE_PATCH
    }
  ) {
    this.dataCdnUrl = `${CDN_URL}/${patchVersion}/data/${language}`;
    this.imageCdnUrl = `${CDN_URL}/${patchVersion}/img`;
    this.preReforgeDataCdnUrl = `${CDN_URL}/${preReforgePatchVersion}/data/${language}`;
  }

  async getChampions() {
    try {
      let response = await axios({
        method: "get",
        url: `${this.dataCdnUrl}/champion.json`
      });

      let championsMap = response.data.data;

      return Object.keys(championsMap).map(name =>
        normalizeChampion(championsMap[name], this.imageCdnUrl)
      );
    } catch (err) {
      throw err;
    }
  }

  async getChampion({ champion }) {
    try {
      let response = await axios({
        method: "get",
        url: `${this.dataCdnUrl}/champion/${champion}.json`
      });
      return normalizeChampion(response.data.data[champion], this.imageCdnUrl);
    } catch (err) {
      throw err;
    }
  }

  async getItems() {
    try {
      let response = await axios({
        method: "get",
        url: `${this.dataCdnUrl}/item.json`
      });

      let itemsMap = response.data.data;

      return Object.keys(itemsMap).map(id => normalizeItem(itemsMap[id], id));
    } catch (err) {
      throw err;
    }
  }

  async getItem({ item }) {
    try {
      let response = await axios({
        method: "get",
        url: `${this.dataCdnUrl}/item.json`
      });

      let itemsMap = response.data.data;

      if (Object.keys(ITEMS_MAP).includes(item)) {
        let itemId = ITEMS_MAP[item][0];
        if (ITEMS_MAP[item].length === 1) {
          return normalizeItem(itemsMap[itemId], itemId);
        } else {
          return ITEMS_MAP[item].map(id => normalizeItem(itemsMap[id], id));
        }
      }
      throw new Error("Item could not be found");
    } catch (err) {
      throw err;
    }
  }

  async getRunes() {
    try {
      let response = await axios({
        method: "get",
        url: `${this.preReforgeDataCdnUrl}/rune.json`
      });

      let runesMap = response.data.data;

      return Object.keys(runesMap).map(id => normalizeRune(runesMap[id], id));
    } catch (err) {
      throw err;
    }
  }

  async getRune({ rune }) {
    try {
      let response = await axios({
        method: "get",
        url: `${this.preReforgeDataCdnUrl}/rune.json`
      });

      let runesMap = response.data.data;

      if (Object.keys(RUNES_MAP).includes(rune)) {
        let runeId = RUNES_MAP[rune][0];
        return normalizeItem(runesMap[runeId], runeId);
      }
      throw new Error("Rune could not be found");
    } catch (err) {
      throw err;
    }
  }
}

export default RiotLoL;
