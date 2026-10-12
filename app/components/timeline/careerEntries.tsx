import type { ReactNode } from 'react';

export type CareerEntry = {
  id: string; company: string; role?: string; year: number; month?: string; logo?: string;
  summary: ReactNode; achievements: ReactNode[];
};

export const careerEntries: CareerEntry[] = [
  { id: 'tda-rotation', company: 'TD Ameritrade', role: 'Rotational Program', year: 2013, logo: '/tda.png',
    summary: <>As a poli-sci major (aka graduating undecided), TD Ameritrade's rotational program stuck out for the broad exposure it promised.  And I've been building on the tools I learned in this program ever since.</>,
    achievements: [
      <><b>Lean (Six-Sigma) Consulting: </b>{`Increased Client-facing (call) Time by `}<b className='text-green-700'>~5%</b>{` for national sales teams after analyzing call and response patterns.`}</>,
      <><b>Retail Strategy & Ops: </b>{`Increased Education products' retention by `}<b className='text-green-700'>{`~10%`}</b>{` for new users by IDing correlation between course types and retention. President's Club award.`}</>,
      <><b>Project Portfolio Mgt: </b>{`Converted `}<b className='text-green-700'>100%</b>{` of existing reporting from Sharepoint to a SQL schema I managed; visualized data in Tableau. T2 Spot award.`}</>,
    ],
  },
  { id: 'practice', company: 'Practice PBC', role: 'Operations Consulting', year: 2016, logo: '/pmp.png',
    summary: <>At the time a non-profit called Practice Makes Perfect where I had previously volunteered; I joined as a consultant to help professionalize operations and implement best practices while working towards Educational Equity.</>,
    achievements: [
      <>{`Created Value Stream Maps and KPIs for all roles, which where then used for hiring `}<em>(what aspects are you familiar with, what would you change?)</em>{` and quarterly reviews (for identifying continuous improvement opportunities).`}</>,
      <>{`Swapped payroll providers and led 401k enrollments; Led hiring and onboarding for all new hires (8); Created annual sales calendar; and otherwise contributed as needed.`}</>,
    ],
  },
  { id: 'tda-procurement', company: 'TD Ameritrade', role: 'Procurement', year: 2017, logo: '/tda.png',
    summary: <>After 6 months I opted to return to TD Ameritrade to help my old manager build up TDA's Procurement operations.</>,
    achievements: [
      <>PMed the development of an internal app where anyone could submit and track new vendor requests. This created <b className='text-green-700'>total process visibility</b> by automating data capture for work that used to be manually tracked or not tracked at all (including RFP status, risk scoring, contract value, cycle times by stage, by CM), and saving <b className='text-green-700'> hours</b> of weekly admin time for Category Managers and partners.</>,
      <>{`Led Spend Channel Optimization, working with risk, legal and other relevant partners to carve out PO-only exceptions (no MSA for specific cases like Facilities emergencies), create new self-serve Catalogues, and make other global purchase policy updates.
                    Overall, reduced CM work on ~10% of purchases and `}<b className='text-green-700'>$120m</b>{` (1%) of spend `}<b className='text-green-700'>by up to 100%</b>{`, allowing the team to spend more time on Strategic Sourcing.`}</>,
    ],
  },
  { id: 'schwab', company: 'Charles Schwab', role: 'Procurement', year: 2020, logo: '/schwab.png',
    summary: <>Schwab bought TD Ameritrade, and - after helping the procurement department transition through the two-year merger - I raised my hand for severance and began looking for opportunities with less regulatory red tape.</>,
    achievements: [
      <>Handled all procurement-related regulatory reporting, providing the SEC and others with reports to assess conflicts of interest, etc.</>,
      <>Partner for Vendor synergies analysis - identifying contractual overlap and obligations, and options for which contracts to renegotiate, terminate, or otherwise prioritize for renewal.</>,
      <>Designed and automated combined Schwab+TDA procurement reporting with Alteryx.</>,
    ],
  },
  { id: 'vercel-cs', company: 'Vercel', role: 'CS Operations', year: 2022, logo: '/vercel.png',
    summary: <>{`After the Schwab transition was complete, I joined Vercel, which I had been using to learn to code (and currently use to host this website) - to support their Customer Success operations.`}</>,
    achievements: [
      <>{`Led CSM migration to Salesforce - Design, testing, enablement, migration in 30 days (+ post-launch support and monitoring)`}.</>,
      <>Designed and enabled new Renewals process to solve for high-volume of late renewals.</>,
      <>Designed and enabled new Customer Tiering to make CS operations scalable.</>,
      <>Solved for a long-standing lack of product-usage data by getting Snowflake + DBT access, and personally creating a schema and end-user views for AEs, CSMs and Executives to better understand customer account usage, see who's on pace for overages or not using what they bought, and generally understand our accounts and products better.</>,
      <>Platform admin for Salesforce, Gong, Fivetran.</>,
    ],
  },
  { id: 'vercel-analytics', company: 'Vercel', role: 'GTM Analytics', year: 2023, logo: '/vercel.png',
    summary: <>Inherited a team of 3 analysts, with a mandate to provide analytics and strategic support to the GTM field teams (Marketing, Sales, CS).</>,
    achievements: [
      <>Built base views for partners before expanding to support analysis for A/B site experiments, lead scoring and conversions, new product pricing and monitoring, sales activities and territory win rates, account health scoring, and more.</>,
      <>{`Pricing Analyses: Single-product forecasts and a deep-dive for full pricing revamp (April 2024), IDing how many and who would see increases/decreases and helping field teams plan accordingly.`}</>,
      <>Developed a model to ID customer production launches for pro-active CS outreach; used Koala and other tools to tweak Lead scoring and partnered with Marketing + SDRs on new Lead Attribution model.</>,
      <>Support needs for Board meetings, quarterly planning, pipeline reviews, and regularly present findings to partner teams.</>,
    ],
  },
  { id: 'clay', company: 'Clay', year: 2025, month: 'June', logo: '/clay.png',
    summary: <>Joined Clay in June 2025.</>,
    achievements: [],
  },
  { id: 'applecart', company: 'applecart', year: 2026, month: 'September', logo: '/applecart-mark.png',
    summary: <>Joined applecart in September 2026.</>,
    achievements: [],
  },
];

