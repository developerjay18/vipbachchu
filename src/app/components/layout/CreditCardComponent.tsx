import React from 'react';

interface CreditCard {
  name: string;
  backgroundImage: string;
  // Add other properties as needed
}


interface CreditCardProps {
  card: CreditCard;
  onReadMore: (card: CreditCard) => void;
}

const CreditCardComponent: React.FC<CreditCardProps> = ({ card, onReadMore }) => {
  return (
    <div
      className="relative h-[260px] w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8"
      style={{ backgroundImage: `url(${card.backgroundImage})`, backgroundSize: 'cover' }}
    >
      <p className="text-2xl font-medium">{card.name}</p>
      <div className="flex justify-between gap-10">
        <p className="text-lg font-medium">Card Holder Name</p>
        <div className="flex-1 flex flex-col justify-end">
          <p className="self-end">Valid Date</p>
          <p className="self-end">MM/YY</p>
        </div>
        <div className="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 36" height="36" width="58">
            <circle fill-opacity="0.62" fill="#F9CCD1" r="18" cy="18" cx="18"></circle>
            <circle fill="#424242" r="18" cy="18" cx="40" opacity="0.36"></circle>
          </svg>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={() => onReadMore(card)}>Read More</button>
    </div>
  );
};

export default CreditCardComponent;
