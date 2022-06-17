import React from 'react';
import './App.css';
import  Create from  './components/create/create';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Read from './components/read/read';
import Update from './components/update/update';

function App() {
  return (
    <Router>
      <div className="main">
          <div><h1>Employee</h1></div>          
            <Route exact path='/' component={Create} />

          <div style={{ marginTop: 20 }}>            
              <Route exact path='/read' component={Read} />            
          </div>
  
          <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;

