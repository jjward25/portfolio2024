"use client"
import { useState } from 'react';

export default function Timeline() {
  return (
    <div className="w-full max-w-full mx-auto mt-8 mb-8 bg-slate-100 border border-black shadow-lg rounded-xl p-4 text-black z-0 overflow-x-scroll md:overflow-auto">

      <p className="font-semibold mb-2">Timeline</p>

      <div className="flex flex-row max-w-full overflow-visible md:overflow-visible hover:pb-45 no-scrollbar pb-3">
        
        {/* Year Column */}
        <div className="flex flex-col z-0 hover:z-20 group overflow-visible">
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className="group overflow-visible">
                <img
                    src="/tda.png"
                    alt="tda"
                    className="group duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute w-lvw left-0 h-0 group-hover:h-[340px] bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm'>
                    <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 md:w-[400px] min-h-10 group-hover:h-[300px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                        <h3 className='mb-2'>TD Ameritrade Rotational Program</h3>
                        <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>As a poli-sci major (aka graduating undecided), TD Ameritrade's rotational program stuck out for the broad exposure it promised.  And I've been building on the tools I learned in this program ever since.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'><b>Lean Consulting: </b>{`Increased Client-facing (call) Time by `}<b className='text-green-700'>~5%</b>{` for national sales branch after analyzing call and response patterns.`}</li>
                        <li className='mt-2 text-xs'><b>Retail Strategy & Ops: </b>{`Increased Education products' retention by `}<b className='text-green-700'>{`~10%`}</b>{` for new users by IDing correlation between course types and retention. President's Club award.`}</li>
                        <li className='mt-2 text-xs'><b>Project Portfolio Mgt: </b>{`Converted `}<b className='text-green-700'>100%</b>{` of existing reporting from Sharepoint to a SQL schema I managed; data visualized and auto-refreshed in Tableau. T2 Spot award.`}</li>
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
                    src="/pmp.png"
                    alt="pmp"
                    className="group duration-300 w-6 max-h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                  <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[400px] min-h-10 group-hover:h-[300px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
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
        {/* Year Column */}
        <div className="flex flex-col z-0 hover:z-20 group overflow-visible">
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className="group overflow-visible">
                <img
                    src="/tda.png"
                    alt="tda"
                    className="group duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                  <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[400px] min-h-10 group-hover:h-[300px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
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
          <div className="z-0 group-hover:z-50  min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
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
            <div className="group overflow-visible">
                <img
                    src="/schwab.png"
                    alt="schwab"
                    className="group duration-300 w-6 h-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[400px] min-h-10 group-hover:h-[300px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
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
                    className="group duration-300 h-6 w-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[400px] min-h-10 group-hover:h-[300px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
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
                    className="group duration-300 h-6 w-6 my-2 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-lvw left-0 h-0 group-hover:h-[340px]'>
                <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[400px] min-h-10 group-hover:h-[300px] bg-white border-2 border-black p-3 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                <h3 className='mb-2'>Vercel: GTM Analytics</h3>
                <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>When our Director of RevOps left I inherited her team, with a mandate to provide analytics and strategic support to the field.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>Built base views for partners (Sales, CS, Marketing) before expanding to views for experiments, campaigns, lead conversions...</li>
                        <li className='mt-2 text-xs'>{`Pricing Analyses: Single-product forecasts and a deep-dive for full pricing revamp (April 2024), IDing how many and who would see increases/decreases and helping field teams plan accordingly.`}</li>
                        <li className='mt-2 text-xs'>Developed logic to ID customer production launches with ~80% accuracy; used Koala and other tools to tweak Lead scoring and partnered with Marketing + SDRs on new Lead Attribution model.</li>
                        <li className='mt-2 text-xs'>Support needs for Board calls, quarterly planning, pipeline reviews, and regularly present findings to teams.</li>
                        
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
