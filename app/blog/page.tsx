import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from 'app/db/blog';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter">
        read my blog
      </h1>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-neutral-700'></div>


      <div className='flex flex-col'>
        <ul className="mt-4 mb-4">
          <p className="mr-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            PMP
          </p>
          <p className="mr-3 inline-flex items-center rounded border  p-1 text-sm leading-4 border-neutral-700 bg-neutral-800 text-neutral-100 no-underline hover:bg-gradient-to-r from-neutral-500 to-black">
            Six-Sigma Green Belt
          </p>
        </ul>

        <p className="text-neutral-400 text-sm">
          Joe Ward Joe Ward Joe Ward Joe Ward
        </p>
        
        <p className="mt-4 mb-4 prose prose-neutral dark:prose-invert">
          Dallas BBQ.
        </p>
        <div className='mt-3 mb-6 h-auto w-full border-2 border-neutral-700'></div>
      </div>

      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <li className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </li>
                <Suspense fallback={<p className="h-6" />}>
                </Suspense>
              </div>
            </Link>
          ))}
        </div>
    </section>
  );
}
