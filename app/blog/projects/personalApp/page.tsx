const Papp = () => {

  return (
    <section className="w-full h-full flex flex-col text-black">
        <h1 className="font-semibold text-xl">My Task App</h1>
        <p className="text-neutral-500 text-sm mt-2">I used NextJS, TailwindCSS, MongoDB, and D3 to create a task tracking app. It includes one-off tasks for the day, and a daily routine tracker that includes a daily journal input.</p>
        <p className="text-neutral-500 text-sm mt-2">Progress is shown in D3 charts. There's also a page for longer term projects, and a workout tracker that tells me what weights to use in my workout based on my previous session.</p>

        <div className="flex flex-col">

          {/**Section 1: App Homepage */}
          <h2 className="text-lg font-semibold mt-12">1. The Home Page</h2>

          <div className="w-full flex flex-col md:flex-row">
            
            <iframe
              src="https://www.youtube.com/embed/qVek72z3F1U?si=DS4rLzYW51Ukj3aG"
              frameBorder="0"
              allowFullScreen
            />

            <img
                src='/projects/personalApp/appthumb.png'
                alt='Home PAge'
                className="w-full md:w-1/2 h-full object-cover hover:scale-150 hover:duration-500 transition-all ease-out mb-0 border border-neutral-500"
              />
          </div>
          <p className="text-neutral-500 text-xs mt-2 md:mt-4 px-4">On the homepage you can see Today's and Tomorrow's assigned tasks, your Event Calendar, and a Daily Check-in.  Data is stored in a MongoDB database.  It also uses a public API to give the local weather. <a href="https://www.youtube.com/watch?v=-DWIQTAeGSQ" title="clip" className="text-cyan-950 hover:text-cyan-500">Video</a> </p>

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
            <p className="text-neutral-500 text-xs my-2 md:mt-4 px-4">The workout tracker takes your previous performance for the exercise and automatically sets your weights for the next workout. <a href="https://www.youtube.com/watch?v=1pL5zFjwPn0" title="clip" className="text-cyan-950 hover:text-cyan-500">Video</a></p>
            
            <iframe
              src="https://www.youtube.com/embed/1pL5zFjwPn0?si=9W2pn_wQk2Wz3tv7"
              frameBorder="0"
              allowFullScreen
            />

        </div>

      
    </section>
  );
}

export default Papp;
