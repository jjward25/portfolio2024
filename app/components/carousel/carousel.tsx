import PrjBox from "./prjBox";
import PrjBoxScroll from "./prjBoxScroll";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function ProjectCarousel() {

  return (
    <section>
      
        <div className="flex flex-col bg-black md:rounded-xl -mx-10 p-4 pt-6 pb-3 w-2/1">
            {/** Project Container */}
            <div className="flex flex-row text-black gap-4 overflow-auto pb-5 mb-1">

                {/** Project: DBTF */}
                <PrjBoxScroll
                    title='DBT Fundamentals'
                    description= 'Official DBT fundamentals course from learn.getdbt.com using Big Query dataset.'
                    imageUrls= {['/projects/dbtFundamentals/dbtf-materializing-views.png','/projects/dbtFundamentals/dbtf-production-run.png','/projects/dbtFundamentals/dbtf-yml-tests.png']}
                    skills={[
                        { url: '/skill-dbt.png', title: 'DBT' },
                        { url: '/skill-bigquery.png', title: 'Big Query' },                        
                      ]}
                    link='/blog/projects/dbtfundamentals'
                    />

                {/** Project: Personal App */}
                <PrjBoxScroll
                    title='Personal App'
                    description= 'Feature-rich planner app using NextJS, MongoDB and D3.'
                    imageUrls= {['/projects/personalApp/appthumb.png','/projects/personalApp/TaskBacklog.png','/projects/personalApp/ProjectPage.png','/projects/personalApp/workout1.png','/projects/personalApp/workout2.png']}
                    skills={[
                      { url: '/skill-nextjs.png', title: 'NextJS' },
                      { url: '/skill-mongodb.svg', title: 'MongoDB' },
                      { url: '/skill-d3.svg', title: 'D3' },
                      { url: '/skill-api.png', title: 'APIs' },                       
                      ]}
                    link='/blog/projects/personalApp'
                    />
                
                {/** Project: Topic Tournament */}
                <PrjBoxScroll
                    title='Topic Tournament'
                    description= 'A game for debating the best (or worst) of a given topic.'
                    imageUrls= {['/projects/bracketGame/home.png','/projects/bracketGame/newGame.png','/projects/bracketGame/finals.png','/projects/bracketGame/categories.png']}
                    skills={[
                        { url: '/skill-nextjs.png', title: 'NextJS' },
                        { url: '/skill-aws.png', title: 'AWS' },
                      ]}
                      link='https://www.topictournaments.com/'
                    />
            
            </div>
        {/** END Project Container */}
        </div>
    </section>
);}
