import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Dashboard } from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/project/:id" Component={ProjectDetails} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
