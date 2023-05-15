import { Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Test from '../pages/test';
// import SignIn from '../pages/signIn';

function Routes() {
  return (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />
      {/* <Route path="/SignIn" element={<SignIn />} /> */}
    </>
  );
}

export default Routes;