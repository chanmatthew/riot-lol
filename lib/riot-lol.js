import axios from "axios";
import { CDN_URL, LATEST_PATCH, DEFAULT_LANG } from "./enums";
import { normalize } from "./utils";

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
        normalize(championsMap[name], this.imageCdnUrl)
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
      return normalize(response.data.data[champion], this.imageCdnUrl);
    } catch (err) {
      throw err;
    }
  }
}

export default RiotLoL;
