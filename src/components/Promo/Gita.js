import Link from "next/link"
import Image from "next/image";

export default async function Gita() {
    let data = await fetch('https://jsonlink.io/api/extract?url='+'https://gita.shubhankartrivedi.com')
    let json = await data.json()
    const image = json.images[0];
    const title = json.title;
    const description = json.description;
    const url = json.url;
    return (
        <div className='fixed bottom-0 py-5 pr-5 z-30'>




<div className='flex justify-center w-full  animate-fade-in'>
    <div className='duration-300 dark:bg-yellow-800/50 bg-yellow-800/50 backdrop-blur border shadow-yellow-500/30 dark:border-yellow-600 border-yellow-500 rounded-2xl px-4 py-3 w-full flex flex-col gap-2 shadow-xl'>
       
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