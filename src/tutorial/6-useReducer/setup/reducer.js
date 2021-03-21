export const reducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    const newPeople = [...state.people, action.payload];
    return {
      people: newPeople,
      showModal: true,
      modalContent: 'Added person',
    };
  }
  if (action.type === 'EMPTY_INPUT') {
    return {
      ...state,
      showModal: true,
      modalContent: 'Please enter input',
    };
  }
  if (action.type === 'REMOVE_PERSON') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return {
      people: newPeople,
      showModal: true,
      modalContent: 'Person removed',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      showModal: false,
    };
  }
  throw new Error('no matching action type');
};
