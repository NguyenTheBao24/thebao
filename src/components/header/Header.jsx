import React from 'react'
import CTA from './CTA'
import HeadersSocials from './HeadersSocials'
import ME from '../../thuvien/avata2.png'
import './header.css'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello I'm
        </h5>
        <h1>Nguyễn Thế Bảo</h1>
        <h5 className="text-light">Front End developer</h5>
        <CTA />
        <HeadersSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down</a>


      </div>
    </header>
  )
}
export default Header
