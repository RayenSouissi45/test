import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Test from '../pages/Test';

function Routes() {
  return (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />
    </>
  );
}

export default Routes;