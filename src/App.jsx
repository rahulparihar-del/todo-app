import { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import './App.css'

export default function App() {
  const Info = "Cool";

  const [tasks, setTasks] = useState([]);

  return (
    <div className='App'>
    <Header/>
    <main>
    <AddTask tasks={tasks} setTasks={setTasks}/>
    <TaskList Info={Info} tasks={tasks} setTasks={setTasks}/> 
    </main>
    <Footer/>
    </div>
  );
}
