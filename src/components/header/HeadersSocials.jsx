import React from 'react'
import{BsFacebook ,BsGithub,BsDiscord} from 'react-icons/bs'
import './header.css'
const HeadersSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.facebook.com/bao250603" target="_blank"><BsFacebook/></a>
            <a href="https://github.com/NguyenTheBao24" target="_blank"><BsGithub/></a>
            <a href="https://discord.com/channels/884376674689515550/893057240582459443" target="_blank"><BsDiscord/></a>
        </div>
    )
}

export default HeadersSocials