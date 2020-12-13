import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import React, {useEffect, useState} from 'react';


declare var confirm: (question: string) => boolean

export type TodoType = {
  id: number
  title: string
  isDone: boolean
}

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  useEffect(() => {
    const todosState = JSON.parse(localStorage.getItem('todos') || '[]') as Array<TodoType>;
    setTodos(todosState)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title: string) => {
    const newTodo: TodoType = {id: Date.now(), title, isDone: false}
    setTodos(state => [newTodo, ...state])
  }
  const changeStatusTodo = (todoID: number) => {
    setTodos(state => state.map(t => {
      if (t.id === todoID) {
        return {...t, isDone: !t.isDone}
      } else {
        return t
      }
    }))
  }
  const removeTodo = (todoID: number) => {
    const shouldRemove = confirm('Are you sure you want to delete this TODO?')
    if (shouldRemove) {
      setTodos(state => state.filter(t => t.id !== todoID))
    }
  }
  return <>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos}
              changeStatusTodo={changeStatusTodo}
              removeTodo={removeTodo}/>
  </>
}
export default TodosPage;