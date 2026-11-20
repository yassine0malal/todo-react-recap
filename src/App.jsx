import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddTask from './AddTask';

function App() {
  const [todosList, setTodosList] = useState([{ id: 1, task: "Doing Dishes", done: false }])
  const [count, setCount] = useState(0);
  const [task, setTask] = useState(todosList[0]?.task ?? null);

  function addTask(task) {
    const id = todosList.map((e) => e).length + 1;
    const element = {
      id: id,
      task: task,
      done: false
    }
    setTodosList((old) => [element, ...old])

  }

  function updateTask(event, idElement) {
    console.log("new event", event.target.checked)
    const newList = todosList.map((ele) => {
      if (ele.id == idElement) {
        ele.done = !ele.done
      }
      return ele
    })
    console.log("new list", newList)
    setTodosList((old)=>[...newList]);

  }


  function deleteTask(event, idElement) {
    const newList = todosList?.filter((ele) => ele.id != idElement)
    console.log("new list", newList)
    setTodosList(newList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mes tâches</h1>
        <p>Mon premier projet React</p>

        <div className='counter'>
          <h3>count {count}</h3>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>

        <AddTask todos={todosList} addTask={addTask} />
        <h2> Ma liste :  Toutes À faire Terminées </h2>
        <ul>

          {
            todosList?.map((e) => (
              <li className='element' key={e.id}>
                <input onClick={(ev) => updateTask(ev, e.id)} type="checkbox" defaultValue={e?.done} />
                <p style={{ textDecoration: e?.done ? "line-through" : "none" }}>{e.task}</p>
                <button className='delete' onClick={(ev)=> deleteTask(ev,e.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </header>

      <h2> Statistiques : {todosList.length} Elements | { todosList?.filter((e)=>e.done == true).length } Done  | {todosList?.filter((e)=>e.done == false).length} Still</h2>
    </div>
  );
}

export default App;
