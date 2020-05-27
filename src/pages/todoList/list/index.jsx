import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '@/pages/todoList/store/action';

class List extends Component {
    render() {
        const { todoList, deleteItem, changeItem } = this.props;
        return (
            <div className='list'>
                {todoList.map((item, index) => (
                    <div className='list-item' key={index}>
                        <p>{item}</p>
                        <button onClick={changeItem.bind(null, index)}>修改</button>
                        <button onClick={deleteItem.bind(null ,index)}>删除</button>
                    </div>
                ))}
            </div>
        );
    }
}

const mapState = (state) => ({
    todoList: state.todoListReducer.todoList,
});
const mapDispatch = (dispatch) => {
    return bindActionCreators(action, dispatch);
};

export default connect(mapState, mapDispatch)(List);
