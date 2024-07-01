import React from 'react';
import Button from '../components/share/Button';

const Contact: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(../Images/Contact-US.jpg)', backgroundAttachment: 'fixed' }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="w-full max-w-5xl p-8 bg-white bg-opacity-0 rounded-lg">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Hey! Interested in staying in the loop, sign-up for our updates.
            <br />
            We won't spam you, <span className="italic">pinky promise</span> 👍
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900 "
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              <span className="text-sm text-white">
                I'd like to receive drop notifications and offers from Work Louder Inc. via email and/or occasional SMS & consent to the privacy policy
              </span>
            </div>
            

            <div className="flex justify-center ">
            <Button label="Read more"  />
          </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
