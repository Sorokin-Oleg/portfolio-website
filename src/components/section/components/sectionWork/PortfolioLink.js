import React, {component} from 'react';

const PortfolioLink = (props) => {
    return (
        <div className='portfolio-link-container'>
            <a className='portfolio-link-item' href={props.sourceLink} target='_blank'>
                <i className="fas fa-code"></i> View source
            </a>
            <a className='portfolio-link-item' href={props.appLink} target='_blank'>
                <i className="fas fa-rocket"></i> Go to project
            </a>
        </div>
    );
};

PortfolioLink.defaultProps = {
    sourceLink: 'https://github.com/Sorokin-Oleg',
    appLink: 'https://github.com/Sorokin-Oleg'
};

export default PortfolioLink;