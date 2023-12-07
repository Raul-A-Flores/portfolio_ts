'use client'

import React , {useState, useEffect} from 'react'
import { motion } from 'framer-motion';


import {urlFor, client} from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss'


const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
    .then((data) => 
      setAbouts(data)
    )
  }, [])


  return (
    <div className='about__container'>
    
      <h2 className='head-text'  >
      A little<span> <br/> about me</span></h2>
      <div className='app__profiles'>
      { abouts.map((about,index) =>(
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5, type: 'tween'}}
        className='app__profile-item'
        key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title}/>
          <h2 className='about__bold-text' style={{ marginTop: 20}}>{about.title}</h2>
          <p className='about__p-text' style={{ marginTop: 10}}>{about.description}</p>

        </motion.div>
      ))}


      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About, 'app_about'), 'about',"app__whitebg");