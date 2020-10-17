import React from 'react';
import {useSelector} from 'react-redux'

import TodoItem from '../TodoItem';

const TodoList = () =>  {

  // getting all list from store 
  const listStore = useSelector(state => state)

  
  return (
    <div>
      {
        listStore.list ? ( listStore.list.map((list, index) => (
                              <TodoItem key={index} title={list.title} id={list.id}/>
                          )))  : ''
      }
    </div>
  );
}

export default TodoList;
