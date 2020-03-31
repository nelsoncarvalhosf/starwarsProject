import React, { useState, useEffect } from "react";
import { SWService } from "../services/SWService";


export const Character = (props) => {
  const [character, setCharacters] = useState({ data: { results: [] } });

  const requestCharacters = async () => {
    const charactersResult = await SWService.getCharacter(props.match.params.id);
    setCharacters(charactersResult);
  };


  useEffect(() => {
    requestCharacters();
  }, []);

  return (
    <div>
        {character.data.name}
        <br/>
        {character.data.poster_path}
        <br/>
        {character.data.overview}

    </div>
  );
};