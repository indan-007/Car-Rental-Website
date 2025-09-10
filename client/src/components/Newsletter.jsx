import React from 'react';

const Newsletter = () => {
  return (
    <div className="max-w-5xl py-16 md:pl-20 md:w-full mx-2 md:mx-auto p-4 flex flex-col md:flex-row items-center justify-between text-left bg-gradient-to-b from-primary to-primary-dark rounded-2xl md:p-10 text-white overflow-hidden relative">
      {/* Left Content */}
      <div className="animate-fadeIn">
        <div>
          <p className="text-slate-200 animate-slideUp">
            Trusted by <span className="font-semibold">car owners</span>, <span className="font-semibold">service providers</span> & <span className="font-semibold">customers</span>
          </p>
          <div className="flex items-center gap-2 mt-2 opacity-90">
            {/* Simple Star SVG (you can keep or remove) */}
            <svg width="95" height="18" viewBox="0 0 95 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.52447 1.46353C8.67415 1.00287 9.32585 1.00287 9.47553 1.46353L10.9084 5.87336C10.9753 6.07937 11.1673 6.21885 11.3839 6.21885H16.0207C16.505 6.21885 16.7064 6.83865 16.3146 7.12336L12.5633 9.84878C12.3881 9.9761 12.3148 10.2018 12.3817 10.4078L13.8145 14.8176C13.9642 15.2783 13.437 15.6613 13.0451 15.3766L9.29389 12.6512C9.11865 12.5239 8.88135 12.5239 8.70611 12.6512L4.95488 15.3766C4.56303 15.6613 4.03578 15.2783 4.18546 14.8176L5.6183 10.4078C5.68524 10.2018 5.61191 9.9761 5.43667 9.84878L1.68544 7.12336C1.29358 6.83866 1.49497 6.21885 1.97933 6.21885H6.6161C6.83272 6.21885 7.02469 6.07937 7.09163 5.87336L8.52447 1.46353Z" fill="#FFD700"/>
            </svg>
            <span className="text-sm text-slate-300">4.8/5 • 3000+ Happy Users</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-[46px] max-md:mt-3 text-balance md:leading-[60px] max-w-md font-semibold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text animate-gradient">
          Join our newsletter & Stay Updated
        </h1>
      </div>

      {/* Right Content */}
      <div className="flex items-center gap-2 bg-black/30 max-md:mt-6 pl-4 h-11 text-sm rounded-full overflow-hidden animate-slideUp">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00337 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25" stroke="#CAD5E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="#CAD5E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input
          type="text"
          placeholder="Enter your email..."
          className="outline-none h-11 bg-transparent placeholder-gray-300 text-white"
        />
        <button className="px-6 h-10 mr-1 rounded-full border border-white/30 bg-primary-dark hover:bg-primary transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
