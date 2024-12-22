
import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay,Navigation}  from 'swiper/modules'

import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
    console.log("yoho",Courses);
    if (!Courses || Courses.length === 0) {
        return <p className="text-xl text-richblack-5">No Course Found</p>;
    }
  return (
    <>
   
      {Courses?.length ? (
        <Swiper
         modules={[Autoplay, Navigation]}
            navigation
            autoplay={{ delay: 2000 }}
            spaceBetween={50}
            slidesPerView={3}
          className="max-h-[30rem] mx-auto"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[230px]  md:h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
