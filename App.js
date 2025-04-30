import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
function App() {
  return (
    <div className="App">
       <ParentComponent/>
       <ChildComponent/>
    </div>
  );
}

export default App;
