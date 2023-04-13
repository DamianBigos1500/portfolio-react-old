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
        className=" bg-light text-dark flex items-center justify-center rounded-full text-2xl font-bold p-2"
        whileHover={{
          backgroundColor: [
            '#e8e8e8',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(131,58,180,1)',
            '#e8e8e8',
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
