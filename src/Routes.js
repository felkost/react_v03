import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
// import BaseHorizontal from './components/Layout/BaseHorizontal';

import ContentCreator from './components/ContentCreator/ContentCreator';
import Campaigns from './components/Campaigns/Campaigns';
import CampaignForm from './components/Campaigns/CampaignForm';
import Analitics from './components/Analytics/Analitics';

import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Recover from './components/Pages/Recover';
import Lock from './components/Pages/Lock';
import NotFound from './components/Pages/NotFound';
import Error500 from './components/Pages/Error500';
import Maintenance from './components/Pages/Maintenance';

import QMainContainer from './components/Quiz/QMainContainer';

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/login',
    '/register',
    '/recover',
    '/lock',
    '/notfound',
    '/error500',
    '/maintenance'
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInUp'
    //      'rag-fadeInDown'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'
    //      'rag-fadeInUpBig'
    //      'rag-fadeInDownBig'
    //      'rag-fadeInRightBig'
    //      'rag-fadeInLeftBig'
    //      'rag-zoomBackDown'
    const animationName = 'rag-fadeIn'

    if(listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <BasePage>
                <Switch location={location}>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/recover" component={Recover}/>
                    <Route path="/lock" component={Lock}/>
                    <Route path="/notfound" component={NotFound}/>
                    <Route path="/error500" component={Error500}/>
                    <Route path="/maintenance" component={Maintenance}/>
                </Switch>
            </BasePage>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
              <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Switch location={location}>
                            <Route path="/contentCreator" component={ContentCreator}/>
                            <Route exact path="/campaigns" component={Campaigns}/>
                            <Route path="/campaigns/new" component={CampaignForm} />
                            <Route path="/campaigns/:itemId" component={CampaignForm} />
                            <Route path="/analitics" component={Analitics} />

                            <Route path="/questionnaire" component={QMainContainer}/>
                        </Switch>
                    </div>
                </CSSTransition>
              </TransitionGroup>
            </Base>
        )
    }
}

export default withRouter(Routes);
