import logo from './logo.svg';
import './App.css';
import User from "./User";
import HomeContainers from './containers/homeContainers';
import HeaderContainer from './containers/HeaderContainer';


//video_04
function App() {
  return (
    // <div className="App">
    //   <h1>App component</h1>
    //   <User data={{name:"Aashu",age:22}} />
    // </div>
   <>
        <HeaderContainer/>
        <HomeContainers/>
   </>
  

    
  );
}

export default App;
