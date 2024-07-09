import React from 'react';
import Widget from '../component/Widget';


const StatsPage = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Widget title="Stats 1" />
      <Widget title="Stats 2" />
      <Widget title="Stats 3" />
    </div>
  );
};

export default StatsPage;
