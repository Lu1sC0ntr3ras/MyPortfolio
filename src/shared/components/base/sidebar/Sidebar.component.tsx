/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef, useState } from 'react';
import { ISidebar, ISidebarLeftOption, ISidebarRightOption } from '@/data/interface/shared/components/base/sidebar/Sidebar.interface';
import { useRouter } from 'next/router';
import { useTheme } from '@/core/context/theme/ThemeState';

const Sidebar: FC<ISidebar> = ({ leftOptions, rightOptions, subtitle, title }) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [leftOption, setLeftOption] = useState<string>('');
  const [rightOption, setRightOption] = useState<ISidebarRightOption[]>([]);
  const first = useRef<boolean>(true);
  const second = useRef<boolean>(true);
  const router = useRouter();

  const openRightBar = (opt: ISidebarLeftOption): void => {
    if (!opt.leftOptions) {
      router.push(opt.route ?? '');
      setLeftOption(opt.route ?? '');
      setRightOption([]);
      setOpen(false);
    } else {
      setLeftOption(opt.route ?? '');
      setRightOption(rightOptions[opt.leftOptions]);
      second.current = false;
    }
  };

  useEffect(() => {
    setLeftOption(router.pathname);
    const option = router.pathname.split('/')[1];
    if (option && rightOptions[option]) setRightOption(rightOptions[option]);
  }, [router.pathname]);

  return (
    <div className={`${first.current ? 'first_status_container_sidebar' : 'container_sidebar'} ${theme.sidebar_style}`} >
      <div className={open ? 'left_bar' : 'left_bar_closed'} >
        <div className='open_right_bar'
          onClick={(event) => {
            event.stopPropagation();
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
            {leftOptions.map((opt, index) => {
              const active: boolean = opt.route === leftOption || router.pathname.includes(opt.route ?? '');
              return (
                <p
                  key={index + opt.text}
                  className={`sidebar_option ${active ? 'neon_green' : ''}`}
                  onClick={() => openRightBar(opt)}
                >
                  {active ? `=>  ${opt.text} <=` : opt.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`${second.current && !rightOption.length ? 'first_status_right_bar' : rightOption.length && open ? 'right_bar' : 'right_bar_closed'}`} >
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
                  className={active ? 'neon_green' : ''}
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
      </div>
    </div>
  );
};

export default Sidebar;
