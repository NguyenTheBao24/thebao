import React from 'react'
import './footer.css'
import { BsFacebook, BsGithub, BsDiscord } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer >

      <a href="#" className='footer__logo'> EGATOR</a>

      <ul >
        <li className='icon'>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">experience</a>
          <a href="#testimonials">testimonials</a>
          <a href="#contact">contact</a>

        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/bao250603" target="_blank"><BsFacebook /></a>
        <a href="https://github.com/NguyenTheBao24" target="_blank"><BsGithub /></a>
        <a href="https://discord.com/channels/884376674689515550/893057240582459443" target="_blank"><BsDiscord /></a>
      </div>
      <div className="foorter__copyrigth">
        <small>
          &copy; EGATOR Tutorials. ALL rights reseved
        </small>
      </div>
    </footer>



  )
}

export default Footer