import React from 'react';
import { connect } from 'react-redux';
import { filterTodo } from '../../duck/actions/index';
import styles from './TodoItem.module.scss';


function TodoItem({filterTodo, index, item}) {
    
    return (
        <div class="row flex-middle col-12">
            <h4 className="badge">{index+1}. </h4>
            <h4 className="col-8 padding-left-small"> {item.name}</h4>
            <button className="btn-danger" onClick={() => filterTodo(item.id)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterTodo: (payload) => dispatch(filterTodo(payload))
    }
}


export default connect(null,mapDispatchToProps)(TodoItem);