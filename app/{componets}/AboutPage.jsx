import React from 'react'
import EmailIcon from "@/public/email.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ProjectTileOdd from "@/app/{componets}/ProjectTileOdd"
import ProjectTileEven from '@/app/{componets}/ProjectTileEven';


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


      <div className=' w-9/12 pt-10'>
        <h3 className=' text-4xl pb-7 text-teal-500 hero glitch layers font-extrabold'><span>Portfolio</span></h3>
      </div>


      <div className=' w-9/12 pt-10'>
        <h3 className=' text-4xl pb-7 text-teal-500 hero glitch layers font-extrabold'><span>Portfolio</span></h3>
      </div>
      
      <ProjectTileOdd title="Applying Project Management in the Real World" desc="A small restaurant chain called Sauce and Spoon wants to meet their annual growth and expansion goals. As one
way to meet these goals, they have decided to launch a pilot project to test out the impact of installing new
tabletop menu tablets." />
      <ProjectTileEven title="Comuntity Outreach Program" desc="Aimed to document on the mental health of front line fire safety personnel." listItems={["Pitched and convinced the idea to the SSR board .","Negotiated on many aspects and guide lines of the project .",'Convinced the Kerala fire and safety authorities to obtain permission for the project.',
 'Lead the team through most of the stages of the project life cycle',
 "Made all the documents and was in-charge on our team's alignment to the guidelines laid down by Corporate",
 'Industry Relations (CIR)',
 'Made all the documentation.']}/>

    </div>
  )
}

export default AboutPage
