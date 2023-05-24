import { useState } from 'react'
import './App.css'


function TaskList() {

  const tasks = [{
    title: 'Task List',
    completed: false
  },
  {
    title: 'tarefa01',
    completed: true
  },
  {
    title: 'tarefa02',
    completed: false
  },
  {
    title: 'tarefa03',
    completed: true
  },
  ];

  function handleTaskComplete(title) {

  }

  return (
    <>
      {tasks.map((task, index) => (
        // TaskItem(task, index)
        <TaskItem task={task} index={index} />
      ))}
    </>
  )
}

function TaskItem(props, index) {
  // console.log(props)
  // console.log(props.index)

  function onTaskComplete(msg) {
    alert(msg)
  }

  return (
    <div className='container' key={props.index}>
      <h3>{props.task.title}</h3>
      <span onClick={() => onTaskComplete(props.task.title)}>{props.task.completed ? 'concluído' : null}</span>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskList />
    </>
  )
}
export default App;
