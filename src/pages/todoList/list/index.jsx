import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '@/pages/todoList/store/action';

class List extends Component {
    render() {
        const { todoList, page, offset, deleteItem, changeItem } = this.props;
        const list = todoList.slice(page * offset, (page + 1) * offset);
        return (
            <div className="list">
                {list.length ? (
                    list.map((item, index) => (
                        <div className="list-item" key={index}>
                            <div>{item}</div>
                            <button onClick={changeItem.bind(null, (page * offset + index))}>
                                修改
                            </button>
                            <button onClick={deleteItem.bind(null, (page * offset + index))}>
                                删除
                            </button>
                        </div>
                    ))
                ) : (
                    <div>没有列表数据</div>
                )}
            </div>
        );
    }
}

const mapState = (state) => ({
    todoList: state.todoListReducer.todoList,
    page: state.todoListReducer.page,
    offset: state.todoListReducer.offset,
});
const mapDispatch = (dispatch) => {
    return bindActionCreators(action, dispatch);
};

export default connect(mapState, mapDispatch)(List);
