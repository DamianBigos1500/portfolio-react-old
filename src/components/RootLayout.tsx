import { FC } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const RootLayout: FC = () => {
  return (
    <main className="font-mont bg-light dark:bg-dark w-full min-h-screen dark:text-light">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default RootLayout;
