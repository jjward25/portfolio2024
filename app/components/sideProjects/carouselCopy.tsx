import TestBox from "../testbox";
import TestBoxScroll from "../testboxScroll";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function ProjectCarousel2() {

  return (
    <section>
      
        <div className="flex flex-col bg-black rounded-xl -mx-10 p-4 pt-6 pb-3 w-2/1">
            {/** Project Container */}
            <div className="flex flex-row text-black gap-4 overflow-auto md:scrollbar-hide">

                {/** Project */}
                <TestBoxScroll
                    title='DBT Fundamentals'
                    description= 'Official DBT fundamentals course from learn.getdbt.com using Big Query dataset.'
                    imageUrls= {['/projects/dbtFundamentals/dbtf-materializing-views.png','/projects/dbtFundamentals/dbtf-production-run.png','/projects/dbtFundamentals/dbtf-yml-tests.png']}
                    skills={[
                        { url: '/skill-dbt.png', title: 'DBT' },
                        { url: '/skill-bigquery.png', title: 'Big Query' },                        
                      ]}
                    link=''
                    />

                {/** Project */}
                <TestBox 
                    title='Personal App'
                    description= 'Task tracking and journaling app made with NextJS, MongoDB and D3.'
                    imageUrl= '/appthumb.png'
                    skills={[
                        { url: '/skill-nextjs.png', title: 'NextJS' },
                        { url: '/skill-mongodb.svg', title: 'MongoDB' },
                        { url: '/skill-d3.svg', title: 'D3' },
                        { url: '/skill-api.png', title: 'APIs' },
                      ]}
                    link='https://youtu.be/guVl-h9NWZE'
                    />

                
                {/** Project */}
                <TestBoxScroll
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
