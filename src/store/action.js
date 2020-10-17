
// Action creators
export const types = {
    ADD_ToDo : 'ADD_ToDo',
    DELETE_ToDo : 'DELETE_ToDo',
    UPDATE_ToDo : 'UPDATE_ToDo',
    IS_COMPELETED : "IS_COMPELETED "
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

//is compeleted
export const isCompeleted = id => ({
    type : types.IS_COMPELETED,
    id
})