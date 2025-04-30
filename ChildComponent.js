import React from 'react';

const ChildComponent = ({ sendData }) => {
  const handleClick = () => {
    sendData('Hello from Child!');
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
};
export default ChildComponent;