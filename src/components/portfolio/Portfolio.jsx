import React, { useState } from 'react';
import PortfolioCAT from './PortfolioCAT';
import { data } from './PortfolioData';
import PortfolioItem from './PortfolioItem';
import './portfolio.css';

const allCatValues = [
    'All',
    ...new Set(data.map((curlElem) => curlElem.category)),
];

const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState(data);

    const filterData = (categoryPortfolioData) => {
        if (categoryPortfolioData === 'All') {
            setPortfolioData(data);
            return;
        }

        const updatedData = data.filter((curElem) => {
            return curElem.category === categoryPortfolioData;
        });

        setPortfolioData(updatedData);
    };

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <PortfolioCAT filterData={filterData} catItems={allCatValues} />
            <PortfolioItem portfolioData={portfolioData} />
            {/* <button className=" load-more btn btn-primary" onClick={showMoreItems}>
        Load more
      </button> */}
        </section>
    );
};

export default Portfolio;
