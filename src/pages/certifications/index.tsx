import { useTheme } from '@/core/context/theme/ThemeState';
import useModal from '@/core/hook/modal/modal.hook';
import { certification } from '@/data/constant/centifications_data';
import CertificationCard from '@/shared/components/global/certification-card/certification-card.component';
import Modal from '@/shared/components/global/modal/modal.component';
import { NextPage } from 'next';

const Certifications: NextPage = () => {
  const { theme: { page, text, title } } = useTheme();
  const { setModal, ...rest } = useModal();

  return (
    <div className={`${page} scroll_y`}>
      <p className={`${title}`}>{'Certifications'}</p>
      <p className={`${text}`}>
        {`
          Every course that one can find on the internet is a golden 
          opportunity that you should take advantage of to improve 
          your skills, there is a lot of information that has helped 
          me improve as a programmer in recent years.
        `}
      </p>
      {
        Object.entries(certification).map(([key, obj], index) => {
          return (
            <div className='container_list' key={index + key}>
              <p className={`${title}`}>{key}</p>
              <p className={`${text}`}>{obj.information}</p>
              <div className='list_certifications'>
                {obj.certification.map((cer, idx) =>
                  <CertificationCard
                    key={idx + cer.name}
                    certification={cer}
                    action={(event) => {
                      event.stopPropagation();
                      setModal({ title: cer.name, content: cer.text });
                    }}
                  />
                )}
              </div>
            </div>
          );
        })
      }
      <Modal {...rest} />
    </div>
  );
};

export default Certifications;
