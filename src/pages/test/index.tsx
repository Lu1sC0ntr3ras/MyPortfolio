import { NextPage } from 'next';

const Test: NextPage = () => {
  return (
    <div className='container_page scroll_y'>
      <h1>{'Testing page'}</h1>
      <div className='container_test box_neon_white'>
        <div className='open_title' >
          <p className='title'>{'Testing title'}</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
