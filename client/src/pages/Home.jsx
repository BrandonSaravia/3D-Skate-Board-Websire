import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

import {CustomButton} from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (

        <motion.section className="home" {...slideAnimation('left')}>

          <motion.header {...slideAnimation('down')}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Let's <br className="xl:block hidden" /> Do It.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidpa qui officia deserunt mollit anim id est laborum.
              </p>
            </motion.div>
            <CustomButton 
              type="filled"
              title="Customize It"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

        </motion.section>
      )}

    </AnimatePresence>
  )
}

export default Home