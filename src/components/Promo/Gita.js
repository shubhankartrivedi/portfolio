'use client'

import { useState, useEffect } from "react";
import Link from "next/link"
import Image from "next/image";
import sleep from "@/utils/sleep";

export default function Gita() {


    const [gita, setGita] = useState(false)
    const [animate, setAnimate] = useState(false)


    // let data = await fetch('https://jsonlink.io/api/extract?url='+'https://gita.shubhankartrivedi.com')
    // let json = await data.json()
    const image = "https://gita.shubhankartrivedi.com/images/meta.png";
    const title = "The Bhagavad Gita API";
    const description = "The Bhagavad Gita API is a REST API that serves the Bhagavad Gita verse by verse in JSON format.";
    const url = "https://gita.shubhankartrivedi.com";

    const close = async () => {
        setAnimate(true)
        await sleep(2000)
        setGita(false)
        setAnimate(false)
    }

    const open = async () => {
        setAnimate(false)
        await sleep(6000)
        setGita(true)
    }

    useEffect(() => {
        if(!gita) open();
    }, [gita])


    if (!gita) return null
    return (
        <div className='fixed bottom-0 py-5 pr-5 z-30'>




            <div className={`flex justify-center w-full ${animate ? 'animate-fade-out' : 'animate-fade-in'}`}>
                <div className='duration-300 dark:bg-yellow-800/50 bg-yellow-700/80 backdrop-blur border shadow-yellow-500/30 dark:border-yellow-600 border-yellow-500 rounded-2xl px-4 py-3 w-full flex flex-col gap-2 shadow-xl relative'>

                    <div className='absolute top-0 right-0 p-1'>
                        <button className='dark:hover:bg-yellow-500/20 hover:bg-yellow-800/50 dark:text-yellow-600 text-yellow-500 rounded-full p-0.5' onClick={close}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <Image src={image} width={100} height={100} className='rounded-2xl' />
                        <div className="flex flex-col gap-2 items-start">
                            <div className="">
                                <h3 className='text-white font-bold text-xl drop-shadow'>{title}</h3>
                                <h4 className='dark:text-white/50 text-white/80 text-md drop-shadow'>{description}</h4>
                            </div>
                            <Link href={url} className="py-1 px-2 dark:bg-yellow-700 hover:dark:bg-yellow-600 bg-yellow-500 hover:bg-yellow-400 rounded-md">Check my Open Source Project</Link>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}