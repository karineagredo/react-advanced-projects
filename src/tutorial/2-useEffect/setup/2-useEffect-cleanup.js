import React, { useState, useEffect } from 'react';

// cleanup function
// second argument
const style = {
  border: '2rem solid pink',
  width: '90%',
  height: '200px',
  margin: '5rem auto',
};
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);
  useEffect(() => {
    console.log('in effect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  });
  return (
    <>
      <div style={style}>Screen size: {size} px</div>
    </>
  );
};

export default UseEffectCleanup;
