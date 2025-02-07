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

  let postDate = '2024-12-04'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert w-full h-full flex flex-col text-black">
        <h1 className="font-bold text-3xl">My Task App</h1>
        <p className="text-neutral-500 text-sm mt-4 mb-0">{`I used `}
          <a href="https://www.youtube.com/watch?v=Sklc_fQBmcs" title="NextJS in 100 seconds" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">NextJS</a>{`, `}
          <a href="https://www.youtube.com/watch?v=mr15Xzb1Ook" title="Tailwind in 100 seconds" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">TailwindCSS</a>
          {`, `}
          <a href="https://www.mongodb.com/" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">MongoDB</a>
          {`, and `}
          <a href="https://www.youtube.com/watch?v=bp2GF8XcJdY" title="D3 in 100 seconds" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">D3</a> 
          {` to create a productivity app.`}</p> 
          <p className="text-neutral-500 text-sm mb-0">The app includes:</p>
          <ul className="text-neutral-500 text-sm my-0"> 
            <li>tracking one-off tasks for the day,</li>
            <li>a longer-term project tracker,</li>
            <li>an events calendar,</li>
            <li>time and weather,</li>
            <li>and a Routines panel with a daily journal input.</li>

          </ul>
        <p className="text-neutral-500 text-sm mt-2 mb-0">Progress is shown in D3 charts. I've also added a workout tracker that tells me what weights to use in my workout based on my previous session.</p>



        <div className="flex flex-col">

          {/**Section 1: App Homepage */}
          <h2 className="text-lg font-semibold mt-10">1. The Home Page</h2> 

          <div className="w-full flex flex-col md:flex-row bg-neutral-500">
          <div className="mx-auto">
              <video width="full" height="full" controls muted loop>
                <source src="https://public-docs2.s3.amazonaws.com/app_homeNew.mp4" type="video/mp4" />
              </video>
            </div>
            <img
                src='/projects/personalApp/appthumb.png'
                alt='Home Page' 
                className="w-full md:w-1/2 h-full object-cover md:hover:scale-150 hover:duration-500 transition-all ease-out mb-0 border border-neutral-500"
              />
          </div>
          <p className="text-neutral-500 text-xs mt-2 md:mt-4 ">On the homepage you can see Today's and Tomorrow's assigned tasks, your Event Calendar, and a Daily Check-in.  Data is stored in a MongoDB database.  It also uses a public API to give the local weather.</p>

          {/**Section 2: Project & Backlog */}
          <h2 className="text-lg font-semibold mt-10">2. Project and Backlog Pages</h2>
          
          <div className="w-full flex flex-col md:flex-row bg-neutral-500">
            <div className="mx-auto mt-2">
              <video width="full" height="full" controls muted loop>
                <source src="https://public-docs2.s3.amazonaws.com/app_projectPage.mp4" type="video/mp4" />
              </video>
            </div>
            <img
              src='/projects/personalApp/ProjectPage.png'
              alt='Project Page'
              className="w-full md:w-1/2 h-auto object-cover md:hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
            />
          </div>
          <p className="text-neutral-500 text-xs mt-2 md:mt-4 ">Use the backlog to see all historical tasks, or the Project tracker for longer-term goal setting.</p>

            {/**Section 3: Workout Tracker */}
          <h2 className="text-lg font-semibold mt-10">3. Workout App</h2>
          <div className="w-full flex flex-col md:flex-row bg-neutral-500">
          <img
                src='/projects/personalApp/workout1.png'
                alt='Workout1'
                className="w-full md:w-1/2 h-full object-cover md:hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
          <img
                src='/projects/personalApp/workout2.png'
                alt='Workout2'
                className="w-full md:w-1/2 h-full object-cover md:hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
              </div>
            <p className="text-neutral-500 text-xs my-2 md:mt-4 ">The workout tracker takes your previous performance for the exercise and automatically sets your weights for the next workout.</p>
            
            <video width="full" height="full" controls muted loop>
                <source src="https://public-docs2.s3.amazonaws.com/app_workoutNew2.mp4" type="video/mp4" />
              </video>

            {/**Section 4: Mongo */}
          <h2 className="text-lg font-semibold mt-10">4. Mongo Backend</h2>
          <div className="w-full flex flex-col md:flex-row">
          <img
                src='/projects/personalApp/MongoTop.png'
                alt='MongoDB'
                className="w-full md:w-1/2 h-full object-cover md:hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
          <img
                src='/projects/personalApp/Mongo2.png'
                alt='MongoDB'
                className="w-full md:w-1/2 h-full object-cover md:hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
              </div>
            <p className="text-neutral-500 text-xs my-2 md:mt-4 ">The MongoDB collections behind the app.</p>

        </div>

      </article>
    </section>
  );
}

export default Papp;
