import React from 'react';

const TechStack: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-y-16 px-32 py-16 bg-blue-100'>
      <span className='text-4xl font-bold'>
        What im capable of?
      </span>
      <div className='flex flex-col gap-y-10'>
        <div className='grid grid-cols-5 gap-x-8 items-center'>
          <img src="/assets/images/react-js.png" alt="ReactJS" />
          <img src="/assets/images/angular.png" alt="Angular" />
          <img src="/assets/images/ionic.png" alt="Ionic" className='w-44' />
          <img src="/assets/images/tailwind-css.png" alt="TailwindCSS" />
          <img
            src="/assets/images/node-js.png"
            alt="NodeJS"
            className='w-32 ml-8'
          />
        </div>
        <div className='flex justify-center items-center gap-x-8'>
          <img
            src="/assets/images/nest-js.png"
            alt="NestJS"
            className='w-52'
          />
          <img
            src="/assets/images/laravel.png"
            alt="Laravel"
            className='w-52'
          />
          <img
            src="/assets/images/flask.png"
            alt="Flask"
            className='w-52'
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
