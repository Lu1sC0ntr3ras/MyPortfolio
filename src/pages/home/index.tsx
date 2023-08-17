import { NextPage } from 'next';

const Home: NextPage = () => {
  const title = 'Hello';
  const subtitle = `Welcome, I'm Luis Eduardo Contreras Mendez, this is my portfolio, here you can explore my passion for technology and development, embodied in projects that I have created with dedication and enthusiasm. As a full stack developer, I have brought innovative ideas and solutions to life that span both front-end and back-end, and this portfolio is a reflection of my background and skills.`;

  return (
    <div className='page_light'>
      <p className='title_light'>{title}</p>
      <p className='text_light justify'>{subtitle}</p>
    </div>
  );
};

export default Home;
