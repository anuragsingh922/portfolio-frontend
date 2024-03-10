import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Failure from './Components/Toast/Failure'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (
    <>
    <Toaster position="top-right" />
    

    <Router>
        <Routes>
          <Route path="/" element={<> <Home scrollToSection={scrollToSection}/> <Projects/> <Skills/> <Footer/></>}>
            <Route path="/*" element={<Failure />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
