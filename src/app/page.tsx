import { BlogPosts } from '@components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 ">
        Glad you're here 👋
      </h1>
      <p className="mb-4">
        {`I'm a computer science, engineering, and design enthusiast. I'm passionate about building products that make a positive impact on the world. I'm currently working on a big project that I can't wait to share with you. I post about my journey, thoughts, and learnings here.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
