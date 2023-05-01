import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import EmployeeList from "./components/EmployeeList";
import EmployeeRegister from './components/EmployeeRegister';
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeRegister/>} />  
          <Route path="/list" element={<EmployeeList/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
