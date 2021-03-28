import { createStore } from "redux"

const initialState = {
    tasks: [],
    idCounter: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === 'ADD_TASK') {
        action.payload.id = ++state.idCounter
        return {
            ...state,
            tasks: state.tasks.concat(action.payload),
            idCounter: action.payload.id
        }
    }

    if (action.type === 'DELETE_TASK') {
        return {
            ...state,
            tasks: state.tasks.filter(e => e.id !== action.payload)
        }
    }

    return state
}

export default createStore(reducer)