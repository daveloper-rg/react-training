import { generatePath } from 'react-router-dom';

type IdNavigation = (id: string) => string;

interface SwitchRoutes {
  root: string;
  login: string;
  submoduleList: string;
  employeeList: string;
  editEmployee: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  submoduleList: '/submodule-list',
  employeeList: '/employee-list',
  editEmployee: '/employee/:id',
};

interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {
  editEmployee: IdNavigation;
}

export const routes: Routes = {
  ...switchRoutes,
  editEmployee: id => generatePath(switchRoutes.editEmployee, { id }),
};
