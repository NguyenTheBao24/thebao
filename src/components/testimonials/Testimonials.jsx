import React from 'react'

import me1 from '../../thuvien/meme1.jpg'
// import me2 from '../../thuvien/meme2.jpg'
import me3 from '../../thuvien/meme3.jpg'
import me4 from '../../thuvien/meme4.jpg'
import me5 from '../../thuvien/meme5.jpg'
import me6 from '../../thuvien/meme6.jpg'
import './testimonials.css'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: me1,
    name: 'Bảo Thân Thiện',
    review: 'Bảo luôn luôn vui vẻ với mọi người, bảo hay giúp đỡ mọi người khi mọi người gặp khó khăn '

  },
  {
    avatar: me6,
    name: 'Bảo Bay Lăc ',
    review: 'Sau nhưng buổi học tập và làm việc căng thẳng Bảo thương đi tập múa nhưng là múa "quạt"'

  },
  {
    avatar: me3,
    name: 'Bảo Mũi To',
    review: 'Bảo khi buồn ngủ thường có cái dấu hiệu kì quặc  mọi người nên tránh lúc này'


  },
  {
    avatar: me4,
    name: 'Boy Bảo',
    review: 'Bảo lúc này bảo trở thành 1 người con trai bình thường nhưng hay thất thường '


  },
  {
    avatar: me5,
    name: 'Bảo Cute',
    review: 'Bảo rất ghét chụp bằng filter nhưng 1 khi đã chụp thì lại rất đẹp'


  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>


      <h5>Nature Itself</h5>
      <h2>Introduce</h2>
      <Swiper className="container testimonials_container"
      
      
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
     
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonials'>
              <div className="client_avata">
                <img src={avatar} alt="me1" />

              </div>
              <div>
                 <h5 className='client_name'>{name} </h5>
                <small className='client_review'>
                  {review}
                </small></div>

            </SwiperSlide>
          
            )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonials