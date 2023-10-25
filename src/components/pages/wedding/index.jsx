import React from 'react'
import styles from './index.module.css'
import {motion} from 'framer-motion'


const Wedding = () => {
  return (
    <motion.div
    initial={{ y: 20, zIndex: 2 }}
    animate={{opacity:1, y:0, zIndex: 1 }}
    transition={{duration: .3}}
    exit={{opacity: 0, y: -20, scale: .95}}
     className={styles.container}>
      Wedding
      </motion.div>
  )
}

export default Wedding