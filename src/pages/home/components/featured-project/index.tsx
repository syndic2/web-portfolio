import React from 'react';

const FeaturedProject: React.FC = () => {
  return (
    <div className='flex flex-col gap-y-10 px-32 py-20'>
      <span className='font-semibold text-2xl'>
        Featured Project
      </span>
      <div className='grid grid-cols-3 items-center gap-8'>
        Coming soon...
      </div>
    </div>
  );
};

export default FeaturedProject;
