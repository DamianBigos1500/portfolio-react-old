import { FC, ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32  ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
