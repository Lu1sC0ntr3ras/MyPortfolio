import { NextPage } from 'next';

const AboutMe: NextPage = () => {
  return (
    <div className='page_light'>
      <p className='title fs-20'>{'Who am I?'}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        <div className='profile_image'/>
        <div
          style={{ textAlign: 'justify' }}
        >
          <p>
            {`
            I always seek to improve myself, I consider that programming is my field
            of work, because I love everything that requires solving problems of logic
            and algorithms, make a code more efficient, see how I can make the pages 
            more friendly to the interaction with new users, that anyone with minimal 
            effort can understand my code and learn new ways to solve problems to find 
            the most efficient possible.
            `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
