import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import CommentPageContainer from '../containers/CommentPageContainer'
import AboutPage from './AboutPage'




const AppRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={CommentPageContainer}/>
            <Route exact path="/about" component={AboutPage}/>
        </Switch>
    </HashRouter>
);


export default AppRouter;