import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {

  
   

  title: 'This is my portfolio',
  description: 'Under development',
  //keywords: blog.keywords,
 // colorScheme: 'dark',
 // publishedTime: blog.timestamp,
  openGraph: {
    title: 'This is my portfolio',
    description: 'Under development',
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
    title: 'This is my portfolio',
    description: 'Under development',
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
      <body className={`${inter.className}`}>
        {children} 
       <Analytics />
       </body>
    </html>
  )
}
