import axios from "axios";

export class SWService {
 
  static _withBaseUrl(path) {
    return `https://swapi.co/api/${path}`;
  }

  static getCharacters(page = 'page=1') {
    return axios(SWService._withBaseUrl("people/?" + page));
  }
  static getCharacter(id) {
    return axios(SWService._withBaseUrl("people/" + id));
  }
}
