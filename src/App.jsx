import './App.css'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {motion, AnimatePresence } from "framer-motion";
import {Header} from './components';
import {Main, Album, AlbumDetail} from './pages';
import {useState, useEffect} from 'react';
import useSound from 'use-sound';
import bgMusic from '/winter.mp3';
import video from '/video.mp4';

export default function App() {
  const [play, {pause}] = useSound(bgMusic, {volume: 0.2});
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const video = document.querySelector('video');

    const handleLoaded = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoaded);
    
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '1029600064785-6rcj1192rr6u50eecs22h537c7005u88.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/photoslibrary'
      }).then(() => {
        setIsLoggedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        window.gapi.auth2.getAuthInstance().isSignedIn.listen((newIsSignedIn) => {
          setIsLoggedIn(newIsSignedIn);
        });
      });
    });

    return () => {
      // clearInterval(videoInterval);
      video.removeEventListener('loadeddata', handleLoaded);
    };
  }, [videoLoaded])

  function handleSignIn() {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  function musicPlayer(){
    let music = isPlaying ? pause : play;
    music();
    setIsPlaying(prev => !prev);
  }

  return (
    
        <section className="">
          <video autoPlay loop muted className="absolute top-0 left-0 h-full w-full object-cover">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Header signIn={handleSignIn} isLoggedIn={isLoggedIn} musicPlayer={musicPlayer} isPlaying={isPlaying}/>
          <AnimatePresence mode="wait" initial={false}>
            <Routes key={location.pathname} location={location}>
              <Route exact path="/" element={<Main videoLoaded={videoLoaded} />}></Route>
              <Route path="/album" element={<Album />}></Route>
              <Route path="/album/:id" element={<AlbumDetail />}></Route>
            </Routes>
          </AnimatePresence>
        
        </section>
  )
}
