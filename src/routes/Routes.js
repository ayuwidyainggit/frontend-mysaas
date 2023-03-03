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
        <Route path={'/frontend-mysaas/paragraph'} exact component={ViewParagraph} />
        <Route path={'/frontend-mysaas/about'} exact component={About} />
        <Route path={'/frontend-mysaas/feature'} exact component={Feature} />
        <Route path={'/frontend-mysaas/integrations'} exact component={IntegrationView} />
        <Route path={'/frontend-mysaas/contactUs'} exact component={ContactUs} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
