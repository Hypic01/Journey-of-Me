import { useParams, useLocation, Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import {albumData} from '../util';
import {Slideshow, ImageDate} from '../components'; 
import {useState} from 'react';

const AlbumDetail = () => {

  const location = useLocation();
  const albumIndex = location.state.index;
  
  let {id} = useParams();
  //const [album, setAlbum] = useState(albumData[albumIndex]);
  const album = albumData[albumIndex];
  const [currentIndex, setCurrentIndex] = useState(0);
  const albumLength = album.length - 1;

  function previousImage(){
    setCurrentIndex(prev => prev === 0 ? albumLength : prev - 1);
  }

  function nextImage(){
    setCurrentIndex(prev => prev === albumLength ? 0 : prev + 1);
  }
  
  return (
    <motion.section 
      key="album detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {duration: 0.5}}}
      exit={{ opacity: 0 }}
      className="relative opacity-100 w-full h-screen bg-slate-900 z-10 font-['Noto_Serif_JP'] text-white flex items-center justify-center">
      <Link to="/album" className="absolute xl:top-40 lg:left-16 left-8 top-28 cursor-pointer">
        <h2 className="font-['Noto_Serif_JP'] text-white text-base flex items-center gap-2 ">
          <span className="text-base"> {`<`} </span>
          Back to Album 
        </h2>
      </Link>
      <button onClick={previousImage} className="absolute lg:left-16 left-8">{'<'}</button>
      <div className="absolute top-1/2 left-1/2 text-slate-200 text-center transform -translate-x-1/2 -translate-y-1/2">
        <Slideshow imageIndex={currentIndex} album={album}/>
      </div>
      <button onClick={nextImage} className="absolute lg:right-16 right-8">{'>'}</button>

      <div className="absolute bottom-1/4">
        <ImageDate imageIndex={currentIndex} album={album}/>
        <h3></h3>
      </div>
    </motion.section>
  )
}

export default AlbumDetail;