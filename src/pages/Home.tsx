import { FC } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Schools from './Schools';
import Skills from './Skills';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Schools />
      <Projects />
    </>
  );
};

export default Home;
