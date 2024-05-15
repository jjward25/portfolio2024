export const metadata = {
  title: 'Work',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function Page() {
  
  return (
    <section>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter">my work</h1>
      <div className='mt-3 mb-6 h-auto w-full border-2 border-neutral-700'></div>

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
    </section>
  );
}
