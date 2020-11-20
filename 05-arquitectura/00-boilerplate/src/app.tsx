import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { AuthProvider } from 'core/auth';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <AuthProvider>
        <RouterComponent />
      </AuthProvider>
    </ThemeProviderComponent>
  );
};

export default hot(App);

/**
 * npm install react-router-dom --save
 * npm install @types/react-router-dom --save-dev
 * npm install @material-ui/core @material-ui/icons --save
 * npm install @emotion/css --save
 * npm install lodash.merge --save
 * npm install formik --save
 * npm install @lemoncode/fonk @lemoncode/fonk-formik --save
 * npm install @types/lodash.merge --save-dev
 */
