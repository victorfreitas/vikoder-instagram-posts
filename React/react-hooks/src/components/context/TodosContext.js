import { createContext } from 'react'

const TodosContext = createContext({
  todos: [
    { id: 1, key: '1', title: 'JavaScript', complete: false },
    { id: 2, key: '2', title: 'Node.js', complete: false },
    { id: 3, key: '3', title: 'React', complete: false },
  ]
})

export const { Provider } = TodosContext
export default TodosContext
