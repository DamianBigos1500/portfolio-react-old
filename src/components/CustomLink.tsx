import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

interface CustomLinkProps {
  to: string;
  title: string;
  className?: string;
  offset?: number;
  duration?: number;
}

const CustomLink: FC<CustomLinkProps> = ({
  to,
  title,
  className = '',
  offset = 100,
  duration = 300,
}) => {
  const location = useLocation();

  return (
    <ScrollLink
      to={to}
      smooth={true}
      offset={offset}
      duration={duration}
      className={`${className} relative group cursor-pointer text-dark dark:text-light`}
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

export const CustomMobileLink: FC<CustomLinkProps> = ({
  to,
  title,
  className = '',
  offset = 100,
  duration = 300,
}) => {
  const location = useLocation();

  return (
    <ScrollLink
      to={to}
      smooth={true}
      offset={offset}
      duration={duration}
      className={`${className} relative group cursor-pointer text-light dark:text-dark my-2`}
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

export default CustomLink;
