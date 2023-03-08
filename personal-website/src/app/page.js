import { Poppins, Roboto_Mono } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillHtml5} from 'react-icons/ai'
import Image from 'next/image'
import face from '../../public/face.png'
import html5 from '../../public/html5.svg'
import css from '../../public/css.svg'
import js from '../../public/js.svg'
import react from '../../public/react.svg'
import sass from '../../public/sass.svg'

const roboto = Roboto_Mono({ subsets: ['latin'], weight:['400', '700'] })
const poppins = Poppins({ subsets: ['latin'], weight:['400', '700'] })


export default function Home() {
  return (
    <main className={poppins.className}>
      <section className='bg-white px-10'>
        <div className='fixed inset-0 h-fit w-full bg-white px-10 py-5  bg-opacity-80 z-10 flex justify-center backdrop-blur'>
          <nav className='relative flex items-center justify-between w-full lg:w-70p'>
            <h1 className={roboto.className + ' text-2xl'}>{"{dev-nuriia99}"}</h1>
            <ul className='flex items-center gap-5'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl text-red-700'/></li>
              
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
                <a className='grid content-center' href='https://www.linkedin.com/in/nuria-anton/'><AiFillLinkedin/></a>
                <a className='grid content-center' href='https://github.com/nuriia99'><AiFillGithub/></a>
                <a href='' className='bg-gradient-to-r text-sm from-red-500 to-red-800 text-white px-4 py-2 rounded-md'>Resume</a>
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
      <section className='about-me px-10'>
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
    </main>
  )
}
