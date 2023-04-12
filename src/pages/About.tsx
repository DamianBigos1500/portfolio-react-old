import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText className={'mb-16'} text={'Passion Fuel Purpose'} />
        <div className="grid w-full  grid-cols-8 gap-16">
          <div className="col-span-3 flex  flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>

            <p className="font-medium">
              BIOGRAPHY Hi, I'm CodeBucks, a web developer and UI/UX designer
              with a passion for creating beautiful, functional, and
              user-centered digital experiences. With 4 years of experience in
              the field. I am always looking for new and innovative ways to
              bring my clients' visions to life.
            </p>
            <p className="mt-4 font-medium">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>

            <p className="mt-4 font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>

          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[105%] rounded-[2rem] bg-dark" />
            <img
              src="https://theimageconference.org/wp-content/uploads/2019/11/vancouver_image_conference_2.jpg "
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div>
            <div>
              <span>50+</span>
              <h2>satisfied client</h2>
            </div>
          </div>
        </div>

        {/* <Skills /> */}
        <Experience />
      </Layout>
    </main>
  );
};

export default About;
