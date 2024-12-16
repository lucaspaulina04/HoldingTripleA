import React from 'react';
import CreateEmployee from '../components/CreateEmployee';

const CreateEmployeePage = ({ addEmployee }) => {
  return (
    <div>
      <CreateEmployee addEmployee={addEmployee} />
    </div>
  );
};

export default CreateEmployeePage;
