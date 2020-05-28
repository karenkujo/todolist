import React, { Component } from 'react';
import './index.css';
import AddItem from '@/pages/todoList/addItem';
import List from '@/pages/todoList/list';
import Dialog from '@/component/dialog';
import Pagination from '@/pages/todoList/pagination'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './store/action';

class todoList extends Component {
    componentDidMount() {
        this.props.getTodoList();
    }
    render() {
        const { showDialog } = this.props;
        return (
            <div style={{ overflow: 'hidden' }}>
                <AddItem />
                <List />
                <Pagination />
                {showDialog ? <Dialog /> : ''}
            </div>
        );
    }
}

const mapState = (state) => ({
    showDialog: state.todoListReducer.showDialog,
});
const mapDispatch = (dispatch) => {
    return bindActionCreators(action, dispatch);
};

export default connect(mapState, mapDispatch)(todoList);
