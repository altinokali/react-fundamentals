import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className ="container">
     <Navbar name = "User App "/>
     <hr/>
     <User 
      name = "Ali Altionk"
      department = "Software Development"
      salary = "9000"  
      />
      <User 
      name = "Merve Altınok"
      department ="Tester"
      salary = "8500"  
      />
    </div>
  )
}

export default App
