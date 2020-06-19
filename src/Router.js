/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Switch, Route } from 'react-router'
// Write component imports here //
import Home from "./components/home"
import About from "./components/About"
import Car from "./components/Car"


// Start Router function here //

export function Router() {
    return (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/car/:id" component={Car} />
          </Switch>
    );
  }

  export default Router;



