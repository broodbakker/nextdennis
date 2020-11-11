import Link from "next/link";


import { formatDate } from "../helpers";

export const BlogPost = ({ blogPost }: any) => {
  const imageLink = blogPost.HeaderImage.url;
  return (
    <Link href="/blog/[id]" as={`/blog/${blogPost.id}`}>
      <a className="flex md:block bg-white cursor-pointer rounded h-32 md:h-auto shadow-offset hover:shadow-offsetHover rounded transition duration-500 ease-in-out">
        <div className="object-cover h-full md:h-64 w-32 md:w-full flex-none">
          <img
            className="object-cover h-full w-full rounded-t"
            src={imageLink}
          />
        </div>

        <section className="relative p-2 h-full md:h-32 overflow-visible flex-auto ">
          <h2 className="text-lg md:text-xl font-semibold leading-tight text-headingColor">
            {blogPost.Title}
          </h2>
          <p className="text-sm leading-tight ">
            {blogPost.Subtitle}
          </p>
          <time className="absolute bottom-0 text-xs mb-2">
            {" "}
            {formatDate(blogPost.updated_at)[0]}
          </time>
        </section>
      </a>
    </Link>
  );
};
