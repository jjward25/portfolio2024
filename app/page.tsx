import collapsible from './components/collapsible'

export const metadata = {
  title: 'Joe Ward | Home',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl tracking-tighter">Hey 👋 I'm Joe Ward</h1>
      <ul className="mt-4 mb-8">
        <p className="mr-3 mb-3 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          Operational Efficiency
        </p>
        <p className="mr-3 mb-3 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          Process Improvement
        </p>
        <p className="mr-3 mb-3 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          Growth / Sales / CS Analytics
        </p>
        <p className="mr-3 mb-3 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          People Manager
        </p>
        <p className="mr-3 mb-3 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          Executive Partner
        </p>
      </ul>
      
      <p className="prose prose-neutral dark:prose-invert mb-10">
        I'm an Operations specialist with extensive experience in analytics and business intelligence/growth strategy.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Joe Ward Joe Ward Joe Ward Joe Ward
      </p>
      <collapsible/>

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
