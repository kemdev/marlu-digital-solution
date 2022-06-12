import React from "react";
import "./Parallaximg.scss";
import { Parallax } from "react-parallax";

import {motion} from 'framer-motion'


import Header from '../../../img/pexels-adrien-olichon-2387793-min.png'

export default function header() {
  return (
    <motion.div
    style={{backgroundImage: `url(${Header})`,  backgroundRepeat: 'no-repeat',  backgroundAttachment: 'fixed', backgroundPosition: 'center', backgrounSize: 'contain'}}
    >
      <Parallax
        className="image"
        // bgImage={Header}
        // // // bgImage={headerGif}
        // blur={2}
        // strength={800}
      >
        <div className="content ">
          <span className="img-txt">
            <h1 className="display-1">JUMP YOUR BUSINESS</h1>
            <h2 className="display-5">TO THE NEXT LEVEL!</h2>
            <h3 className="display-6" style={{ color: '#ddba2e', letterSpacing: '6px'}}>With Marlu Digital Solutions</h3>
          </span>
        </div>
      </Parallax>
    </motion.div>
  );
}
