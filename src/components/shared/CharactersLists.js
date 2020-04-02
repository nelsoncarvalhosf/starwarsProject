import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { Pagination } from "../Pagination";
import icon from '../../img/vader.png';


export const CharactersLists = ({characters}) => {
    const dispatch = useDispatch();
    return (
      <>
        <ul className="listCharacters">
          {characters.data.results.map(character => (
            
            <li className="results__item">
              <h3 className="results__title">{character.name}</h3>
              
              <ul className="results__info">
                <li>Gender <span>{character.gender}</span></li>
                <li>Height <span>{character.height}cm</span> </li>
                <li>Weight <span>{character.mass}kg</span> </li>
              </ul>
              <img src={icon} className="results__icon"/>
            </li>
          ))}
        </ul>
        
        <Pagination  characters={characters} />
      </> 
      );
}
