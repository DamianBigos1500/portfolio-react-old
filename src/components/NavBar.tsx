import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icons from './Icons';
import { motion } from 'framer-motion';

interface CustomLinkProps {
  to: string;
  title: string;
  className: string;
}

const CustomLink: FC<CustomLinkProps> = ({ to, title, className = '' }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Link to={to} className={`${className} relative group`}>
      {title}
      <span
        className="h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300"
      >
        &nbsp;
      </span>
    </Link>
  );
};

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <header className="w-full px-32 font-medium flex items-center justify-between h-16">
      <nav>
        <CustomLink to="/" title="Home" className="mr-4" />
        <CustomLink to="/about" title="About" className="mx-4" />
        <CustomLink to="/projects" title="Projects" className="mx-4" />
        <CustomLink to="/articles" title="Articles" className="ml-4" />
      </nav>

      <Logo />

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <Icons.TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <Icons.TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <Icons.TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <Icons.TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <Icons.TwitterIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
