import * as apiModel from './employee.api.model';
import * as viewModel from '../employee.vm';
import { getEmployeeById } from './employee.api';
import { mapEmployeeFromApiToVm } from './employee.mapper';

export const getEmployeeByIdVm = async (
  id: string
): Promise<viewModel.Employee> => {
  const resultApi = await getEmployeeById(id);

  return mapEmployeeFromApiToVm(resultApi);
};
