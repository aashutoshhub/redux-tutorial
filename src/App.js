import logo from './logo.svg';
import './App.css';
import User from "./User";

//video_04
function App() {
  return (
    <div className="App">
      <h1>App component</h1>
      <User data={{name:"Aashu",age:22}} />
    </div>
  );
}

export default App;
