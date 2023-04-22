import { Fragment } from 'react';
import { Auth, Header, Counter, UserProfile } from './components/index';
import { useSelector } from 'react-redux';
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
