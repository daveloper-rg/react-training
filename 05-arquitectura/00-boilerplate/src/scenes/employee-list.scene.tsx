import { AppLayout } from 'layouts';
import { EmployeeListContainer } from 'pods/employee-list';
import React from 'react';

export const EmployeeListScene: React.FC = () => {
  return (
    <AppLayout>
      <EmployeeListContainer />
    </AppLayout>
  );
};
