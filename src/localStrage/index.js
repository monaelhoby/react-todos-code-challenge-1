// localStorage.js

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
      } catch(err) {
        // errors
        throw new Error('Something went wrong!');
      }
};