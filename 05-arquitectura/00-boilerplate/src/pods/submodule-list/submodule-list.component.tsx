import { DashboardComponent } from 'common/components/dashboard';
import { DashboardItemProps } from 'common/components/dashboard/dashboard.vm';
import React from 'react';

interface Props {
  items: DashboardItemProps[];
}

export const SubmoduleListComponent: React.FC<Props> = props => {
  const { items } = props;
  return <DashboardComponent items={items} />;
};
