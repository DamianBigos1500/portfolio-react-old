import { FC } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Schools from '../components/Schools';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <About />
      <Schools />
      <Projects />
    </>
  );
};

export default Home;
