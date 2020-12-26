import React from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeByIdVm } from './api';
import { EmployeeComponent } from './employee.component';
import { Employee, createEmptyEmployee } from './employee.vm';

export const EmployeeContainer: React.FunctionComponent = () => {
  const { id } = useParams<any>();

  const [employee, setEmployee] = React.useState<Employee>(
    createEmptyEmployee()
  );

  const loadEmployee = async () => {
    const employeeData = await getEmployeeByIdVm(id);
    setEmployee(employeeData);
  };

  React.useEffect(() => {
    loadEmployee();
  }, []);

  const handleSave = (employee: Employee) => {
    console.log('Guardado');
  };

  const handleCancel = () => {
    history.back();
  };

  return (
    <>
      <h1>{id}</h1>
      <EmployeeComponent
        employee={employee}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </>
  );
};
