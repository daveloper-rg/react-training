import { routes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { getEmployeeListVm } from './api';
import { EmployeeListComponent } from './employee-list.component';
import { Employee } from './employee-list.vm';

export const EmployeeListContainer: React.FunctionComponent = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const history = useHistory();

  const loadEmployeeList = async () => {
    const employeeList = await getEmployeeListVm();
    setEmployees(employeeList);
  };

  React.useEffect(() => {
    loadEmployeeList();
  }, []);

  const handleEditEmployee = (id: string) => {
    history.push(routes.editEmployee(id));
  };

  return (
    <>
      <h1>Hello from Employee list POD Container</h1>
      <EmployeeListComponent
        employees={employees}
        onEditEmployee={handleEditEmployee}
      />
    </>
  );
};
