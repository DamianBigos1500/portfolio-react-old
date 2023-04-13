import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Experience from '../components/Experience';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
    </>
  );
};

export default Home;
