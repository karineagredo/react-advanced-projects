import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increaseLater = () =>
    setTimeout(() => {
      setValue(value + 1);
    }, 2000);
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className='btn' onClick={() => setValue(0)}>
          Reset
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={increaseLater}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
