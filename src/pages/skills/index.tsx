import { useTheme } from '@/core/context/theme/ThemeState';
import CircularProgressBar from '@/shared/components/global/circular-progress-bar/CircularProgressBar.component';
import { Angular, CSS, HTML5, JavaScript, NestJs, NextJS, NodeJs, React as Rct, SQL, Sass, TypeScript } from '@/shared/components/global/icons/icons.component';
import { NextPage } from 'next';

const Skills: NextPage = () => {
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
      <hr
        style={{
          border: 'none',
          borderBottom: `1px solid ${color}`,
          opacity: '0.5'
        }}
      />
      <p className={`${title} fs-18`}>{'Programming languages'}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='HTML5'
            color='#FF4300'
            icon={<HTML5 width='35px' height='35px' fill='#FF4300'/>}
            percentage={95}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='CSS'
            color='#3498DB'
            icon={<CSS width='30px' height='30px' fill='#3498DB'/>}
            percentage={95}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='JavaScript'
            color='#F1C40F'
            icon={<JavaScript width='40px' height='40px' fill='#F1C40F'/>}
            percentage={92}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='TypeScript'
            color='#007ACC'
            icon={<TypeScript width='30px' height='30px' fill='#007ACC'/>}
            percentage={90}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='SQL'
            color='#00A6FF'
            icon={<SQL width='30px' height='30px' fill='#00A6FF'/>}
            percentage={60}
          />
        </div>
      </div>
      <hr
        style={{
          border: 'none',
          borderBottom: `1px solid ${color}`,
          opacity: '0.5'
        }}
      />
      <p className={`${title} fs-18`}>{'Front-End'}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='React'
            color='#53C1DE'
            icon={<Rct width='35px' height='35px' fill='#53C1DE'/>}
            percentage={90}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='React Native'
            color='#53C1DE'
            icon={<Rct width='35px' height='35px' fill='#53C1DE'/>}
            percentage={85}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='NextJs'
            color={color}
            icon={<NextJS width='35px' height='35px' fill={color}/>}
            percentage={80}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='Angular'
            color='#C3002F'
            icon={<Angular width='45px' height='45px'/>}
            percentage={10}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='Sass'
            color='#CD6799'
            icon={<Sass width='45px' height='45px'/>}
            percentage={82}
          />
        </div>
      </div>
      <hr
        style={{
          border: 'none',
          borderBottom: `1px solid ${color}`,
          opacity: '0.5'
        }}
      />
      <p className={`${title} fs-18`}>{'Back-End'}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='NodeJs'
            color='#8CC84B'
            icon={<NodeJs width='45px' height='45px'/>}
            percentage={85}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='ExpressJs'
            color='#8CC84B'
            icon={<NodeJs width='45px' height='45px'/>}
            percentage={75}
          />
        </div>
        <div style={{ width: '150px' }} >
          <CircularProgressBar
            title='NestJs'
            color='#EA2845'
            icon={<NestJs width='45px' height='45px'/>}
            percentage={70}
          />
        </div>
      </div>
      <hr
        style={{
          border: 'none',
          borderBottom: `1px solid ${color}`,
          opacity: '0.5'
        }}
      />
      <p className={`${title} fs-18`}>{'Complementary'}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
    </div>
  );
};

export default Skills;
