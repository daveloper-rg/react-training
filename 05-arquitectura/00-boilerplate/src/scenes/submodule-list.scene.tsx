import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { AppLayout } from 'layouts';
import { SubModuleListContainer } from 'pods/submodule-list';

export const SubmoduleListScene: React.FC = () => {
  return (
    <AppLayout>
      <SubModuleListContainer />
    </AppLayout>
  );
};
