/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef, useState } from 'react';
import { ISidebar, ISidebarRightOption } from '@/data/interface/shared/components/base/sidebar/Sidebar.interface';
import { useRouter } from 'next/router';

const Sidebar: FC<ISidebar> = ({ leftOptions, rightOptions, subtitle, title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [leftOption, setLeftOption] = useState<string>('');
  const [rightOption, setRightOption] = useState<ISidebarRightOption[]>([]);
  const first = useRef<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    console.log('router.pathname: ', router.pathname);
    setLeftOption(router.pathname);
    const option = router.pathname.split('/')[1];
    if (option && rightOptions[option]) setRightOption(rightOptions[option]);
  }, [router.pathname]);

  return (
    <div className={first.current ? 'first_status_container_sidebar' : 'container_sidebar'} >
      <div className={open ? 'left_bar' : 'left_bar_closed'}
        style={{
        }}
      >
        <div className='open_right_bar'
          onClick={() => {
            setOpen(!open);
            first.current = false;
          }}
        />
        <div className='left_bar_text' >
          <div className='sidebar_left_titles'>
            <p className='sidebar_title' >{title}</p>
            <p className='sidebar_subtitle' >{subtitle}</p>
          </div>
          <div className='sidebar_left_options'>
            {leftOptions.map((opt, index) => (
              <p
                key={index + opt.text}
                className='sidebar_option'
                onClick={() => {
                  if (!opt.leftOptions) {
                    router.push(opt.route ?? '');
                    setLeftOption(opt.route ?? '');
                    setRightOption([]);
                    setOpen(false);
                  } else {
                    setLeftOption(opt.route ?? '');
                    setRightOption(rightOptions[opt.leftOptions]);
                  }
                }}
              >
                {
                  opt.route === leftOption || router.pathname.includes(opt.route ?? '')
                    ? `=>  ${opt.text} <=`
                    : opt.text
                }
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={`${rightOption.length ? 'right_bar' : 'right_bar_closed'}`} >
        <div className={rightOption.length && open ? 'right_bar_text' : 'right_bar_text_close'}
          style={{
            display: rightOption.length && open ? 'flex' : 'none'
          }}
        >
          {
            rightOption.map((opt, index) => (
              <p
                key={index + opt.text}
                onClick={() => {
                  router.push(`${opt.route}`);
                  setOpen(false);
                }}
              >
                {
                  router.pathname.includes(opt.route ?? '')
                    ? `=>  ${opt.text} <=`
                    : opt.text
                }
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
