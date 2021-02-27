import React, { useState } from 'react';

const UseStateBasics = () => {
  const initialTitle = 'random title';
  const [title, setTitle] = useState(initialTitle);

  const handleChangeTitle = () =>
    title === initialTitle ? setTitle('new title') : setTitle(initialTitle);
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' onClick={handleChangeTitle} className='btn'>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
