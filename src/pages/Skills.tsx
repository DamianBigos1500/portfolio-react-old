import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import Icons from '../components/Icons';

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <Layout className="mt-48">
        <div className="w-full">
          <AnimatedText
            className="font-bold text-8xl mb-32 w-full text-center lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl"
            text={'Technology I use'}
          />

          <div className="w-full flex flex-wrap justify-center gap-[5%] font-bold text-2xl gap-y-10 md:text-xl sm:text-md xs:text-[0.8rem]">
            <div className="w-1/5 flex flex-col">
              <Icons.ReactIcon />
              <span className="w-full text-center mt-4">React.js</span>
            </div>

            <div className="w-1/5 flex flex-col">
              <Icons.LaravelIcon />
              <span className="w-full text-center mt-4">Laravel</span>
            </div>

            <div className="w-1/5 flex flex-col">
              <Icons.NextJsIcon />
              <span className="w-full text-center mt-4">Next.js</span>
            </div>

            <div className="w-1/5 flex flex-col">
              <Icons.NodeJsIcon />
              <span className="w-full text-center mt-4">Node.js</span>
            </div>

            <div className="w-1/5 flex flex-col">
              <Icons.TypeScriptIcon />
              <span className="w-full text-center mt-4">Typescript</span>
            </div>

            <div className="w-1/5 flex flex-col">
              <Icons.ViteIcon />
              <span className="w-full text-center mt-4">Vite</span>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Skills;
