'use client'

import Image from "next/image";
import FullScreen from "@/components/resources/Full";
import ImageComp from "@/components/resources/ImageComp";

import RPI3 from '@/images/rpi3.png';
import RPI4 from '@/images/rpi4.png';
import RPIpico from '@/images/rpipico.svg';



export default function Resources() {
    return (
       
           
            <div className="flex flex-wrap justify-start items-start gap-5 w-full">
                <ImageComp src={RPI3} text="Raspberry Pi 3" />
                <ImageComp src={RPI4} text="Raspberry Pi 4" />
                <ImageComp src={RPIpico} text="Raspberry Pi Pico" />
            </div>

    
    )
}