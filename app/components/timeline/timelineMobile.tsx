"use client"
import { useState } from 'react';

export default function Timeline() {
  const [isTDAOpen, setIsTDAOpen] = useState(false);
  const [isTDA2Open, setIsTDA2Open] = useState(false);
  const [isSchwabOpen, setIsSchwabOpen] = useState(false);
  const [isVercelOpen, setIsVercelOpen] = useState(false);
  const [isVercel2Open, setIsVercel2Open] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleTDA = () => {
    setIsTDAOpen(!isTDAOpen);
    setIsCardOpen(true)
  };

  const toggleTDA2 = () => {
    setIsTDA2Open(!isTDA2Open);
    setIsCardOpen(true)
  };

  const toggleSchwab = () => {
    setIsSchwabOpen(!isSchwabOpen);
    setIsCardOpen(true)
  };

  const toggleVercel = () => {
    setIsVercelOpen(!isVercelOpen);
    setIsCardOpen(true)
  };

  const toggleVercel2 = () => {
    setIsVercel2Open(!isVercel2Open);
    setIsCardOpen(true)
  };

  const toggleClose = () => {
    if (isTDAOpen === true) {
      setIsTDAOpen(false)
      setIsCardOpen(false)
    } 
    if (isTDA2Open === true) {
      setIsTDA2Open(false)
      setIsCardOpen(false)
    }
    if (isSchwabOpen === true) {
      setIsSchwabOpen(false)
      setIsCardOpen(false)
    }
    if (isVercelOpen === true) {
      setIsVercelOpen(false)
      setIsCardOpen(false)
    }
    if (isVercel2Open === true) {
      setIsVercel2Open(false)
      setIsCardOpen(false)
    }
    else return;
  };

  return (
    <div className={`w-full max-w-full mx-auto mt-8 mb-8 bg-slate-100 rounded-xl p-4 text-black z-0 relative ${isCardOpen ? 'h-[450px]' : 'overflow-x-scroll'}`}
      onClick={toggleClose}>

      <p className="font-semibold">Timeline</p>

      <div className={`flex flex-row max-w-full pb-3 ${isTDAOpen ? 'overflow-y-visible' : 'overflow-x-scroll'} no-scroll`}>
        
        {/* Year Column */}
        <div className={`flex flex-col z-0 ${isTDAOpen ? 'overflow-y-visible z-40' : ''}`}>
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className={``}>
                <img
                    src="/tda.png"
                    alt="tda"
                    className={`${isTDAOpen ? 'z-40' : ''} duration-300 w-6 mt-2 mb-[14px] mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDA2Open ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={toggleTDA}
                />
                <div onClick={toggleTDA} className={`${isTDAOpen ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                    <div className={`${isTDAOpen ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] md:w-[350px] h-[300px] bg-slate-200 border border-black p-3 rounded-lg pointer-events-none text-sm`}>
                        <h3 className='mb-2'>TD Ameritrade Rotational Program</h3>
                        <p className='text-xs'>I joined TD Ameritrade as a poli-sci major looking to learn. In their rotational program I was the sole analyst on a Lean/Six-Sigma Sales revamp; learned SQL and Tableau while monitoring our Retail educational products; and learned basic Project Management.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Increased Client-facing (call) Time by `}<em className='text-green-400'>~5%</em>{` for national sales branch by restructuring coaching cadence.`}</li>
                        <li className='mt-2 text-xs'>{`Increased customer retention in Educational products by `}<em className='text-green-400'>~5%</em>{` by identifying correlation between short, daily courses or long, in-person courses and retention.`}</li>    
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className={`${isTDAOpen ? 'z-50' : 'z-0'} min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto`}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
              <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                2013
              </p>
            </div>
          </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/*Year Badge*/}
        <div className="min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1  bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
                <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                  2014</p>
            </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/*Year Badge*/}
        <div className="min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1  bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
                <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                  2015</p>
            </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/* Year Column */}
        <div className="flex flex-col z-0 hover:z-20 group overflow-visible">
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className={``}>
                <img
                    src="/tda.png"
                    alt="tda"
                    className={`${isTDA2Open ? 'z-40' : ''} duration-300 w-6 mt-2 mb-[14px] mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={toggleTDA2}
                />
                <div onClick={toggleTDA2} className={`${isTDA2Open ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                    <div className={`${isTDA2Open ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] md:w-[350px] h-[300px] bg-slate-200 border border-black p-3 rounded-lg pointer-events-none text-sm`}>
                        <h3 className='mb-2'>TD Ameritrade Procurement</h3>
                        <p className='text-xs'>I joined TD Ameritrade as a poli-sci major looking to learn. In their rotational program I was the sole analyst on a Lean/Six-Sigma Sales revamp; learned SQL and Tableau while monitoring our Retail educational products; and learned basic Project Management.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Increased Client-facing (call) Time by `}<em className='text-green-400'>~5%</em>{` for national sales branch by restructuring coaching cadence.`}</li>
                        <li className='mt-2 text-xs'>{`Increased customer retention in Educational products by `}<em className='text-green-400'>~5%</em>{` by identifying correlation between short, daily courses or long, in-person courses and retention.`}</li>    
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className={`${isTDA2Open ? 'z-50' : 'z-0'} min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto`}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
              <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                2016
              </p>
            </div>
          </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/*Year Badge*/}
        <div className="min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1  bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
                <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                  2017</p>
            </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/*Year Badge*/}
        <div className="min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1  bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
                <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                  2018</p>
            </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/*Year Badge*/}
        <div className="min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1  bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
                <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                  2019</p>
            </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/* Year Column */}
        <div className="flex flex-col z-0 hover:z-20 group overflow-visible">
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className={``}>
                <img
                    src="/schwab.png"
                    alt="schwab"
                    className={`${isSchwabOpen ? 'z-40' : ''} duration-300 w-6 mt-2 mb-[14px] mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isTDAOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={toggleSchwab}
                />
                <div onClick={toggleSchwab} className={`${isSchwabOpen ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                    <div className={`${isSchwabOpen ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] md:w-[350px] h-[300px] bg-slate-200 border border-black p-3 rounded-lg pointer-events-none text-sm`}>
                        <h3 className='mb-2'>Charles Schwab Procurement</h3>
                        <p className='text-xs'>I joined TD Ameritrade as a poli-sci major looking to learn. In their rotational program I was the sole analyst on a Lean/Six-Sigma Sales revamp; learned SQL and Tableau while monitoring our Retail educational products; and learned basic Project Management.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Increased Client-facing (call) Time by `}<em className='text-green-400'>~5%</em>{` for national sales branch by restructuring coaching cadence.`}</li>
                        <li className='mt-2 text-xs'>{`Increased customer retention in Educational products by `}<em className='text-green-400'>~5%</em>{` by identifying correlation between short, daily courses or long, in-person courses and retention.`}</li>    
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className={`${isSchwabOpen ? 'z-50' : 'z-0'} min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto`}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
              <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                2020
              </p>
            </div>
          </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/*Year Badge*/}
        <div className="min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1  bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
                <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                  2021</p>
            </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/* Year Column */}
        <div className="flex flex-col z-0 hover:z-20 group overflow-visible">
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className={``}>
                <img
                    src="/vercel.png"
                    alt="vercel"
                    className={`${isVercelOpen ? 'z-40' : ''} duration-300 w-6 mt-2 mb-[14px] mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isTDAOpen ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={toggleVercel}
                />
                <div onClick={toggleVercel} className={`${isVercelOpen ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                    <div className={`${isVercelOpen ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] md:w-[350px] h-[300px] bg-slate-200 border border-black p-3 rounded-lg pointer-events-none text-sm`}>
                        <h3 className='mb-2'>Vercel: CS Ops</h3>
                        <p className='text-xs'>I joined TD Ameritrade as a poli-sci major looking to learn. In their rotational program I was the sole analyst on a Lean/Six-Sigma Sales revamp; learned SQL and Tableau while monitoring our Retail educational products; and learned basic Project Management.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Increased Client-facing (call) Time by `}<em className='text-green-400'>~5%</em>{` for national sales branch by restructuring coaching cadence.`}</li>
                        <li className='mt-2 text-xs'>{`Increased customer retention in Educational products by `}<em className='text-green-400'>~5%</em>{` by identifying correlation between short, daily courses or long, in-person courses and retention.`}</li>    
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className={`${isVercelOpen ? 'z-50' : 'z-0'} min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto`}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
              <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                2022
              </p>
            </div>
          </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/* Year Column */}
        <div className="flex flex-col z-0 hover:z-20 group overflow-visible">
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className={``}>
                <img
                    src="/vercel.png"
                    alt="vercel"
                    className={`${isVercel2Open ? 'z-40' : ''} duration-300 w-6 mt-2 mb-[14px] mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isTDAOpen ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}`}
                    onClick={toggleVercel2}
                />
                <div onClick={toggleVercel2} className={`${isVercel2Open ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                    <div className={`${isVercel2Open ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] md:w-[350px] h-[300px] bg-slate-200 border border-black p-3 rounded-lg pointer-events-none text-sm`}>
                        <h3 className='mb-2'>Vercel: CS Ops</h3>
                        <p className='text-xs'>I joined TD Ameritrade as a poli-sci major looking to learn. In their rotational program I was the sole analyst on a Lean/Six-Sigma Sales revamp; learned SQL and Tableau while monitoring our Retail educational products; and learned basic Project Management.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Increased Client-facing (call) Time by `}<em className='text-green-400'>~5%</em>{` for national sales branch by restructuring coaching cadence.`}</li>
                        <li className='mt-2 text-xs'>{`Increased customer retention in Educational products by `}<em className='text-green-400'>~5%</em>{` by identifying correlation between short, daily courses or long, in-person courses and retention.`}</li>    
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className={`${isVercel2Open ? 'z-50' : 'z-0'} min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto`}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
              <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                2023
              </p>
            </div>
          </div>
        </div>

      
        <div className='min-h-[2px] min-w-2 my-auto bg-black mb-[9px]'/>
        {/*Year Badge*/}
        <div className="min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1  bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
                <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                  2024</p>
            </div>
        </div>
        </div>
    </div>
  );
}
