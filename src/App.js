import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from './Components/Preview/Preview';

function App() {
  return (
    <div className="App">
     <Router>
       <div>
         <Switch>
           <Route path="/preview">
            <Preview></Preview>
           </Route>
           <Route exact path="/">
             <WebcamCapture></WebcamCapture>
           </Route>
         </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
