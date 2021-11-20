import React, { useState } from 'react'
import "./some.css"
import { AnimatePresence, motion} from "framer-motion"
import forest from "../images/forest2.jpg"


export const Initial = () => {

  return (
    <div className="oya">

    <AnimatePresence>
    <motion.div
      className="c1"
      animate={{ width: ["100vw", "2vw"] }}
      exit={{opacity:0}}
      transition={{ ease: "easeOut", duration:2 }}
    >
      <motion.div className="c2" animate={{ width: ["0vw", "30vw"]}} transition={{ delay:7, ease:"anticipate"  }} ></motion.div>
    </motion.div>
    <motion.div className="words" initial={{ opacity : 0 }} animate={{ width: ["0vw", "80vw"],opacity : [0,1]}} transition={{ delay:7.7, ease:"anticipate"  }} >SIC PARVIS MAGNA</motion.div>
    </AnimatePresence>
    <motion.div
      className="c1"
      initial={{ width : "100vw" }}
      animate={{ width :  "3vw"}}
      transition={{ ease: "easeOut", duration: 3 }}
    >
    </motion.div>
    {/* <motion.img className="forest" src={forest}></motion.img> */}
    <motion.div 
     
      initial={{ opacity : 0 }}
      animate={{ opacity : 1 }}
      transition={{delay:4, duration: 3}}
    ><motion.div  className="center" animate={{ width: ["0vw", "30vw" ] }} transition={{ delay:7, ease:"anticipate"  }} >
      <motion.div   animate={{ y: -350 }} transition={{ delay:8, ease:"anticipate"  }} >Sirobou Portfolio</motion.div>
      </motion.div>
    </motion.div>
    <motion.div
      className="c1"
      initial={{ width : "100vw" }}
      animate={{ width :  "1vw"}}
      transition={{ ease: "easeOut", duration: 4 }}
    >
       <motion.div className="c2" animate={{ width: ["0vw", "80vw"]}} transition={{ delay:7, ease:"anticipate"  }} >
         <motion.div className="name" initial={{ opacity : 0 }} animate={{ width: ["0vw","80vw"],opacity : [0,1]}} transition={{ delay:7.7, ease:"anticipate"  }} >-Francis Drake-</motion.div>
      </motion.div>
    </motion.div>
    
    
    </div>
  );
}

