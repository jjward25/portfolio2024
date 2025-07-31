"use client"
import React, { useRef } from 'react';
import PrjBoxScroll from "./prjBoxScroll";
import PrjBox from "./prjBox";

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
      <div className="relative flex flex-col md:rounded-xl -mx-6 md:px-10 px-8 pt-3 ">
        {/** Left Scroll Button */}
        <button
          className="absolute left-0 md:ml-1 top-1/2 transform -translate-y-1/2  hover:text-yellow-200 text-cyan-700 p-2 h-16 w-8 rounded-l-full transition"
          onClick={scrollLeft}
          style={{
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          }}
        >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="48" // Further increased height
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left"
      >
        <polyline points="16 46 4 24 16 2" /> 
      </svg>
        </button>

        {/** Project Container */}
        <div ref={carouselRef} className="flex flex-row text-black gap-4 overflow-auto md:pb-5 mb-1">

          {/** Project: ClayBI */}
          <PrjBoxScroll
            title="Clay Business Intelligence"
            description="A simple business intelligence app using real data from Clay.com, with v0 used to shape the general front-end layout."
            imageUrls={[
              "/projects/clayBI/home.png",
              "/projects/clayBI/compScreen.png",
              "/projects/clayBI/splittingField.png",
            ]}
            skills={[
              { url: "/skill/clay.png", title: "Clay" },
              { url: "/skill/v0.png", title: "v0" },
              { url: "/skill/nextjs.png", title: "NextJS" }
            ]}
            link="/blog/projects/clayBI"
          />
          
          {/** Project: Account & CRM Dashboards */}
          <PrjBoxScroll
            title="Mock CRM & Dashboard"
            description="Mock views for Account-based Management, where marketing and sales engagement can be seen together, org charts are visualized, and Nearest Neighbor accounts are shown with their related activity."
            imageUrls={[
              "/revops/crmDash.png",
              "/revops/acctView.png"
            ]}
            skills={[
              { url: "/skill/nextjs.png", title: "NextJS" },
              { url: "/skill/mongodb.svg", title: "MongoDB" },
              { url: "/skill/api.png", title: "CRM APIs" }
            ]}
            link="https://crm-teal-chi.vercel.app/"
          />

          {/** Project: Sales Forecast Dashboard */}
          <PrjBox
            title="Sales Forecast Dashboard"
            description="A simple interactive widget for visualizing the impact of new targets on expected pipeline."
            imageUrl="/revops/forecast.png"
            skills={[
              { url: "/skill/nextjs.png", title: "NextJS" },
              { url: "/skill/api.png", title: "APIs" },
              { url: "/skill/d3.svg", title: "Data Visualization" }
            ]}
            link="https://crm-teal-chi.vercel.app/forecast"
          />

          

        </div>

        {/** Right Scroll Button */}
        <button
          className="absolute md:mr-1 right-0 top-1/2 transform -translate-y-1/2  hover:text-yellow-200 text-cyan-700 p-2 h-16 w-8 rounded-r-full transition"
          onClick={scrollRight}
          style={{
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18" // Width remains the same
            height="48" // Height set to 48
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="0 2 12 24 0 46" /> 
          </svg>
        </button>

        {/** END Project Container */}
      </div>
    </section>
  );
}
