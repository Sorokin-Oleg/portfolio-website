import React from "react";
import PortfolioTechnology from "./PortfolioTechnology";
import PortfolioLink from "./PortfolioLink";
import PortfolioDescription from "./PortfolioDescription";
import PortfolioImage from "./PortfolioImage";

const PortfolioCard = ({ nameProject, coverImage, id, lable, description, sourceLink, appLink }) => (
  <div className="portfolio-card">
    <PortfolioImage nameProject={nameProject} coverImage={coverImage} id={id} />
    <PortfolioTechnology lable={lable} />
    <PortfolioDescription description={description} />
    <PortfolioLink sourceLink={sourceLink} appLink={appLink} />
  </div>
);

export default PortfolioCard;
