import { Poppins, Roboto_Mono } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const roboto = Roboto_Mono({ subsets: ['latin'], weight:['400', '700'] })
const poppins = Poppins({ subsets: ['latin'], weight:['400', '700'] })


export default function Home() {
  return (
    <main className={poppins.className}>
      <section className='bg-white px-10'>
        <nav className='py-10 mb-12 flex justify-between align-middle'>
          <h1 className={roboto.className + ' text-2xl'}>{"{dev-nuriia99}"}</h1>
          <ul className='flex items-center gap-5'>
            <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
            <li><a href='' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md'>Resume</a></li>
          </ul>
        </nav>
        <div>
          <h2 className='flex justify-center text-5xl font-semibold text-teal-600'>Nuria Anton</h2>
          <h3 className='flex justify-center text-2xl pt-4 pb-4'>Frontend Developer</h3>
          <p className='text-center text-sm leading-8 text-zinc-600'>
            I'm a junior software engineer specialized in Web Development. I'm higly adaptable to new environtmens and a quick learner.
          </p>
        </div>
        <div className='flex justify-center gap-4 text-3xl p-3 text-zinc-600'>
          <a href='https://www.linkedin.com/in/nuria-anton/'><AiFillLinkedin/></a>
          <a><AiFillGithub/></a>
        </div>
      </section>
      <section>
        <h3 className={roboto.className + ' flex justify-center font-semibold text-3xl text-teal-600 p-10'}>01. About me</h3>
        <p className='leading-7 text-justify pr-12 pl-12 pb-5'>
          Hello! My name is Nuria and I enjoy creating websites on the internet. My interest in web development started during my degree, where I learn how fun was design new pages and build your own ideas. 
        </p>
        <p className='p-12 leading-7 text-justify pt-0'>
          I recently finished a <b>software engineering degree</b> at UPC, and I've completed a FullStack Bootcamp to learn more about the most important technologies. At this point, my goal is keep learning new skills and I am working on new projects to put in practise all I've learnt.  
        </p>
      </section>
    </main>
  )
}
