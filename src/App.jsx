import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {motion, AnimatePresence } from "framer-motion";
import {Header} from './components';
import {Main, Album} from './pages';
import {useState, useEffect} from 'react';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '1029600064785-6rcj1192rr6u50eecs22h537c7005u88.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/photoslibrary'
      });
    });
  }, [])

  function handleSignIn() {
    window.gapi.auth2.getAuthInstance().signIn();
  }
  
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Header signIn={handleSignIn} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/album" element={<Album />}></Route>
        </Routes>
      </BrowserRouter>
    
    </AnimatePresence>
  )
}
