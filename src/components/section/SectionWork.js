import React, {Component} from 'react';
import Slider from "react-slick";
import PortfolioCard from './components/sectionWork/PortfolioCard'

class SectionWork extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <section className='content'>
                <div className='slider-content'>
                    <Slider {...settings}>
                        <PortfolioCard/>
                        <PortfolioCard/>
                        <PortfolioCard/>
                        <PortfolioCard/>
                        <PortfolioCard/>
                    </Slider> 
                </div> 
            </section>
        );
    }
}

export default SectionWork;