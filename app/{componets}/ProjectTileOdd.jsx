import React from 'react'
import Link from 'next/link'

const ProjectTileOdd = (props) => {
  
  const listItems = props.listItems;

  return (
    <div className=' border-l-2 border-b-2 border-cyan-500 w-9/12 h-fit '>
      
        <h4 className='layers p-4 font-extrabold text-3xl text-amber-400'><span className='flicker-1'>{props.title}</span></h4>

        <p className='p-4 font-extrabold'>{props.desc}</p>

        <ul className='pb-2'>
          {listItems.map((items) => (<li className='pl-5'><p> - {items}</p></li>))}
        </ul>

        <div className='p-3'>
        <Link href={props.link} className=' hover-blink p-2 bg-teal-500 font-extrabold mt-4'>Link</Link>
        </div>
    </div>
  )
}

export default ProjectTileOdd
