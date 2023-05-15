import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './router/layout';
import Dashboard from './pages/dashboard';
import Test from './pages/test';
// import SignIn from './pages/signIn';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/SignIn" element={<SignIn />} /> */}
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
