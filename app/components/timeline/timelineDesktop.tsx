"use client"
import { useState } from 'react';

export default function Timeline() {
  return (
    <div className="max-w-full mx-auto my-8 bg-gradient-to-r from-cyan-950 via-slate-800 to-cyan-950 border border-black shadow-lg rounded-xl px-4 pt-2 pb-0 text-black z-0 overflow-hidden">

      <p className="font-semibold mb-2 text-white">Timeline</p>

      <div className="flex flex-row max-w-full overflow-x-auto scrollbar-hide pb-3">
        
        {/* Year Column */}
        <div className="flex flex-col z-0 hover:z-20 group overflow-visible">
          {/* Company Logo & Tooltip */}
          <div className="mx-auto">
            <div className="group overflow-visible">
                <img
                    src="/tda.png"
                    alt="tda"
                    className="group border-2 border-yellow-200 duration-300 w-7 h-7 mt-1 mb-3 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute w-full left-0 h-0 group-hover:h-[450px] bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm'>
                    <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[450px] min-h-10 group-hover:h-[325px] bg-white border-2 border-black py-3 px-6 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                        <h3 className='mb-2'>TD Ameritrade Rotational Program</h3>
                        <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>As a poli-sci major (aka graduating undecided), TD Ameritrade's rotational program stuck out for the broad exposure it promised.  And I've been building on the tools I learned in this program ever since.</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'><b>Lean (Six-Sigma) Consulting: </b>{`Increased Client-facing (call) Time by `}<b className='text-green-700'>~5%</b>{` for national sales teams after analyzing call and response patterns.`}</li>
                        <li className='mt-2 text-xs'><b>Retail Strategy & Ops: </b>{`Increased Education products' retention by `}<b className='text-green-700'>{`~10%`}</b>{` for new users by IDing correlation between course types and retention. President's Club award.`}</li>
                        <li className='mt-2 text-xs'><b>Project Portfolio Mgt: </b>{`Converted `}<b className='text-green-700'>100%</b>{` of existing reporting from Sharepoint to a SQL schema I managed; visualized data in Tableau. T2 Spot award.`}</li>
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className="z-0 group-hover:z-50 min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-300 via-neutral-300 to-yellow-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-yellow-200">
              <p className="px-1 text-center font-semibold text-yellow-700 dark:text-yellow-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-yellow-900 via-neutral-600 to-yellow-700 text-xs">
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
                    className="group border-2 border-yellow-200 duration-300 w-7 h-7 mt-1 mb-3 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-full left-0 h-0 group-hover:h-[450px]'>
                  <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[450px] min-h-10 group-hover:h-[325px] bg-white border-2 border-black py-3 px-6 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                    <h3 className='mb-2'>Practice Benefit Corp.</h3>
                    <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                    <p className='text-xs'>At the time a non-profit called Practice Makes Perfect where I had previously volunteered; I joined as a consultant to help professionalize operations and implement best practices while working towards Educational Equity.</p>
                    <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                    <li className='mt-2 text-xs'>{`Created Value Stream Maps and KPIs for all roles, which where then used for hiring `}<em>(what aspects are you familiar with, what would you change?)</em>{` and quarterly reviews (for identifying continuous improvement opportunities).`}</li>
                    <li className='mt-2 text-xs'>{`Swapped payroll providers and led 401k enrollments; Led hiring and onboarding for all new hires (8); Created annual sales calendar; and otherwise contributed as needed.`}</li>
                  </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className="z-0 group-hover:z-50  min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-300 via-neutral-300 to-yellow-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-yellow-200">
              <p className="px-1 text-center font-semibold text-yellow-700 dark:text-yellow-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-yellow-900 via-neutral-600 to-yellow-700 text-xs">
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
                    className="group border-2 border-yellow-200 duration-300 w-7 h-7 mt-1 mb-3 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-full left-0 h-0 group-hover:h-[450px]'>
                  <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[450px] min-h-10 group-hover:h-[325px] bg-white border-2 border-black py-3 px-6 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                    <h3 className='mb-2'>TD Ameritrade Procurement</h3>
                    <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                    <p className='text-xs'>After 6 months I opted to return to TD Ameritrade to help my old manager build up TDA's Procurement operations.</p>
                    <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                    <li className='mt-2 text-xs'>PMed the development of an internal app where anyone could submit and track new vendor requests. This created <b className='text-green-700'>total process visibility</b> by automating data capture for work that used to be manually tracked or not tracked at all (including RFP status, risk scoring, contract value, cycle times by stage, by CM), and saving <b className='text-green-700'> hours</b> of weekly admin time for Category Managers and partners.</li>
                    <li className='mt-2 text-xs'>{`Led Spend Channel Optimization, working with risk, legal and other relevant partners to carve out PO-only exceptions (no MSA for specific cases like Facilities emergencies), create new self-serve Catalogues, and make other global purchase policy updates.
                    Overall, reduced CM work on ~10% of purchases and `}<b className='text-green-700'>$120m</b>{` (1%) of spend `}<b className='text-green-700'>by up to 100%</b>{`, allowing the team to spend more time on Strategic Sourcing.`}</li>
                  </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className="z-0 group-hover:z-50  min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-300 via-neutral-300 to-yellow-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-yellow-200">
              <p className="px-1 text-center font-semibold text-yellow-700 dark:text-yellow-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-yellow-900 via-neutral-600 to-yellow-700 text-xs">
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
                    className="group border-2 border-yellow-200 duration-300 w-7 h-7 mt-1 mb-3 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-full left-0 h-0 group-hover:h-[450px]'>
                  <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[450px] min-h-10 group-hover:h-[325px] bg-white border-2 border-black py-3 px-6 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                    <h3 className='mb-2'>Charles Schwab Procurement</h3>
                    <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                    <p className='text-xs'>Schwab bought TD Ameritrade, and - after helping the procurement department transition through the two-year merger - I raised my hand for severance and began looking for opportunities with less regulatory red tape.</p>
                    <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                    <li className='mt-2 text-xs'>Handled all procurement-related regulatory reporting, providing the SEC and others with reports to assess conflicts of interest, etc.</li>
                    <li className='mt-2 text-xs'>Partner for Vendor synergies analysis - identifying contractual overlap and obligations, and options for which contracts to renegotiate, terminate, or otherwise prioritize for renewal.</li>
                    <li className='mt-2 text-xs'>Designed and automated combined Schwab+TDA procurement reporting with Alteryx.</li>
                  </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className="z-0 group-hover:z-50 min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-300 via-neutral-300 to-yellow-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-yellow-200">
              <p className="px-1 text-center font-semibold text-yellow-700 dark:text-yellow-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-yellow-900 via-neutral-600 to-yellow-700 text-xs">
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
                    className="group border-2 border-yellow-200 duration-300 h-7 w-7 mt-1 mb-3 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-full left-0 h-0 group-hover:h-[450px]'>
                <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[450px] min-h-10 group-hover:h-[385px] bg-white border-2 border-black py-3 px-6 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                <h3 className='mb-2'>Vercel: CS Ops</h3>
                <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>{`After the Schwab transition was complete, I joined Vercel, which I had been using to learn to code (and currently use to host this website) - to support their Customer Success operations.`}</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>{`Led CSM migration to Salesforce - Design, testing, enablement, migration in 30 days (+ post-launch support and monitoring)`}.</li>
                        <li className='mt-2 text-xs'>Designed and enabled new Renewals process to solve for high-volume of late renewals.</li>
                        <li className='mt-2 text-xs'>Designed and enabled new Customer Tiering to make CS operations scalable.</li>
                        <li className='mt-2 text-xs'>Solved for a long-standing lack of product-usage data by getting Snowflake + DBT access, and personally creating a schema and end-user views for AEs, CSMs and Executives to better understand customer account usage, see who's on pace for overages or not using what they bought, and generally understand our accounts and products better.</li>
                        <li className='mt-2 text-xs'>Platform admin for Salesforce, Gong, Fivetran.</li>
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className="z-0 group-hover:z-50 min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-300 via-neutral-300 to-yellow-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-yellow-200">
              <p className="px-1 text-center font-semibold text-yellow-700 dark:text-yellow-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-yellow-900 via-neutral-600 to-yellow-700 text-xs">
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
                    className="group border-2 border-yellow-200 duration-300 h-7 w-7 mt-1 mb-3 mx-auto rounded-2xl object-cover hover:scale-125 transition-all ease-in-out "
                />
                <div className='z-40 absolute bg-white opacity-0 transition-opacity group-hover:opacity-100 bg-opacity-30 backdrop-blur-md drop-shadow-sm w-full left-0 h-0 group-hover:h-[450px]'>
                <div className="z-50 absolute m-auto mt-[20px] left-0 right-0 w-[450px] min-h-10 group-hover:h-[400px] bg-white border-2 border-black py-3 px-6 rounded-lg pointer-events-none opacity-0 transition-opacity group-hover:opacity-100 text-sm">
                <h3 className='mb-2'>Vercel: GTM Analytics</h3>
                <div className='mt-3 mb-3 h-0.5 w-full bg-gradient-to-r from-amber-200 to-white'/>
                        <p className='text-xs'>Inherited a team of 3 analysts, with a mandate to provide analytics and strategic support to the GTM field teams (Marketing, Sales, CS).</p>
                        <div className='w-4 h-[1px] my-2 bg-black m-auto'/>
                        <li className='mt-2 text-xs'>Built base views for partners before expanding to support analysis for A/B site experiments, lead scoring and conversions, new product pricing and monitoring, sales activities and territory win rates, account health scoring, and more.</li>
                        

                        <li className='mt-2 text-xs'>{`Pricing Analyses: Single-product forecasts and a deep-dive for full pricing revamp (April 2024), IDing how many and who would see increases/decreases and helping field teams plan accordingly.`}</li>
                        <li className='mt-2 text-xs'>Developed a model to ID customer production launches for pro-active CS outreach; used Koala and other tools to tweak Lead scoring and partnered with Marketing + SDRs on new Lead Attribution model.</li>
                        <li className='mt-2 text-xs'>Support needs for Board meetings, quarterly planning, pipeline reviews, and regularly present findings to partner teams.</li>
                        
                    </div>
                </div>
            </div>
          </div>
          {/* Year Badge */}
          <div className="z-0 group-hover:z-50 min-w-[45px] hover:scale-105 focus:scale-95 cursor-pointer relative rounded-lg w-full overflow-hidden h-full mb-0 my-auto">
            <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-300 via-neutral-300 to-yellow-300 dark:bg-black blur opacity-90"></div>
            <div className="relative rounded-lg flex justify-around border-2 border-yellow-200">
              <p className="px-1 text-center font-semibold text-yellow-700 dark:text-yellow-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br from-yellow-900 via-neutral-600 to-yellow-700 text-xs">
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
