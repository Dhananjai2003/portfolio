"use client"

import Image from "next/image";
import ProfileTile from "@/app/{componets}/ProfileTile"
import Link from "next/link";

export default function Home() {

  const scrollToDiv = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="">
        < div onClick={scrollToDiv} className="head flex justify-center items-center w-screen h-screen">
          <ProfileTile></ProfileTile>
        </div>
        <div id="about" className="h-screen">about</div>
    </div>
  );
}
