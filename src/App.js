import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Preview from './Components/Preview/Preview';
import Chats from './Components/Chat/Chats';
import ChatView from './Components/Chat/ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login/Login';
import {auth} from './firebase';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch(login({
          username:authUser.displayName,
          profilePic:authUser.photoURL,
          id:authUser.uid,
        }))
      }
      else{
        dispatch(logout())
      }
    })
  },[ ])
  return (
    <div className="App">
     <Router>
       {!user ? (
         <Login/>
       ):(
          <div className="app_body">
            <div className="appBody_backGround">
                <Switch>
                <Route path="/chats/view">
                  <ChatView></ChatView>
                </Route>
                <Route path="/chats">
                  <Chats></Chats>
                </Route>
                <Route path="/preview">
                  <Preview></Preview>
                </Route>
                <Route exact path="/">
                  <WebcamCapture></WebcamCapture>
                </Route>
              </Switch>
            </div>
          
        </div>
       )}
     </Router>
    </div>
  );
}

export default App;
