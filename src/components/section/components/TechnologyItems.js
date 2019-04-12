import React, {component} from 'react';
import PropTypes from 'prop-types';

const TechnologyItems = (props) => {    
    const item = props.lable.map((element, index) => {
        return <div className='technology-item' key={index}><span>{element}</span></div> 
    });

    return (
        <div className='portfolio-technology-container'>{item}</div>
    )
};

TechnologyItems.defaultProps = {
    lable: ['none']
};

TechnologyItems.propTypes = {
    lable: PropTypes.array
};


export default TechnologyItems;