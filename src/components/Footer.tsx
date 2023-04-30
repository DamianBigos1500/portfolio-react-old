import { FC } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>© 2023 Damian Bigos. All rights reserved.</span>
        <span>Page made by Damian Bigos</span>
      </Layout>
    </footer>
  );
};

export default Footer;
