/* eslint-disable react-hooks/exhaustive-deps */
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { ISidebar, ISidebarLeftOption } from '@/data/interface/shared/components/base/sidebar/Sidebar.interface';
import { useRouter } from 'next/router';

const Sidebar: FC<ISidebar> = ({ leftOptions, subtitle, title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [leftOption, setLeftOption] = useState<string>('');
  const first = useRef<boolean>(true);
  const router = useRouter();

  const openRightBar = (opt: ISidebarLeftOption): void => {
    setLeftOption(opt.route ?? '');
    router.push(opt.route ?? '');
    setOpen(false);
  };

  const openLeftBar = (event: MouseEvent) => {
    event.stopPropagation();
    setOpen(!open);
    first.current = false;
  };

  useEffect(() => {
    setLeftOption(router.pathname);
  }, [router.pathname]);

  return (
    // <div className={`${first.current ? 'first_sidebar' : 'sidebar'}`} >
    <div className={`${first.current ? 'first_sidebar' : open ? 'sidebar' : 'sidebar_bottom'}`} >
      <div className={open ? 'left_bar' : 'left_bar_closed'} >
        <div className='open_bar'
          onClick={(event) => openLeftBar(event)}
        />
        <div className='left_text' >
          <div className='container_left_titles'>
            <p className='title_light'>{title}</p>
            <p className='text_light' >{subtitle}</p>
          </div>
          <div className='options'>
            {leftOptions.map((opt, index) => {
              const active: boolean = opt.route === leftOption || router.pathname.includes(opt.route ?? '');
              return (
                <p
                  key={index + opt.text}
                  className={`text_light pointer`}
                  onClick={() => openRightBar(opt)}
                >
                  {active ? `=>  ${opt.text} <=` : opt.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className={`${second.current && !rightOption.length
        ? 'first_right_bar'
        : rightOption.length && open
          ? 'right_bar'
          : 'right_bar_closed'}`}
      >
        <div className={rightOption.length && open ? 'right_bar_text' : 'right_bar_text_close'}
          style={{
            display: rightOption.length && open ? 'flex' : 'none'
          }}
        >
          {
            rightOption.map((opt, index) => {
              const active: boolean = router.pathname.includes(opt.route ?? '');
              return (
                <p
                  key={index + opt.text}
                  className={`text_light`}
                  onClick={() => {
                    router.push(`${opt.route}`);
                    setOpen(false);
                  }}
                >
                  {active ? `=>  ${opt.text} <=` : opt.text}
                </p>
              );
            })
          }
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
