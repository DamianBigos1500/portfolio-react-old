import { motion, useScroll } from 'framer-motion';
import { FC, useRef } from 'react';
import LiIcon from './LiIcon';
import Layout from './Layout';

interface DeltailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Deltails: FC<DeltailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  });

  return (
    <section
      id="school"
      className="w-full flex flex-col items-center justify-center"
    >
      <Layout className="mt-48">
        <div>
          <h2 className="font-bold text-8xl mb-32 w-full text-center">
            Experience
          </h2>

          <div className="w-[75%] mx-auto relative" ref={ref}>
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light"
            />
            <ul className="w-full flex flex-col items-start justify-between ml-4">
              <Deltails
                position={'Soft eng'}
                company={'Google'}
                companyLink={'www.google.com'}
                time={'2022-Present'}
                address={'Mountain View, CA'}
                work={
                  "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                }
              />
              <Deltails
                position={'Soft eng'}
                company={'Google'}
                companyLink={'www.google.com'}
                time={'2022-Present'}
                address={'Mountain View, CA'}
                work={
                  "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                }
              />
              <Deltails
                position={'Soft eng'}
                company={'Google'}
                companyLink={'www.google.com'}
                time={'2022-Present'}
                address={'Mountain View, CA'}
                work={
                  "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
                }
              />
            </ul>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Experience;
