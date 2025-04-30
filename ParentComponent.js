import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleCallback = (data) => {
    alert(`Received from child: ${data}`);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent sendData={handleCallback} />
    </div>
  );
};

export default ParentComponent;