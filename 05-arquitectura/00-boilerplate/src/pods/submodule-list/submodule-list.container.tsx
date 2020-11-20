import { DashboardItemProps } from 'common/components/dashboard/dashboard.vm';
import React from 'react';
import { SubmoduleListComponent } from './submodule-list.component';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupIcon from '@material-ui/icons/Group';
import { routes } from 'core/router';

export const SubModuleListContainer: React.FC = () => {
  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Proyectos',
        linkTo: '#',
        icon: AccountBalanceIcon,
      },
      {
        title: 'Empleados',
        linkTo: routes.employeeList,
        icon: GroupIcon,
      },
    ],
    []
  );

  return <SubmoduleListComponent items={items} />;
};
