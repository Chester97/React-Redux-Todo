import React, {useRef, useEffect} from 'react';
import { connect } from 'react-redux';
import { addTodo, resetTodo, filterTodo } from '../../duck/actions/index';
import { validateInput } from '../../utils/validateInput';
import styles from './Form.module.scss';

function Form({addTodo}) {

    const inputValue = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        if(validateInput(inputValue.current.value)) {
          addTodo({
            name: inputValue.current.value,
            id: +new Date()
          });
          inputValue.current.focus();
        }
        inputValue.current.value = "";
        inputValue.current.focus();
    }

    useEffect(() => {
        inputValue.current.focus();
    },[])

    return (
        <form onSubmit={handleClick}>
            <input className="input-block" ref={inputValue} placeholder="Your task..." type="text"/>
            <button className="btn-success btn-default margin-top-large">Add</button>
            <p>or...</p>
        </form>
    )
}   


const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (payload) => dispatch(addTodo(payload)),
      resetTodo: () => dispatch(resetTodo()),
      filterTodo: (payload) => dispatch(filterTodo(payload))
    }
}

export default connect(null,mapDispatchToProps)(Form);