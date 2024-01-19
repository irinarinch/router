import { Routes, Route } from "react-router-dom";
import HomePage from "../../../pages/task1/HomePage";
import DriftPage from "../../../pages/task1/DriftPage";
import TimeAttackPage from "../../../pages/task1/TimeAttackPage";
import ForzaPage from "../../../pages/task1/ForzaPage";

const Main = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Routes>
    </div>
  );
};

export default Main;
