import * as vm from '../employee-list.vm';
import { mapEmployeeListFromApiToVm } from './employee-list.mapper';
import { getEmployeeList } from './employee-list.api';

export const getEmployeeListVm = async (): Promise<vm.Employee[]> => {
  const apiEmployeeList = await getEmployeeList();
  return mapEmployeeListFromApiToVm(apiEmployeeList);
};
