import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [randomValue, setRandomValue] = useState(null);
  
  useEffect(() => {
    setRandomValue(Math.random());
  }, []);
  
  if (randomValue === null) return null; // or a loading indicator
  
  return <div>{randomValue}</div>;
};

export default MyComponent;
