import { FC } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../Icons';

interface ProjectProps {}

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
     border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem]
      bg-dark dark:bg-light md:-right-2 xs:h-[101%] md:w-[101%] xs:rounded-[1.5rem]"
      />

      <Link
        to={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link to={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full my-2 flex items-center justify-between">
          <Link
            to={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit Project
          </Link>

          <Link to={github} target="_blank" className="w-8 md:w-6">
            <Icons.GithubIcon fill="dark:white" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
