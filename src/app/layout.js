import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {

  
   

  title: 'Shubhanakar Trivedi',
  description: 'This is shubhankartrivedi.com',
  //keywords: blog.keywords,
 // colorScheme: 'dark',
 // publishedTime: blog.timestamp,
  openGraph: {
    title: 'Shubhanakar Trivedi',
    description: 'This is shubhankartrivedi.com',
    url: 'https://shubhankartrivedi.com',
    siteName: 'Shubhankar Trivedi',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/1061377727363567707/1147218173540716574/image.png',
        width: 800,
        height: 500,
      },
    ],
    // locale: 'en_US',
    type: 'website',
    // publishedTime: blog.timestamp,
  },
  twitter: {
    ttitle: 'Shubhanakar Trivedi',
    description: 'This is shubhankartrivedi.com',
    url: 'https://shubhankartrivedi.com',
    siteName: 'Shubhankar Trivedi',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/1061377727363567707/1147218173540716574/image.png',
        width: 800,
        height: 500,
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
