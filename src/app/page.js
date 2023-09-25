import Link from "next/link"

import Contribution from "@/components/Contribution"
import GithubLink from "@/components/GithubLink"
import DiscordLink from "@/components/DiscordLink"
import Gita from "@/components/Promo/Gita"



export default function Home() {


  return (
    <main className='p-3 h-screen relative'>
      <Gita />

      <div className="flex flex-col justify-center items-center h-full gap-14">

        <div>
          <h1  className="lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-bold text-center dark:text-white text-black drop-shadow-2xl relative">
            <span style={{animationDuration: '1s'}} className="animate-fade-in">I'm Shubhankar Trivedi</span>
         <span style={{animationDuration: '2s'}} className="relative animate-fade-in"><span>{' '}👋</span> <span className="absolute right-0 left-0 top-0 -z-10 blur-2xl">👋</span></span>
           </h1>
        </div>

        <div className=''>
          <Contribution />
        </div>

        <div className='flex flex-wrap justify-center items-center gap-3'>
            <GithubLink />
            <DiscordLink />
        </div>

<div className="flex justify-end flex-wrap absolute bottom-0 p-5 text-sm sm:text-lg w-full">



<div>
  <p className="italic dark:text-gray-800 text-gray-400 p-5">this website is under development</p>
</div>
</div>

      </div>

    </main>
  )
}
