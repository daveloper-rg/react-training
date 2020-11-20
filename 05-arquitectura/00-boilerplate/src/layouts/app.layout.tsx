import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from 'core/auth';
import * as classes from './app.layout.styles';

export const AppLayout: React.FC = props => {
  const { children } = props;
  const { username } = React.useContext(AuthContext);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Origin - Project Tracker
          </Typography>
          <Typography variant="h6" className={classes.loginText}>
            {username}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};
