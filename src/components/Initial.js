import React from 'react'
import "./some.css"
import { useEffect } from "react";
import { motion, useMotionValue, useSpring , useViewportScroll, useTransform} from "framer-motion";
import forest from "../images/forest.jpg"
import { Colorbt } from './colorbt';

export const Initial = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const { scrollY } = useViewportScroll()
  const c1x = useTransform(scrollY, [0, 600], [1200, 1600]);
  const forestx = useTransform(scrollY, [0, 800], [0, -40]);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX , cursorY]);
  return (
    <>
    <div className="oya">
            <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    <Colorbt />
 
    <motion.div
      className="c1"
      animate={{ width: ["100vw", "2vw"] }}
      exit={{opacity:0}}
      transition={{ ease: "easeOut", duration:2 }}
    >
      <motion.div className="c2" animate={{ width: ["0vw", "10vw"]}} transition={{ delay:7, ease:"anticipate"  }} ></motion.div>
      <motion.div className="c3" animate={{ width: ["0vw", "20vw"]}} transition={{ delay:7, ease:"anticipate"  }} ></motion.div>
    </motion.div>
    <motion.div className="words" initial={{ opacity : 0 }} animate={{ opacity : [0,1]}} transition={{ delay:7.7, ease:"anticipate"  }} >SIC PARVIS MAGNA.</motion.div>

    <motion.div
      className="c1"
      initial={{ width : "100vw" }}
      animate={{ width :  "3vw"}}
      transition={{ ease: "easeOut", duration: 3 }}
    >
    </motion.div>
        <motion.div className="forestcove" initial={{ opacity : 0 }} animate={{ opacity : [0,1]}} transition={{ delay:7.7, ease:"anticipate"  }}></motion.div>
        <motion.img className="forest" src={forest} initial={{ opacity : 0 }} style={{x:forestx}} animate={{ x: [20, 0],opacity : [0,1]}} transition={{ delay:7.7, ease:"anticipate"  }}></motion.img>

    <motion.div 
     
      initial={{ opacity : 0 }}
      animate={{ opacity : 1 }}
      transition={{delay:4, duration: 3}}
    ><motion.div  className="center" animate={{ width: ["0vw", "30vw" ] }} transition={{ delay:7, ease:"anticipate"  }} >
      <motion.div   animate={{ y: -370 }} transition={{ delay:8, ease:"anticipate"  }} >Sirobou Portfolio</motion.div>
      </motion.div>
    </motion.div>
    <motion.div
      className="c1"
      initial={{ width : "100vw" }}
      animate={{ width :  "1vw"}}
      transition={{ ease: "easeOut", duration: 4 }}
    >
       <motion.div className="c2" animate={{ width: ["0vw", "70vw"]}} transition={{ delay:7, ease:"anticipate"  }} >
        <motion.div className="redline" animate={{ width: ["0vw", "72vw"]}} transition={{ delay:7, ease:"anticipate"  }} ></motion.div>
         <motion.div className="name" initial={{ opacity : 0 }} animate={{ width: ["0vw", "80vw"],opacity : [0,1]}} transition={{ delay:7.7, ease:"anticipate"  }} >-Francis Drake-</motion.div>
        
      </motion.div>
      <motion.div className="c2cove" style={{width: c1x}} initial={{ opacity : 0 }} animate={{ opacity : [0,1]}} transition={{ delay:7.7, ease:"anticipate"  }}></motion.div>
    </motion.div>
    <motion.div animate={{ opacity : [0,1]}} transition={{ delay:7.7, duration:2 }} >
    <motion.div className="sdbar" animate={{ height: [0,65]}} transition={{ delay:7.7, duration:2, repeat: Infinity }} ></motion.div>
    <div className="tate">Scroll</div>
    </motion.div>
    
    </div>

    </>
  );
}

// test