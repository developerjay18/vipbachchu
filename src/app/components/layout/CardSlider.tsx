import React, { useState } from 'react';
import { FaCanadianMapleLeaf, FaFlagUsa } from 'react-icons/fa';
import CreditCardComponent from './CreditCardComponent';
import CreditCardDetails from './CreditCardDetails';

interface CreditCard {
  id: string;
  bank: string;
  name: string;
  description: string;
  details: string;
  applyLink: string;
  backgroundImage: string;
}

const creditCards: CreditCard[] = [
  { id: '1', bank: 'Bank of Canada', name: 'Canada Card 1', description: 'Description for Canada Card 1', details: 'Details for Canada Card 1', applyLink: 'https://www.bankofcanada.ca', backgroundImage: 'https://source.unsplash.com/random/1' },
  { id: '2', bank: 'Bank of Canada', name: 'Canada Card 2', description: 'Description for Canada Card 2', details: 'Details for Canada Card 2', applyLink: 'https://www.bankofcanada.ca', backgroundImage: 'https://source.unsplash.com/random/2' },
  { id: '3', bank: 'Bank of USA', name: 'USA Card 1', description: 'Description for USA Card 1', details: 'Details for USA Card 1', applyLink: 'https://www.bankofusa.com', backgroundImage: 'https://source.unsplash.com/random/3' },
  { id: '4', bank: 'Bank of USA', name: 'USA Card 2', description: 'Description for USA Card 2', details: 'Details for USA Card 2', applyLink: 'https://www.bankofusa.com', backgroundImage: 'https://source.unsplash.com/random/4' },
];

const CardSlider: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<string>('Bank of Canada');
  const [selectedCard, setSelectedCard] = useState<CreditCard | null>(null);

  const filteredCards = creditCards.filter(card => card.bank === selectedBank);

  const handleCardSelect = (card: CreditCard) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button 
          className={`flex items-center bg-blue-500 text-white py-2 px-4 rounded mx-2 ${selectedBank === 'Bank of Canada' && 'bg-blue-700'}`}
          onClick={() => setSelectedBank('Bank of Canada')}
        >
          <FaCanadianMapleLeaf className="mr-2" /> Bank of Canada
        </button>
        <button 
          className={`flex items-center bg-blue-500 text-white py-2 px-4 rounded mx-2 ${selectedBank === 'Bank of USA' && 'bg-blue-700'}`}
          onClick={() => setSelectedBank('Bank of USA')}
        >
          <FaFlagUsa className="mr-2" /> Bank of USA
        </button>
      </div>
      <div className="flex overflow-x-auto space-x-4">
        {filteredCards.map(card => (
          <CreditCardComponent key={card.id} card={card} onReadMore={() => handleCardSelect(card)} />
        ))}
      </div>
      {selectedCard && <CreditCardDetails card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </div>
  );
};

export default CardSlider;
