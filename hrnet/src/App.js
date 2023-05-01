import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import PageRegister from "./components/PageRegister";
import EmployeeList from "./components/EmployeeList";
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageRegister/>} />  
          <Route path="/list" element={<EmployeeList/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
