import React, { useState } from 'react';
import PortfolioCAT from './PortfolioCAT';
import { data } from './PortfolioData';
import PortfolioItem from './PortfolioItem';
import './portfolio.css';

const allCatValues = [
    ...new Set(data.map((curlElem) => curlElem.category)),
    'All',
];

const Portfolio = () => {
    // eslint-disable-next-line no-unused-vars
    const [catItems, setCatItems] = useState(allCatValues);
    const [portfolioData, setPortfolioData] = useState(data);
    // const [visible, setVisible] = useState(3);
    // const sliceData = data.slice(0, portfolioData);

    // const showMoreItems = () => {
    //   setVisible((prevValue) => prevValue + 3);
    // };

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
            {/* PORTFOLIO CATAGOERY ITEMS */}
            <PortfolioCAT filterData={filterData} catItems={catItems} />
            {/* PORTFOLIO DATA ITEMS */}
            <PortfolioItem portfolioData={portfolioData} />
            {/* <button className=" load-more btn btn-primary" onClick={showMoreItems}>
        Load more
      </button> */}
        </section>
    );
};

export default Portfolio;
