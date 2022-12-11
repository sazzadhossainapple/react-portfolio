import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = ({ portfolioData }) => {
  return (
    <>
      <div className="container portfolio__container">
        {portfolioData.map(
          ({ id, image, title, github, demo, description, link }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <Link className="btn btn-primary newBtn" to={link}>
                    Veiw Details
                  </Link>
                </div>
              </article>
            );
          }
        )}
      </div>
    </>
  );
};

export default PortfolioItem;
