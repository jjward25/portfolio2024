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

const Scrapers = () => {

  let postDate = '2024-12-04'

  return (

    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert w-full h-full flex flex-col text-black">
            <h1 className="font-bold text-3xl mt-4 md:mt-0">Personal Daily News Aggregator</h1>
        <p className="text-neutral-500 text-sm mt-4">{`I used a mix of python packages (namely `}
            <a href="https://www.youtube.com/watch?v=ng2o98k983k" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">Beautiful Soup</a>{` and `} 
            <a href="https://www.youtube.com/watch?v=NB8OceGZGjA" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">Selenium</a>
            { ` for scraping, and `}
            <a href="https://www.youtube.com/watch?v=ng2o98k983k" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">Pandas</a>
            {` for data formatting) to aggregate the top 5-10 daily headlines from each of my chosen sources into a single CSV.`}</p>
        <p className="text-neutral-500 text-sm my-0">{`Scraping like this requires `}</p>
          <ol className="text-neutral-500 text-sm ">
            <li className="mt-0">Inspecting the target sites and understanding how their HTML is structured,</li>
            <li>Telling python exactly which HTML elements and what parts of those elements you want to fetch,</li>  
            <li>and finally using python to convert the fetched data to a readable csv output - with links of course.</li>
          </ol>

        <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFCQN-ae5K6j7SVTkfTNr667HJ5nqr7cCkpjDOt9mtUlFtrXN3IlCUsyEUywGD2EhEG5aaWEPzjJwx/pubhtml" 
          className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2" target="_blank">Sample Output CSV</a>
        <a href="https://github.com/jjward25/python.scrapers_daily_update" 
          className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2" target="_blank">Github Repo</a>
          
        <div className="flex flex-col">

          {/**Section 1 */}
          <div className="w-full flex flex-col mx-auto justify-center mt-6">
            
            <div className="mx-auto">
              <video width="full" height="full" controls muted loop>
                <source src="https://public-docs2.s3.amazonaws.com/scraper.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="mx-auto">
              <img
                  src='/projects/scrapers/scraperOutput.png'
                  alt='Home Page'
                  className="mt-4 w-full h-full object-cover md:hover:scale-150 hover:duration-500 transition-all ease-out mb-0 border border-neutral-500"
                />
            </div>

          </div>

          <p className="text-neutral-500 text-xs mt-2 md:mt-4 ">{`A video of the scrapers crawling and aggregating headline data, and a snapshot of the output.`}</p>

      

        </div>
        </article>
      
    </section>
  );
}

export default Scrapers;
