import dynamic from 'next/dynamic';
import Link from 'next/link';
const DynamicAccordion = dynamic(() => import('../../../components/accordions/accordionAlt'), { ssr: false });

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

  let postDate = '2024-12-04'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert">

        {/** Title */}
        <h1 className="font-bold mb-0">Sales Forecasting</h1>
        <p className="font-semibold text-cyan-800 text-sm">{`We're late on planning! It's the last day of the Fiscal Year, so we have 1 full year of data, but we still need to set targets for the upcoming year!`}</p>
        <p className="mb-12 textneutral-500 text-sm">{`We'll start by (1) creating a mock dataset for analysis, then (2) testing and selecting a forecasting model. Finally, we'll (3) use the new forecast to help set targets for the upcoming year.`}</p>
        
        {/** 1. Data Processing + Modeling */}
        {/** Creating the Dataset */}
        <DynamicAccordion title={`Data Processing & Modeling`} isOpenByDefault={false}>
          <h3 className=''>{`1. Creating the Dataset`}</h3>
          <p className='text-sm text-neutral-500'>{`To make this somewhat realistic I created a custom `}
            <a href="https://docs.google.com/spreadsheets/d/1B8xEl1vgem2QX2A_FtgVjCfjipumjtTpU89x9OPvlSU/edit?usp=sharing" 
              target="_blank" title="Google Sheet">
              dataset
              </a>
              {` with common Opportunity features.`}</p>
          <img
            src='/projects/forecasting/gsheet.png'
            alt='gsheet'
            className="w-full h-auto object-cover cursor-pointer rounded-md border border-black"
            title="Google Sheet"
            />
          {/** Model and Evaluate */}
          <h3 className=''>{`2. Model and Evaluate`}</h3>
          <p className='text-sm text-neutral-500'>{`First I use ChatGPT to create a `}<a href="https://github.com/jjward25/gtmSalesForecasting/blob/main/OppsLikelyToClose" title="Final Code" target="_blank">scaffold</a>{` for a model, with some minor adjustments.`}</p>
          <p className='text-sm text-neutral-500'>{`We're using the XGBoost model.  We could try KNN, which predicts outcomes based on previous similar cases, but we don't have a lot of complex features that would take advantage of KNN.  
            Instead, XGBoost will run multiple tests with slight variations, and weight the results for a final prediction.`}</p>
          <img
            src='/projects/forecasting/firstPred.png'
            alt='Prediction'
            className="w-full h-auto object-cover cursor-pointer rounded-md border border-black"
            title="Prediction"
            />
            <p className="text-sm text-neutral-500">{`At first our results are not great...  Our win rate in FY24 was 26%, and it seems that the model is just guessing that most opportunities will be Lost in FY25.`}</p>
            <p className="text-sm text-neutral-500">{`The top "0" row is "Lost" opportunities.  Specifically looking at Recall, 87% of Lost opportunities were correctly predicted but only 10% of Won opportunities were correctly predicted.  This is a telltale sign of over-fitting from imbalance (guessing).`}</p>

            <img
            src='/projects/forecasting/lastPred.png'
            alt='Prediction2'
            className="w-full h-auto object-cover cursor-pointer rounded-md border border-black"
            title="Prediction2"
            />
            <p className='text-sm text-neutral-500'>{`To account for this, we test several changes.  We create custom features, remove some features, and tune the model.`}</p> 

            <p className='text-sm text-neutral-500'>{`The big adjustment was using SMOTE to create duplicative "Won" opportunities to balance the dataset. SMOTE creates new, fake examples that are similar to existing minority examples (ie: Closed Won Opps). This risks over-fitting the model based on limited examples that may not represent reality if we had more data, so it's often a good idea to have multiple models you can evaluate over time.`}</p>
            <p className='text-sm text-neutral-500'>{`Along with removing some redundant features (UseCases are directly tied to ACV here), this got us to about 60% correct for both Won and Lost. Normally we would refine this further but we would also have more data, so we'll take this and move on with the Sales Forecasting Process.`}</p>

        </DynamicAccordion>

        {/** 2. Reviewing Output*/}
        <DynamicAccordion title={`Evaluating the Model Output`} isOpenByDefault={false}>
          <p className='text-sm text-neutral-500'>{`With Shapley summaries, we can review the output for patterns.`}</p>
          <img
            src='/projects/forecasting/shapFinal.png'
            alt='ShapleySummary'
            className="w-full h-auto object-cover cursor-pointer rounded-md border border-black"
            title="ShapleySummary"
            />
          <p className='text-xs text-neutral-800'>{`Each dot is an Opportunity.  Dots to the Left on the chart are less likely to close.  Red vs Blue indicates high/low values for the metric (ie: $33k ACV = red, $20k = blue).  Categorical features like UseCase were manually encoded as shown below.`}</p>
        <p className="text-sm text-neutral-500">{`We can see we do well with smaller companies, and it's not good if deals take much longer than average to close.  At first glance ACV seems a bit unrelated, but I know Use Cases are related to ACV and we seem to have mixed results with high-value Use Cases.`}</p>  
        <p className="text-sm text-neutral-500">{`UseCases that correlate with higher ACVs are encoded to be higher in "Feature Value".  So the red dots in UseCase are also higher ACV customers, suggesting the high-value accounts we're closing may be closely tied to the success seen with higher discounts.`}</p>
        <img
            src='/projects/forecasting/manualEncoding.png'
            alt='titlepic'
            className="w-full h-auto object-cover cursor-pointer rounded-md border border-black"
            title="titlepic"
            />
        <p className="text-sm text-neutral-500">{`Taken together this can signal some cause for concern...  Higher tier, higher cost packages appear to do worse unless discounted. Sales are still growing though, so even if validated this suggests we have room to tweak packaging, pricing, our target customer, etc. to see even more growth.`}</p>

        <p className="italic font-semibold text-cyan-800">{`If we feel optimistic about these challenges, we can be optimistic in our forecast.`}</p>
        </DynamicAccordion>


        {/** 2. Forecasting Sales*/}
        <DynamicAccordion title={`Creating the Forecast`} isOpenByDefault={false}>
          <p className="text-sm text-neutral-500">{`To begin our forecasting, we can take our growth from last year and project it out linearly (what if we just keep doing this?)... Using our growth rate since April, we'd basically double revenue in FY25, closing ~38 deals at roughly $22k each.`}</p>
          <img
            src='/projects/forecasting/linear.png'
            alt='Linear Forecast'
            className="w-full h-auto object-cover cursor-pointer rounded-md border border-black p-2"
            title="Linear Forecast"
            />
          <p className="text-xs text-neutral-800">{`I used the Average Since April instead of the 35% because April was a clear anomaly.`}</p>
          <p className="text-sm text-neutral-500">{`If we're expecting modest growth, 6.5% would only be an extra $100k, or about 4-5 extra deals closing across the whole year (assuming 100% retention).`}</p>
          <div className='flex justify-center'>
          <img
            src='/projects/forecasting/growth.png'
            alt='Aggressive Forecast'
            className="w-full md:w-1/2 mx-auto h-auto object-cover cursor-pointer rounded-md border border-black p-2"
            title="Aggressive Forecast"
            />
            </div>
          <p className="text-sm text-neutral-500">{`If we're in hypergrowth and have validated and feel comfortable about the challenges presented by our model, we can boost our targets more.  Aiming for 8% monthly growth would have us close the new FY at $2.1m, a YoY increase of ~$440k ($150%), more than doubling from 38 to ~96 Closed Won deals.`}</p>
          <p className="text-sm text-neutral-500">{`More can be done to assess Lead flow (Do we expect to have enough pipeline to support these projections? When does our model expect existing Opps to close? How does this look by Territory?) and other related concerns - but for now we now have a better understanding of our sales potential and a base for a trusted forecast.`}</p>
        </DynamicAccordion>


        <p className="">{``}</p>
        <b>{``}</b><em>{``}</em>

      </article>

    </section>
  );
}

