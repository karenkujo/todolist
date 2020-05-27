import axios from 'axios';
import { GET_TODOLIST, ADD_TO_TODOLIST, DELETE_ITEM, CHANGE_ITEM, ENSURE_CHANGE, CANCEL_DIALOG } from './constants'
import store from '@/store'

const { getState } = store

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/todoList.json').then(res => {
            if (res.status === 200) {
                if (res.data && res.data.data) {
                    let todoList = res.data.data
                    dispatch({
                        type: GET_TODOLIST,
                        todoList
                    })
                }
            }
        })
    }
}

export const addToTodoList = (query) => {
    let todoList = getState().todoListReducer.todoList.slice(0)
    if (query === '') {
        return {
            type: ADD_TO_TODOLIST,
            todoList
        }
    }
    todoList = [...todoList, query]
    return {
        type: ADD_TO_TODOLIST,
        todoList
    }
}

export const deleteItem = (index) => {
    let todoList = getState().todoListReducer.todoList.slice(0)
    todoList.splice(index, 1)
    return {
        type: DELETE_ITEM,
        todoList: todoList
    }
}

export const changeItem = (index) => {
    const showDialog = true
    const activeIndex = index
    return {
        type: CHANGE_ITEM,
        showDialog,
        activeIndex
    }
}

export const ensureChange = (query) => {
    let todoList = getState().todoListReducer.todoList.slice(0)
    const activeIndex = getState().todoListReducer.activeIndex
    const showDialog = false
    if (query === '') {
        todoList.splice(activeIndex, 1)
    } else {
        todoList[activeIndex] = query
    }
    return {
        type: ENSURE_CHANGE,
        todoList,
        showDialog
    }
}

export const onCancel = () => {
    const showDialog = false
    return {
        type: CANCEL_DIALOG,
        showDialog
    }
}