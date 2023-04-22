import {motion} from "framer-motion";
import {album} from '../util';
import {useEffect} from 'react';
import {AlbumBook} from '../components'

const Album = () => {

  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="font-['Noto_Serif_JP'] text-white bg-slate-300 w-full h-screen p-16 flex items-end">
      <motion.div className="flex flex-row bottom-0 relative w-full h-full items-end gap-4">
        {album.map((item, index) => (
          <AlbumBook key={index} {...item}/>
        ))}

      </motion.div>
    </motion.section>
  )
}

export default Album;