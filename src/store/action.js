
// Action creators
export const types = {
    ADD_ToDo : 'ADD_ToDo',
    DELETE_ToDo : 'DELETE_ToDo',
    UPDATE_ToDo : 'UPDATE_ToDo'
}


// action implmentaion


// adding item
export const addToDo = title => ({
    type : types.ADD_ToDo,
    title
})

// deleting item
export const deleteToDo = id => ({
    type : types.DELETE_ToDo,
    id
})

//update item
export const updateToDo = (id, title) => ({
    type : types.UPDATE_ToDo,
    id,
    title
})