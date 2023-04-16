import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import Project from '../components/cards/Project';
import FeaturedProject from '../components/cards/FeaturedProject';
import { motion } from 'framer-motion';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <section
      id="projects"
      className="w-full mb-16 flex flex-col items-center justify-center "
    >
      <Layout className="pt-48">
        <AnimatedText
          text="My recent projects!"
          className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl"
        />

        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="col-span-12"
          >
            {/* ECOMMERCE */}
            <FeaturedProject
              type={'Ecommerce'}
              title="Laravel - Next - Ecommerce"
              summary="A ecommerce website I create to practice laravel and next js."
              img={
                'https://images.musement.com/cover/0001/100/predator-v5-jpg_header-99107.jpeg'
              }
              link={'https://project-shop-laravel-client.vercel.app/'}
              github={
                'https://github.com/DamianBigos1500/project-shop-laravel-client'
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="col-span-6 sm:col-span-12"
          >
            {/* blog */}
            <Project
              type={'MDX Blog'}
              title="Next.js, prisma Blog"
              img={'/Zrzut ekranu 2023-04-16 130235.png'}
              link={'https://mdx-blog-next-js-13.vercel.app/'}
              github={'https://github.com/DamianBigos1500/mdx-blog-next-js-13'}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            viewport={{ once: true }}
            className="col-span-6 sm:col-span-12"
          >
            <Project
              type={'Portfolio (this page)'}
              title="React Portfolio Website"
              img={'/Zrzut ekranu 2023-04-16 125034.png'}
              link={'https://portfolio-react-beige-omega.vercel.app/'}
              github={'https://github.com/DamianBigos1500/portfolio-react'}
            />
          </motion.div>
        </div>
      </Layout>
    </section>
  );
};

export default Projects;
