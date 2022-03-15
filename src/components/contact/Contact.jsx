import React, { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger, BsFillTelephoneFill } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4yaikp8', 'template_xpv0n6b', form.current, 'NR5VAz9SA-5aWSjlV')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_contaier">


        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>anhbaonb24@gmail.com</h5>
            <a href="mailto:anhbaonb24@gamil.com" target="_blank">
              Send a message
            </a>

          </article>
          <article className="contact_option">
            <BsMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Nguyễn Thế Bảo</h5>
            <a href="https://m.me/bao250603" target="_blank">
              Send a message
            </a>

          </article>
          <article className="contact_option">
            <BsFillTelephoneFill className='contact_option-icon' />
            <h4>Telephone</h4>
            <h5>0869346831</h5>
            <a href="">
              Send a message
            </a>

          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name='name' placeholder='Your Full Name'
            required
          />
          <input type="email" name='email' placeholder='Your Email'
            required
          />

          <textarea name="mesager" rows="10" placeholder='Your Messenger' required >


          </textarea>
          <button type='submit' className='btn btn-primary cc'>
            Send Message
          </button>
        </form>
      </div>


    </section>
  )
}

export default Contact