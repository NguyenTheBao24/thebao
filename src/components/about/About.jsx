import React from 'react'
import ME from '../../thuvien/CV.jpg'
import { FaAward } from 'react-icons/fa'
import { GiAchievement } from 'react-icons/gi'
import { BiHappyBeaming } from 'react-icons/bi'
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>
        About me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me-img" />
           
          </div>
        </div>
        <div className="about__content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about__icon' />
              <h5>
                experience
              </h5>
              <small>
                1+ Month
              </small>

            </article>
            <article className="about_card">
              <GiAchievement className='about__icon' />
              <h5>
                Skill
              </h5>
              <small>
                Reactjs
              </small>

            </article>
            <article className="about_card">
              <BiHappyBeaming className='about__icon' />
              <h5>
                Attitude
              </h5>
              <small>
                Activele Learn
              </small>

            </article>

          </div>


          <p>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum, rerum?
            Voluptas velit unde cumque eius eligendi
            iusto harum fuga eum? Soluta ea deleniti libero quas similique non asperiores nam! Quaerat!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Takl</a>
        </div>

      </div>


    </section>
  )
}

export default About