import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type TodoFormType = {
  addTodo: (title: string) => void
}

const TodoForm: React.FC<TodoFormType> = ({addTodo}) => {
  const [title, setTitle] = useState('');
  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const addTitle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo(title);
      setTitle('')
    }
  }

  return (
    <div className='input-field mt2'>
      <input type="text"
             id='title'
             placeholder='Title todo...'
             value={title}
             onChange={onchangeHandler} onKeyPress={addTitle}/>
      <label htmlFor='title' className='active'>Enter title TODO</label>
    </div>
  )
}
export default TodoForm;