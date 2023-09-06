import { ICertificationData, ICertifications } from '../interface/global/ certification/certification.interface';

export const certification: ICertificationData = {
  University: {
    information: 'In this section are my university studies, you can click to see more information.',
    certification: [
      {
        name: 'Computer Systems Engineering',
        text:
        <div className="certification_text fs-14">
          <p><strong>{'University: '}</strong></p>
          <p>{'Universidad del Norte'}</p>
          <p><strong>{'Verification code: '}</strong></p>
          <a href='https://tananeo.uninorte.edu.co/fidi/verification.zul'
            target='_blank'
          >
            {'RNDC4CHSCRTLTRIUBHYD'}
          </a>
          <p><strong>{'Message: '}</strong></p>
          <p>{` Believe me, my journey through the university was 
          an experience where I understood the most important basics 
          of programming, acquired my tastes and mastered the basics 
          of many types of programming languages, although I did not 
          get much specialized knowledge until I got my first job.`}</p>
        </div>,
        image: <div className="uninorte_logo" style={{ width: '100%', height: '100%' }} />,
        description: 'International Accreditation of the Engineering Accreditation Commission of ABET.'
      }
    ]
  },
  Particular: {
    information: 'Here you can see other certifications that I have taken from various online or face-to-face courses on different learning platforms.',
    certification: [
      {
        name: 'Node: De cero a experto',
        text: <div>
          <p><strong>{'Learning platform: '}</strong></p>
          <p>{'Udemy'}</p>
          <p><strong>{'Verification code: '}</strong></p>
          <a href='https://www.udemy.com/certificate/UC-e023fc3e-748c-438c-ba8d-804de9521c7a/'
            target='_blank'
          >
            {'UC-e023fc3e-748c-438c-ba8d-804de9521c7a'}
          </a>
        </div>,
        image: <div className="udemy_logo" style={{ width: '100%', height: '100%' }} />,
        description: ''
      },
      {
        name: 'Nest: Desarrollo backend escalable con Node',
        text: <div>
          <p><strong>{'Learning platform: '}</strong></p>
          <p>{'Udemy'}</p>
          <p><strong>{'Verification code: '}</strong></p>
          <a href='https://www.udemy.com/certificate/UC-1f82a5ab-a193-4732-bd4f-19f352a9cc9e/'
            target='_blank'
          >
            {'UC-1f82a5ab-a193-4732-bd4f-19f352a9cc9e'}
          </a>
        </div>,
        image: <div className="udemy_logo" style={{ width: '100%', height: '100%' }} />,
        description: ''
      }
    ]
  }
  // Languajes: []
};
