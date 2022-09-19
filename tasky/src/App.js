import logo from './logo.svg';
import './App.css';
import Task from './components/Task'
import Reach, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks:[
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow"},
      { id: 3, title: "Tidy up", deadline: "Today"},
      { id: 4, title: "Cook", description: "Fry steak and cook pasta", deadline: "Today"},
      { id: 5, title: "Water flowers", description: "Don't water them at noon", deadline: "The day after tomorrow"},
    ]
  });
  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
        <Task 
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key = {task.id}
        />
      ))} 
    </div>
  );
}

export default App;
