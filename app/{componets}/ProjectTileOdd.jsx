import React from 'react'
import Link from 'next/link'

const ProjectTileOdd = (props) => {
  return (
    <div className=' border-l-2 border-b-1 border-cyan-500 w-9/12 h-fit hover:bg-gray-800'>
      
        <h4 className='hero layers p-4 font-extrabold text-3xl text-amber-400'><span className='flicker-1'>{props.title}</span></h4>

        <p className='p-4'>{props.desc}</p>

        <div className='p-3'>
        <Link href='/' className=' hover-blink p-2 bg-teal-500 font-extrabold mt-4'>Link</Link>
        </div>
    </div>
  )
}

export default ProjectTileOdd
