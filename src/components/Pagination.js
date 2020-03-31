import React from "react";
import { Link } from "react-router-dom";

let i = 1;

export const Pagination = ({characters}) => {
    let qtd = characters.data.count;
    let qtdPage = Math.round(qtd/10);
    var rows = [];
    for(i=1;i<=qtdPage;i++){
     rows.push(<li><Link to={`/characters/page/${i}`}> Page {i}</Link></li>);
    }
    return (
      <>
        <ul className="pages">
          {rows}
        </ul>
      </>      
      );
}
