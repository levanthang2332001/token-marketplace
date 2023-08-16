import React from 'react';

const Footer = () => {
  return (
    <footer className='flex w-screen flex-col items-center justify-center '>
      <div className='max-w-lg '>
        <h3 className='mt-8 text-4xl'>Request more information</h3>
        <p className='mt-8'>
          Lift Media, LLC is a clinical state headlthcare company which is
          developing a unique.
        </p>
        <button className='mt-10 h-10 w-36 rounded-2xl bg-[#1374ef] text-[10px] text-[#fff]  drop-shadow-xl hover:bg-[#1372efca]'>
          Contact Us
        </button>

        <p className='mt-8 text-[8px]'>© 2023 Lift Media, LLC.</p>
      </div>
      <div className='my-6 flex w-11/12 justify-end border-t-[1px]'>
        <div className='my-5 flex w-1/3 flex-row items-center justify-around'>
          <button>Team</button>
          <button>Case Studies</button>
          <button>Publications</button>
        </div>
        <div className='w-1/3'></div>
      </div>
    </footer>
  );
};

export default Footer;
