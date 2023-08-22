import CircularProgressBar from '@/shared/components/global/circularProgressBar/CircularProgressBar.component';
import { NextPage } from 'next';

const Skills: NextPage = () => {
  return (
    <div className='page_light'>
      <p className='title'>{'My skills'}</p>
      <p className='text'>
        {`
          Since my time in college, job search, and working life, 
          I have been in a constant learning process that has made 
          me acquire a considerable amount of knowledge that I make 
          available in all my work. 
        `}
      </p>
      <CircularProgressBar percentage={95} />
    </div>
  );
};

export default Skills;
