import Image from "next/image";
import Link from "next/link";

export const metadata = {




  title: '404 - Page Not Found',
  description: 'This page does not exist',
  //keywords: blog.keywords,
  // colorScheme: 'dark',
  // publishedTime: blog.timestamp,
  openGraph: {
    title: '404 - Page Not Found',
    description: 'This page does not exist',
    url: 'https://shubhankartrivedi.com',
    siteName: 'Shubhankar Trivedi',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/1061377727363567707/1147218173540716574/image.png',
        width: 800,
        height: 800,
      },
    ],
    // locale: 'en_US',
    type: 'website',
    // publishedTime: blog.timestamp,
  },
  twitter: {
    title: '404 - Page Not Found',
    description: 'This page does not exist',
    url: 'https://shubhankartrivedi.com',
    siteName: 'Shubhankar Trivedi',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/1061377727363567707/1147218173540716574/image.png',
        width: 800,
        height: 800,
      },
    ],
    // locale: 'en_US',
    type: 'website',
    // publishedTime: blog.timestamp,
  },
}


export default async function NotFound() {

  const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=1', { cache: 'no-store' })
  const data = await res.json()

  let cat = data[0];

  return (
    <div className="px-10 pt-28 h-screen flex flex-col gap-10 overflow-x-hidden">

      <div className="flex gap-3 w-full z-10">
        <h1 className="text-4xl font-bold text-left dark:text-white text-black w-full drop-shadow-xl">404 - Page Not Found 🤷🏻</h1>
        {/* <Link className="text-2xl font-semibold text-left dark:text-white text-black w-full hover:opacity-80" href="/">Go back home 👈🏻</Link> */}
      </div>

      <div className="flex flex-col justify-center">




        <div className="flex flex-row justify-center relative">

          <div className="flex flex-col gap-2 max-w-3xl">
            <Image className="animate-fade-in rounded-xl drop-shadow-xl" src={cat.url} width={cat.width} height={cat.height} priority={true} alt='cat' />
            <caption className="drop-shadow-lg italic text-right w-full opacity-70 hover:opacity-100 animate-fade-in mix-blend-difference">from <Link href='https://thecatapi.com' target="blank" className="underline hover:no-underline">thecatapi.com</Link></caption>
          </div>
          <Image className="animate-fade-in rounded-xl absolute -z-10 scale-150 blur-3xl top-0 " style={{
            height: '65vh',
            width: '65vw',
          }}
            height={cat.height}
            width={cat.width}
            src={cat.url} priority={false} alt='cat' />



        </div>

      </div>
    </div>
  )
}