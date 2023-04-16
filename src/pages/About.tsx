import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <Layout className="mt-48">
        <AnimatedText
          className={
            'mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl'
          }
          text={'My story'}
        />
        <div className="grid w-full  grid-cols-6 gap-16 md:gap-12 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 }, x: 0 }}
            viewport={{ once: true }}
            className="col-span-3 flex  flex-col items-start justify-start md:order-2 xl:col-span-8 md:text-sm sm:text-xs"
          >
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>

            <p className="font-medium">
              Hi, I'm Damian Bigos actually I learn web development, where i
              like focus on features and functionality
            </p>
            <p className="mt-4 font-medium">
              As a mathematics student I love to learn abstraction, deepen
              knowledge. In learning new thinkg, the biggest thing I like is how
              hard problems become eazy for me after I spend enought time to
              learn. That approach to learn and solving new problems is very
              enjoyable to me, and always gave me satisfaction. I am always
              looking for best and clear ways to solve problem.
            </p>

            <p className="mt-4 font-medium">
              I have also other hobbies like playing on guitar. It is very
              common for me to listen to guitar music. Another hobby I have is
              solving rubic's cube, I solved different variants of that cube. My
              last big hobby is cardistry, whitch one I started to learn magic's
              tricks.
            </p>
          </motion.div>

          <motion.div
            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light
           bg-light dark:bg-dark p-8 md:order-3 xl:col-span-8 "
          >
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[105%] rounded-[2rem] bg-dark dark:bg-light" />
            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 }, x: 0 }}
              viewport={{ once: true }}
              src="/DamianBigos3.png "
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </Layout>
    </section>
  );
};

export default About;
