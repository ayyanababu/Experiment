const initialState = {
    currentTodo: '',
    listOfTodos: []
}

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CHANGE_OF_TEXT':
            return {
                currentTodo: action.payload,
            }
            break;
        default:
            return state;
            break;
    }
}

export default HomeReducer;