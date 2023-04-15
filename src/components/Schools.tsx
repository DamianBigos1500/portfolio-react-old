import { motion, useScroll } from 'framer-motion';
import { FC, useRef } from 'react';
import LiIcon from './LiIcon';
import Layout from './Layout';
import AnimatedText from './AnimatedText';

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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;-&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

interface SchoolsProps {}

const Schools: FC<SchoolsProps> = ({}) => {
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  });

  return (
    <section
      id="school"
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <Layout className="mt-48">
        <div>
          <AnimatedText
            className="font-bold text-8xl mb-32 w-full text-center lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl"
            text={'Experience'}
          />

          <div
            className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
            ref={ref}
          >
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
              md:w-[2px] md:left-[30px] xs:left-[20px]"
            />
            <ul className="w-full flex flex-col items-start justify-between ml-4 xl:ml-2">
              <Deltails
                position={'Applied Mathematics'}
                company={'AGH University of Science and Technology'}
                companyLink={'https://www.agh.edu.pl/en/'}
                time={'2021 - Present'}
                address={'30 Mickiewicza Ave. 30-059 Krakow'}
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

export default Schools;
