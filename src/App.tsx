import React from 'react';
import Navbar from './components/Navbar';
import TodosPage from './components/pages/TodosPage';
import AboutPage from './components/pages/AboutPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  return <BrowserRouter>
    <Navbar/>
    <div className='container'>
      <Switch>
        <Route component={TodosPage} path='/' exact/>
        <Route component={AboutPage} path='/about'/>
        </Switch>
    </div>
  </BrowserRouter>
}

export default App;
