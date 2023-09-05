import { IPortal } from '@/data/interface/global/portal/portal.interface';
import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: NextPage<IPortal> = ({ children, closeTime, portalOpen, portalTag }) => {
  const ref = useRef<Element| null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (mounted && !portalOpen && closeTime > 0) {
      const timeoutId = setTimeout(() => {
        setMounted(false);
        ref.current = null;
      }, closeTime);
      return () => clearTimeout(timeoutId);
    } else if (mounted && !portalOpen) {
      setMounted(false);
      ref.current = null;
    } else if (!mounted && portalOpen) {
      ref.current = document.querySelector<HTMLElement>(portalTag ?? '#portal');
      setMounted(true);
    }
  }, [closeTime, mounted, portalOpen, portalTag]);

  return (
    mounted && ref.current
      ? createPortal(
        <div className='portal'>
          {children}
        </div>
        , ref.current)
      : null
  );
};

export default Portal;
