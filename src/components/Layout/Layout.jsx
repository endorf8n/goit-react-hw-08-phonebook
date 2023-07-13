import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { HeaderStyle, MainStyle } from './layout.styled';

export const Layout = () => {
  return (
    <>
      <HeaderStyle>
        <Navigation />
      </HeaderStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </>
  );
};
