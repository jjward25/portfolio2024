const Papp = () => {

  return (
    <section className="w-full h-full flex flex-col text-black">
        <h1 className="font-semibold text-xl">My Task App</h1>
        <p className="text-neutral-500 text-sm mt-2">{`I used `}
          <a href="https://www.youtube.com/watch?v=Sklc_fQBmcs" title="NextJS in 100 seconds" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">NextJS</a>{`, `}
          <a href="https://www.youtube.com/watch?v=mr15Xzb1Ook" title="Tailwind in 100 seconds" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">TailwindCSS</a>
          {`, `}
          <a href="https://www.mongodb.com/" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">MongoDB</a>
          {`, and `}
          <a href="https://www.youtube.com/watch?v=bp2GF8XcJdY" title="D3 in 100 seconds" target="_blank" className="text-sm text-cyan-700 hover:text-amber-500 w-auto mr-auto mt-2">D3</a> 
          {` to create a task tracking app. It includes one-off tasks for the day, and a daily routine tracker that includes a daily journal input.`}</p>
        <p className="text-neutral-500 text-sm mt-2">Progress is shown in D3 charts. There's also a page for longer term projects, and a workout tracker that tells me what weights to use in my workout based on my previous session.</p>

        <div className="flex flex-col">

          {/**Section 1: App Homepage */}
          <h2 className="text-lg font-semibold mt-12">1. The Home Page</h2>

          <div className="w-full flex flex-col md:flex-row">
            
          <div className="mx-auto">
              <video width="full" height="full" controls muted autoPlay loop>
                <source src="https://public-docs2.s3.amazonaws.com/homeVid.mp4" type="video/mp4" />
              </video>
            </div>

            <img
                src='/projects/personalApp/appthumb.png'
                alt='Home Page' 
                className="w-full md:w-1/2 h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out mb-0 border border-neutral-500"
              />
          </div>
          <p className="text-neutral-500 text-xs mt-2 md:mt-4 px-4">On the homepage you can see Today's and Tomorrow's assigned tasks, your Event Calendar, and a Daily Check-in.  Data is stored in a MongoDB database.  It also uses a public API to give the local weather.</p>

          {/**Section 2: Project & Backlog */}
          <h2 className="text-lg font-semibold mt-12">2. Project and Backlog Pages</h2>
          <div className="w-full flex flex-col md:flex-row">
          <img
                src='/projects/personalApp/TaskBacklog.png'
                alt='Project Page'
                className="w-full md:w-1/2 h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
          <img
                src='/projects/personalApp/ProjectPage.png'
                alt='Project Page'
                className="w-full md:w-1/2 h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
              </div>
            <p className="text-neutral-500 text-xs mt-2 md:mt-4 px-4">Use the backlog to see all historical tasks, or the Project tracker for longer-term goal setting.</p>

            {/**Section 3: Workout Tracker */}
          <h2 className="text-lg font-semibold mt-12">3. Workout App</h2>
          <div className="w-full flex flex-col md:flex-row">
          <img
                src='/projects/personalApp/workout1.png'
                alt='Workout1'
                className="w-full md:w-1/2 h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
          <img
                src='/projects/personalApp/workout2.png'
                alt='Workout2'
                className="w-full md:w-1/2 h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
              </div>
            <p className="text-neutral-500 text-xs my-2 md:mt-4 px-4">The workout tracker takes your previous performance for the exercise and automatically sets your weights for the next workout.</p>
            
            <video width="full" height="full" controls muted autoPlay loop>
                <source src="https://public-docs2.s3.amazonaws.com/WorkoutApp.mp4" type="video/mp4" />
              </video>

            {/**Section 4: Mongo */}
          <h2 className="text-lg font-semibold mt-12">4. Mongo Backend</h2>
          <div className="w-full flex flex-col md:flex-row">
          <img
                src='/projects/personalApp/MongoTop.png'
                alt='MongoDB'
                className="w-full md:w-1/2 h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
          <img
                src='/projects/personalApp/Mongo2.png'
                alt='MongoDB'
                className="w-full md:w-1/2 h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out my-2 mb-0 border border-neutral-500"
              />
              </div>
            <p className="text-neutral-500 text-xs my-2 md:mt-4 px-4">The MongoDB collections behind the app.</p>

        </div>

      
    </section>
  );
}

export default Papp;
