/**
 * todosReducer.js
 * @author vikoder
 */
export default (state, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        todos: action.payload,
        isWait: false,
      }

    case 'WAIT_TODO':
    case 'ADD_TODO':
    case 'EDIT_TODO':
    case 'TOGGLE_TODO':
    case 'REMOVE_TODO':
      return {
        ...state,
        isWait: true,
      }

    default:
      return state
  }
}
