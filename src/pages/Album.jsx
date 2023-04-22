import {motion} from "framer-motion";
import {album} from '../util';
import {useEffect} from 'react';

const Album = () => {

  useEffect(() => {
    
  }, [])
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className="font-['Noto_Serif_JP'] text-white bg-slate-300 w-full h-screen p-16 flex items-end">
      <motion.div className="flex flex-row bottom-0 relative w-full h-full items-end gap-4">
        {album.map((item, index) => (
          <motion.div 
             whileHover={{
              y: -20,
              transition: { duration: 0.1 },
              type: "spring"
            }}
            key={index} 
            className="relative flex justify-center w-[100px] h-[500px] border border-r-0 rounded-l-lg cursor-pointer">
            <h1 className="absolute -rotate-90 bottom-8">{item.name}</h1>
            <h2 className="absolute -rotate-90 top-14">{item.date}</h2>
          </motion.div>
        ))}

      </motion.div>
    </motion.section>
  )
}

export default Album;