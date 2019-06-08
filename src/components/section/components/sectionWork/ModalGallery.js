import React from 'react';
import Slider from "react-slick";

const ModalGallery = ({imageData, modalActive, modalClose}) => {
    const settings = {
        dots: true,    
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const image = imageData.image.map((element, index) => (
        <div key={index} className='modal-image-container'>
            <img src={element} alt={imageData.alt[index]}/>
        </div>
    ));

    const modalState = modalActive ? {display:'flex'} : {display:'none'};
    
    return(
        <div className='modal-gallery-container'style={modalState}>
            <button className='modal-gallery-button-close' onClick={modalClose}>
                <i className="fas fa-times"></i>
            </button>
            <div className='slider-modal-content'>                
                <Slider {...settings}>
                    {image}
                </Slider>
            </div>
        </div>
    );
};

export default ModalGallery;