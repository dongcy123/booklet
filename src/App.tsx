import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ProcessGuide } from './pages/ProcessGuide/ProcessGuide';
import { TemplateLibrary } from './pages/TemplateLibrary/TemplateLibrary';
import { ModificationGuide } from './pages/ModificationGuide/ModificationGuide';
import 'tdesign-react/es/style/index.css';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProcessGuide />} />
          <Route path="/templates" element={<TemplateLibrary />} />
          <Route path="/modifications" element={<ModificationGuide />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;