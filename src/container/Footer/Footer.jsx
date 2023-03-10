import React, { useState } from 'react'

import { BsPhoneFill } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>contact me & we take coffee ☕️</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <SiMinutemailer id='app__footer-icon' />
          {/* <img src={images.email} alt="email"/> */}
          <a href='mailto:  sziinocolanino@gmail.com' className='p-text'>sziinocolanino@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <BsPhoneFill id='app__footer-icon' />
          {/* <img src={images.mobile} alt="mobile"/> */}
          <a href='tel: +54 (3541) 589-112' className='p-text'>+54 (3541) 589-112</a>
        </div>
      </div>

    {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' value={name} name='name' onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your Email' value={email} name='email' onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
          className='p-text'
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
        <h3 className='head-text'>Thank you for getting in touch.</h3>
      </div>}
    </>
  )
}


export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__greybg'
)