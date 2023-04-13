import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
}

const FeaturedProject: FC<FeaturedProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-3xl
     border border-solid border-dark bg-light shadow-2xl p-12"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        to={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt="" className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link to={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>

        <div className="my-2 flex items-center">
          <Link to={github} target="_blank" className="w-10">
            G
          </Link>
          <Link
            to={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

interface ProjectProps {
  type: string;
  title: string;
  img: string;
  link: string;
  github: string;
}

const Project: FC<ProjectProps> = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-between rounded-2xl
     border border-solid border-dark bg-light p-6 relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark" />

      <Link
        to={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link to={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full my-2 flex items-center justify-between">
          <Link to={link} target="_blank" className="text-lg font-semibold">
            Visit Project
          </Link>

          <Link to={github} target="_blank" className="w-8">
            G
          </Link>
        </div>
      </div>
    </article>
  );
};

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <section
      id="projects"
      className="w-full mb-16 flex flex-col items-center justify-center "
    >
      <Layout className="pt-48">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />

        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeaturedProject
              type={'Feature'}
              title="React Portfolio Website"
              summary="A professional portfolio website using React JS, Framer-motion,
                and Styled-components. It has smooth page transitions, cool
                background effects, unique design and it is mobile responsive."
              img={
                'https://images.musement.com/cover/0001/100/predator-v5-jpg_header-99107.jpeg'
              }
              link={'/'}
              github={'/'}
            />
          </div>

          <div className="col-span-6">
            <Project
              type={'Feature'}
              title="React Portfolio Website"
              img={
                'https://images.musement.com/cover/0001/100/predator-v5-jpg_header-99107.jpeg'
              }
              link={'/'}
              github={'/'}
            />
          </div>

          <div className="col-span-6">
            <Project
              type={'Feature'}
              title="React Portfolio Website"
              img={
                'https://images.musement.com/cover/0001/100/predator-v5-jpg_header-99107.jpeg'
              }
              link={'/'}
              github={'/'}
            />
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Projects;
