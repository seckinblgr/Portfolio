import Link from "next/link";
import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed 
} from "react-icons/rx";



const Footer = () => {
  return (
    <div id="footer" className="w-full h-full transition-all bg-transparent border-t-[2px] backdrop-blur-sm   border-[#7042f861] text-gray-200  p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-xl mb-12">About More </div>
                    <div className="flex gap-5 items-center justify-center flex-col sm:flex-row">
                        <Link href="https://www.linkedin.com/in/seckinbulgur/" target="_blank">
                    <p className="flex justify-center flex-row items-center my-[15px] border-2 px-4 py-2 rounded-full hover:bg-[#7042f861] border-[#7042f861]">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                        </Link>
                        <Link  href="https://www.github.com/seckinblgr" target="_blank">
                    <p className="flex justify-center flex-row items-center my-[15px] border-2 px-4 py-2 rounded-full hover:bg-[#7042f861] border-[#7042f861]">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                        </Link>
                        <Link  href="https://www.twitter.com/seckinbulgur" target="_blank">
                    <p className="flex flex-row justify-center items-center my-[15px] border-2 px-4 py-2 rounded-full hover:bg-[#7042f861] border-[#7042f861]">
                        <RxTwitterLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    </Link>
                    <Link  href="https://www.instagram.com/seckinblgr" target="_blank">
                    <p className="flex flex-row items-center my-[15px] border-2 px-4 py-2 rounded-full justify-center border-[#7042f861]
                     hover:bg-[#7042f861]">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    </Link>
                    <Link href="mailto:secoblgr52@gmail.com">
                    <p className="flex flex-row justify-center items-center my-[15px] border-2 px-4 py-2 rounded-full border-[#7042f861]
                     hover:bg-[#7042f861]">
                        <RxEnvelopeClosed  />
                        <span className="text-[15px] ml-[6px]">Mail</span>    
                    </p>
                         </Link>
                    </div>
                </div>
            </div>
            <div className="mb-1 mt-5 text-[14px] text-center">
                &copy;  Dev 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer