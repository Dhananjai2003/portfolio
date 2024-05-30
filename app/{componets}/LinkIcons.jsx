"use client"

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const LinkIcons = () => {
  return (
      <div className='flex text-teal-200 font-extrabold text-3xl hero glitch layers'> 
        <span><Link href='https://mail.google.com/mail/?view=cm&to=dhananjaimurali30@gmail.com&su=SUBJECT&body=BODY.coms'className='p-2 hover:text-teal-500 '><FontAwesomeIcon icon={faEnvelope} /></Link></span>
        <span><Link href='https://github.com/Dhananjai2003' className='p-2 hover:text-teal-500'><FontAwesomeIcon icon={faSquareGithub} /></Link></span>
        <span><Link href='https://www.linkedin.com/in/dhananjai-murali/' className='p-2 hover:text-teal-500'><FontAwesomeIcon icon={faLinkedinIn} /></Link></span>
      </div>
  )
}

export default LinkIcons
