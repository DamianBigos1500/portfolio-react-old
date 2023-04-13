import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icons from './Icons';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import useTheme from '../hooks/useTheme';
interface CustomLinkProps {
  to: string;
  title: string;
  className: string;
  offset: number;
  duration: number;
}

const CustomLink: FC<CustomLinkProps> = ({
  to,
  title,
  className = '',
  offset,
  duration,
}) => {
  const location = useLocation();
  return (
    <ScrollLink
      to={to}
      smooth={true}
      offset={offset}
      duration={duration}
      className={`${className} relative group cursor-pointer text-light`}
    >
      {title}
      <span
        className="h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300"
      >
        &nbsp;
      </span>
    </ScrollLink>
  );
};

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [mode, setMode]: any = useTheme();

  return (
    <header className="w-full px-24 font-medium flex items-center justify-between h-16 sticky top-0 z-50 bg-dark/90">
      <nav>
        <CustomLink
          to="header"
          title="Home"
          className="mr-4"
          offset={-100}
          duration={300}
        />
        <CustomLink
          to="about"
          title="About"
          className="mx-4"
          offset={100}
          duration={300}
        />
        <CustomLink
          to="school"
          title="School"
          className="mx-4"
          offset={100}
          duration={300}
        />
        <CustomLink
          to="projects"
          title="Projects"
          className="ml-4"
          offset={100}
          duration={300}
        />
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
          className="w-6 ml-3"
        >
          <Icons.TwitterIcon />
        </motion.a>

        <button
          onClick={() => {
            setMode(mode == 'light' ? 'dark' : 'light');
            console.log(mode);
          }}
        >
          {mode === 'dark' ? <span>Dark</span> : <span>Light</span>}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
