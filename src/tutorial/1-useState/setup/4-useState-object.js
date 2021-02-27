import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id: 1,
    name: 'karine',
    age: 32,
    message: 'linda karine',
  });
  const changeMessage = () => {
    setPerson({ ...person, name: 'David', age: 35, message: 'Hello David' });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button type='button' className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
