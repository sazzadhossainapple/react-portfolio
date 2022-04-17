import React from "react";
// import Swiper core and required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import AVTR1 from "../../asserts/avatar1.jpg";
import AVTR2 from "../../asserts/avater1.jpg";
// import AVTR3 from "../../asserts/avatar3.jpg";
import "./testimonials.css";

const data = [
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distinction alias rerum laborum aperiam minus pariatur, totam dicta, repellendus a voluptatibus!",
  },

  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distinction alias rerum laborum aperiam minus pariatur, totam dicta, repellendus a voluptatibus!",
  },

  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distinction alias rerum laborum aperiam minus pariatur, totam dicta, repellendus a voluptatibus!",
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distinction alias rerum laborum aperiam minus pariatur, totam dicta, repellendus a voluptatibus!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
