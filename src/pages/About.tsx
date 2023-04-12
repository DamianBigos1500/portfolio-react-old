import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText className={''} text={'Passion Fuel Purpose'} />
        <div className="grid w-full  grid-cols-8 gap-16">
          <div className="col-span-3 flex  flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default About;
