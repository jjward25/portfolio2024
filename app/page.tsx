export const metadata = {
  title: 'Joe Ward | Home',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Joe Ward</h1>

      <p className="prose prose-neutral dark:prose-invert">
        Joe Ward Joe Ward Joe Ward Joe Ward
      </p>
      <p className="prose prose-neutral dark:prose-invert">
        I'm an Operations specialist with extensive experience in analytics and business intelligence/growth strategy.
      </p>

      <ul className="mt-80">
        <p className="mr-3 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          PMP
        </p>
        <p className="mr-3 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          Six-Sigma Green Belt
        </p>
      </ul>
    </section>
  );
}
