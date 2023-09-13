import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {

  
   

  title: 'Shubhankar Trivedi',
  description: 'This website is under development',
  //keywords: blog.keywords,
 // colorScheme: 'dark',
 // publishedTime: blog.timestamp,
  openGraph: {
    title: 'Shubhankar Trivedi',
    description: 'This website is under development',
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
    title: 'Shubhankar Trivedi',
    description: 'This website is under development',
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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-auto`}>

        <Navbar />
       

        {children} 

       <Analytics />
       </body>
    </html>
  )
}
