import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import PageForm from "./pages/PageForm";
import PageList from "./pages/PageList";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageForm/>} />  
          <Route path="/list" element={<PageList/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
