import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) =>
    setPeople(() => people.filter((person) => person.id !== id));
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              type='button'
              onClick={() => removeItem(id)}
              className='btn'
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        id='btn'
        className='btn'
        type='button'
        onClick={() => setPeople([])}
      >
        Clear all
      </button>
    </>
  );
};

export default UseStateArray;
