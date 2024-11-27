import dynamic from 'next/dynamic';
import Link from 'next/link';
const DynamicAccordion = dynamic(() => import('../../../components/accordionAlt'), { ssr: false });

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

  let postDate = '2024-11-27'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert">

        {/** Title */}
        <h1 className="font-bold mb-0">Sales Forecasting for Annual Planning</h1>
        <p className='text-neutral-500 mb-4'>A brief model of predicting existing pipeline closures and setting growth targets for the next fiscal year.</p>
        <img
            src='/articles/gtm/bizplan.png'
            alt='titlepic'
            className="w-full h-auto object-cover cursor-pointer rounded-md"
            title="titlepic"
            />
        <p className="">{`In a high-paced environment, keeping the Same Team energy helps keep a hot motor running.`}</p>
        <p className="mb-8">{`The model below reflects a way of thinking about GTM strategy in a way that lends itself towards collaboration betweem teams.`}</p>
        <p className="mb-8">{`Focusing collaboration and friction points around the same, shared areas of the business helps alleviate some finger pointing; I also think it's a helpful way to think about the business.`}</p>
        
        {/** Marketing */}
        <DynamicAccordion title={`Marketing // Growth`} isOpenByDefault={false}>
          <p className="">{`To me, Marketing's core competency is measured by traffic - meaning volume of Clicks, Leads, 'MQLs', Champions-created... Can they create Awareness? Interest? Consideration? I think of this as a measure of 'Can my Marketing team market?'`}</p>
          <p className="">{`Apart from volume, we obviously also care about Quality (SQL rate, Closed Won %/$).  These are collaboration metrics - because multiple teams can influence their result, but also because it should be a team decision what ICP profiles to target that quarter, and then based on pipeline disqualifications or lost deals, how are we doing?`}</p>
          <p className="">{`The collaboration metrics are the bulk of pipeline calls and cross-functional discussion, with the core functions serving as a bulwark for trust in each team.`}</p>
          <p className="">{`For example - "Pipeline is pacing slightly below target but we're still strong in this high CVR channel, and seeing a higher volume of leads from our new campaign that we'll be nurturing to MQL and getting SDR feedback (Qualification) on in the coming weeks."`}</p>
        </DynamicAccordion>

      

        <p className="">{``}</p>
        <b>{``}</b><em>{``}</em>

      </article>

    </section>
  );
}

