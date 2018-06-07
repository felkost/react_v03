import React, { Component } from 'react';
import pubsub from 'pubsub-js';

import ToggleState from '../Common/ToggleState';
import TriggerResize from '../Common/TriggerResize';
import ToggleFullscreen from '../Common/ToggleFullscreen';
import HeaderRun from './Header.run'
import { Link } from 'react-router-dom';

class Header extends Component {

    componentDidMount() {

        HeaderRun();

    }

    toggleUserblock(e) {
        e.preventDefault();
        pubsub.publish('toggleUserblock');
    }

    render() {
        return (
            <header className="topnavbar-wrapper">
                { /* START Top Navbar */}
                <nav className="navbar topnavbar">
                    { /* START navbar header */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#/">
                            <div className="brand-logo">
                                <img className="img-fluid" src="/img/logo.png" alt="App Logo" />
                            </div>
                            <div className="brand-logo-collapsed">
                                <img className="img-fluid" src="/img/logo-single.png" alt="App Logo" />
                            </div>
                        </a>
                    </div>
                    { /* END navbar header */}

                    { /* START Left navbar */}
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item">
                            { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */}
                            <TriggerResize>
                                <ToggleState state="aside-collapsed">
                                    <a href="" className="nav-link d-none d-md-block d-lg-block d-xl-block">
                                        <em className="fa fa-navicon"></em>
                                    </a>
                                </ToggleState>
                            </TriggerResize>
                            { /* Button to show/hide the sidebar on mobile. Visible on mobile only. */}
                            <ToggleState state="aside-toggled" nopersist={true}>
                                <a href="" className="nav-link sidebar-toggle d-md-none">
                                    <em className="fa fa-navicon"></em>
                                </a>
                            </ToggleState>
                        </li>
                    </ul>
                    { /* END Left navbar */}
                    { /* START Right Navbar */}
                    <ul className="navbar-nav flex-row">
                        { /* Fullscreen (only desktops) */}
                        <li className="nav-item d-none d-md-block">
                            <ToggleFullscreen className="nav-link" />
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <Link to="/login" title="Account" className="nav-link">
                                <em className="icon-user"></em>
                            </Link>
                        </li>
                    </ul>
                    { /* END Right Navbar */}
                </nav>
                { /* END Top Navbar */}
            </header>
        );
    }

}

export default Header;
