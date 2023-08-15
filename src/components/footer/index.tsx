import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex gap-5'>
        <a
          href='https://www.linkedin.com/in/jonathan-sugianto-843b561a4'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin size={25} />
        </a>
        <a
          href='https://github.com/syndic2?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <BsGithub size={25} />
        </a>
      </div>
      <span className='text-gray-900'>
        Copyright ©2023 All right reserved
      </span>
    </div>
  );
};

export default Footer;
