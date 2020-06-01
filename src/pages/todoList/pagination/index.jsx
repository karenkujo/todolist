import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '@/pages/todoList/store/action';

class Pagination extends Component {
    render() {
        const { selectPage, page, maxPage, paginationList } = this.props;
        return (
            <div className="pageination-wrapper">
                <button onClick={selectPage.bind(null, page - 1, maxPage)}>
                    上一页
                </button>
                {paginationList.map((item, index) => {
                    return (
                        <span
                            onClick={selectPage.bind(null, item - 1, maxPage)}
                            className={page + 1 === item ? 'active' : ''}
                            key={index}
                        >
                            {item}
                        </span>
                    );
                })}
                <button onClick={selectPage.bind(null, page + 1, maxPage)}>
                    下一页
                </button>
                <div>共{maxPage + 1}页</div>
            </div>
        );
    }
}

const mapState = (state) => ({
    page: state.todoListReducer.page,
    maxPage: state.todoListReducer.maxPage,
    paginationList: state.todoListReducer.paginationList,
});
const mapDispatch = (dispatch) => {
    return bindActionCreators(action, dispatch);
};

export default connect(mapState, mapDispatch)(Pagination);
