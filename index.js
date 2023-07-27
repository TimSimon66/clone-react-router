import React from 'react';
import Behind from './behind';
import './style.css'
import Blog from './Blogs'
import Courses from './Contact'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Index = () => {
    return (
        <Router>

            <div className="app-content">
                <Behind />
                <Switch>
                    <Route path="/news">
                        <Courses />
                    </Route>
                    <Route path="/contact">
                        <Blog />
                    </Route>
                    <Route path="/about">
                        about
                    </Route>
                    <Route path="/">
                        Home
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Index;