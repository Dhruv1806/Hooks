// import './App.css';
// import logo from './logo.svg';
// import React, {createContext} from 'react';
import Navbar from './components/Navbar';
import UseState from './components/UseState';
import Home from './components/Home';
import UseEffect from './components/UseEffect'
import  UseContext  from './components/UseContext';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseReducer from './components/UseReducer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { createContext } from 'react';

const FirstName= createContext();
const LastName= createContext();

function App() {
  return (
   <>
   <FirstName.Provider value={"Dhruv"}/>
   <LastName.Provider value={"Donga"}/>
   <Router>
   {/* <FirstName.Provider value={"Dhruv"}> */}
      <Navbar/>
      <Switch>
        <Route path="/Home" >
          <Home/>
        </Route>
        <Route path="/UseEffect">
          <UseEffect />
        </Route>
        <Route exact path="/UseState">
          <UseState/>
        </Route>
        <Route exact path="/UseContext">
        <FirstName.Provider value={"Dhruv"}>
        <LastName.Provider value={"Donga"}>
          <UseContext/>
          </LastName.Provider>
          </FirstName.Provider>
        </Route>
        <Route exact path="/UseMemo">
          <UseMemo/>
        </Route>
        <Route exact path="/UseRef">
          <UseRef/>
        </Route>
        <Route exact path="/UseReducer">
          <UseReducer/>
        </Route>
      </Switch>
   </Router>
   </>
  );
}

export default App;
export {FirstName,LastName};
