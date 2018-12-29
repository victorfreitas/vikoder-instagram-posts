export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        todos: state.todos.map(todo => (
          todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
        )),
      }

    default:
      return state
  }
}
