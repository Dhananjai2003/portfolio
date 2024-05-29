import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        <div className={inter.className}>
            {children}
        </div>
    )
}