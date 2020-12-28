import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import { auth } from './firebase';
import { Header, Sidebar, Feed, Login, Widgets } from './components';
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch =useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? <Login /> : (
        <div className="appBody">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
