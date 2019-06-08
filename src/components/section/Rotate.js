import React from 'react';

const Rotate = () => {
    const style = {
        background: "#212121 url('./assets/img/rotate.jpg') no-repeat center",
        backgroundSize: "100% auto"
    };

    return(
        <div className='rotate' style={style}></div>
    );
};

export default Rotate;