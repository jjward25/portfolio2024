function formatDate(date) {
      
  let currentDate = new Date().getTime();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  let fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (daysAgo < 1) {
    return 'Today';
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7)
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30)
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365)
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

const DBTFundamentals = () => {

  let postDate = '2024-12-04'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert w-full h-full flex flex-col text-black">
        <h1 className="font-bold text-3xl">DBT Fundementals</h1>
        <p className="text-neutral-500 text-sm mt-1">A few screenshots from my work in the <a className="underline" href="https://learn.getdbt.com/courses/dbt-fundamentals" title="DBT Fundamentals Course">DBT Fundamentals</a> course.</p>

        <div className="flex flex-col">

          <h2 className="text-lg font-semibold mt-6">1. Materializing Views & First Production Run</h2>
          <img
                src='/projects/dbtFundamentals/dbtf-materializing-views.png'
                alt='Materializing Views'
                className="w-full h-full object-cover md:hover:scale-105 hover:duration-500 transition-all ease-out my-4 mb-0 border border-neutral-500"
              />
          <p className="text-neutral-500 text-xs mt-1 px-4">The tutorial doesn't mention Big Query needs the "--full-refresh" command here; after solving for that and separating our cleaning code from transforming code, we have our first production run - also shown below.</p>

          <img
                src='/projects/dbtFundamentals/dbtf-production-run.png'
                alt='Production Run'
                className="w-full h-full object-cover md:hover:scale-105 hover:duration-500 transition-all ease-out my-4 mb-0 border border-neutral-500"
              />

          <h2 className="text-lg font-semibold mt-10">2. Testing with YML Instructions & Creating Documentation</h2>
          <img
                src='/projects/dbtFundamentals/dbtf-yml-tests.png'
                alt='YML Tests'
                className="w-full h-full object-cover md:hover:scale-105 hover:duration-500 transition-all ease-out my-4 mb-0 border border-neutral-500"
              />
            <p className="text-neutral-500 text-xs mt-1 px-4">Added and successfuly ran some tests for unique values, specific values, and table relationships.</p>

          <h2 className="text-lg font-semibold mt-10">3. Re-organizing File Structure to Staging and Marts Folders</h2>
          <img
                src='/projects/dbtFundamentals/dbtf-4a-staging-and-marts.png'
                alt='YML Tests'
                className="w-full h-full object-cover md:hover:scale-105 hover:duration-500 transition-all ease-out my-4 mb-0 border border-neutral-500"
              />
          <p className="text-neutral-500 text-xs mt-1 px-4">With marts folders for each department.</p>

          <h2 className="text-lg font-semibold mt-10">4. Creating a Source Reference with a YML file</h2>          
          <img
                src='/projects/dbtFundamentals/dbtf-5.png'
                alt='YML Tests'
                className="w-full h-full object-cover md:hover:scale-105 hover:duration-500 transition-all ease-out my-4 mb-0 border border-neutral-500"
              />
          
          <h2 className="text-lg font-semibold mt-10">{`5. Custom Test: Total Amount Always >= 0`}</h2>          
          <img
                src='/projects/dbtFundamentals/customTest.png'
                alt='YML Tests'
                className="w-full h-full object-cover md:hover:scale-105 hover:duration-500 transition-all ease-out my-4 mb-0 border border-neutral-500"
              />
         

         <h2 className="text-lg font-semibold mt-10">{`6. Block Documentation + Final Run`}</h2>          
          <img
                src='/projects/dbtFundamentals/dbtf-7.png'
                alt='YML Tests'
                className="w-full h-full object-cover md:hover:scale-105 hover:duration-500 transition-all ease-out my-4 mb-0 border border-neutral-500"
              />

          <img
                src='/projects/dbtFundamentals/finalRun.png'
                alt='YML Tests'
                className="w-full h-full object-cover md:hover:scale-105 hover:duration-500 transition-all ease-out my-4 mb-0 border border-neutral-500"
              />


        </div>

      </article>
    </section>
  );
}

export default DBTFundamentals;
