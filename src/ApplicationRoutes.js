import React from "react";
import { Route } from "react-router-dom";
import { Principal } from "./components/Principal";
import { CharactersList } from "./components/CharactersList";
import { Character } from "./components/Character";


export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Principal} />
    <Route path="/characters/:page" exact component={CharactersList} />
    <Route path="/character/:id" exact component={Character} />
  </>
);
