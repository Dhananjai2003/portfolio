import React from 'react'
import EmailIcon from "@/public/email.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white'>
      <div className=' w-9/12 pt-10'>
        <h3 className=' text-4xl pb-7 text-teal-500 hero glitch layers font-extrabold'><span>About Me</span></h3>
        <p className=' text-slate-300 mb-10 text-justify' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam ea nostrum! Explicabo enim est impedit, architecto quasi consequuntur delectus, eos laboriosam quos distinctio voluptatem ipsa tempora. Pariatur, magnam vel! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde sequi molestias velit nesciunt saepe tenetur voluptates eius hic quam explicabo cumque in distinctio suscipit molestiae, ab reiciendis eaque excepturi placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat sit sint in, officia cupiditate blanditiis culpa. Unde ea, repellendus distinctio quas aperiam aliquam nemo quod, inventore amet asperiores qui.</p>
      </div>
      <div className="">

      </div>
      <div className='flex  text-teal-200 font-extrabold text-3xl hero glitch layers'> 
        <span><Link href='/' className='p-2 hover:text-teal-500 '><FontAwesomeIcon icon={faEnvelope} /></Link></span>
        <span><Link href='/' className='p-2 hover:text-teal-500'><FontAwesomeIcon icon={faSquareGithub} /></Link></span>
        <span><Link href='/' className='p-2 hover:text-teal-500'><FontAwesomeIcon icon={faLinkedinIn} /></Link></span>
      </div>

      <Link href='/' className=' resumeBtn p-2 bg-teal-500 font-extrabold mt-4'>Resume</Link>
      
    </div>
  )
}

export default AboutPage
