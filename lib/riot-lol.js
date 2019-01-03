import axios from "axios";
import { CDN_URL, LATEST_PATCH, DEFAULT_LANG, ITEMS_MAP } from "./enums";
import { normalizeChampion, normalizeItem } from "./utils";

class RiotLoL {
  constructor() {
    this.config();
  }

  config(
    { patchVersion = LATEST_PATCH, language = DEFAULT_LANG } = {
      patchVersion: LATEST_PATCH,
      language: DEFAULT_LANG
    }
  ) {
    this.dataCdnUrl = `${CDN_URL}/${patchVersion}/data/${language}`;
    this.imageCdnUrl = `${CDN_URL}/${patchVersion}/img`;
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
}

export default RiotLoL;
