import React, {component} from 'react';
import PropTypes from 'prop-types';

const PortfolioTechnology = (props) => {    
    const item = props.lable.map((element, index) => {
        return <div className='portfolio-technology-item' key={index}>{element}</div> 
    });

    return (
        <div className='portfolio-technology-container'>{item}</div>
    );
};

PortfolioTechnology.defaultProps = {
    lable: ['none']
};

PortfolioTechnology.propTypes = {
    lable: PropTypes.array
};


export default PortfolioTechnology;