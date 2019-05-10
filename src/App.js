import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import SectionHome from './components/section/SectionHome';
import SectionAbout from './components/section/SectionAbout';
import SectionSkills from './components/section/SectionSkills';
import SectionWork from './components/section/SectionWork';
import SectionContact from './components/section/SectionContact';

class App extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return (           
            <div className='main-content'>
                <Navbar /> 
                <Router>                     
                    <Route exact path='/' component={SectionHome} />
                    <Route path='/about' component={SectionAbout} />
                    <Route path='/skills' component={SectionSkills} />
                    <Route path='/work' component={SectionWork} />
                    <Route path='/contact' component={SectionContact} />
                </Router>                                                                 
            </div>                       
        );
    };
};

export default App;