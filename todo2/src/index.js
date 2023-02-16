import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';


const storageMiddleware = store => next => action => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
};

const savedState = JSON.parse(localStorage.getItem('app-state'));
const store = configureStore({
  reducer: tasksReducer,
  //preloadedState: savedState ? savedState : tasksReducer(undefined, {type: 'INIT'}),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk)
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
