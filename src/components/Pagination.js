import React from "react";
import { Link } from "react-router-dom";

let i = 1;

export const Pagination = ({characters}) => {
    return (
      <>
        <ul className="listCharacters">
          {characters.data.results.map(character => (
            <li><Link to={`/characters/?page=${character.url.split('/')[5]}`}>Page {i++}</Link></li>
          ))}
        </ul>
      </>      
      );
}
