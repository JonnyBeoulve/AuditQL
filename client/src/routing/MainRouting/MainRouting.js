import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Audits from '../../containers/Audits/Audits';

/* This file will handle all routing for the single-page app.
By default, and when an error occurs, the Login page will be loaded.
To add a path, consider using the following syntax:
<Route exact(OPTIONAL) path={'/URLNAME'} component={COMPONENTNAME} /> */
const Routing = ({ location }) => (
    <HashRouter>
        <Switch location={location}>
            <Route path='/' name='Audits' component={Audits} />
        </Switch>
    </HashRouter>
)

export default Routing
