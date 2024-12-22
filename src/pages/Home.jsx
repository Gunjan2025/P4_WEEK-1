import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import Educosys from "../assets/Images/educosys.svg";

function Home() {
  return (
    <div>
    
    {/*Section 1*/}

    <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8
     text-white">
   <div className="flex lg:flex-row gap-20 items-center mt-16 mb-2">
   <div className='lg:w-[50%]'>
    <Link to={"/signup"}>
    <div className="group mx-auto mt-16 w-fit rounded-full bg-blue-600 p-1 font-bold text-richblack-200
     drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">

    <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200
     group-hover:bg-#a7d8ff text-white">
    <p>Become an Instructor</p>
    <FaArrowRight/>
    </div>

</div>
    </Link>
        
        <div className="text-center text-4xl font-semibold mt-7 text-black">
        Unleash Your Potential with 
            <HighlightText text={"Coding Proficiency"} /> 
        </div>

        <div className="mt-3 w-[90%] text-center text-lg font-bold text-richblack-600">
        With our online coding courses, you can learn at your own pace, from
        anywhere in the world, and get access to a wealth of resources and personalized feedback from
        instructors.
      </div>

      <div className="mt-8 flex flex-row gap-7 ml-20">
      <CTAButton active={true} linkto={"/signup"}>
        Learn More
      </CTAButton>
      <CTAButton active={false} linkto={"/login"}>
        Book a Demo
      </CTAButton>
    </div>

    </div>
    <div className='lg:w-[50%]'>
    <img
              src={Educosys}
              alt=""
         
            />
    </div>
    </div>
  {/* <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 ">
    <video
      className="  shadow-[20px_20px_rgba(255,255,255)] w-full"
      muted
      loop
      autoPlay
    >
      <source src={Banner} type="video/mp4" />
    </video>
  </div>   */}

        {/* Code Block 1 */}
        <div>
        <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock your
              <HighlightText text={"coding potential"} /> with our online
              courses.
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{
            btnText: "Try it Yourself",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeColor={"text-yellow-25"}
          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          backgroundGradient={<div className="codeblock1 absolute"></div>}
        />
      </div>

      {/*Code Block 2 */}
      <div>
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-4xl font-semibold">
              Start
              <HighlightText text={"coding in seconds"} />
            </div>
          }
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          ctabtn1={{
            btnText: "Continue Lesson",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeColor={"text-white"}
          codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          backgroundGradient={<div className="codeblock2 absolute" ></div>}
        />
      </div>
          <ExploreMore/>
          
    </div>

    {/*Section 2*/}

    <div className='bg-pure-greys-5 text-richblack-700 '>
    <div className='homepage-bg h-[333px]'>
    <div className='mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8'>
    <div className="lg:h-[150px]"></div>
    <div className='flex flex-row gap-7 text-white '>
      <CTAButton active={true} linkto={"/signup"}>
      <div className='flex gap-3 items-center'>
       Explore ful Catalog
       <FaArrowRight/>
      </div>
      </CTAButton>
      <CTAButton active={false} linkto={"/signup"}>
      <div className='flex gap-3 items-center'>
       Learn More 
      </div>
      </CTAButton>
    </div>
  
    </div>

    </div>

    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
    <div className='mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0 '>
    <div className="text-4xl font-semibold lg:w-[45%] ">
        Get the skills you need for a{" "}
        <HighlightText text={"job that is in demand."} />
      </div>
      <div className="flex flex-col items-start gap-10 lg:w-[40%]">
      <div className="text-[16px]">
        The modern EduConnect dictates its own terms. Today, to
        be a competitive specialist requires more than professional
        skills.
      </div>
      <CTAButton active={true} linkto={"/signup"}>
        <div className="">Learn More</div>
      </CTAButton>
    </div>
    </div>
    
    <TimeLineSection/>
    <LearningLanguageSection/>
    </div>

    </div>
    {/*Section 3*/}
   
    <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
    {/* Become a instructor section */}
    <InstructorSection />

    {/* Reviws from Other Learner */}
    <h1 className="text-center text-4xl font-semibold mt-8">
      Reviews from other learners
    </h1>
        {/* <ReviewSlider /> */ }
  </div>

    {/*Section 4*/}
          

    {/* Footer */}
          <Footer/>
    </div>
  )
}

export default Home