import React, { createContext, useState } from 'react';
import './App.css'
import Form from './Components/Form';
import Second from './Components/Second';
import Header from './Components/Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export const ContextValue = createContext()

function App() {
  const [Theme, setTheme] = useState(false);
  
  const changeTheme = () => { 
    setTheme(!Theme)
  }

  return (
    <div className='App'>
      <ContextValue.Provider value={{Theme, changeTheme}}>
        <Router>
          <Header />
          <Route exact path='/' component={Form} />
          <Route exact path='/second' component={Second} />
        </Router>
      </ContextValue.Provider>
    </div>
  );
}

export default App;
