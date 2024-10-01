"use client"
import React, { useRef } from 'react';
import PrjBoxScroll from "../components/carousel/prjBoxScroll";

export const metadata = {
  title: 'Projects',
  description: 'Personal Projects.',
};

export default function ProjectCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -326, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 326, behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="relative flex flex-col bg-black md:rounded-xl -mx-6 md:-mx-[62px] md:px-10 px-8 pt-6 pb-3 ">
        {/** Left Scroll Button */}
        <button
          className="absolute left-0 md:ml-1 top-1/2 transform -translate-y-1/2 md:bg-gray-800 hover:text-yellow-200 text-cyan-700 p-2 h-16 w-8 rounded-l-full transition"
          onClick={scrollLeft}
          style={{
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          }}
        >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="48" // Further increased height
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left"
      >
        <polyline points="12 46 4 24 12 2" /> // Adjusted points for even taller chevron
      </svg>
        </button>

        {/** Project Container */}
        <div ref={carouselRef} className="flex flex-row text-black gap-4 overflow-auto md:pb-5 mb-1">
          {/** Project: DBTF */}
          <PrjBoxScroll
            title="DBT Fundamentals"
            description="Official DBT fundamentals course from learn.getdbt.com, using a Big Query dataset."
            imageUrls={[
              "/projects/dbtFundamentals/dbtf-materializing-views.png",
              "/projects/dbtFundamentals/dbtf-production-run.png",
              "/projects/dbtFundamentals/dbtf-yml-tests.png",
            ]}
            skills={[
              { url: "/skill/dbt.png", title: "DBT" },
              { url: "/skill/bigquery.png", title: "Big Query" },
            ]}
            link="/blog/projects/dbtfundamentals"
          />

          {/** Project: Web Scrapers */}
          <PrjBoxScroll
            title="Daily News Webscrapers"
            description="Python crawlers for daily headline aggregation from a personally curated selection of sites."
            imageUrls={[
              "/projects/scrapers/runAll.png",
              "/projects/scrapers/scraperSelenium.png",
              "/projects/scrapers/scraperBeautifulSoup.png",
              "/projects/scrapers/scraperOutput.png",
            ]}
            skills={[{ url: "/skill/python.png", title: "Python: Beautiful Soup, Selenium, Pandas" }]}
            link="/blog/projects/webScrapers"
          />

          {/** Project: Personal App */}
          <PrjBoxScroll
            title="Personal App"
            description="Feature-rich planner app made with NextJS, MongoDB, and D3."
            imageUrls={[
              "/projects/personalApp/appthumb.png",
              "/projects/personalApp/TaskBacklog.png",
              "/projects/personalApp/ProjectPage.png",
              "/projects/personalApp/workout1.png",
              "/projects/personalApp/workout2.png",
            ]}
            skills={[
              { url: "/skill/nextjs.png", title: "NextJS" },
              { url: "/skill/mongodb.svg", title: "MongoDB" },
              { url: "/skill/d3.svg", title: "D3" },
              { url: "/skill/api.png", title: "APIs" },
            ]}
            link="/blog/projects/personalApp"
          />

          {/** Project: Topic Tournament */}
          <PrjBoxScroll
            title="Topic Tournament"
            description="A NextJS game for debating the best (or worst) of a given topic, hosted on AWS."
            imageUrls={[
              "/projects/bracketGame/home.png",
              "/projects/bracketGame/newGame.png",
              "/projects/bracketGame/finals.png",
              "/projects/bracketGame/categories.png",
            ]}
            skills={[
              { url: "/skill/nextjs.png", title: "NextJS" },
              { url: "/skill/aws.png", title: "AWS" },
            ]}
            link="https://www.topictournaments.com/"
          />
        </div>

        {/** Right Scroll Button */}
        <button
          className="absolute md:mr-1 right-0 top-1/2 transform -translate-y-1/2 md:bg-gray-800 hover:text-yellow-200 text-cyan-700 p-2 h-16 w-8 rounded-r-full transition"
          onClick={scrollRight}
          style={{
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12" // Width remains the same
            height="48" // Height set to 48
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="0 2 8 24 0 46" /> // Adjusted points to match proportions
          </svg>
        </button>

        {/** END Project Container */}
      </div>
    </section>
  );
}
