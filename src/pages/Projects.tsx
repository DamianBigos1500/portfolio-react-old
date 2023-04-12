import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <main className=" w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-0">
        <AnimatedText />
      </Layout>
    </main>
  );
};

export default Projects;
