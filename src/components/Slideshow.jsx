import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Slideshow = ({imageIndex, album}) => {
  
  return (
    <div className="w-full h-full border">
      
      <motion.img
        initial={{ x: "-100%" }}
        animate={{ x: 0, transition: { duration: 0.3 } }}
        exit={{ x: "-100%", transition: { duration: 0.3 } }}
        src={album[imageIndex].imgUrl}
        alt="image"
        className="h-full" />
      
    </div>
  )
}

export default Slideshow;
