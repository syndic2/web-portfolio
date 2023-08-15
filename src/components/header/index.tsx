import React from 'react';
import NavItem from './components/nav-item';

const Header: React.FC = () => {
  return (
    <div className='px-12 py-4'>
      <nav className='flex justify-end items-center gap-x-6'>
        <NavItem
          title={'Home'}
        />
        <NavItem
          title={'Projects'}
        />
        <NavItem
          title={'Contact'}
        />
      </nav>
    </div>
  );
};

export default Header;
