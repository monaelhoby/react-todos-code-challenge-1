
import { createStore } from 'redux';
import Reducer from './reducer'

// put loadState in persistedState variable
const loadState = () => {
    try {
        const data = localStorage.getItem('state');
        if (data === null) {
          return undefined;
        }
        return JSON.parse(data);
      }  catch(err) {
        // ignore write errors
        throw new Error ("something is error")
      }
    }; 
  
   // to overrides the initial state put persistedState
  // run store with reducer
  export const store = createStore(Reducer,loadState())
  
