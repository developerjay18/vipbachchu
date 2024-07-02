import Card from '../components/layout/Card';
import data from '../data'; 

const CardDetailsPage = () => {
  const banks = data.banks;
  const cards = data.cards;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Card Details</h1>
      <ul className="list-none mb-4">
        {cards.map((card) => {
          const bank = banks.find((bank) => bank.id === card.bankId);
          return (
            <li key={card.id} className="mb-4">
              <Card card={card} bank={bank} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardDetailsPage;