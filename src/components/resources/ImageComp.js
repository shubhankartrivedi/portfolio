'use client'

import Image from "next/image";
import FullScreen from "@/components/resources/Full";
import { useState } from "react";



export default function Resources({src, text}) {
    const [full, setFull] = useState(false);
    return (
       
           
                <div className="">
                <div className="dark:bg-gray-700 bg-gray-100 drop-shadow-xl border-none p-5 rounded-2xl flex flex-col gap-2">
                   
                   <div className="group relative rounded-lg">
                    <Image src={src} alt={text} height={500} className="rounded-lg" />

                    <div className="group-hover:flex absolute hidden animate-fade-in-fast rounded-lg top-0 w-full h-full bg-gray-500/30 backdrop-blur-md">
                    <button onClick={()=>setFull(true)} className="w-full h-full drop-shadow-xl">View Fullscreen</button>
</div>

                    </div>
                    <p className="text-left">{text}</p>
                   
                   
                </div>
                <FullScreen open={full} setOpen={setFull} src={src} text={text} />
                </div>

    
    )
}