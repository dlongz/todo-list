import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import React, {useState, useEffect} from 'react';

function App() {
  const [taskComplete, setTaskComplete] = useState(false);
  const [taskArr, setTaskArr] = useState(() =>{

    const saved = localStorage.getItem("taskArr");
    const initialValue = JSON.parse(saved);
    return initialValue || ""
});

useEffect(() => {
  localStorage.setItem("taskArr", JSON.stringify(taskArr));
})

  return (
    <div className="App">
      <Form taskArr={taskArr} setTaskArr={setTaskArr} taskComplete={taskComplete}/>
      <List taskArr={taskArr} setTaskArr={setTaskArr} />
    </div>
  );
}

export default App;
