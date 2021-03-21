import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

const Index = () => {
  const initialState = {
    people: data,
    showModal: false,
    modalContent: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({
        type: 'ADD_PERSON',
        payload: { id: new Date().getTime().toString(), name: name },
      });
      setName('');
    } else {
      dispatch({
        type: 'EMPTY_INPUT',
      });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.showModal && (
        <Modal closeModal={closeModal} modalMessage={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type='submit'>submit</button>
        </div>
      </form>
      {state.people.map(({ id, name }) => {
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_PERSON', payload: { id: id } })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
