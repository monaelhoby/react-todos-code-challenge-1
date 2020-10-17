import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

import styles from './styles.module.sass';
import * as actionList from '../../store/action'


const  Form  = props => {


  const dispatch = useDispatch()

  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState(props.title)

  //to check if compeleted or not
  const [isCompeleted, setIsCompeleted] = useState(false)


  //toggle Edit State
  const toggleState = () =>{
    setIsEdit(!isEdit)
  }

  // when click on update button fire 
  const updateRow = (e) => {
    e.preventDefault();
    dispatch(actionList.updateToDo(props.id,title));
    toggleState();
  }

  //to remove item from list
    const deleteList = (id) => {
      return dispatch(actionList.deleteToDo(id))
  }

  // handle is_comelete function
  const setCompeleted = id => {
    setIsCompeleted(true)
    return dispatch(actionList.isCompeleted(id))
  }

// render default function without clicked on update button
 const RenderSimpleForm = () => {
  return (
    <div className={styles.card}>
    <h2 className={styles.title}>
      <span className={isCompeleted ? styles.isCompeletedStyle : ''}>{props.title}</span>
      </h2>
      <button className={styles.editBtn} type="submit" 
       onClick={ () => {toggleState()}}>Edit  </button>
      <button className={styles.deleteBtn} type="submit" 
        onClick={ () => {deleteList(props.id)}}>
        Delete
      </button>
      <button className={styles.completeBtn} 
        onClick={ () => setCompeleted(props.id)}>
        Compelete
      </button>
    </div>
  );
}

// when clicked on update buton
  const RenderUpdateRow = () => {
    return ( <form onSubmit={updateRow} className={styles.card}>
            <input
              type="text"
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className={styles.updateBtn}>
              Update
            </button>
            </form>)
  }
 
  return (

    <React.Fragment>
    <ul className={styles.cardWrapper}>
      {isEdit ?  <RenderUpdateRow title={props.title} /> : <RenderSimpleForm title={props.title} id={props.id}/> }
    </ul>
    </React.Fragment>

 )

}

export default Form
