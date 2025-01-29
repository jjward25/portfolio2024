import dynamic from 'next/dynamic';
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

  let postDate = '2024-11-05'

  return (
    <section>
      
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(postDate)}
          </p>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        {/** Title */}
        <h1 className="font-bold mb-8">Predicting the NBA MVP</h1>
        <img
            src='/projects/NbaMvp/vegasOdds.png'
            alt='titlepic'
            className="w-full h-auto object-cover cursor-pointer rounded-md border border-black"
            title="titlepic"
            />
        <div className='mt-4'><a href="https://github.com/jjward25/nbaMvpPredictor">Github Repo</a></div>
        <p className="">{`In the image above we have the Vegas odds for NBA MVP as of November 5th, 2024.  We're going to see if we can make a low-effort model that approximates this list, with minor exceptions.`}</p>
        <p className="">{`Note: These are betting odds so they take into account peoples' irrational behaviours, like voting Anthony Edwards for MVP.  Statistically, based on age and overall performance I think he's an outlier on this list.`}</p>
        <p className="mb-8">{`Similarly, Jokic has won 3 of the last 4 and his team is likely to underperform this year.  If Denver's Win Percentage is top 4 in the conference at the end of the year then the model should rate the Joker more highly, but I don't expect Ant or Jokic to top our charts.`}</p>

        {/** Data */}
        <DynamicAccordion title={`1. Gathering Data`} isOpenByDefault={false}>
          <div className='mt-4'>
            <img
                src='/projects/NbaMvp/todaysScores.png'
                alt='titlepic'
                className="w-full pt-2 h-auto object-cover cursor-pointer rounded-md border border-black"
                title="titlepic"
          /></div>
          <p className="">{`I use the NBA Stats API `}<a href="https://github.com/swar/nba_api/tree/master">found here</a>{` to pull all player stats.`}</p>
          <p className="">{`Specifically, I pulled the top 50 players by efficiency and their season stats from the `}<a href="https://github.com/swar/nba_api/blob/master/src/nba_api/stats/endpoints/leagueleaders.py">leagueleaders</a>{` endpoint for the last 10 years. With that data I was able to create rank and per-game features as well.`}</p>
          <p className="">{`I then used the `}<a href="https://github.com/swar/nba_api/blob/master/src/nba_api/stats/endpoints/playerawards.py">playerawards</a>{` endpoint to tag MVPs and `}<a href="https://github.com/swar/nba_api/blob/master/src/nba_api/stats/endpoints/teamyearbyyearstats.py">teamyearbyyearstats</a> for Team metrics like Win Percentage and Conference Rank.</p>
          <p className="">{`Finally, 3rd party libraries `}<a href="https://pypi.org/project/pytrends/">pytrend</a> and <a href="https://pypi.org/project/feedparser/">feedparser</a>{` helped us search for Google trend scores and ESPN RSS mentions for each player each season - unfortunately the RSS feed only goes back 14 days so we scrapped that.`}</p>
        </DynamicAccordion>


        {/** Features */}
        <DynamicAccordion title={`2. Feature Testing`} isOpenByDefault={false}>
          <p className="">{`Thankfully there were no null features in this dataset and only a few special characters in players' names to account for.  But it's important to test for feature importance, especially when pulling a lot of potentially redundant features (like Total Points and Points per Game).`}</p>
          <p className=""><a href="https://machinelearningmastery.com/rfe-feature-selection-in-python/">Recursive Feature Elimination</a> and <a href="https://scikit-learn.org/stable/modules/permutation_importance.html">Permutation Importance</a>
                          {` are two common and simple methods for checking the impact of features on a test. In this case we used RFE, along with a Correlation Matrix and Scree plot.`}</p>
                          <div className='mt-4 w-full flex flex-row'>
          <img
                  src='/projects/NbaMvp/correlationMatrix.png'
                  alt='titlepic'
                  className="w-1/2 h-auto object-cover cursor-pointer rounded-md"
                  title="titlepic"
            />
            <img
                src='/projects/NbaMvp/scree.png'
                alt='titlepic'
                className="w-1/2 h-auto object-cover cursor-pointer rounded-md"
                title="titlepic"
            />
          </div>
          <p className="">{`Correlation Matrixes can be helpful in spotting highly correlated and thus redundant features, while Scree plots give you their own estimation of the most important features.`}</p>
          <p className="">{`The data recommended we use ['REB', 'PTS', 'EFF', 'MIN_per_game', 'EFF_per_game', 'PTS_per_game_rank', 'EFF_per_game_rank', 'PTS_rank', 'EFF_rank', 'WIN_PCT'], which I trimmed down to ['MIN_per_game','EFF_per_game', 'PTS_per_game_rank','PTS_rank', 'EFF_rank','WIN_PCT'] for the final dataset.`}</p>
        </DynamicAccordion>


        {/** Models */}
        <DynamicAccordion title={`3. Model Training & Prediction`} isOpenByDefault={true}>
        <div className='mt-6'>
            <img
                src='/projects/NbaMvp/prediction.png'
                alt='titlepic'
                className="w-full h-auto object-cover cursor-pointer rounded-md"
                title="titlepic"
          /></div>
          <p className="">{`The models appear overfitted, but they aren't predicting past winners and it is producing unique new players that we would want and expect to see, in Jayson Tatum and Anthony Davis.`}</p>
          <p className="">{`To reach these predictions, we used three different models:`}</p>
            <li className='mb-2'><b>Random Forest:</b> These models essentially create multiple large decision trees and find the most likely path.  Usually better for a more complex and resource-intensive dataset but still useful here.</li>
            <li className='mb-2'><b>Gradient Boosting:</b> Slower than Random Forest if training large models, but typically provides better prediction accuracy.</li>
            <li className='mb-2'><b>XGBoost:</b> Incorporates L1 and L2 regularization to reduce overfitting, but can be sensitive to outliers.</li>
          <p className="">{`Since all of these predict Tatum (pre-season favorite on the consensus best team) or Anthony Davis (off to a very hot start), I feel good about our chosen features. For more complex forecasting we'd likely have more to do on cleaning and prepping the data, and would evaluate our chosen models more closely - but for a quick and dirty project, we've now got ourselves a simple model for predicting the NBA MVP that we can have some confidence in.`}</p>
        </DynamicAccordion>

        <p className="">{``}</p>
        <b>{``}</b><em>{``}</em>

      </article>

    </section>
  );
}

