import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { HeaderStyle, MainStyle } from './layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <HeaderStyle>
        <Navigation />
      </HeaderStyle>
      <MainStyle>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainStyle>
    </>
  );
};
