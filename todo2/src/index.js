import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';


const store = configureStore({
  reducer: tasksReducer
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <TodoApp store={store} />
  </Provider>
);
