import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'

import './nav.css'

const Nav = () => {
  const [acticeNav, setActiceNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiceNav('#')} className={acticeNav === '#' ? 'actice' : ''}>
        <AiOutlineHome />
      </a>
      <a href='#about' onClick={() => setActiceNav('#about')}
        className={acticeNav === '#about' ? 'actice' : ''}
      >
        <AiOutlineUser />
      </a>
      <a href='#experience'
        onClick={() => setActiceNav('#experience')}
        className={acticeNav === '#experience' ? 'actice' : ''}>
        <AiOutlineBook />
      </a>
      <a href='#testimonials'
        onClick={() => setActiceNav('#testimonials')}
        className={acticeNav === '#testimonials' ? 'actice' : ''}>
        <RiServiceLine />
      </a>
      <a href='#contact'
        onClick={() => setActiceNav('#contact')}
        className={acticeNav === '#contact' ? 'actice' : ''}>
        <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav