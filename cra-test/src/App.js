import './App.css';
import Todolist from './TodoList';

function App() {
  console.log('NODE_ENV = ' + process.env.NODE_ENV);
  return (
    <div className="App">
      <Todolist />
    </div>
  );
}

export default App;
