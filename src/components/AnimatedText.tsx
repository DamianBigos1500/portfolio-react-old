import { FC } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  className?: string;
  text: string;
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: FC<AnimatedTextProps> = ({ className, text }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className} text-shadow-light dark:text-shadow-dark`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => {
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.1 } }}
              viewport={{ once: true }}
            >
              <motion.span
                key={word + '-' + index}
                className="inline-block"
                variants={singleWord}
              >
                {word}&nbsp;
              </motion.span>
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
