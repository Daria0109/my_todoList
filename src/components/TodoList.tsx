import React, {MouseEvent} from 'react';
import {TodoType} from './pages/TodosPage';

type TodoListPropsType = {
  todos: Array<TodoType>
  changeStatusTodo: (todoID: number) => void
  removeTodo: (todoID: number) => void
}

const TodoList: React.FC<TodoListPropsType> = ({todos, changeStatusTodo, removeTodo}) => {
  const onRemoveTodo = (e: MouseEvent<HTMLElement>, todoID: number) => {
    e.preventDefault();
    removeTodo(todoID)
  }

  if (todos.length === 0) {
    return <p className='center'>TodoList is empty...</p>
  }
  return <ul>
    {todos.map(t => {
      const classes = ['todo'];
      if (t.isDone) {
        classes.push('completed')
      }
      return <li className={classes.join(' ')} key={t.id}>
        <label>
          <input type="checkbox"
                 checked={t.isDone}
                 onChange={changeStatusTodo.bind(null, t.id)}/>
          <span>{t.title}</span>
          <i className='material-icons red-text'
             onClick={(e) => onRemoveTodo(e, t.id)}>delete</i>
        </label>
      </li>
    })
    }
  </ul>
}
export default TodoList;