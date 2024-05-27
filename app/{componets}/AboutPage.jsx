import React from 'react'
import EmailIcon from "@/public/email.svg"
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ProjectTileOdd from "@/app/{componets}/ProjectTileOdd"
import ProjectTileEven from '@/app/{componets}/ProjectTileEven';
import SkillBadge from "@/app/{componets}/SkillBadge"


const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white'>
      <div className=' w-9/12 pt-10'>
        <h3 className=' text-4xl pb-7 text-teal-500 hero glitch layers font-extrabold'><span>About Me</span></h3>
        <p className=' text-slate-300 mb-10 text-justify font-extrabold' >A Computer Science student who posses good leadership, ability in coding and keen on learning new platforms
and frameworks. Likes to improve and test my skill and is open to new challenges.</p>
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
        <h3 className=' text-4xl pb-7 text-teal-500 hero glitch layers font-extrabold'><span>Skills</span></h3>
      </div>

      <div className='flex content-stretch w-9/12 justify-center'>
        <SkillBadge flick="flicker-1" skill="Python"></SkillBadge>
        <SkillBadge flick="flicker-2" skill="Django"></SkillBadge>
        <SkillBadge flick="flicker-3" skill="NextJS"></SkillBadge>
        <SkillBadge flick="flicker-4" skill="Frontend Development"></SkillBadge>
        <SkillBadge flick="flicker-5" skill="Program Management"></SkillBadge>
        <SkillBadge flick="flicker-1" skill="Backend Devlopment"></SkillBadge>
        <SkillBadge flick="flicker-2" skill="Postgresql"></SkillBadge>
        <SkillBadge flick="flicker-3" skill="Mentorship"></SkillBadge>

      </div>
      <div className='flex content-stretch w-9/12 justify-center'>
        <SkillBadge flick="flicker-4" skill="Java"></SkillBadge>
        <SkillBadge flick="flicker-5" skill="C++"></SkillBadge>
        <SkillBadge flick="flicker-1" skill="Strategic communication"></SkillBadge>
        <SkillBadge flick="flicker-2" skill="Problem-solving"></SkillBadge>
        <SkillBadge flick="flicker-3" skill="Selenium"></SkillBadge>
        <SkillBadge flick="flicker-4" skill="Cyber Security"></SkillBadge>
        <SkillBadge flick="flicker-1" skill="SQL"></SkillBadge>
        <SkillBadge flick="flicker-1" skill="Management"></SkillBadge>

      </div>

      <div className=' w-9/12 pt-10'>
        <h3 className=' text-4xl pb-7 text-teal-500 hero glitch layers font-extrabold'><span>Portfolio</span></h3>
      </div>
      
      <ProjectTileOdd title="Applying Project Management in the Real World" desc="A small restaurant chain called Sauce and Spoon wants to meet their annual growth and expansion goals. As one
way to meet these goals, they have decided to launch a pilot project to test out the impact of installing new
tabletop menu tablets." listItems={[]}/>

      <ProjectTileEven title="Comuntity Outreach Program" desc="Aimed to document on the mental health of front line fire safety personnel." listItems={["Pitched and convinced the idea to the SSR board .","Negotiated on many aspects and guide lines of the project .",'Convinced the Kerala fire and safety authorities to obtain permission for the project.',
 'Lead the team through most of the stages of the project life cycle',
 "Made all the documents and was in-charge on our team's alignment to the guidelines laid down by Corporate",
 'Industry Relations (CIR)',
 'Made all the documentation.']}/>

      <ProjectTileOdd title="IP Location Tracker" desc="A challenge from frontendmentor.io which is to find the geographic location of a given network IP" listItems={["Front end using NextJS","Map using Leaflet","Location using ip-api "]}></ProjectTileOdd>

    </div>
  )
}

export default AboutPage
