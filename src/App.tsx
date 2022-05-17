import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import AppRouter from "./components/appRouter";

function App() {
  return (
      <div className="App">
          <HashRouter>
              <header className="App-header">
                  <NavBar />
              </header>

              <div className={'App-content'}>
                  <AppRouter />
              </div>
          </HashRouter>
      </div>
  );
}

export default App;
