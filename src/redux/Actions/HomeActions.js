
const addTodo = (data) => ({
    type: 'ON_CHANGE_OF_TEXT',
    payload:data
})

const addToList = (data) => ({
    type: 'ON_ADD_TO_LIST',
    paload: data,
})


export default {
    addTodo,
    addToList,
}