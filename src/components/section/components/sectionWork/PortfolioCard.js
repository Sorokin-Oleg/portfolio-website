import React, {Component} from 'react';
import PortfolioTechnology from './PortfolioTechnology';
import PortfolioLink from './PortfolioLink';
import PortfolioDescription from './PortfolioDescription';
import PortfolioImage from './PortfolioImage';

class PortfolioCard extends React.Component {
    render() {
        return (
            <div className='portfolio-card'>
                <PortfolioImage/>
                <PortfolioTechnology lable={['React', 'Sass', 'API', 'React-Router', 'JSON', 'Socet IO']}/>
                <PortfolioDescription/>
                <PortfolioLink/>                
            </div>
        )
    }
}

export default PortfolioCard;