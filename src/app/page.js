import Contribution from "@/components/Contribution"
import GithubLink from "@/components/GithubLink"
import DiscordLink from "@/components/DiscordLink"

export default function Home() {
 

  return (
    <main className='relative'>
      <div className='flex flex-col justify-center sm:gap-5 md:gap-10 gap-10 h-screen'>
        <h1 className='text-6xl xl:text-7xl font-bold text-center dark:text-white text-black drop-shadow-2xl gap-10'> This is shubhankartrivedi.com</h1>

        <div className="flex flex-row justify-center  w-full drop-shadow-xl px-5">
          <Contribution />
        </div>
       
    <div className="flex justify-center gap-5">
    <GithubLink/>
      <DiscordLink/>
    </div>
 

      </div>

      <div className="absolute z-30 bottom-0 right-0 px-5 py-5 italic dark:text-gray-800 text-gray-400">this website is under development</div>
    </main>
  )
}
