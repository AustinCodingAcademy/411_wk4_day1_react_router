import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
// Write imports for Router & BrowserRouter here //
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Router/>
    </BrowserRouter>
    
  );
}

// import { Provider } from 'react-redux'
// import store from './store'

//  function App() {
//    return (
//        <Provider store={store}>
//          <BrowserRouter>
//              <Navigation />
//              <Router />
//          </BrowserRouter>
//        </Provider>
//    );
//  }


export default App;
