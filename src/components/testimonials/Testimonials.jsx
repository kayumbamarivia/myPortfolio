import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/testimony/1.jpg';
import AVTR2 from '../../assets/testimony/2.jpg';
import AVTR3 from '../../assets/testimony/3.jpg';
import AVTR4 from '../../assets/testimony/4.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Testimonials() {
  const data = [
    {
      avatar: AVTR1,
      name: "Jeanne D'Arc",
      review: 'I am truly grateful for your exceptional development skills and unwavering dedication. I express heartfelt thanks for your ability to transform my ideas into seamless, user-friendly websites and applications.',
    },
    {
      avatar: AVTR2,
      name: 'Bisangwa Eugene',
      review: "Your journey as a developer is a testament to your dedication, growth, and adaptability. With each line of code written and every problem solved, you've honed your skills and embraced the ever-changing landscape of technology. I am trully grateful"
    },
    {
      avatar: AVTR3,
      name: 'Ayinkamiye Sandrine',
      review: "Your experiences have shaped you into a versatile developer, capable of navigating both front-end and back-end challenges. Through collaboration, learning, and persistent effort, you've crafted solutions that merge creativity with functionality, leaving your mark in the digital realm."
    },
    {
      avatar: AVTR4,
      name: 'Desiree Mucyo',
      review: "Above all, I your clients am thankful for your unwavering commitment to my projects' success. I acknowledge the countless hours you've dedicated to refining codes, troubleshooting issues, and ensuring optimal functionality. "
    }
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={`${name}'s Avatar`} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
