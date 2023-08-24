/* eslint-disable react-hooks/exhaustive-deps */
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { ISidebar, ISidebarLeftOption } from '@/data/interface/shared/components/base/sidebar/sidebar.interface';
import { useRouter } from 'next/router';
import { useTheme } from '@/core/context/theme/ThemeState';

const Sidebar: FC<ISidebar> = ({ leftOptions, subtitle, title }) => {
  const { theme: { text, title: tl, background, color } } = useTheme();
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
    <div className={first.current ? 'first_left_bar' : open ? 'left_bar' : 'left_bar_closed'}
      style={{
        background,
        boxShadow: `0rem 0rem 0.3rem ${color}`
      }}
    >
      <div className='open_bar'
        onClick={(event) => openLeftBar(event)}
      />
      <div className='left_text' >
        <div className='container_left_titles'>
          <p className={`${tl} ${open ? 'appear' : 'vanish'}`}>{title}</p>
          <p className={`${text} italic ${open ? 'appear' : 'vanish'}`} >{subtitle}</p>
        </div>
        <div className='options'>
          {leftOptions.map((opt, index) => {
            const active: boolean = opt.route === leftOption || router.pathname.includes(opt.route ?? '');
            return (
              <p
                key={index + opt.text}
                className={`${text} pointer ${open ? 'appear' : 'vanish'}`}
                onClick={() => openRightBar(opt)}
              >
                {active ? `=>  ${opt.text} <=` : opt.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
