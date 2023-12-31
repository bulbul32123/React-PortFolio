'use client'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import Image from "next/legacy/image"
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import React, { useState } from 'react';
export default function Home() {
  const [darkMode , setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className={`px-10 md:px-20 lg:px-40 dark:bg-gray-900`}>
      <section className=" min-h-screen">
        <nav className=' py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-white'>Coders</h1>
          <ul className=' flex items-center'>
            <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white' />
            </li>
            <li>
              <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2  rounded-md ml-8  ' href="">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className='text-5xl py2 text-teal-600 font-medium md:text-6xl'>Bulbul Ahmed</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and designer</h3>
          <p className='text-md py-5 leading-8 md:text-xl text-gray-800 dark:text-gray-300 max-w-lg mx-auto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis commodi dignissimos ex odit est eius vel obcaecati similique itaque?</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-500'>
          <AiFillTwitterCircle />
          <AiFillYoutube />
          <AiFillLinkedin />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} layout='fill' objectFit='cover' alt='Image' />
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1 mt-5 dark:text-white'>Services I Offer</h3>
          <p className='tex-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            Since the begining of my journey as a freelance designer and developer.I've done remote work for.<span className='text-teal-500'> agencies</span> consulted for <span className='text-teal-500'>startups </span>
            and collaborated with talanted people to create a digital products for both business and consumer use
          </p>
          <p className=' text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>i Offer from a wide range of services, including programing and teaching.</p>
        </div>
        <div className='lg:flex gap-10 ' >
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={design} width={100} height={100} style={{ display: 'inline' }} alt='Image' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Creating elegrant designs suited for your needs design theory</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={code} width={100} height={100} style={{ display: 'inline' }} alt='Image' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Creating elegrant designs suited fro your needs   design theory</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white '>
            <Image src={consulting} width={100} height={100} style={{ display: 'inline' }} alt='Image' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Creating elegrant designs suited fro your needs design theory</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>PortFolio</h3>
          <p className='tex-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
            Since the begining of my journey as a freelance designer and developer.I've done remote work for.<span className='text-teal-500'> agencies </span>consulted for <span className='text-teal-500'>startups </span>
            and collaborated with talanted people to create a digital products for both business and consumer use
          </p>
          <p className=' text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>i Offer from a wide range of services, including programing and teaching.</p>
        </div>
        <div className='flex flex-col gap-10 oy-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1 '>
            <Image src={web1} className='rounded-lg object-cover ' width={'100%'}  height={'100%'} layout='responsive' alt='Image'/>
          </div>

          <div className='basis-1/3 flex-1 '>
            <Image src={web2} className='rounded-lg object-cover ' width={'100%'}  height={'100%'} layout='responsive' alt='Image'/>
          </div>

          <div className='basis-1/3 flex-1 '>
            <Image src={web3} className='rounded-lg object-cover ' width={'100%'}  height={'100%'} layout='responsive' alt='Image'/>
          </div>

          <div className='basis-1/3 flex-1 '>
            <Image src={web4} className='rounded-lg object-cover ' width={'100%'}  height={'100%'} layout='responsive' alt='Image'/>
          </div>

          <div className='basis-1/3 flex-1 '>
            <Image src={web5} className='rounded-lg object-cover ' width={'100%'}  height={'100%'} layout='responsive' alt='Image'/>
          </div>

          <div className='basis-1/3 flex-1 '>
            <Image src={web6} className='rounded-lg object-cover ' width={'100%'}  height={'100%'} layout='responsive' alt='Image'/>
          </div>

        </div>
      </section>
    </main>
    </div>
  )
}





