import { ILayout } from '@/data/interface/shared/components/base/layout/layout.interface';
import { FC } from 'react';
import Sidebar from '../sidebar/sidebar.component';
import { sidebar } from '@/data/constant/sidebar';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Sidebar {...sidebar}/>
      {children}
    </div>
  );
};

export default Layout;
