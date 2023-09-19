'use client'

import Image from "next/image";


export default function Full({ src, text, open, setOpen }) {

if(open)
    return (
        <div className="fixed top-0 left-0 z-30">
            <div className="animate-fade-in-fast w-screen h-screen dark:bg-gray-500/50 bg-gray-300/50  backdrop-blur-lg sm:p-10 p-5 flex flex-col relative">
                
                <div className="absolute right-0 px-5">
                    <button onClick={()=> setOpen(!open)} className="dark:bg-gray-100/50 bg-gray-500/50 dark:text-black text-white rounded-full text-xl px-3 py-1 hover:bg-gray-300/50 duration-100">Close</button>
                </div>

                <div className="flex items-end justify-center mt-24 lg:mt-5 xl:mt-0">


                    <div className="w-full flex items-center flex-col gap-2 ">
                        <Image src={src} alt={text} className="rounded-lg" />

                    </div>
                </div>
            </div>
        </div>
    )
}