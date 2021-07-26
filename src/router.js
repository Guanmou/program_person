import React from 'react';
import { Route, Switch,Redirect,withRouter} from 'react-router-dom';
// import {IndexRoute} from 'react-router'
import Author from './pages/Author';
import LessDisabled from './pages/PitDaily/lessDisabled';
import ManageStatusComponent from './pages/ManageStatus';
import MicoSpaComponent from './pages/MIcoSpa';
import WebPackComponent from './pages/WebPackStudy';
import ReactComponent from './pages/ReactStudy';

const routerConfig = () => {
    return (
        <Switch>
            <Route exact path="/" component={Author}/>
            <Route exact path="/ManageStatusComponent" component={ManageStatusComponent}/>
            <Route exact path="/LessDisabled" component={LessDisabled}/>
            <Route exact path="/MicoSpaComponent" component={MicoSpaComponent}/>
            <Route exact path="/WebPackComponent" component={WebPackComponent}/>
            <Route exact path="/ReactComponent" component={ReactComponent}/>
        </Switch>
    )
};

export default routerConfig