import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Autoplay } from "swiper/modules";

import { user1, user2, user3, user4, user5 } from "../assets";

const Testimonials = () => {
  const People = [
    {
      id: 1,
      name: "- John Doe",
      desc: "Amazing service and top-notch coffee!",
      img: user1,
    },
    {
      id: 1,
      name: "- John Doe",
      desc: "Amazing service and top-notch coffee!",
      img: user2,
    },
    {
      id: 1,
      name: "- John Doe",
      desc: "Amazing service and top-notch coffee!",
      img: user3,
    },
    {
      id: 1,
      name: "- John Doe",
      desc: "Amazing service and top-notch coffee!",
      img: user4,
    },
    {
      id: 1,
      name: "- John Doe",
      desc: "Amazing service and top-notch coffee!",
      img: user5,
    },
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="bpy-10 bg-[#222222] pb-10">
        <div className="flex flex-col items-center text-center font-bold capitalize text-3xl mb-10">
            <h1 className="text-white pt-5">Testimonials</h1>
            <div className="bg-orange-400 w-[100px] h-[2px] mt-3"></div>
        </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
        {People.map((person) => (
          <SwiperSlide key={person.id}>
            <div className="flex flex-col items-center gap-4">
              <img
                src={person.img}
                className="w-20 h-20 rounded-full"
                alt={person.name}
              />
              <p className="text-lg text-white">{person.desc}</p>
              <h3 className="font-bold text-white">{person.name}</h3>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;