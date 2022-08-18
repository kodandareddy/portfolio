import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Skills.scss";
import { EffectCoverflow, Pagination } from "swiper";

export default function Skills({skills}) {
  return (
    <div ref={skills}>
          <h1  className="skills-heading">Skills</h1>

    <div className="skills " data-aos="fade-left">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              src="https://devstickers.com/assets/img/pro/iqm9.png"
            />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
              <div className="empty"></div>
              <div className="experience">
                <span>⭐⭐⭐⭐</span>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              src="https://devstickers.com/assets/img/pro/8pnd.png"
            />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <div className="empty"></div>

              <div className="experience">
                <span>⭐⭐⭐⭐</span>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              className="js"
              src="https://devstickers.com/assets/img/cat/javascript.png"
            />
            <Card.Body>
              <Card.Title>Javascript</Card.Title>
              <div className="empty"></div>
              <div className="experience">
                <span>⭐⭐⭐⭐</span>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              className="rjs"
              src="https://devstickers.com/assets/img/cat/react-js.png"
            />
            <Card.Body>
              <Card.Title>React Js</Card.Title>
              <div className="empty"></div>
              <div className="experience">
                <span>⭐⭐⭐⭐</span>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Card.Img
              variant="top"
              className="njs"
              src="https://devstickers.com/assets/img/cat/nodejs.png"
            />
            <Card.Body>
              <Card.Title>Node Js</Card.Title>
              <div className="empty"></div>
              <div className="experience">
                <span>⭐⭐⭐⭐</span>
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
