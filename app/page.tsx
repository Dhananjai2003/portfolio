"use client"

import ProfileTile from "@/app/{componets}/ProfileTile"
import AboutPage from "@/app/{componets}/AboutPage"


export default function Home() {

  const scrollToDiv = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth',  block: "end", inline: "nearest" });
    }
  };


  return (
    <div className="">
        < div onClick={scrollToDiv} className="head flex justify-center items-center w-screen h-screen">
          <div className="background z-1 box-border w-full h-full fixed">
          </div>
          <ProfileTile></ProfileTile>
        </div>
        <div id="about" className="">
          <AboutPage />
        </div>
    </div>
  );
}
