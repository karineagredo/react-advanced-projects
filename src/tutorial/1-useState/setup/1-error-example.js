import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handlClick = () => {
    title = 'new title'; // not able to set this new title because the component is not re rendered. There is no way to trigger this without useState
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handlClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
