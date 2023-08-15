import { cardComplementary } from '@/data/constant/cardPage';
import ImageCard from '@/shared/components/global/image-card/ImageCard.component';
import { NextPage } from 'next';

const Complementary: NextPage = () => {
  const title = 'Complentary education';
  return (
    <div className='container_page scroll_y'>
      <p className='title' >
        {title}
      </p>
      {
        cardComplementary.map((obj, key) =>
          <ImageCard key={JSON.stringify(obj.text) + key} {...obj}/>
        )
      }
    </div>
  );
};
export default Complementary;
