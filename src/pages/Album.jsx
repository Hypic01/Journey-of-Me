import {motion} from "framer-motion";
import {albumThumbnail} from '../util';
import {useEffect} from 'react';
import {AlbumBook} from '../components'
import {Link} from 'react-router-dom';

const Album = () => {

  return (
    <motion.section 
      key="albumThumbnail"
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { duration: 0.3 } }}
      exit={{ x: "100%", transition: { duration: 0.3 }}}
      className="relative font-['Noto_Serif_JP'] text-white w-full h-screen p-16 flex items-end">
      <Link to="/">
        <h2 className="font-['Noto_Serif_JP'] text-white absolute text-base left-8 top-1/2 flex items-center gap-2 cursor-pointer">
          <span className="text-base"> {`<`} </span>
          Home 
        </h2>
      </Link>
      <motion.div className="flex flex-row bottom-0 relative w-4/6 h-full items-end gap-4 mx-auto">
        {albumThumbnail.map((item, index) => (
          <AlbumBook key={index} index={index} {...item} />
        ))}

      </motion.div>
    </motion.section>
  )
}

export default Album;