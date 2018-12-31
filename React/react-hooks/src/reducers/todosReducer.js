export default (state, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        isWait: false,
        todos: action.payload,
      }

    case 'WAIT_TODO':
      return {
        ...state,
        isWait: action.payload,
      }

    case 'ADD_TODO':
      return {
        ...state,
        isWait: false,
        todos: [action.payload, ...state.todos],
      }

    case 'EDIT_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        isWait: false,
        todos: [...state.todos].map(todo => (
          todo.id === action.payload.id ? action.payload : todo
        )),
      }

    case 'REMOVE_TODO':
      return {
        ...state,
        isWait: false,
        todos: [...state.todos].filter(todo => (
          todo.id !== action.payload
        )),
      }

    case 'ERROR_TODO':
      return {
        ...state,
        error: action.payload,
        isWait: false,
      }

    default:
      return state
  }
}
