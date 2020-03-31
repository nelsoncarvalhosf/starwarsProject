import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { Pagination } from "../Pagination";


export const CharactersLists = ({characters}) => {
    const dispatch = useDispatch();
    return (
      <>
        <ul className="listCharacters">
          {characters.data.results.map(character => (
            <li>{character.name}<br /><Link to={`/character/${character.url.split('/')[5]}`}>+ Detalhes</Link></li>
          ))}
        </ul>
        <Pagination  characters={characters} />
      </> 
      );
}
