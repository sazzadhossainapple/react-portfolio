import React from "react";

const PortfolioCAT = ({ filterData, catItems }) => {
  return (
    <>
      <div className="portfolio__filters">
        {catItems.map((curClem, index) => {
          return (
            <span key={index} onClick={() => filterData(curClem)}>
              {curClem}
            </span>
          );
        })}
        {/* <span onClick={() => setPortfolioData(data)}>All</span> */}
        {/* <span onClick={() => filterData("Web")}>Web</span>
        <span onClick={() => filterData("React Js")}>React Js</span> */}
      </div>
    </>
  );
};

export default PortfolioCAT;
