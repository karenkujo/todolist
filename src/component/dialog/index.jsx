import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '@/pages/todoList/store/action';

class Dialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }
    componentDidMount() {
        this.setState({
            query: this.props.todoList[this.props.activeIndex]
        })
    }
    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }
    render() {
        const { query } = this.state
        const { ensureChange, onCancel } = this.props
        return (
            <div>
                <input type="text" value={query} onChange={this.handleChange} />
                <button onClick={ensureChange.bind(null, query)}>确认</button>
                <button onClick={onCancel}>取消</button>
            </div>
        );
    }
}

const mapState = (state) => ({
    activeIndex: state.todoListReducer.activeIndex,
    todoList: state.todoListReducer.todoList
});
const mapDispatch = (dispatch) => {
    return bindActionCreators(action, dispatch);
};

export default connect(mapState, mapDispatch)(Dialog);