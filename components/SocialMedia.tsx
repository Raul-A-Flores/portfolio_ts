import React from 'react'
import { BsTwitter, BsInstagram,} from 'react-icons/bs'
import {  FaGithub, FaLinkedin} from 'react-icons/fa'



const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div >
          <a href='https://twitter.com/Raul__Floress'>    
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href='https://github.com/Raul-A-Flores'>
            <FaGithub />
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/raul-floress/'>
          <FaLinkedin />
          </a>
        </div>

    </div>
  )
}

export default SocialMedia