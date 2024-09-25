import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Resume from './pages/Resume';
import AthleteCharts from './pages/projects/AthleteCharts';
import Projects from './pages/Projects';
import Univend from './pages/projects/Univend';
import FinderKeepers from './pages/projects/FindersKeepers';
import SleeperDynasty from './pages/projects/SleeperDynasty';
import ImpossibleSignup from './pages/projects/ImpossibleSignup';
import StarWarsIntro from './pages/projects/StarWarsIntro';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/athlete-charts" element={<AthleteCharts />} />
      <Route path="/projects/univend" element={<Univend />} />
      <Route path="/projects/finders-keepers" element={<FinderKeepers />} />
      <Route path="/projects/sleeper-dynasty" element={<SleeperDynasty />} />
      <Route
        path="/projects/impossible-signup"
        element={<ImpossibleSignup />}
      />
      <Route path="/projects/star-wars-intro" element={<StarWarsIntro />} />
    </Routes>
  );
}

export default App;
