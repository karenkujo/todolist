import {
    GET_TODOLIST,
    ADD_TO_TODOLIST,
    DELETE_ITEM,
    CHANGE_ITEM,
    ENSURE_CHANGE,
    CANCEL_DIALOG,
    SELECT_PAGE
} from './constants';

const initialState = {
    todoList: [],
    showDialog: false,
    activeIndex: 0,
    page: 0,
    offset: 10,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOLIST:
            return {
                ...state,
                todoList: action.todoList,
            };
        case SELECT_PAGE:
            return {
                ...state,
                page: action.page,
            };
        case ADD_TO_TODOLIST:
            return {
                ...state,
                todoList: action.todoList,
            };
        case DELETE_ITEM:
            return {
                ...state,
                todoList: action.todoList,
            };
        case CHANGE_ITEM:
            return {
                ...state,
                showDialog: action.showDialog,
                activeIndex: action.activeIndex,
            };
        case ENSURE_CHANGE:
            return {
                ...state,
                todoList: action.todoList,
                showDialog: action.showDialog,
            };
        case CANCEL_DIALOG:
            return {
                ...state,
                showDialog: action.showDialog,
            };
        default:
            return state;
    }
};
