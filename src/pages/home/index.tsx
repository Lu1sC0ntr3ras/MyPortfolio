import { NextPage } from 'next';

const Home: NextPage = () => {
  const title = 'Welcome to my portfolio web';
  const subtitle = `Here you can explore my passion for technology and development, embodied in projects that I have created with dedication and enthusiasm. As a full stack developer, I have brought innovative ideas and solutions to life that span both front-end and back-end, and this portfolio is a reflection of my background and skills.`;

  return (
    <div className='container_page'>
      <div className='home_container_text box_neon_white' >
        <p className='title neon_white'>{title}</p>
        <p className='text neon_white'>{subtitle}</p>
      </div>
    </div>
  );
};

export default Home;
