export default function GTMProjects() {
    return (
    
    <div className="flex flex-col bg-cyan-950 text-white p-2 pb-6 rounded-xl w-full border border-yellow-800 shadow-xl mb-4">
        <p className="font-semibold text-md mb-2">GTM Strategy</p>
        {/** Project Container */}
        <div className="flex flex-row text-black overflow-x-scroll no-scollbar">
            {/** Project */}
            <div className="text-sm ml-4 font-medium border border-yellow-800 rounded-md p-3 shadow-xl bg-slate-100 min-w-[300px] w-[300px]"> Test
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
    );}