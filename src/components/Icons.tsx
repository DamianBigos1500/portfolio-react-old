import { FC } from 'react';

interface IconProps {
  className?: string;
  rest?: any;
}

let Icons;

const TwitterIcon: FC<IconProps> = ({ className, ...rest }) => {
  return <div className={`${className}`}>TW</div>;
};

export default Icons = {
  TwitterIcon,
};
