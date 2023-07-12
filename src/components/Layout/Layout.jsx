import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
