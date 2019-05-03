import React, {Component} from 'react';
import PortfolioTechnology from './PortfolioTechnology';
import PortfolioLink from './PortfolioLink';
import PortfolioDescription from './PortfolioDescription';
import PortfolioImage from './PortfolioImage';

const PortfolioCard = (props) => {
    return (
        <div className='portfolio-card'>
            <PortfolioImage nameProject={props.nameProject} coverImage={props.coverImage} id={props.id}/>
            <PortfolioTechnology lable={props.lable}/>
            <PortfolioDescription description={props.description}/>
            <PortfolioLink sourceLink={props.sourceLink} appLink={props.appLink}/>                          
        </div>
    );
};

export default PortfolioCard;