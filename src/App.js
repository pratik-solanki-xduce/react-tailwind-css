import { useState } from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {

  const [todoList, setTodoList] = useState([])

  const Items = todoList.map((todo, index) => {
    return <TodoItems todo={todo} index={index} key={index} todoList={todoList} setTodoList={setTodoList} />
  })

  const submit = (event) => {
    const todoName = event.target.todoName.value;
    if (!todoList.includes(todoName)) {
      setTodoList([...todoList, todoName])
      NotificationManager.success(`Successfully Added`)
    } else {
      NotificationManager.error("Already in todo List")
    }
    event.preventDefault()
  }

  return (
    <div className="App">
      <NotificationContainer />
      <h1>Todo List</h1>

      <form onSubmit={submit}>
        <input type='text' name="todoName" id="todoName" required /><button>Save</button>
      </form>

      <div className='todoDiv'>
        <ul>
          {Items}
        </ul>
      </div>
    </div>
  );
}

export default App;


export const TodoItems = ({ todo, index, todoList, setTodoList }) => {
  const deleteRow = () => {
    setTodoList(
      todoList.filter((v, i) => i !== index)
    )
    NotificationManager.error(`Successfully Deleted`)
  }
  return (
    <li key={index}>{index+1}. {todo} <span onClick={deleteRow}>&times;</span></li>
  )
}
