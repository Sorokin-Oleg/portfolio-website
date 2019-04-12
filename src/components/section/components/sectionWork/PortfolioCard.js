import React, {Component} from 'react';
import PortfolioTechnology from './PortfolioTechnology';
import PortfolioLink from './PortfolioLink';
import PortfolioDescription from './PortfolioDescription';

class PortfolioCard extends React.Component {
    render() {
        return (
            <div className='portfolio-card'>
                <div className='portfolio-image-container'>1</div>
                <PortfolioTechnology lable={['React', 'Sass', 'API', 'React-Router', 'JSON', 'Socet IO']}/>
                <PortfolioDescription />
                <PortfolioLink />
            </div>
        )
    }
}

export default PortfolioCard;