import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [user, setUser] = useState('default user');
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      const response = await fetch(url);

      if (response.status >= 200 && response.status <= 299) {
        const { name } = await response.json();
        setUser(name);
        setIsLoading(false);
      } else {
        throw new Error(`An http error occurred`);
      }
    };
    getUser().catch((err) => setIsError(err.message));
  }, []);

  if (isError) {
    return <div>{isError}</div>;
  }
  if (isLoading) {
    return <div>Is loading</div>;
  }
  return <div>{user}</div>;
};

export default MultipleReturns;
