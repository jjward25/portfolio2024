export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function ProjectCarousel() {

  return (
    <section>
      
        <div className="flex flex-col bg-black rounded-xl -mx-10 p-4 pt-6 pb-3 w-2/1">
          {/** Project Container */}
          <div className="flex flex-row text-black overflow-x-scroll md:scrollbar-hide">
              {/** Project */}
              <div className="hover:bg-cyan-50 text-sm ml-4 rounded-xl shadow-sm shadow-white font-medium border border-yellow-800 p-3 mb-3 bg-white min-w-[300px] w-[300px]"> Personal Webapp
                  <p className="mt-3 text-xs font-light"><em>A basic NextJS app using MongoDB and D3 charts to track tasks and daily routines.</em></p>
                  <div className="flex flex-wrap my-4 justify-evenly text-xs">
                      <img
                      src='/skill-nextjs.svg'
                      alt='NextJS'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="NextJS"
                      />
                      <img
                      src='/skill-mongodb.svg'
                      alt='MongoDB'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="MongoDB"
                      />
                      <img
                      src='/skill-d3.svg'
                      alt='D3 Visualizations'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="D3 Visualizations"
                      />
                      <img
                      src='/skill-api.png'
                      alt='APIs'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="APIs"
                      />
                  </div>
                  <a href="https://www.youtube.com/watch?v=guVl-h9NWZE" target="_blank">
                          <img
                          src='/appthumb.png'
                          alt='personalApp'
                          className="w-300 h-auto object-cover hover:scale-105 cursor-pointer border border-black rounded-lg"
                          title="Video Walkthrough"
                          />
                  </a>
              </div>
      
              {/** Project */}
              <div className="hover:bg-cyan-50 text-sm ml-4 rounded-xl shadow-sm shadow-white font-medium border border-yellow-800 p-3 mb-3 bg-white min-w-[300px] w-[300px]"> Personal Webapp
                  <p className="mt-3 text-xs font-light"><em>A basic NextJS app using MongoDB and D3 charts to track tasks and daily routines.</em></p>
                  <div className="flex flex-wrap my-4 justify-evenly text-xs">
                      <img
                      src='/skill-nextjs.svg'
                      alt='NextJS'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="NextJS"
                      />
                      <img
                      src='/skill-mongodb.svg'
                      alt='MongoDB'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="MongoDB"
                      />
                      <img
                      src='/skill-d3.svg'
                      alt='D3 Visualizations'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="D3 Visualizations"
                      />
                      <img
                      src='/skill-api.png'
                      alt='APIs'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="APIs"
                      />
                  </div>
                  <a href="https://www.youtube.com/watch?v=guVl-h9NWZE" target="_blank">
                          <img
                          src='/appthumb.png'
                          alt='personalApp'
                          className="w-300 h-auto object-cover hover:scale-105 cursor-pointer border border-black rounded-lg"
                          title="Video Walkthrough"
                          />
                  </a>
              </div>


          {/** Project */}
          <div className="hover:bg-cyan-50 text-sm ml-4 rounded-xl shadow-sm shadow-white font-medium border border-yellow-800 p-3 mb-3 bg-white min-w-[300px] w-[300px]"> Personal Webapp
                  <p className="mt-3 text-xs font-light"><em>A basic NextJS app using MongoDB and D3 charts to track tasks and daily routines.</em></p>
                  <div className="flex flex-wrap my-4 justify-evenly text-xs">
                      <img
                      src='/skill-nextjs.svg'
                      alt='NextJS'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="NextJS"
                      />
                      <img
                      src='/skill-mongodb.svg'
                      alt='MongoDB'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="MongoDB"
                      />
                      <img
                      src='/skill-d3.svg'
                      alt='D3 Visualizations'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="D3 Visualizations"
                      />
                      <img
                      src='/skill-api.png'
                      alt='APIs'
                      className="w-6 h-6 object-cover hover:scale-105 cursor-pointer"
                      title="APIs"
                      />
                  </div>
                  <a href="https://www.youtube.com/watch?v=guVl-h9NWZE" target="_blank">
                          <img
                          src='/appthumb.png'
                          alt='personalApp'
                          className="w-300 h-auto object-cover hover:scale-105 cursor-pointer border border-black rounded-lg"
                          title="Video Walkthrough"
                          />
                  </a>
              </div>
              </div>


          

      </div>
  </section>
);}
