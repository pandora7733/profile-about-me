import './App.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Profile from './routes/profile';
import RoadMap from './routes/roadmap';
import ForeignTrip from './routes/overseasTraining';
import Project from './routes/project';
import Qualifications from './routes/qualifications';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route }
  from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/qualifications' element={<Qualifications />} />
          <Route path="/overseasTraining" element={<ForeignTrip />} />
          <Route path="/RoadMap" element={<RoadMap />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
