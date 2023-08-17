import { NextPage } from 'next';
import { useState } from 'react';

const Test: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='page_light scroll_y'>
      <h1>{'Testing page'}</h1>
      <div
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          height: open ? 'auto' : 'auto',
          padding: '10px',
          border: '1px solid red',
          cursor: 'pointer',
          zIndex: 5
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <p className='title'>{' Test title '}</p>
          <p className='title'>{open ? '⇑' : '⇓'}</p>
        </div>
        {
          open
            ? <div
              style={{
                border: '1px solid blue',
                width: '100%',
                height: '200px'
              }}
            >

            </div>
            : null
        }
      </div>
    </div>
  );
};

export default Test;
