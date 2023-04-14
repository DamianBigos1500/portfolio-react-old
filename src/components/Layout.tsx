import { FC, ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark px-24 xl:px-20 lg:px-16 md:px-12 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
