import axios from "axios";

export class SWService {
 
  static _withBaseUrl(path) {
    return `https://swapi.co/api/${path}`;
  }

  static getCharacters() {
    return axios(SWService._withBaseUrl("people"));
  }
  static getCharactersPages(page) {
    return axios(SWService._withBaseUrl("people/?page=" + page));
  }
  static getCharacter(id) {
    return axios(SWService._withBaseUrl("people/" + id));
  }
}
