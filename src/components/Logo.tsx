import { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface LogoProps {}

const MotionLink = motion(Link);

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        to={'/'}
        className=" bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Damian Bigos
      </MotionLink>
    </div>
  );
};

export default Logo;
