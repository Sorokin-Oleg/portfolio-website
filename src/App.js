import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom" 
import Navbar from './components/navbar/Navbar';
import SectionHome from './components/section/SectionHome';
import SectionAbout from './components/section/SectionAbout';
import SectionSkills from './components/section/SectionSkills';
import SectionWork from './components/section/SectionWork';
import SectionContact from './components/section/SectionContact';


class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <div className='main-content'>
                    <Navbar />
                    <Route exact path='/' component={SectionHome} />
                    {/* <Route path='/' component={SectionAbout} /> */}
                    <Route path='/about' component={SectionAbout} />
                    <Route path='/skills' component={SectionSkills} />
                    <Route path='/work' component={SectionWork} />
                    <Route path='/contact' component={SectionContact} />
                </div>
            </Router>
        )
    }
};

export default App;