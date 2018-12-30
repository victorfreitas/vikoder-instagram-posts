export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
    console.log('TOGGLE_TODO')
      return {
        ...state,
        todos: state.todos.map(todo => (
          todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
        )),
      }

    case 'ADD_TODO':
    console.log('ADD_TODO')
      const id = state.todos.length + 1
      const todo = { id, key: `${id}${Math.floor(Math.random() * 9999)}`, title: action.payload, complete: false }
      const newTodos = [...state.todos]

      newTodos.push(todo)

      return {
        ...state,
        todos: newTodos,
      }

    case 'REMOVE_TODO':
    console.log('REMOVE_TODO')
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }

    case 'EDIT_TODO':
    console.log('EDIT_TODO')
      return {
        ...state,
        todos: state.todos.map(todo => (
          todo.id === action.payload.id ? { key: todo.key, ...action.payload } : todo
        )),
      }

    default:
      return state
  }
}
