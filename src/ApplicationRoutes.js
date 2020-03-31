import React from "react";
import { Route } from "react-router-dom";
import { Principal } from "./components/Principal";
import { CharactersList } from "./components/CharactersList";
import { CharactersListPages } from "./components/CharactersListPages";
import { Character } from "./components/Character";


export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Principal} />
    <Route path="/characters" exact component={CharactersList} />
    <Route path="/characters/page/:page" exact component={CharactersListPages} />
    <Route path="/character/:id" exact component={Character} />
  </>
);
