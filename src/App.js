import ProjectsList from "./components/ProjectsList";
import "./components/ProjectsList.css";
import ProjectsShow from "./components/ProjectsShow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectsList />} />
          <Route path="/project-name/:name" element={<ProjectsShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
