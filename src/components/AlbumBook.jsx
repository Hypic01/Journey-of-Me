import {motion} from "framer-motion";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const AlbumBook = ({name, date, imgUrl, index}) => {
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false);

  function handleImageLoad() {
    setIsLoaded(true);
  }

  const albumClick = () => {
    navigate(`/album/${name}`, {state: {index: index}});
  }
  
  return (
    <motion.div 
       initial={{ y: '120%' }}
       animate={{ y: 0 }}
       whileHover={{
        y: -20,
        transition: { duration: 0.1 },
        type: "spring"
      }}
      onClick={albumClick}
      className="relative flex justify-center w-[100px] h-[500px] border-r-0 rounded-l-lg cursor-pointer overflow-hidden border border-r-none ">
      <img 
        src={imgUrl}
        alt="Album thumbnail"
        onLoad={handleImageLoad}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all opacity-90 ${isLoaded ? 'visible' : 'hidden'}`}  />
      <h1 className="absolute -rotate-90 bottom-8">{name}</h1>
      <h2 className="absolute -rotate-90 top-14">{date}</h2>
    </motion.div>
  )
}

export default AlbumBook;