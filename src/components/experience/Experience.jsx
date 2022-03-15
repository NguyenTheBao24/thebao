import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { GrClear } from 'react-icons/gr'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="experience__container">
        <div className="experience__fontend">
          <h3>Frontend Development</h3>
          <div className="experience__conten">
            <article className='experience__skill'>
              <BsFillPatchCheckFill className='experience__skill-icon' />
              <div>

                <h4>HTML</h4>
                <small className='text-light'>PROFESSIONAL</small>
              </div>
            </article>
            <article className='experience__skill'>
              <BsFillPatchCheckFill className='experience__skill-icon' />
              <div>

                <h4>CSS</h4>
                <small className='text-light'>PROFESSIONAL</small>
              </div>
            </article>
            <article className='experience__skill'>
              <BsFillPatchCheckFill className='experience__skill-icon' />
              <div>

                <h4>Javascript</h4>
                <small className='text-light'>PROFESSIONAL</small>
              </div>
            </article>
            <article className='experience__skill'>
              <BsFillPatchCheckFill className='experience__skill-icon' />
              <div>

                <h4>React</h4>
                <small className='text-light'>PROFESSIONAL</small>
              </div>
            </article>

          </div>

        </div>

        {/* ========================================================== */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__conten">
            <article className='experience__skill'>
              <GrClear className='experience__skill-icon' />
              <div>

                <h4>Node JS</h4>
                <small className='text-light'>PROFESSIONAL</small>
              </div>
            </article>
            <article className='experience__skill'>
              <GrClear className='experience__skill-icon' />
              <div>

                <h4>PHP</h4>
                <small className='text-light'>PROFESSIONAL</small>
              </div>
            </article>
            <article className='experience__skill'>
              <GrClear className='experience__skill-icon' />
              <div>

                <h4>MongDb</h4>
                <small className='text-light'>PROFESSIONAL</small>
              </div>
            </article>
            <article className='experience__skill'>
              <GrClear className='experience__skill-icon' />
              <div>

                <h4>MySQL</h4>
                <small className='text-light'>PROFESSIONAL</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience