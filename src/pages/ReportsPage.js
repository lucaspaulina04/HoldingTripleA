import React from 'react';
import Report from '../components/Reports';

const ReportPage = ({ attendanceData }) => {
  return (
    <div>
      
      <Report attendanceData={attendanceData} />
    </div>
  );
};

export default ReportPage;
