import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Dashboard } from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/project/:id" Component={ProjectDetails} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
