import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import EmployeeList from "./components/EmployeeList";
import EmployeeRegister from './components/EmployeeRegister';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeRegister/>} />  
          <Route path="/list" element={<EmployeeList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
