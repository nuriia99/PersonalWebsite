import React from 'react'
import bookingImg from '../../public/booking.png'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineFindInPage } from 'react-icons/md'

export const ProjectCard = ({name}) => {

  const map = {
    booking: {
      src: bookingImg,
      title: "BOOKING CLONE",
      explanation: "Booking.com is a website which allows users to plan travels and book hotels. In that project, I cloned the official booking main page to learn how develop cards and carousels deeply.",
      tech: "React, SASS"
    }
  }
  return (
    <div className='zoom shadow-md bg-orange-50 h-fit w-full max-w-7xl rounded-md grid grid-cols-[1.2fr_0.8fr] overflow-hidden'>
      <div className='relative h-full w-full'>
        <Image src={map[name]?.src} fill style={{objectFit: 'cover'}}/>
      </div>
      <div className='p-8 flex flex-col gap-2 justify-center'>
        <h3 className='text-md font-semibold'>{map[name]?.title}</h3>
        <p>{map[name]?.explanation}</p>
        <h3 className='text-sm font-semibold'>{map[name]?.tech}</h3>
        <div className='flex justify-center items-center gap-4 '>
          <a className='flex justify-center items-center gap-3 cursor-pointer hover:text-red-600 transition ease-in-out duration-300'>Code <AiFillGithub/></a>
          <a className='flex justify-center items-center gap-3 cursor-pointer hover:text-red-600 transition ease-in-out duration-300'>Live Demo <MdOutlineFindInPage/> </a>
        </div>
      </div>

    </div>
  )
}