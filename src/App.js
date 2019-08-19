import React from 'react';
import { connect } from 'react-redux';
import { resetTodo } from './duck/actions/index';
import Form from './components/Form/Form';
import TodoItem from './components/TodoItem/TodoItem';
import styles from './App.module.scss';


function App({resetTodo, todos}) {

  return (
    <div className={styles.main_container}>
      <div className={styles.main_left_container}> 
        <Form />
        <button className="btn-warning" onClick={() => resetTodo()}>ClearTODO</button>
      </div>
      <div className={styles.main_right_container}>
        <h1>List of our Tasks</h1>
        {todos && todos.map((item,index) => (
          <TodoItem index={index} item={item} key={index}/>
        ))}
      </div>
    </div>
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    resetTodo: () => dispatch(resetTodo()),
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
