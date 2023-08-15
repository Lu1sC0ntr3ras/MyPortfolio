import { NextPage } from 'next';
import { cardEducation } from '@/data/constant/cardPage';
import ImageCard from '@/shared/components/global/image-card/ImageCard.component';

const Professional: NextPage = () => {
  const title = 'Professional education';
  return (
    <div className='container_page'>
      <p className='title neon_red' style={{ position: 'absolute', top: '20px', zIndex: 0 }} >
        {title}
      </p>
      <ImageCard
        {...cardEducation}
      />
    </div>
  );
};

export default Professional;
