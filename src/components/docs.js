import React from 'react'
import { motion,  useViewportScroll, useTransform} from "framer-motion";
import car from "../images/car.jpg"
import "./some.css"

export const Docs = () => {
    const { scrollY } = useViewportScroll()
    const y1 = useTransform(scrollY, [200, 900], ["0vh", "15vh"]);
    const y2 = useTransform(scrollY, [200, 900], ["20vh", "-20vh"]);
    return (
        <motion.div transition={{ delay:7.7, duration:2 }} animate={{display: "flex"}} className="tbg">
            <div className="cove"></div>
            <motion.img style={{y : y1 }} className="car" src={car} transition={{duration:10 }}></motion.img>
            <motion.div className="tate1" style={{y: y2}}>Policy</motion.div>
            <div className="GREATNESS">GREATNESS</div>
            <div className="FROM">FROM</div>
            <div className="SMALL">SMALL</div>
            <div className="BEGININGS">BEGINNINGS</div>
            <div className="witt">A witty remark</div>
            <div className="from">from uncharted series</div>
            <footer className="footerbg"></footer>
        </motion.div>
    );
  }