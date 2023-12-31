'use client'


import React, {useState} from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import {client} from '../../client'
import { MdEmail } from "react-icons/md";
import Email from '../../assets/envelope.svg'
import Image from 'next/image'
import phone from '../../assets/phone-modern.svg'

import './Footer.scss'
const Footer = () => {

  const [formData, setFormData] = useState({name:'', email:'', message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message} = formData;
  const handleChangeInput = (e) => {
    e.preventDefault();
    const{name, value} = e.target;

    setFormData({ ...formData, [name]: value})
  }

  const handleSubmit =  () => {
    setLoading(true)

    const contact ={
      _type:'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact)
      .then(()=>{
        setLoading(false)
        setIsFormSubmitted(true)
      })

  }
  return (
    <>
      <h2 className='head-text'>Feel free to <span>contact me</span> </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <Image src={Email} alt='email' height={40}/>
          <a href="mailto:raul.alexander.floress@gmail.com" className='p-text'>raul.alexander.floress@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <Image src={phone} alt='phone' height={40}/>

          <a href="tel + 1 (310) 402 8397 " className='p-text'>+1 (310) 402-8397</a>
        </div>

      </div>

    {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' name='name' placeholder='Your Name' value={name}
          onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' name='email' placeholder='Your Email' value={email}
          onChange={handleChangeInput} />
        </div>
        <div>
          <textarea className='p-text' name='message' placeholder='Your Message' value={message} onChange={handleChangeInput} />
        </div>
        <button type="button" className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>

      </div>
      : <div>
        <h3 className='head-text'>Thank you for getting in touch</h3>
      </div>
    }
    
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact', "app_primaryBg"
)