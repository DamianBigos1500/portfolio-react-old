import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <section
      id="header"
      className="flex items-center text-dark dark:text-light w-full min-h-screen"
    >
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 pr-8 ">
            <img
              src="https://wallup.net/wp-content/uploads/2017/03/15/82295-stars-forest-trees.jpg"
              alt=""
              className="w-full h-auto object-cover aspect-square rounded-3xl"
            />
          </div>

          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              className={'!text-6xl !text-left'}
              text={'Turning vision into reality with code and design.'}
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                to=""
                className="flex items-center bg-dark text-light p-2.5 px-6
          rounded-lg text-lg font-semobold hover:bg-light hover:text-dark
          border-2 border-solid border-transparent hover:border-dark"
              >
                Resume
              </Link>
              <Link
                to="mailto:abcd@gmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark"
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
