import ImageCarousel from './carousel';

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

const Papp = () => {

  let postDate = '2025-07-31'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert w-full h-full flex flex-col text-black">
        <h1 className="font-bold text-3xl pb-12">A quick and easy business intelligence app using Clay.com enrichments and v0</h1>
      
        <a href="https://comp-rfp-search.vercel.app/" target="_blank" className="text-blue-500 hover:text-blue-600 mb-8">Check out the webapp here!</a>
        <ImageCarousel />


          <ol className="text-neutral-500 text-sm my-0 mt-6"> 
            <p className="text-neutral-500 text-sm my-0 mt-6 font-bold mb-4">This was a quick, fun project I was able to put together in a couple of hours.  There are numerous ways you could build on something like this, for example:</p>
            <li>Add new features! Like specific certifications in the industry, support plan details, and recent press.</li>
            <li>Build out the workflow: Hook up a button on the website to a Clay webhook to refresh the intellgence.</li>
            <li>Build out the workflow: Allow users to select an Industry, send that to Clay via API, receive a list of Companies back from Clay (via webhook or API response), and then approve the list for enrichment for RFP or Competitor Analysis.</li>
            <li>Enhance features: Use additional Clay AI responses or a tool like n8n to use your trained LLMs to parse pricing data more consistently.</li>
            
          </ol>

      </article>
    </section>
  );
}

export default Papp;
