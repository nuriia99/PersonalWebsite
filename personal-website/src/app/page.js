"use client"
import { Poppins, Roboto_Mono } from 'next/font/google'
import {BsFillMoonStarsFill, BsPersonFillGear, BsPhoneFill, BsTelephoneFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillFastForward, AiFillMail} from 'react-icons/ai'
import {RiTeamFill} from 'react-icons/ri'
import {MdReportProblem} from 'react-icons/md'
import Image from 'next/image'
import face from '../../public/face.png'
import html5 from '../../public/html5.svg'
import css from '../../public/css.svg'
import js from '../../public/js.svg'
import react from '../../public/react.svg'
import sass from '../../public/sass.svg'
import { useState } from 'react'

const roboto = Roboto_Mono({ subsets: ['latin'], weight:['400', '700'] })
const poppins = Poppins({ subsets: ['latin'], weight:['400', '700'] })


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <main className={poppins.className + ' ' + darkMode ? 'dark' : ''}>
      <section id='presentation' className='px-10'>
        <div className='fixed inset-0 h-fit w-full bg-white px-10 py-5  bg-opacity-80 z-10 flex justify-center backdrop-blur'>
          <nav className='relative flex items-center justify-between w-full lg:w-70p'>
            <h1 className={roboto.className + ' text-2xl'}>{"{dev-nuriia99}"}</h1>
            <ul className='flex items-center gap-5'>
              <li><a href='#about-me' className='hover:text-red-700 transition ease-in-out duration-300 hidden md:inline'>About Me</a></li>
              <li><a href='#skills' className='hover:text-red-700 transition ease-in-out duration-300 hidden md:inline'>Skills</a></li>
              <li><a href='#projects' className='hover:text-red-700 transition ease-in-out duration-300 hidden md:inline'>Projects</a></li>
              <li><a href='#contact' className='hover:text-red-700 transition ease-in-out duration-300 hidden md:inline'>Contact</a></li>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl text-red-700' onClick={() => setDarkMode(!darkMode)}/></li>
              
            </ul>
          </nav>
        </div>
        <div className='flex justify-center pt-40'>
          <div className='lg:presentation-container'>
            <div>
              <h2 className='lg:text-left text-center text-5xl font-semibold text-red-700'>Nuria Anton</h2>
              <h3 className='lg:text-left text-center text-2xl pt-4 pb-4'>Front-End React Developer</h3>
              <div>
                <p className='lg:text-left text-center text-sm leading-8 text-zinc-600'>
                  Hi, I'm Nuria. A junior software engineer specialized in Web Development, who lives in Barcelona, Spain 📌.
                </p>
              </div>
            </div>
              <div className='flex justify-center lg:justify-start  gap-4 text-3xl py-3 pl-0 text-zinc-600'>
                <a className='grid content-center hover:text-sky-700 transition ease-in-out duration-300' href='https://www.linkedin.com/in/nuria-anton/'><AiFillLinkedin/></a>
                <a className='grid content-center hover:text-gray-900 transition ease-in-out duration-300' href='https://github.com/nuriia99'><AiFillGithub/></a>
                <a href='' className="relative bg-gradient-to-r text-sm from-red-500 to-red-800 hover:from-red-400 hover:to-red-700 text-white px-4 py-2 rounded-md transition ease-in-out duration-300 before-[''] before:absolute before:inset-0 before:w-full before:h-full before:border-2 before:border-transparent before:hover:border-red-700 before:hover:top-1 break-after-autohover before:rounded-md  before:hover:left-1 before:-z-10 before:transition-all before:duration-200">Resume</a>
              </div>
            <span className='flex items-center flex-wrap gap-7 pt-20'>
              <p>Main Tech Stack</p>
              <p>|</p>
              <Image className='h-8 w-8 face-img' src={html5} objectFit='contain'/>
              <Image className='h-8 w-8 face-img' src={css} objectFit='contain'/>
              <Image className='h-8 w-8 face-img' src={js} objectFit='contain'/>
              <Image className='h-8 w-8 face-img' src={react} objectFit='contain'/>
              <Image className='h-8 w-8 face-img' src={sass} objectFit='contain'/>
            </span>
          </div>
        </div>
        
      </section>
      <section id='about-me' className='about-me px-10'>
        <div className='lg:about-me-container'>
          <h3 className={roboto.className + ' flex justify-center font-semibold text-3xl text-red-700 pb-5 pt-36'}>01. About me</h3>
          <div className='flex lg:flex-row flex-col items-center gap-5'>
            <div className='flex flex-col justify-center'>
              <p className='leading-7 text-justify pb-5'>
                Hello! My name is Nuria and I enjoy creating websites on the internet. My interest in web development started during my degree, where I learn how fun was design new pages and build your own ideas. 
              </p>
              <p className='leading-7 text-justify pt-0'>
                I recently finished a <b>software engineering degree</b> at UPC, and I've completed a FullStack Bootcamp to learn more about the most important technologies. At this point, my goal is keep learning new skills and I am working on new projects to put in practise all I've learnt.  
              </p>
            </div>
            <div className='p-5'>
              <div className='relative h-60 w-60 flex justify-center min-w-fit overflow-hidden'>
                <Image className='face-img' src={face} layout={'fill'} objectFit={'contain'}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='skills' className='about-me px-10'>
        <div className='lg:about-me-container'>
          <h3 className={roboto.className + ' flex justify-center font-semibold text-3xl text-red-700 pb-5 pt-36'}>02. Soft skills</h3>
          <div className='flex justify-around gap-20 py-20 flex-wrap'>
            <div className='flex flex-col items-center gap-3'>
              <AiFillFastForward className='text-5xl text-red-800'/>
              <p>Fast learning</p>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <RiTeamFill className='text-5xl text-red-800'/>
              Team work
            </div>
            <div className='flex flex-col items-center gap-3'>
              <MdReportProblem className='text-5xl text-red-800'/>
              Problem solving
            </div>
            <div className='flex flex-col items-center gap-3'>
              <BsPersonFillGear className='text-5xl text-red-800'/>
              Adaptabilty
            </div>
          </div>
        </div>
      </section>
      <section id='projects' className='about-me px-10'>
        <div className='lg:about-me-container'>
          <h3 className={roboto.className + ' flex justify-center font-semibold text-3xl text-red-700 pb-5 pt-36'}>03. Projects</h3>

        </div>
      </section>
      <section id='contact' className='about-me px-10 py-20'>
        <div className='lg:about-me-container'>
          <h3 className={roboto.className + ' flex justify-center font-semibold text-3xl text-red-700 pb-5 pt-36'}>04. Contact</h3>
          <h4 className='py-10 text-black font-semibold'>Don't be shy! Contact me! 👇</h4>
          <div className=' flex flex-wrap justify-start lg:justify-center  gap-10 text-3xl py-3 pl-0 text-zinc-600'>
            <a href='https://www.linkedin.com/in/nuria-anton/' className='flex items-center gap-4 hover:text-sky-700 transition ease-in-out duration-300'>
              <AiFillLinkedin/>
              <div>
                <p className='text-lg text-black font-semibold'>LinkedIn</p>
                <p className='text-sm'>Nuria Antón Calle</p>
              </div>
            </a>
            <div className='flex items-center gap-4 hover:text-red-700 transition ease-in-out duration-300'>
              <AiFillMail/>
              <div>
                <p className='text-lg text-black font-semibold'>Mail</p>
                <p className='text-sm'>nurianton1999@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-4 hover:text-teal-600 transition ease-in-out duration-300'>
              <BsPhoneFill/>
              <div>
                <p className='text-lg text-black font-semibold'>Telephone</p>
                <p className='text-sm'>+34 657 314 695</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
