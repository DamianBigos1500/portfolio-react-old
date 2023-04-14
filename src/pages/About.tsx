import { FC } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <Layout className="mt-48">
        <AnimatedText
          className={
            'mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl'
          }
          text={'Passion Fuel Purpose'}
        />
        <div className="grid w-full  grid-cols-6 gap-16 md:gap-12 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5 }, x: 0 }}
            viewport={{ once: true }}
            className="col-span-3 flex  flex-col items-start justify-start md:order-2 xl:col-span-8"
          >
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
          </motion.div>

          <motion.div
       
            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light
           bg-light dark:bg-dark p-8 md:order-3 xl:col-span-8 "
          >
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[105%] rounded-[2rem] bg-dark dark:bg-light" />
            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, transition: { delay: 0.5 }, x: 0 }}
              viewport={{ once: true }}
              src="https://theimageconference.org/wp-content/uploads/2019/11/vancouver_image_conference_2.jpg "
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </Layout>
    </section>
  );
};

export default About;
