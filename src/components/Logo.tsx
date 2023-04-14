import { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Logo: FC = () => {
  return (
    <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/3">
      <MotionLink
        to={'/'}
        className=" bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold p-2 whitespace-nowrap"
        whileHover={{
          backgroundColor: [
            'rgb(27 27 27)',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(131,58,180,1)',
            'rgb(27 27 27)',
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
