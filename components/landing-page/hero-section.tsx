import { ArrowDownNarrowWide, FileDown, MoveDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section
      id="index"
      className="w-full min-h-screen bg-sidebarbg px-4 relative md:flex md:items-center "
    >
      <div className="w-full  max-w-6xl mx-auto flex flex-col  md:flex-row-reverse items-center justify-between gap-12 relative top-10 md:top-0">

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-yellow-400/30 to-purple-500/30 blur-3xl"></div>

          <Image
            src="/my_image.png"
            alt="Abhishekh Nepali"
            width={320}
            height={420}
            priority
            className="relative w-48 h-64 md:w-72 md:h-96 rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">

          <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight">
            Hi, I&apos;m <br />
            <span className="font-bold">
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Abhishekh</span> Nepali
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-100 opacity-80">
            Software <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Developer</span>
          </h2>

          <p className="text-base md:text-lg text-gray-300 opacity-70">
            Full-Stack Developer • Tech Enthusiast
          </p>

          <button className=" group relative overflow-hidden my-6 px-10 py-4 rounded-md font-semibold text-white border border-blue-600 transition-all duration-300"
          >
            <span
              className=" absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 -translate-x-full transition-transform duration-1500 ease-in-out group-hover:translate-x-0"></span>
            <span
              className=" relative z-10 transition-colors duration-500 group-hover:text-black">
              Visit My Work
            </span>
          </button>



        </div>

      </div>

      <div className='absolute bottom-35 left-35 md:bottom-20  md:left-1/2 text-center flex flex-col items-center  justify-center animate-bounce'>
        <span className='text-small md:text-medium  opacity-80 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent '>Scroll down for more </span>
        <span className='text-blue-600'><MoveDown size={20} /></span>
      </div>

    </section>
  )
}

export default HeroSection
