import React from 'react'
import Image from 'next/image'
import ProfileImage from "./profile.jpg"
import TypeAnimation from "@/app/{componets}/TypeAnimatioin"

const ProfileTile = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-white bg-opacity-35 rounded-2xl z-10'>
      <Image
      src={ProfileImage}
      alt='my picture'
      className=' rounded-full h-60 w-60 p-3'></Image>
      <h1 className=' text-white text-5xl font-bold p-4 hero glitch layers' data-text="Dhananjai Murali"><span>Dhananjai Murali</span></h1>
      <TypeAnimation />
    </div>
  )
}

export default ProfileTile
