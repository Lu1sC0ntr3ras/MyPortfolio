import { ICertifications } from '../interface/global/certification.interface';

export const certification: ICertifications = {
  uninorte: [
    {
      name: 'Computer Systems Engineering',
      text:
      <div className="certification_text fs-14">
        <p><strong>{'University: '}</strong></p>
        <p>{'Universidad del Norte'}</p>
        <p><strong>{'Address: '}</strong></p>
        <p>{'Km 5, antigua Vía a Puerto Colombia'}</p>
        <p><strong>{'Verification code: '}</strong></p>
        <p>{'RNDC4CHSCRTLTRIUBHYD'}</p>
        <p>{` `}</p>
      </div>,
      image: <div className="uninorte_logo" style={{ width: '100%', height: '100%' }} />,
      description: 'International Accreditation of the Engineering Accreditation Commission of ABET.'
    }
  ],
  english: [],
  udemy: []
};
