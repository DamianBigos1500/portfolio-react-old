import { FC, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icons from './Icons';
import { motion } from 'framer-motion';
import useTheme from '../hooks/useTheme';
import CustomLink, { CustomMobileLink } from './CustomLink';
import { useDimensions } from '../hooks/useDimension';
import MobileNavigation from './MobileNavigation';
import { INavigationLink, navigationLinks } from '../data/navigationLinks';
import { IIconLink, iconLinks } from '../data/iconLinks';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [mode, setMode]: any = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-24 font-medium flex items-center justify-between h-16 sticky top-0 z-50 bg-light/90 dark:bg-dark/90">
      <button
        className="flex-col gap-2 justify-center items-center cursor-pointer hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block duration-300 ease-out h-0.5 w-8 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block duration-300 ease-out h-0.5 w-8 rounded-sm ${
            isOpen ? 'opacity-0' : 'opacity-1'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block duration-300 ease-out h-0.5 w-8 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}
        />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden relative">
        <nav className="space-x-8">
          {navigationLinks.map((link: INavigationLink, index: number) => {
            return (
              <CustomLink
                key={index}
                to={link.href}
                title={link.name}
                offset={100}
              />
            );
          })}
        </nav>

        <nav className="flex items-center justify-center gap-6 ">
          {iconLinks.map((iconLink: IIconLink, index: number) => {
            return (
              <motion.a
                key={index}
                href={iconLink.href}
                target="_blank"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 text-red-100"
              >
                {iconLink.icon}
              </motion.a>
            );
          })}

          <button
            onClick={() => {
              setMode(mode == 'light' ? 'dark' : 'light');
            }}
          >
            {mode === 'dark' ? <Icons.SunIcon /> : <Icons.MoonIcon />}
          </button>
        </nav>
      </div>

      <MobileNavigation mode={mode} isOpen={isOpen} setMode={setMode} />
    </header>
  );
};

export default NavBar;
