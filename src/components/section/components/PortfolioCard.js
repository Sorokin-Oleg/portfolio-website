import React, {Component} from 'react';
import TechnologyItems from './TechnologyItems';

class PortfolioCard extends React.Component {
    render() {
        return (
            <div className='portfolio-card'>
                <div className='portfolio-image-container'>1</div>
                <TechnologyItems lable={['React', 'Sass', 'API', 'React-Router', 'JSON', 'Socet IO']}/>
                <div className='portfolio-description-container'>3</div>
                <div className='portfolio-button-container'>4</div>
            </div>
        )
    }
}

export default PortfolioCard