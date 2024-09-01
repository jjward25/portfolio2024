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

  let postDate = '2018-08-31'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <h1 className="font-bold mb-8">Continuous Improvement via Operational Awareness</h1>
        <img
            src='/articles/ContinuousImprovement/titlepic.png'
            alt='titlepic'
            className="w-full h-auto object-cover cursor-pointer rounded-md"
            title="titlepic"
            />
        <p className="">{`Modern businesses want to be as nimble as possible; quick to adapt and ideally able to `}<em>{`drive`}</em>{` change. This requires in-depth knowledge of what you do, and what you don’t do.`}</p>
        <p className="">{`This paper details one way of knowing what we need to know about our businesses.`}</p>
        
        <div className="w-1/4 mx-auto h-0.5 bg-black"/>
        
        <h2 className="font-bold">{`Basic Operational Awareness`}</h2>
        <img
            src='/articles/ContinuousImprovement/chart1.png'
            alt='Value Stream Map'
            className="w-full h-auto object-cover cursor-pointer rounded-md"
            title="Value Stream Map"
            />
        <p className="">{`Create detailed Value Stream Maps (VSM) for every team and every process. VSMs capture the full scope of a process: what’s produced, by who, using what tools and tasks, taking how long, how often…`}</p>
        <p className="">{`They are common tools in Lean/Six-Sigma operational teams, and they help enable several other key operational products:`}</p>
        <li className="">{`Illustrating workflows in VSMs identify `}<b>KPIs</b>{` and `}<b>process bottlenecks</b>{` or `}<b>team pain-points</b>{` that may need to be re-designed or otherwise prioritized.`}</li>
        <li className=""><b>Process-Task Matrixes</b>{` are lists of all tools and tasks that teams action on to see where we have overlap.`}</li>
        <img
            src='/articles/ContinuousImprovement/chart2.png'
            alt='Process-Task Matrix'
            className="w-full h-auto object-cover cursor-pointer rounded-md pt-6"
            title="Process-Task Matrix"
            />
        <p className="text-xs mt-0 mb-6 text-neutral-500 text-center">{`A basic Process-Task matrix showing skills used by different roles in an org. This could highlight internal growth paths, or opportunities for teams to skill up and take advantage of resources other similar roles are using.`}</p>
        <p className="">{`This tool enables comparisons across similar processes, roles, and teams to see where we have our biggest opportunities, but also to see where we’re already doing things better and facilitate knowledge sharing to bring another team up to level.`}</p>
        <p className=""><b>{`Current State reporting:`}</b>{` After KPIs are identified, they can be measured. So once we map our processes and see the key sub-tasks (Leading + Lagging indicators) we want to monitor, we can build meaningful reporting.`}</p>
        <p className=""><b>{`Institutional knowledge.`}</b>{` Track which employees work on core functions, innovations, tool deployments, skills used, and any other company-specific knowledge you want to keep track of (more on this below).`}</p>
        
        <div className="w-1/4 mx-auto h-0.5 bg-black"/>

        <p className="">{`That’s basically it. Value Stream Maps are an extremely under-leveraged tool that can even help in interviews. You can use them to talk candidates through the existing role, what they’re familiar with, what they’d change…`}</p>
        <p className="">{`But operations are nebulous, it’s hard data to capture and even harder to maintain and make use of. For this, let’s see how we could structure information on team processes using a VSM to illustrate.`}</p>
        <img
            src='/articles/ContinuousImprovement/chart3.png'
            alt='Sample Process'
            className="w-full h-auto object-cover cursor-pointer rounded-md pt-6"
            title="Sample Process"
            />
        <p className="text-xs mt-0 mb-6 text-neutral-500 text-center">{`Figure 1`}</p>
        <p className="">{`Figure 1: A simple order confirmation VSM. At each step, much more than Takt time and widget counts can be measured. Object models (ie: Figure 2 below) help capture flexible, potentially text-based data in a way that be used for analysis or easily presented via front-end dashboard or webpage (ie: for HR partners leveraging the data).`}</p>

        <div className="w-full flex justify-center"><img
            src='/articles/ContinuousImprovement/chart4.png'
            alt='Sample Data Object'
            className="w-50% mx-auto h-auto object-cover cursor-pointer rounded-md pt-6 px-auto"
            title="Sample Data Object"
            /></div>
        <p className="text-xs mt-0 mb-6 text-neutral-500 text-center">{`Figure 2`}</p>

        <h2 className="font-bold">{`Using Data to Foster a Culture that’s Comfortable with Change`}</h2>
        <em className="">{`Object notation can be quickly referenced and looped through by internal webapps, but you can structure your data however you want and should just focus on capturing it for all steps in the process in a usable format.`}</em>
        <p className="">{`We can create time variables to compare similar tasks and processes, and qualitative objects that track the skills involved with the tasks, past owners and more. This data, once designed and collected, can be analyzed as-is or visualized in cleaner front-end dashboards for teams to monitor their own KPIs and team profiles.`}</p>
        <p className="">{`Process-Task Matrixes map out synergies and gaps for tools and skills. Human Resources can use this data to find more candidates and leaders internally. Procurement and Strategy teams can help find external partners based on real-time strengths and gaps.`}</p>
        <p className="">{`Most importantly, sitting down with teams and mapping things out WITH them gives employees the chance to point out bottlenecks and pain points and how they view things. The biggest impediment to change is fear and comfort. Combat that with clarity, even excitement.`}</p>
        <p className="">{`Let them own their own Process Maps and make it a part of quarterly goal setting to review the process with managers (or even broader groups). Commit to improvements when possible.`}</p>
        <p className="">{`If you listen to their problems and keep them informed about high-level directions the company could take, then they can automate or adapt their roles without fear. They can do it with a mind towards what will make them most valuable to the future state of the company.`}</p>
        <p className="">{`Doing quarterly VSM reviews is good practice for enabling a culture of change. Asking employees what they like and don’t like about their jobs is valuable information, and giving them the power to influence that change makes it worth everyone’s time.`}</p>
        <p className="">{`By pairing automation with generous skill development budgets and well-communicated dream-scenarios, you empower interested employees to drive their roles towards your dream. And by replacing old work with new, future-focused work, the trade is equitable for everyone.`}</p>

        <div className="w-1/4 mx-auto h-0.5 bg-black"/>
        <h2 className="font-bold">{`Summary of Approach`}</h2>
        <p className="">{`Instead of a central team of Lean consultants descending on teams, make VSM reviews a part of normal quarterly manager-employee discussions. Being consistent with these reviews and having them come from their own teams will make them more meaningful to employees.`}</p>
        <p className="">{`This also keeps changes and strategies more at the product/team level, letting people make decisions for themselves with broader corporate strategy in mind, and possibly with input from a central team that reviews well-structured organization data for opportunities.`}</p>
        

        <p className="">{``}</p>
        <b>{``}</b><em>{``}</em>

      </article>

    </section>
  );
}

