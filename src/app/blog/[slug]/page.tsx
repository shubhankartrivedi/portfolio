import { notFound } from 'next/navigation'
import { CustomMDX } from '@components/mdx'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import {default as ImageComponent} from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }



  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Shubhankar Trivedi',
            },
          }),
        }}
      />


      <header className=''>
        <h2 className="title">
          {post.metadata.title}
        </h2>

        <div className="flex flex-col items-start gap-5 mt-2 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
          {post.metadata.image && <ImageComponent className='border-4 dark:border-white/10 border-black/10' src={post.metadata.image} alt={post.metadata.title} width={1200} height={630} />}
        </div>
      </header>







      <article className="prose">

        <CustomMDX source={post.content} />

        <footer className='w-full flex justify-end'>
          <Link title={'Share in X'} className='mt-2 py-5 inline-flex gap-2 items-center' target="_blank" href={`https://twitter.com/intent/post?text=${post.metadata.title} ${baseUrl}/blog/${post.slug}`}>
           Share on <svg className='w-5 h-5 dark:fill-white fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
          </Link>
        </footer>
      </article>
    </section>
  )
}
