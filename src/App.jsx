import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './router/layout';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
