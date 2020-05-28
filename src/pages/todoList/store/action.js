import axios from 'axios';
import {
    GET_TODOLIST,
    ADD_TO_TODOLIST,
    DELETE_ITEM,
    CHANGE_ITEM,
    ENSURE_CHANGE,
    CANCEL_DIALOG,
    SELECT_PAGE
} from './constants';
import store from '@/store';

const { getState } = store;


/*获取初始todoList
 *@method getTodoList
 */
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/todoList.json').then((res) => {
            if (res.status === 200) {
                if (res.data && res.data.data) {
                    let todoList = res.data.data;
                    dispatch({
                        type: GET_TODOLIST,
                        todoList,
                    });
                }
            }
        });
    };
};

/*分页器选择页数，包括上一页，下一页
 *@method selectPage
 *@param {Number}curPage 需要跳转到的页面 {Number}maxPage 总页数
 *@return {Object} action需要提交的数据
 */
export const selectPage = (curPage, maxPage) => {
    if (curPage < 0) {
        curPage = 0;
    } else if (curPage > maxPage) {
        curPage = maxPage;
    }
    return {
        type: SELECT_PAGE,
        page: curPage,
    };
};

/*添加一条数据到todoList
 *@method addToTodoList
 *@param {String}}query 需要添加的数据
 *@return {Object} action需要提交的数据
 */
export const addToTodoList = (query) => {
    let todoList = getState().todoListReducer.todoList.slice(0);
    if (query === '') {
        return {
            type: ADD_TO_TODOLIST,
            todoList,
        };
    }
    todoList = [...todoList, query];
    return {
        type: ADD_TO_TODOLIST,
        todoList,
    };
};

/*从todoList删除一条数据
 *@method deleteItem
 *@param {Number}}index 需要删除的数据的索引
 *@return {Object} action需要提交的数据
 */
export const deleteItem = (index) => {
    let todoList = getState().todoListReducer.todoList.slice(0);
    todoList.splice(index, 1);
    return {
        type: DELETE_ITEM,
        todoList: todoList,
    };
};

/*从todoList更改某条数据
 *@method changeItem
 *@param {Number}}index 需要更改的数据的索引
 *@return {Object} action需要提交的数据
 */
export const changeItem = (index) => {
    const showDialog = true;
    const activeIndex = index;
    return {
        type: CHANGE_ITEM,
        showDialog,
        activeIndex,
    };
};

/*确认更改数据
 *@method ensureChange
 *@param {String}}query 更改后数据的内容
 *@return {Object} action需要提交的数据
 */
export const ensureChange = (query) => {
    let todoList = getState().todoListReducer.todoList.slice(0);
    const activeIndex = getState().todoListReducer.activeIndex;
    const showDialog = false;
    if (query === '') {
        todoList.splice(activeIndex, 1);
    } else {
        todoList[activeIndex] = query;
    }
    return {
        type: ENSURE_CHANGE,
        todoList,
        showDialog,
    };
};

/*取消更改数据
 *@method onCancel
 *@return {Object} action需要提交的数据
 */
export const onCancel = () => {
    const showDialog = false;
    return {
        type: CANCEL_DIALOG,
        showDialog,
    };
};
