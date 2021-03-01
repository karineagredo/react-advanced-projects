import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [username, setUsername] = useState('');
  const [isError, setIsError] = useState(false);
  return (
    <div>
      <h2>{username || 'Hello, my dear'}</h2>
      {isError && <div>An error occurred!</div>}
      <button
        className='btn'
        onClick={() =>
          username ? setUsername('') : setUsername('Hello, Karine Agredo')
        }
      >
        Toggle authentication
      </button>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
    </div>
  );
};

export default ShortCircuit;
