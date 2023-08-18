import { NextPage } from 'next';

const Home: NextPage = () => {
  const title: string = 'Hi, I\'m Luis Eduardo Contreras Mendez';
  const subtitle: JSX.Element = (
    <>
      {'A systems engineer from Colombia with knowledge in frontend and backend application development.'}
      <br />
      <br />
      {'Browse and I hope we can get to know each other better.'}
    </>
  );

  return (
    <div className='page_light'>
      <p className='title_light fs-40'>{title}</p>
      <p className='text_light justify fs-25'>{subtitle}</p>
    </div>
  );
};

export default Home;
