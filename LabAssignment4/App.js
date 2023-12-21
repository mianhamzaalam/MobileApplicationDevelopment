import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/todoList';


const App = () => {
  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  );
};

export default App;
