import { ICard } from '../interface/global/image-card.interface';

export interface ICardPage {
  education: ICard;
  complementary: ICard;
}

export const cardEducation: ICard = {
  text: {
    degreeName: {
      title: 'Degree name',
      text: 'Computer Systems Engineering'
    },
    university: {
      title: 'University',
      text: 'Universidad del Norte'
    },
    adress: {
      title: 'Address',
      text: 'Km 5, antigua Vía a Puerto Colombia'
    },
    code: {
      title: 'Verification code',
      text: 'RNDC4CHSCRTLTRIUBHYD',
      url: ''
    }
  },
  description: 'International Accreditation of the Engineering Accreditation Commission of ABET.',
  image: 'uninorte_logo'
};

export const cardComplementary: ICard[] = [
  {
    text: {
      degreeName: {
        title: 'Degree name',
        text: 'Node: De cero a experto'
      },
      platform: {
        title: 'Platform',
        text: 'Udemy'
      },
      code: {
        title: 'Verification code',
        text: 'UC-e023fc3e-748c-438c-ba8d-804de9521c7a'
      }
    },
    description: '',
    image: 'udemy_logo'
  },
  {
    text: {
      degreeName: {
        title: 'Degree name',
        text: 'Nest: Desarrollo backend escalable con Node'
      },
      platform: {
        title: 'Platform',
        text: 'Udemy'
      },
      code: {
        title: 'Verification code',
        text: 'UC-1f82a5ab-a193-4732-bd4f-19f352a9cc9e'
      }
    },
    description: '',
    image: 'udemy_logo'
  }
];
