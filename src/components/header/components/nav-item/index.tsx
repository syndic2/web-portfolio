import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  title: string;
  pathName: string;
}

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { title, pathName } = props;

  return (
    <Link to={pathName}>
      <div className="group/menu hover:bg-blue-100 px-4 py-2 rounded-full transition duration-300 cursor-pointer">
        <span className='text-lg font-semibold group-hover/menu:text-gray-500 transition duration-300'>
          {title}
        </span>
      </div >
    </Link>
  );
};

export default NavItem;
