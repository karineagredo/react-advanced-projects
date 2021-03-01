import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    };
    getUsers();
  }, []);
  return (
    <>
      <h3>Github users</h3>
      <ul className='users'>
        {users.map(({ id, avatar_url, login, html_url }) => (
          <li key={id}>
            <img src={avatar_url}></img>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
