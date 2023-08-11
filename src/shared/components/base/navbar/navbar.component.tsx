import { FC } from 'react';
import { LeftBar, RightBar } from '../../global/svg/svg.component';

const NavBar: FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          width: '50%',
          height: '100%'
        }}
      >
        <div>
          <h4>Test 1</h4>
          <h4>Test 2</h4>
          <h4>Test 3</h4>
        </div>
        <RightBar />
      </div>
      <div
        style={{
          width: '50%',
          height: '100%'
        }}
      >
        <LeftBar />
      </div>
    </div>
  );
};

export default NavBar;
