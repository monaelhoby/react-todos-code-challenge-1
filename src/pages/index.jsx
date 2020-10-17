import React from 'react';
import { Provider } from 'react-redux';

import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import {store} from '../store/index'
import {saveState} from '../localStrage/index';



  // update state in store
  store.subscribe(() => {
    saveState({
      list: store.getState().list
    });
  });

function IndexPage() {
  return (
    <main>
    <Provider store={store}>
      <Header />
      <ContentContainer>
        <TodoForm />
        <TodoList />
      </ContentContainer>
    </Provider>
    </main>
  );
}

export default IndexPage;
