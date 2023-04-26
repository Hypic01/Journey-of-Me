// import video1 from '/video1.mp4';
// import video2 from '/video2.mp4';
// import video3 from '/video3.mp4';
// import video4 from '/video4.mp4';

import { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';

const Main = ({videoLoaded}) => {
  // const videos = [video1, video2, video3, video4];


  const texts = [
    <h1 className="font-['Noto_Serif_KR']">여행.</h1>,
    <h1 className="font-['Lora']">Journey.</h1>,
    <h1 className="font-['Noto_Serif_SC']">旅途.</h1>,
    <h1 className="font-['Poltawski_Nowy']">El viaje.</h1>,
    <h1 className="font-['Lora']">Voyage.</h1>,
    <h1 className="font-['Noto_Serif_JP']">旅行です。</h1>,
    <h1 className="font-['Poltawski_Nowy']">Die Reise.</h1>,
    <h1 className="font-['Poltawski_Nowy']">Путешествие.</h1>,
  ];

  // const [videoIndex, setVideoIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    

    // const videoInterval = setInterval(() => {
    //   setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    //   setVideoLoaded(false);
    // }, 3000);

    const textInterval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => {
      // clearInterval(videoInterval);
      clearInterval(textInterval);
    };
  }, []);

  

  return (
    <motion.section
      key="main"
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 0.3 } }}
      exit={{ x: "-100%", transition: { duration: 0.3 } }}
      
      className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      
      {videoLoaded && (
        <div className="absolute top-1/2 left-1/2 text-slate-200 text-center transform -translate-x-1/2 -translate-y-1/2 text-7xl">
          {texts[textIndex]}
        </div>
      )}

      <Link to="/album">
        <h2 className="font-['Noto_Serif_JP'] text-white absolute text-base right-8 flex items-center gap-2 cursor-pointer">
          Album 
          <span className="text-base">></span>
        </h2>
      </Link>
      
    </motion.section>
  );
};

export default Main;
