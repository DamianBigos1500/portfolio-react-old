import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mailAddress } from '../data/mailAddress';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <section
      id="header"
      className="flex items-center text-dark dark:text-light w-full min-h-screen"
    >
      <Layout className="-mt-24">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 pr-8 md:pr-0 lg:pb-12 md:pt-32 lg:w-3/4">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.1 },
              }}
              viewport={{ once: true }}
              src="https://wallup.net/wp-content/uploads/2017/03/15/82295-stars-forest-trees.jpg"
              alt=""
              className="w-full h-auto object-cover aspect-square rounded-3xl md:inline-block"
            />
          </div>

          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              className={
                '!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              }
              text={'Turning vision into reality with code and design.'}
            />
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.3, delay: 0.3 },
                x: 0,
              }}
              viewport={{ once: true }}
              className="my-4 text-base font-medium md:text-sm sm:text-xs"
            >
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </motion.p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                to=""
                className="flex items-center bg-dark text-light p-2.5 px-6
          rounded-lg text-lg font-semobold hover:bg-light hover:text-dark
          border-2 border-solid border-transparent hover:border-dark dark:border-light "
              >
                Resume
              </Link>
              <Link
                to={`mailto:${mailAddress}`}
                className="ml-4 text-lg font-medium capitalize text-dark dark:text-light"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Header;
