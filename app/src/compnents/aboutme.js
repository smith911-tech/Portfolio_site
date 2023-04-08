import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

export default  function AboutMe(){
    return(
        <>

        <h2 className="about-text">About Me:</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Hi, I'm Williams Joseph.
<br />
            A Frontend developer based in Abuja, Nigeria, I specialize in creating Responsive Websites that are user friendly that capture my client or employer's brand.
        </SwiperSlide>
        <SwiperSlide>With over One years of experience in the industry, I've worked with a diverse range of Developers, On different Types of project and i've created alot of personal projects.</SwiperSlide>
        <SwiperSlide>My interest in programming began during my undergraduate degree in criminology at the National Open university of nigeria. While studying crime and deviance.</SwiperSlide>
        <SwiperSlide> I became fascinated with how technology can be used to solve problems and improve people's lives. This led me to take a few computer science courses, and I soon realized that programming was my true passion.</SwiperSlide>
        <SwiperSlide>My approach to programming is focused on delivering high-quality work that meets my clients' needs and exceeds their expectations.</SwiperSlide>
        <SwiperSlide> I believe in collaborating closely with my clients to understand their requirements and goals, and I always strive to deliver clean, well-documented code that is easy to maintain and scale.</SwiperSlide>
        <SwiperSlide>When I'm not coding, you can find me hitting the gym, practicing yoga, or reading up on the latest industry trends. I'm always looking for ways to stay active and healthy, both mentally and physically.</SwiperSlide>
      </Swiper>
        </>
    )
}