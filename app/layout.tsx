import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProfileTile from "@/app/{componets}/ProfileTile"
import AboutPage from "@/app/{componets}/AboutPage"
import Footer from "@/app/{componets}/Footer"
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DhN",
  description: "DhN portfolio",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>

      < div className="head flex justify-center items-center w-screen h-screen">
          <div className="background z-1 box-border w-full h-full fixed">
          </div>
          <ProfileTile></ProfileTile>
        </div>
        <div id="about" className="">
          <AboutPage />
        </div>
        <Footer />

      </body>
    </html>
  );
}
