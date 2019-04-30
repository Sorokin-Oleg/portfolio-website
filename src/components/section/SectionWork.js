import React, {Component} from 'react';
import Slider from "react-slick";
import PortfolioCard from './components/sectionWork/PortfolioCard';
import ModalGallary from './components/sectionWork/modalGallary/ModalGallary';

class SectionWork extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const portfolioData = [
            {
                nameProject: 'Orange Tree',
                coverColor: {backgroundColor: '#e67e22'},
                lable:['SASS', 'jQuery', 'API', 'JSON', 'Socet IO', 'Highcharts'],
                description: 'none',
                sourceLink: 'https://github.com/VizanArkonin/OrangeTree',
                appLink: '#'
            },
            {
                nameProject: 'Weather App',
                coverColor: {backgroundColor: '#16a085'},
                lable:['React', 'Redux', 'SASS', 'API', 'JSON'],
                description: 'none',
                sourceLink: '#',
                appLink: '#'
            },
            {
                nameProject: 'Portfolio App',
                coverColor: {backgroundColor: '#8854d0'},
                lable:['React', 'React-Router', 'Redux', 'SASS'],
                description: 'none',
                sourceLink: 'https://github.com/Sorokin-Oleg/my_portfolio',
                appLink: '#'
            }
        ];

        const portfolioCard = portfolioData.map((element, index) => {
            return(
                <PortfolioCard
                    key={index}
                    nameProject={element.nameProject}
                    coverColor={element.coverColor}
                    lable={element.lable}
                    description={element.description}
                    sourceLink={element.sourceLink}
                    appLink={element.appLink}
                />
            );
        });

        return (
            <section className='content'>
                <div className='slider-content'>
                    <Slider {...settings}>
                        {portfolioCard}
                    </Slider> 
                </div>
                <ModalGallary/>                
            </section>
        );
    };
};

export default SectionWork;