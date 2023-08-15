import { ICard } from '@/data/interface/global/ImageCard.interface';
import { FC } from 'react';

const ImageCard: FC<ICard> = ({ text, description, image }) => {
  return (
    <div className='image_card_container'>
      <div className={`${image} image_container`} />
      <div className='text_container' >
        <div>
          {
            Object.entries(text).map(([key, value], index) => {
              return (
                <div key={key + index}>
                  <p className='text'>
                    <strong className='neon_blue_light'>
                      {`${value.title}: `}
                    </strong>
                    {value.text}
                  </p>
                </div>
              );
            })
          }
        </div>
        <p className='text'>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
