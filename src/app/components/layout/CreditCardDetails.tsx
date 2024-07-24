import React from 'react';

interface CreditCard {
  name: string;
  backgroundImage: string;
  details: string;
  applyLink: string;
  
}

interface CreditCardDetailsProps {
  card: CreditCard;
  onClose: () => void;
}

const CreditCardDetails: React.FC<CreditCardDetailsProps> = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-black p-6 rounded-lg border shadow-lg w-3/4 md:w-1/2"> 
      {/* //bg-gradient-to-r  from-fuchsia-500 to-pink-500 */}
        <h2 className="text-2xl font-bold mb-4">{card.name}</h2>
        <p className="mb-4">{card.details}</p>
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={onClose}>Close</button>
          <a href={card.applyLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r  from-fuchsia-500 to-pink-500 text-white py-2 px-4 rounded">Apply</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreditCardDetails;
