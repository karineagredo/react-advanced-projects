import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='btn' onClick={() => setShow(!show)}>
        Toggle
      </div>
      {show && <Item />}
    </>
  );
};
const Item = (props) => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);
  return (
    <>
      <h1>Bananas in pyjamas</h1>
      <h3>Screen size: {size}</h3>
    </>
  );
};

export default ShowHide;
