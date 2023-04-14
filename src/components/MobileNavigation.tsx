import { motion } from 'framer-motion';
import { FC } from 'react';
import { CustomMobileLink } from './CustomLink';
import Icons from './Icons';
import { INavigationLink, navigationLinks } from '../data/navigationLinks';
import { IIconLink, iconLinks } from '../data/iconLinks';
interface MobileNavigationProps {
  mode: string;
  isOpen: boolean;
  setMode: any;
}

export const MobileNavigation: FC<MobileNavigationProps> = ({
  mode,
  isOpen,
  setMode,
}) => (
  <>
    <motion.div
      className={`min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-xl backdrop-blur-md py-32 duration-500
        ${isOpen ? 'opacity: 1 scale-1 tra' : 'opacity-[0.4] scale-0'}
      `}
    >
      <nav className="flex items-center flex-col justify-center">
        {navigationLinks.map((link: INavigationLink, index: number) => {
          return (
            <CustomMobileLink key={index} to={link.href} title={link.name} />
          );
        })}
      </nav>

      <nav className="flex items-center justify-center mt-4 gap-6">
        {iconLinks.map((iconLink:IIconLink, index: number) => {
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
            console.log(mode);
          }}
        >
          {mode === 'dark' ? <span>Dark</span> : <span>Light</span>}
        </button>
      </nav>
    </motion.div>
  </>
);

export default MobileNavigation;
