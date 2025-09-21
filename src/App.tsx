import './App.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Profile from './routes/profile';
import RoadMap from './routes/roadmap';
import ForeignTrip from './routes/OverseasTraining';
import AboutMe from './routes/aboutme';
import Project from './routes/project';
import Qualifications from './routes/qualifications';
import {
  BrowserRouter as Router,
  Routes,
  Route }
  from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/qualifications' element={<Qualifications />} />
        <Route path="/overseasTraining" element={<ForeignTrip />} />
        <Route path="/RoadMap" element={<RoadMap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
