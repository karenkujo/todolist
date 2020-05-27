import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '@/pages/todoList/store/action';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
    }
    handleChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    };
    render() {
        const { query } = this.state;
        const { addToTodoList } = this.props;
        return (
            <div className="add-wrapper">
                <input onChange={this.handleChange} type="text" />
                <button onClick={addToTodoList.bind(null, query)}>添加</button>
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return bindActionCreators(action, dispatch);
};

export default connect(null, mapDispatch)(AddItem);
