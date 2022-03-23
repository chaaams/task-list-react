import './App.css';
import Task from './Components/Task';
import TaskList from './Components/TaskList';
import { createContext, useState } from 'react';

 export const newContexte = createContext({})

function App() {
  
  const [state, setState] = useState([
  { id: 1, title: 'Tache 01', priority: 'Important'},        
  { id: 2, title: 'Tache 02', priority: 'Urgent'}   
]);





  return (
      <newContexte.Provider value={{state, setState}} >
        <div className="App">
          <Task/>
          <TaskList/>
        </div>
      </newContexte.Provider>
    
  );
}

export default App ;
