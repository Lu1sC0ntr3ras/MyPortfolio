import { useTheme } from '@/core/context/theme/ThemeState';
import CircularProgressBar from '@/shared/components/global/circular-progress-bar/circular-progress-bar.component';
import { Angular, CSS, Docker, Git, HTML5, JavaScript, NestJs, NextJS, NodeJs, React as Rct, SQL, Sass, TypeScript } from '@/shared/components/global/icons/icons.component';
import LineBar from '@/shared/components/global/line-bar/line-bar.component';
import { NextPage } from 'next';
import { useState } from 'react';

const Skills: NextPage = () => {
  const [open, setOpen] = useState<{[x: number]: boolean;}>({
    1: false,
    2: false,
    3: false,
    4: false
  });
  const { theme: { page, title, text, color } } = useTheme();
  return (
    <div className={`${page} scroll_y`}>
      <p className={`${title} fs-18`}>{'My skills'}</p>
      <p className={`${text} fs-14`}>
        {`
          Since my time in college, job search, and working life, 
          I have been in a constant learning process that has made 
          me acquire a considerable amount of knowledge that I make 
          available in all my work. 
        `}
      </p>

      <div className={`container_circle g-10 ${open[1] ? 'expanded' : ''}`}
        onClick={() => { setOpen({ ...open, 1: !open[1] }); }}
      >
        <LineBar/>
        <p className={`${title} fs-16`}>{'Programming languages'}</p>
        <div className='circles'>
          <CircularProgressBar
            title='HTML5'
            color='#FF4300'
            icon={<HTML5 width='35px' height='35px' fill='#FF4300'/>}
            percentage={95}
          />
          <CircularProgressBar
            title='CSS'
            color='#3498DB'
            icon={<CSS width='30px' height='30px' fill='#3498DB'/>}
            percentage={95}
          />
          <CircularProgressBar
            title='JavaScript'
            color='#F1C40F'
            icon={<JavaScript width='40px' height='40px' fill='#F1C40F'/>}
            percentage={92}
          />
          <CircularProgressBar
            title='TypeScript'
            color='#007ACC'
            icon={<TypeScript width='30px' height='30px' fill='#007ACC'/>}
            percentage={90}
          />
          <CircularProgressBar
            title='SQL'
            color='#00A6FF'
            icon={<SQL width='30px' height='30px' fill='#00A6FF'/>}
            percentage={60}
          />
        </div>
      </div>

      <div className={`container_circle g-10 ${open[2] ? 'expanded' : ''}`}
        onClick={() => { setOpen({ ...open, 2: !open[2] }); }}>
        <LineBar/>
        <p className={`${title} fs-16`}>{'Front-End'}</p>
        <div className='circles'>
          <CircularProgressBar
            title='React'
            color='#53C1DE'
            icon={<Rct width='35px' height='35px' fill='#53C1DE'/>}
            percentage={90}
          />
          <CircularProgressBar
            title='React Native'
            color='#53C1DE'
            icon={<Rct width='35px' height='35px' fill='#53C1DE'/>}
            percentage={85}
          />
          <CircularProgressBar
            title='NextJs'
            color={color}
            icon={<NextJS width='35px' height='35px' fill={color}/>}
            percentage={80}
          />
          <CircularProgressBar
            title='Angular'
            color='#C3002F'
            icon={<Angular width='45px' height='45px'/>}
            percentage={10}
          />
          <CircularProgressBar
            title='Sass'
            color='#CD6799'
            icon={<Sass width='45px' height='45px'/>}
            percentage={82}
          />
        </div>
      </div>
      <div className={`container_circle g-10 ${open[3] ? 'expanded' : ''}`}
        onClick={() => { setOpen({ ...open, 3: !open[3] }); }}>
        <LineBar/>
        <p className={`${title} fs-16`}>{'Back-End'}</p>
        <div className='circles'>
          <CircularProgressBar
            title='NodeJs'
            color='#8CC84B'
            icon={<NodeJs width='45px' height='45px'/>}
            percentage={85}
          />
          <CircularProgressBar
            title='ExpressJs'
            color='#8CC84B'
            icon={<NodeJs width='45px' height='45px'/>}
            percentage={75}
          />
          <CircularProgressBar
            title='NestJs'
            color='#EA2845'
            icon={<NestJs width='45px' height='45px'/>}
            percentage={70}
          />
        </div>
      </div>

      <div className={`container_circle g-10 ${open[4] ? 'expanded' : ''}`}
        onClick={() => { setOpen({ ...open, 4: !open[4] }); }}>
        <LineBar/>
        <p className={`${title} fs-16`}>{'Complementary'}</p>
        <div className='circles'>
          <CircularProgressBar
            title='Git'
            color='#EE513B'
            icon={<Git width='45px' height='45px'/>}
            percentage={85}
          />
          <CircularProgressBar
            title='Docker'
            color='#2396ED'
            icon={<Docker width='45px' height='45px'/>}
            percentage={50}
          />
        </div>
      </div>

    </div>
  );
};

export default Skills;
