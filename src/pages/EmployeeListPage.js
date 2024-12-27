import React from 'react';
import EmployeeList from '../components/EmployeeList';

function EmployeeListPage({ employees }) {
  return (
    <div className="employee-list-page" style={{ padding: '30px' }}>
      <EmployeeList employees={employees} />
    </div>
  );
}

export default EmployeeListPage;
