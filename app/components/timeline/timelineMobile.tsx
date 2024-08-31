"use client"
import { useState } from 'react';

export default function Timeline() {
  const [isTDAOpen, setIsTDAOpen] = useState(false);
  const [isTDA2Open, setIsTDA2Open] = useState(false);
  const [isPMPOpen, setIsPMPOpen] = useState(false);
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

  const togglePMP = () => {
    setIsPMPOpen(!isPMPOpen);
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
    if (isPMPOpen === true) {
      setIsPMPOpen(false)
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
    <div className={`w-full max-w-full mx-auto mt-8 mb-8 bg-slate-100 rounded-xl p-4 text-black z-0 relative ${isCardOpen ? 'h-[540px]' : 'overflow-x-scroll'}`}
      onClick={toggleClose}>

      <p className="font-semibold">Timeline</p>

      <div className={`flex flex-row max-w-full pb-3 ${isCardOpen ? 'overflow-y-visible' : 'overflow-x-scroll'} no-scroll`}>
        
        {/* Year Column */}
        <div className={`flex flex-col z-0 ${isTDAOpen ? 'overflow-y-visible z-40' : ''}`}>
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className={``}>
                <img
                    src="/tda.png"
                    alt="tda"
                    className={`${isTDAOpen ? 'z-40' : ''} duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDA2Open ? 'opacity-0' : ''}${isPMPOpen ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={toggleTDA}
                />
                <div onClick={toggleTDA} className={`${isTDAOpen ? 'z-40 h-[380px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                    <div className={`${isTDAOpen ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 mx-4 w-auto h-[420px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none text-sm`}>
                        <h3 className='mb-2'>TD Ameritrade Rotational Program</h3>
                        <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>For a poli-sci major (aka graduating undecided), TD Ameritrade's rotational program stuck out to me for the broad exposure it promised.  I've been building on the tools I learned in this program ever since.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'><b>Lean Consulting: </b>{`Increased Client-facing (call) Time by `}<b className='text-green-700'>~5%</b>{` for national sales branch after analyzing call and response patterns.`}</li>
                        <li className='mt-2 text-xs'><b>Retail Strategy & Ops: </b>{`Increased Education products' retention by `}<b className='text-green-700'>{`~10%`}</b>{` for new users by IDing correlation between course types and retention. President's Club award.`}</li>
                        <li className='mt-2 text-xs'><b>Project Portfolio Mgt: </b>{`Converted `}<b className='text-green-700'>100%</b>{` of existing reporting from Sharepoint to a SQL schema I managed; data visualized and auto-refreshed in Tableau. T2 Spot award.`}</li>
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
                    src="/pmp.png"
                    alt="pmp"
                    className={`${isPMPOpen ? 'z-40' : ''} duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isTDA2Open ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={togglePMP}
                />
                <div onClick={togglePMP} className={`${isPMPOpen ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                <div className={`${isPMPOpen ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] h-[420px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none text-sm`}>
                <h3 className='mb-2'>Practice Benefit Corp.</h3>
                <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>At the time at non-profit called Practice Makes Perfect where I had previously volunteered; I joined full-time to help professionalize operations and implement best practices while working towards Educational Equity.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Created Value Stream Maps for all roles, which where then used for hiring (what aspects are you familiar with, what would you change?) and quarterly reviews for continuous improvement.`}</li>
                        <li className='mt-2 text-xs'>{`Swapped payroll providers and led 401k enrollments; Led hiring and onboarding for all new hires; Created annual sales calendar; and otherwise contributed as needed.`}</li>
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className={`${isPMPOpen ? 'z-50' : 'z-0'} min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto`}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
              <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                2016
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
                    src="/tda.png"
                    alt="tda"
                    className={`${isTDA2Open ? 'z-40' : ''} duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isPMPOpen ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={toggleTDA2}
                />
                <div onClick={toggleTDA2} className={`${isTDA2Open ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                <div className={`${isTDA2Open ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] h-[420px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none text-sm`}>
                <h3 className='mb-2'>TD Ameritrade Procurement</h3>
                <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>After PMP switched to for-profit status I returned to TDA, opting to help my old manager build up the Procurement department over re-joining the Lean team.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>Saved another team from Sharepoint - PMed the development of an app where partners could submit vendor requests, creating total visibility for us and our partners (including RFP status, risk scoring), and <b className='text-green-700'>drastically</b> reducing admin times for all requests.</li>
                    <li className='mt-2 text-xs'>{`Led an initiative to diversify spend channels - working with Legal, risk teams, and more to carve out PO-only exceptions (no MSA) for Facilities emergencies, create new self-serve Catalogues, and make other policy updates.
                    Overall, reduced administrative weight of ~10% of purchases and `}<b className='text-green-700'>$120m</b>{` in spend by up to `}<b className='text-green-700'>100%</b>{`, while reducing risk and increasing time for Strategic Sourcing.`}</li>
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className={`${isTDA2Open ? 'z-50' : 'z-0'} min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto`}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-300 via-neutral-300 to-cyan-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-cyan-200">
              <p className="px-1 text-center font-semibold text-cyan-700 dark:text-cyan-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-cyan-900 via-neutral-600 to-cyan-700 text-xs">
                2017
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
                    className={`${isSchwabOpen ? 'z-40' : ''} duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isPMPOpen ? 'opacity-0' : ''}${isTDAOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={toggleSchwab}
                />
                <div onClick={toggleSchwab} className={`${isSchwabOpen ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                <div className={`${isSchwabOpen ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] h-[420px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none text-sm`}>
                <h3 className='mb-2'>Charles Schwab Procurement</h3>
                <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>Schwab bought TD Ameritrade and, not wanting to be weighed down by even more regulations and red-tape, I began looking.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>Handled all procurement-related regulatory reporting, providing the SEC and others reports to assess conflicts of interest, etc.</li>
                        <li className='mt-2 text-xs'>Partner for Vendor synergies analsysis and strategy.</li>
                        <li className='mt-2 text-xs'>Automated Schwab's reporting with Alteryx.</li>
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
                    className={`${isVercelOpen ? 'z-40' : ''} duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isPMPOpen ? 'opacity-0' : ''}${isTDAOpen ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercel2Open ? 'opacity-0' : ''}`}
                    onClick={toggleVercel}
                />
                <div onClick={toggleVercel} className={`${isVercelOpen ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                <div className={`${isVercelOpen ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] h-[420px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none text-sm`}>
                <h3 className='mb-2'>Vercel: CS Ops</h3>
                <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>{`After the Schwab transition was complete, I moved to Vercel, which I had been using to learn to code (and use to host this website).`}</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>Led CSM migration to Salesforce - Design, testing, enablement, and post-launch monitoring.</li>
                        <li className='mt-2 text-xs'>Designed and enabled new Renewals process, ensuring the process is kicked off for all contracts 120 days out.</li>
                        <li className='mt-2 text-xs'>Solved for long-standing lack of data by getting Snowflake + DBT access and creating views for AEs and CSMs to understand how a customer is using our product, see if they're on pace for overages, and understand their broader portfolios better as well.</li>
                        <li className='mt-2 text-xs'>Platform admin for Salesforce, Gong, Fivetran.</li>
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
                    className={`${isVercel2Open ? 'z-40' : ''} duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 hover:duration-500 transition-all ease-in-out ${isTDAOpen ? 'opacity-0' : ''}${isPMPOpen ? 'opacity-0' : ''}${isTDAOpen ? 'opacity-0' : ''}${isSchwabOpen ? 'opacity-0' : ''}${isVercelOpen ? 'opacity-0' : ''}`}
                    onClick={toggleVercel2}
                />
                <div onClick={toggleVercel2} className={`${isVercel2Open ? 'z-40 h-[340px]' : 'h-0 overflow-hidden'} absolute left-0 right-0 bg-white bg-opacity-30 backdrop-blur-md drop-shadow-sm`}>
                <div className={`${isVercel2Open ? 'z-50' : ''} absolute m-auto my-[25px] left-0 right-0 w-[300px] h-[420px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none text-sm`}>
                <h3 className='mb-2'>Vercel: GTM Analytics</h3>
                <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>When our Director of RevOps left I inherited her team, with a mandate to provide analytics and strategic support to the field.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>Built base views for partners (Sales, CS, Marketing) before expanding to views for experiments, campaigns, lead conversions...</li>
                        <li className='mt-2 text-xs'>{`Pricing Analyses: Single-product forecasts and deep-dive for full pricing revamp (April 2024), IDing how many and who would see increases/decreases and helping field teams plan accordingly.`}</li>
                        <li className='mt-2 text-xs'>Developed logic to ID customer production launches with ~80% accuracy; used Koala and other tools to tweak Lead scoring and partnered with Marketing + SDRs on new Lead Attribution model.</li>
                        <li className='mt-2 text-xs'>Support needs for Board calls, quarterly planning, pipeline reviews, and regularly present findings to teams.</li>
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
