import './utils/styles/main.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FlyoutContact from './components/FlyoutContact/FlyoutContact';
import Home from './layouts/Home/Home';
import About from './layouts/About/About';
import Services from './layouts/Services/Services';
import OurWork from './layouts/OurWork/OurWork';
import { header, mobileHeader, footer } from './config/home';

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <>
                        <FlyoutContact />
                        <Header header={ header } mobileHeader={ mobileHeader }/>
                        <Switch>
                            <Route exact path='/' component={ Home } />
                            <Route exact path='/about' component={ About } />
                            <Route exact path='/services' component={ Services } />
                            <Route exact path='/ourwork' component={ OurWork } />
                        </Switch>
                        <Footer footer={ footer } />
                    </>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

