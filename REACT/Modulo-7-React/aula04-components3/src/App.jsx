import { useState } from 'react'
import './App.css'


// function TaskList() {
//   const tasks = [{
//     title: 'Task List',
//     completed: false
//   },
//   {
//     title: 'tarefa01',
//     completed: true
//   },
//   {
//     title: 'tarefa02',
//     completed: false
//   },
//   {
//     title: 'tarefa03',
//     completed: true
//   },
//   ];

//   function handleTaskComplete(task) {
//     { task.completed && console.log(task.title) }

//     // if (!task.completed) {
//     // }
//   }

//   return (
//     <>
//       {tasks.map((task, index) => (
//         <TaskItem task={task} key={index} func={handleTaskComplete(task)} />
//       ))}
//     </>
//   )
// }


// function TaskItem(props) {
//   function onTaskComplete(msg) {
//     alert(msg)
//   }

//   return (
//     <div className='container'>
//       <h3>{props.task.title}</h3>
//       <span onClick={() => onTaskComplete(props.task.title)}>{props.task.completed ? 'concluído' : null}</span>
//     </div>
//   )
// }


// function App() {
//   return (
//     <>
//       <TaskList />
//     </>
//   )
// }
// export default App;


// ALTERNATIVA COM CHALLENGE
// import { useState } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([
    {
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
    }
  ])

  function handleTaskComplete(task) {
    setTasks(tasks.map(t => {
      if (t.title === task.title) {
        return {
          ...t,
          completed: true
        }
      }
      return t
    }))
  }

  return (
    <>
      {tasks.map((task, index) => (
        <TaskItem
          task={task}
          key={index}
          handleTaskComplete={() => handleTaskComplete(task)} />
      ))}
    </>
  )
}

function TaskItem(props) {

  return (
    <div className='container'>
      <h3>{props.task.title}</h3>
      <span onClick={props.handleTaskComplete}>
        {props.task.completed ? 'concluído' : 'concluir'}
      </span>
    </div>
  )
}

function App() {
  return (
    <TaskList />
  )
}

export default App;