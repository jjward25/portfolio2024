import dynamic from 'next/dynamic';
import Link from 'next/link';
const DynamicAccordion = dynamic(() => import('../../../../components/accordions/accordionAlt'), { ssr: false });

function formatDate(date) {
      
    let currentDate = new Date().getTime();
    if (!date.includes('T')) {
      date = `${date}T00:00:00`;
    }
    let targetDate = new Date(date).getTime();
    let timeDifference = Math.abs(currentDate - targetDate);
    let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    let fullDate = new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    if (daysAgo < 1) {
      return 'Today';
    } else if (daysAgo < 7) {
      return `${fullDate} (${daysAgo}d ago)`;
    } else if (daysAgo < 30) {
      const weeksAgo = Math.floor(daysAgo / 7)
      return `${fullDate} (${weeksAgo}w ago)`;
    } else if (daysAgo < 365) {
      const monthsAgo = Math.floor(daysAgo / 30)
      return `${fullDate} (${monthsAgo}mo ago)`;
    } else {
      const yearsAgo = Math.floor(daysAgo / 365)
      return `${fullDate} (${yearsAgo}y ago)`;
    }
}


export default function TestBlogPost() {

  let postDate = '2024-10-31'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        {/** Title */}
        <h1 className="font-bold mb-8">Go-to-Market Strategy: Growth via ICPs</h1>
        <img
            src='/articles/gtm/bizplan.png'
            alt='titlepic'
            className="w-full h-auto object-cover cursor-pointer rounded-md"
            title="titlepic"
            />
        <p className="">{`The sum is greater than the parts -from Product through Customer Success (and even Finance and Ops), how we collaborate can make or break a growing company. That said, each team of course has its own core functions to hone...`}</p>
        <p className="mb-8">{`How do we set everyone up for success? Collaboration happens in many ways, but this post focuses on collaboration around ICP profiles, and how strong processes around ICPs can supercharge RevOPs.`}</p>
        
        {/** Marketing */}
        <DynamicAccordion title={`Marketing // Growth`} isOpenByDefault={false}>
          <p className="">{`To me, Marketing's core competency is measured by traffic - meaning volume of Clicks, Leads, 'MQLs', Champions-created... Can they create Awareness? Interest? Consideration? I think of this as a measure of 'Can my Marketing team market?'`}</p>
          <p className="">{`Apart from volume, we obviously also care about Quality (SQL rate, Closed Won %/$).  These are collaboration metrics - because multiple teams can influence their result, but also because it should be a team decision what ICP profiles to target that quarter, and then based on pipeline disqualifications or lost deals, how are we doing?`}</p>
          <p className="">{`The collaboration metrics are the bulk of pipeline calls and cross-functional discussion, with the core functions serving as a bulwark for trust in each team.`}</p>
          <p className="">{`For example - "Pipeline is pacing slightly below target but we're still strong in this high CVR channel, and seeing a higher volume of leads from our new campaign that we'll be nurturing to MQL and getting SDR feedback (Qualification) on in the coming weeks."`}</p>
        </DynamicAccordion>

        <div className="w-1/4 mb-8 mx-auto h-0.5 bg-black"/>

        {/** Sales */}
        <DynamicAccordion title={`Sales // Sales Development`} isOpenByDefault={false}>
          <p className="">{`SDRs hold a special place for me as the first true ICP validators - no auto-qualifications here. And if I look for Marketing to be magnetic, I look for SDRs to be `}<em>crafty</em> and AEs to be <em>consistent</em>{`.`}</p>
          <p className="">{`In practice this means SDRs should be some of our most avid data and tool users, supplementing direct outreach with enrichment data and continuously updating Lead profiles as well as our internal ICP context and data.`}</p>
          <p className="">{`In this model, SDRs are our key validators.  If we've all agreed to target certain customers, and Marketing is driving volume, then the SDRs are the first test of "are we getting who we wanted to, and do they want us?" - Do we have true product-market fit with this group?`}</p>
          <p className="">{`Various issues arise here: is low pipeline because marketing sucks or our ICP is wrong? Are we DQing a lot because we're attracting the wrong profiles or because SDRs/AEs don't have the right playbooks down for this ICP yet?`}</p>
          <div className="w-1/4 mt-4 mx-auto h-0.5 bg-black"/>
          <p className="">{`I'm sure you can name more but this is fine and normal, and this framing (core functions vs collaboration) basically just provides a structure to talk about these issues.`}</p>
          <p className="">{`We should know, based on past performance against defined benchmarks, whether Marketing is marketing to par and any context around that (ie: short headcount, macro factors).`}</p>
          <p className="">{`And the input SDRs, AEs, and CSMs provide about ICPs will heavily influence the campaigns Marketing runs, so the blame game stops there. Together we think about what industries, job titles, etc. to target through what mediums. Individually we `}<b>Market</b>, <b>Validate</b>, <b>Close</b>, and <b>Grow</b>.</p>
          <p className="">{`So SDRs provide golden context, letting us know if a lead looked like an ICP, but after enrichment we see this DQing factor.. Or after a call they ID this other factor we didn't think of that Marketing can now use to exclude leads from their campaigns.`}</p>
          <p className="">{`If all goes well to this point, our AEs just need to be consistent, prioritize, and close.  They know our prospects' value props and how to nurture their leads.`}</p>
        </DynamicAccordion>

        <div className="w-1/4 mb-8 mx-auto h-0.5 bg-black"/>

        {/** Customer Success */}
        <DynamicAccordion title={`Customer Success`} isOpenByDefault={false}>
          <p className="">{`For Customer Success, it's assumed they're already working mostly with ICPs.  Instead, their focus is to retain, grow, and expand our understanding of our customers and how they use and value our product(s).`}</p>
          <p className="">{`Common metrics include NRR/GRR, CSAT and NPS. These are often factors of CS solving customer issues, upselling + expanding, and providing pro-active support where possible.`}</p>
          <p>{`But the function also involves heavy contributions to ICP research via support cases, feature requests, customer advisory boards, and generally updating knowledge on existing customers and how we might appeal to nearest neighbors, etc.`}</p>
          <p className="">{`Partner close with SDRs - For non ICPs, should they be ICPs? What attracted them to us and is it a common problem for companies in their space? Do we think we can sell to them? Does the TAM justify a campaign?`}</p>
        </DynamicAccordion>

        <p className="">{``}</p>
        <b>{``}</b><em>{``}</em>

      </article>

    </section>
  );
}

