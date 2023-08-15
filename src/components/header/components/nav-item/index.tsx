import React from 'react';

interface NavItemProps {
  title: string;
}

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { title } = props;

  return (
    <div className="group/menu hover:bg-blue-100 px-4 py-2 rounded-full transition duration-300 cursor-pointer">
      <span className='text-lg font-semibold group-hover/menu:text-gray-500 transition duration-300'>
        {title}
      </span>
    </div>
  );
};

export default NavItem;
