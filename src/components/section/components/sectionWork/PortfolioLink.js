import React from "react";

const PortfolioLink = ({ sourceLink, appLink }) => (
  <div className="portfolio-link-container">
    <a className="portfolio-link-item" href={sourceLink} target="_blank">
      <i className="fas fa-code"></i> View source
    </a>
    <a className="portfolio-link-item" href={appLink} target="_blank">
      <i className="fas fa-rocket"></i> Go to project
    </a>
  </div>
);

PortfolioLink.defaultProps = {
  sourceLink: "https://github.com/Sorokin-Oleg",
  appLink: "https://github.com/Sorokin-Oleg",
};

export default PortfolioLink;
