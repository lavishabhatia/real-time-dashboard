import React from 'react';
import Widget from './Widget';
import ChartWidget from './ChartWidget';
import TableWidget from './TableWidget';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <ChartWidget title="Real-Time Chart" />
      <TableWidget title="Real-Time Table" />
      <Widget title="Stats 1" />
      <Widget title="Stats 2" />
    </div>
  );
};

export default Dashboard;
