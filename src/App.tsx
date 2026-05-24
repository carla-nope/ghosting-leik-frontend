import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import YokaiPage from './pages/YokaiPage';
import QuizPage from './pages/QuizPage';
import StoryOraclePage from './pages/StoryOraclePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StoryDetailPage from './pages/StoryDetailPage';
import YokaiDetailPage from './pages/YokaiDetailPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="stories/:slug" element={<StoryDetailPage />} />
          <Route path="yokai" element={<YokaiPage />} />
          <Route path="yokai/:slug" element={<YokaiDetailPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="story-oracle" element={<StoryOraclePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="success" element={<SuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;