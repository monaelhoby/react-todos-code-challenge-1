import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

import * as actionsList from '../../redux/action'

import styles from './styles.module.sass';

const  TodoForm = (props) => {

  const [title, setTitle] = useState('')

  // handle actions in store
  const dispatch = useDispatch()

  // handle change on input
  const handleSubmit = e => {
    e.preventDefault()
    setTitle('')
    return dispatch(actionsList.addTitle(title))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className={styles.addBtn} type="submit" >
        Add 
      </button>
    </form>
  );
}

export default TodoForm;
