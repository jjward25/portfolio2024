const Papp = () => {

  return (
    <section className="w-full h-full flex flex-col text-black">
        <h1 className="font-semibold text-x mt-4 md:mt-0">Personal Daily News Aggregator</h1>
        <p className="text-neutral-500 text-sm mt-2">{`I used a mix of python packages (namely `}
            <a href="https://www.youtube.com/watch?v=ng2o98k983k" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">Beautiful Soup</a>{` and `} 
            <a href="https://www.youtube.com/watch?v=NB8OceGZGjA" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">Selenium</a>
            { ` for scraping, and `}
            <a href="https://www.youtube.com/watch?v=ng2o98k983k" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">Pandas</a>
            {` for data formatting) to aggregate 5-10 headlines from each of my chosen information sources into a single CSV.`}</p>
        <p className="text-neutral-500 text-sm mt-2">{`Scraping like this requires (1) inspecting the target sites and understanding how their HTML is structured, then (2) telling python to fetch the exact HTML tags you want - and finally (3) using python to convert the fetched data to a readable csv output.`}</p>
        <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFCQN-ae5K6j7SVTkfTNr667HJ5nqr7cCkpjDOt9mtUlFtrXN3IlCUsyEUywGD2EhEG5aaWEPzjJwx/pubhtml" 
          className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2" target="_blank">Sample Output CSV</a>
        <div className="flex flex-col">

          {/**Section 1 */}
          <div className="w-full flex flex-col mx-auto justify-center mt-6">
            
            <div className="mx-auto">
              <video width="full" height="full" controls muted autoPlay loop>
                <source src="/projects/scrapers/scraper.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="mx-auto">
              <img
                  src='/projects/scrapers/scraperOutput.png'
                  alt='Home Page'
                  className="mt-4 w-full h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out mb-0 border border-neutral-500"
                />
            </div>

          </div>

          <p className="text-neutral-500 text-xs mt-2 md:mt-4 ">{`A video of the scrapers crawling and aggregating headline data, and a snapshot of the output.`}</p>

      

        </div>

      
    </section>
  );
}

export default Papp;
