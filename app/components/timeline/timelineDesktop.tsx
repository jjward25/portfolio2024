"use client"
import { useState } from 'react';

export default function Timeline() {
  return (
    <div className="w-full max-w-full mx-auto mt-8 mb-8 bg-slate-100 rounded-xl p-4 text-black z-0 overflow-x-scroll md:overflow-auto">

      <p className="font-semibold">Timeline</p>

      <div className="flex flex-row max-w-full overflow-visible md:overflow-visible hover:pb-45 no-scrollbar pb-3">
        
        {/* Year Column */}
        <div className="flex flex-col z-0 hover:z-20 group overflow-visible">
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className="group overflow-visible">
                <img
                    src="/tda.png"
                    alt="tda"
                    className="group duration-300 w-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out "
                />
                <div className='z-40 absolute w-lvw left-0 h-0 group-hover:h-[340px] bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm'>
                    <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[300px] md:w-[350px] min-h-10 group-hover:h-[300px] bg-slate-200 border border-black p-3 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
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
          <div className="z-0 group-hover:z-50 min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
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
            <div className="group overflow-visible">
                <img
                    src="/tda.png"
                    alt="tda"
                    className="group duration-300 w-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                    <div className="z-50 min-h-10 bg-slate-200 border border-black p-3 rounded-lg pointer-events-none absolute m-auto mt-[20px] left-0 right-0 w-[300px] md:w-[350px] group-hover:h-[300px] opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                        <h3 className='mb-2'>TD Ameritrade Procurement Dept</h3>
                        <p className='text-xs'>I joined TD Ameritrade as a poli-sci major looking to learn. In their rotational program I was the sole analyst on a Lean/Six-Sigma Sales revamp; learned SQL and Tableau while monitoring our Retail educational products; and learned basic Project Management.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Increased Client-facing (call) Time by `}<em className='text-green-400'>~5%</em>{` for national sales branch by restructuring coaching cadence.`}</li>
                        <li className='mt-2 text-xs'>{`Increased customer retention in Educational products by `}<em className='text-green-400'>~5%</em>{` by identifying correlation between short, daily courses or long, in-person courses and retention.`}</li>    
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className="z-0 group-hover:z-50  min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
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
            <div className="group overflow-visible">
                <img
                    src="/schwab.png"
                    alt="schwab"
                    className="group duration-300 max-h-6 w-6 mb-2 mt-[5px] mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                    <div className="z-50 min-h-10 bg-slate-200 border border-black p-3 rounded-lg pointer-events-none absolute m-auto mt-[20px] left-0 right-0 w-[300px] md:w-[350px] group-hover:h-[300px] opacity-0 transition-opacity group-hover:opacity-100 text-sm">
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
          <div className="z-0 group-hover:z-50 min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
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
            <div className="group overflow-visible">
                <img
                    src="/vercel.png"
                    alt="vercel"
                    className="group duration-300 max-h-6 w-6 mb-2 mt-[5px] mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                    <div className="z-50 min-h-10 bg-slate-200 border border-black p-3 rounded-lg pointer-events-none absolute m-auto mt-[20px] left-0 right-0 w-[300px] md:w-[350px] group-hover:h-[300px] opacity-0 transition-opacity group-hover:opacity-100 text-sm">
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
          <div className="z-0 group-hover:z-50 min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
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
            <div className="group overflow-visible">
                <img
                    src="/vercel.png"
                    alt="vercel"
                    className="group duration-300 max-h-6 w-6 mb-2 mt-[5px] mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                    <div className="z-50 min-h-10 bg-slate-200 border border-black p-3 rounded-lg pointer-events-none absolute m-auto mt-[20px] left-0 right-0 w-[300px] md:w-[350px] group-hover:h-[300px] opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                        <h3 className='mb-2'>Vercel: GTM Analytics</h3>
                        <p className='text-xs'>I joined TD Ameritrade as a poli-sci major looking to learn. In their rotational program I was the sole analyst on a Lean/Six-Sigma Sales revamp; learned SQL and Tableau while monitoring our Retail educational products; and learned basic Project Management.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Increased Client-facing (call) Time by `}<em className='text-green-400'>~5%</em>{` for national sales branch by restructuring coaching cadence.`}</li>
                        <li className='mt-2 text-xs'>{`Increased customer retention in Educational products by `}<em className='text-green-400'>~5%</em>{` by identifying correlation between short, daily courses or long, in-person courses and retention.`}</li>    
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className="z-0 group-hover:z-50 min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
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
