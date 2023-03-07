import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section className='bg-blue-700 h-20 '>
        <h1>hello</h1>
      </section>
    </main>
  )
}
