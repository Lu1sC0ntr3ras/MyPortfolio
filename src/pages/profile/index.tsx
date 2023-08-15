import { NextPage } from 'next';

const Profile: NextPage = () => {
  const title = 'My profile';
  const subtitle = 'I am a Systems Engineer with a passion for programming. I possess strong knowledge in various areas of software engineering and I am committed to continuously improving my skills. I enjoy challenges and have the ability to contribute innovative solutions to complex problems. I strive to stay updated with the latest trends and technologies to deliver high-quality work. I focus on the quality and organization of my work, solving problems in a logical and efficient manner.';

  return (
    <div className='container_page'>
      <div className='container_profile'>
        <div className='profile_image box_neon_light_blue' />
        <div className='profile_text'>
          <p className='title neon_red'>
            {title}
          </p>
          <p className='text'>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
