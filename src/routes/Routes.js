import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../views/About';
import ContactUs from '../views/ContactUs';
import Feature from '../views/Feature';
import Home from '../views/Home';
import IntegrationView from '../views/IntegrationView';
import NotFound from '../views/NotFound';
import ViewParagraph from '../views/ViewParagraph';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/frontend-mysaas'} exact component={Home} />
        <Route path={'/paragraph'} exact component={ViewParagraph} />
        <Route path={'/about'} exact component={About} />
        <Route path={'/feature'} exact component={Feature} />
        <Route path={'/integrations'} exact component={IntegrationView} />
        <Route path={'/contactUs'} exact component={ContactUs} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
