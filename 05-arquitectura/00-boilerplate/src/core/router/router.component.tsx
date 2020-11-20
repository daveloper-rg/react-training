import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  SubmoduleListScene,
  EmployeeListScene,
  EmployeeScene,
} from 'scenes';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginScene}
        />
        <Route
          exact
          path={switchRoutes.submoduleList}
          component={SubmoduleListScene}
        />
        <Route
          exact
          path={switchRoutes.employeeList}
          component={EmployeeListScene}
        />
        <Route path={switchRoutes.editEmployee} component={EmployeeScene} />
      </Switch>
    </Router>
  );
};
