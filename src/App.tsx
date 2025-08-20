import './App.css'
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import Home from "./routes/main"
import RoadMap from './routes/roadmap'
import ForeignTrip from './routes/foreigntrip'
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
        <Route path="/" element={<Home />} />
        <Route path="/home/RoadMap" element={<RoadMap />} />
        <Route path="/home/ForeignTrip" element={<ForeignTrip />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;