import { BlogPosts } from '@components/posts'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'I post blogs related to computer science, programming, engineering, physics and maths.',
}

export default function Page() {
  return (
    <section>


        <header className='mb-8 flex flex-col gap-3'>

         <div className='flex justify-between items-center'>
         <h1 className="">My Blogs</h1>
         <Link title='RSS Feed' target='_blank' href="/rss">
          <svg className='w-5 h-5 dark:fill-white fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
        </Link>
          </div>
          <p className=''>I post blogs related to computer science, programming, engineering, physics and maths.</p>
        </header>


      <BlogPosts />
    </section>
  )
}
