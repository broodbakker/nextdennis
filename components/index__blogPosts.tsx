import { BlogPost } from "./blogPost";

export const BlogPosts = ({ blogPosts }) => (
  <div className="relative p-6">
    <div className="absolute w-full h-full inset-0 opacity-100 rounded-lg bg-color3" />

    <h2 className="relative text-white text-2xl md:text-3xl">
      Lees even mijn laatste blog posts!
    </h2>

    <article className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
      {blogPosts.map((blogPost) => (
        <BlogPost blogPost={blogPost} />
      ))}
    </article>
  </div>
);
