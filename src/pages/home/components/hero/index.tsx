import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className='flex items-start gap-x-8 px-32 py-4'>
      <div className='py-24'>
        <img
          src="/assets/images/developer-male.png"
          alt="Profile"
          style={{ maxWidth: '500px' }}
          className='rounded-full'
        />
      </div>

      <div className='flex flex-col gap-y-10 p-12'>
        <div className='flex flex-col gap-y-4'>
          <span className='text-3xl font-bold'>
            Hi, I am Jonathan, <br /> Software Engineer
          </span>
          <span className='text-lg'>
            Hellow! My name is Jonathan Sugianto and some of my friends used to called me <b>Jo</b>. I am 24 years old and living in Surabaya, Indonesia. As an <b>Software Engineer</b>, i am passionate about <b>front-end</b> development. But not eager also to be placed in back-end development team. Cannot wait to work with you guys!
          </span>
        </div>

        <button className='bg-red-500 text-white text-lg font-semibold rounded-sm w-56 h-14 hover:bg-red-400 transition duration-300'>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
