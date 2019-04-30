import React, {Component} from 'react';
import PortfolioTechnology from './PortfolioTechnology';
import PortfolioLink from './PortfolioLink';
import PortfolioDescription from './PortfolioDescription';
import PortfolioImage from './PortfolioImage';

class PortfolioCard extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <div className='portfolio-card'>
                <PortfolioImage nameProject={this.props.nameProject} coverColor={this.props.coverColor}/>
                <PortfolioTechnology lable={this.props.lable}/>
                <PortfolioDescription description={this.props.description}/>
                <PortfolioLink sourceLink={this.props.sourceLink} appLink={this.props.appLink}/>                          
            </div>
        );
    };
};

export default PortfolioCard;