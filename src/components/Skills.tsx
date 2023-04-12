import { FC } from 'react';

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen realtive flex items-center justify-center bg-circularLight"></div>
    </>
  );
};

export default Skills;
