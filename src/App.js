import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom' 
import {Home,numRender} from './pages/Home.js'
import {About} from './pages/About.js'
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertContext } from './context/alertContext';
import { AlertState } from './context/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
    <AlertState>
    <BrowserRouter>
    <Navbar/>
    <div className="container pd-4">
    <Alert/>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/about'}  component={About} />
      </Switch>
    </div>
    </BrowserRouter>
    </AlertState>
    </FirebaseState>
  );
}

export default App;
