import React from 'react'
import { addToCart } from "../../../slices/cartSlice"
import { toast } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import { FaShareSquare } from "react-icons/fa"
import copy from "copy-text-to-clipboard"


function CourseDetailsCard({course,setConfirmationModal}) {
    console.log("course in course detail page",course)

    const { user } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
          toast.error("You are an Instructor. You can't buy a course.")
          return
        }
        if (token) {
          dispatch(addToCart(course))
          return
        }
        setConfirmationModal({
          text1: "You are not logged in!",
          text2: "Please login to add To Cart",
          btn1Text: "Login",
          btn2Text: "Cancel",
          btn1Handler: () => navigate("/login"),
          btn2Handler: () => setConfirmationModal(null),
        })
      }
      
  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

  return (
    <div  className={`flex flex-col gap-4 p-4 text-richblack-5 rounded-xl bg-blue-500`}>
    <img src={course.thumbnail}
        alt={course?.courseName}
        className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full" 
    ></img>
    <div className="px-4">
        <div className="space-x-3 pb-4 text-3xl font-semibold text-white">
            Rs. {course.price}
        </div>
        <div className="flex flex-col gap-4">
            <button
              className="yellowButton"
            //   onClick={
            //     user && course?.studentsEnrolled.includes(user?._id)
            //       ? () => navigate("/dashboard/enrolled-courses")
            //       : handleBuyCourse
            //   }
            >
              {user && course?.studentsEnrolled.includes(user?._id)
                ? "Go To Course"
                : "Buy Now"}
            </button>
            {(!user || !course?.studentsEnrolled.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="blackButton">
                Add to Cart
              </button>
            )}
          </div>
          <div>
            <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
              30-Day Money-Back Guarantee
            </p>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>

    </div>

    
    </div>
  )
}

export default CourseDetailsCard