import React, { useState } from 'react';

const PortfolioCAT = ({ filterData, catItems }) => {
    const [activeFilter, setActiveFilter] = useState(catItems[0]);

    const handleFilterClick = (curClem) => {
        setActiveFilter(curClem);
        filterData(curClem);
    };

    return (
        <>
            <div className="portfolio__filters">
                {catItems.map((curClem, index) => {
                    return (
                        <span
                            key={index}
                            className={
                                activeFilter === curClem
                                    ? 'portfolio__active'
                                    : ''
                            }
                            onClick={() => handleFilterClick(curClem)}
                        >
                            {curClem}
                        </span>
                    );
                })}
            </div>
        </>
    );
};

export default PortfolioCAT;
