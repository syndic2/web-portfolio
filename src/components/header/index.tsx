import React from 'react';
import NavItem from './components/nav-item';

const Header: React.FC = () => {
  return (
    <div className='px-12 py-6'>
      <nav className='flex justify-end items-center gap-x-6'>
        <NavItem
          title={'Home'}
          pathName='/'
        />
        <NavItem
          title={'Projects'}
          pathName='/projects'
        />
        <NavItem
          title={'Contact'}
          pathName='/contact'
        />
      </nav>
    </div>
  );
};

export default Header;
