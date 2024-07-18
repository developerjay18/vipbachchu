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

  { 
    id: '1', 
    bank: 'Bank of Canada',
     name: 'Canada Card 1', 
     description: 'Description for Canada Card 1', 
     details: 'Details for Canada Card 1', 
     applyLink: 'https://www.bankofcanada.ca', 
     backgroundImage: 'https://images.unsplash.com/photo-1667715323197-98c2a3d5dc0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: '2', 
      bank: 'Bank of Canada',
      name: 'Canada Card 2',
      description: 'Description for Canada Card 2', 
      details: 'Details for Canada Card 2',
      applyLink: 'https://www.bankofcanada.ca', 
      backgroundImage: 'https://e1.pxfuel.com/desktop-wallpaper/979/214/desktop-wallpaper-credit-card-backgrounds-designs-posted-by-sarah-cunningham-card-design.jpg' 
    },
    { id: '3', 
      bank: 'Bank of USA', 
      name: 'USA Card 1', 
      description: 'Description for USA Card 1', 
      details: 'Details for USA Card 1', 
      applyLink: 'https://www.bankofusa.com', 
      backgroundImage: 'https://png.pngtree.com/thumb_back/fh260/background/20190831/pngtree-vector-card-with-a-brown-pattern-design-elements-in-a-gothic-image_313282.jpg' 
    },
    { id: '4', 
      bank: 'Bank of india', 
      name: 'USA Card 2', 
      description: 'Description for USA Card 2', 
      details: 'Details for USA Card 2', 
      applyLink: 'https://www.bankofusa.com', 
      backgroundImage: 'https://images.unsplash.com/photo-1720778693818-ab47a7fc6df4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
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
          className={`flex items-center bg-blue-500 text-white py-2 px-4 rounded mx-2 ${selectedBank === 'Bank of india' && 'bg-blue-700'}`}
          onClick={() => setSelectedBank('Bank of india')}
        >
          <FaFlagUsa className="mr-2" /> Bank of india
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



