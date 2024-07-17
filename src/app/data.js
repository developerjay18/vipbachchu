const data = {
  banks: [
    {
      id: 1,
      name: 'Bank of America',
    },
    {
      id: 2,
      name: 'Chase Bank',
    },
    //...
  ],
  cards: [
    {
      id: 1,
      name: 'Card 1',
      bankId: 1,
      highlight: 'This is a highlight of Card 1',
      details: 'This is a description of Card 1',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      applyLink: 'https://example.com/apply/1',
    },
    {
      id: 2,
      name: 'Card 2',
      bankId: 2,
      highlight: 'This is a highlight of Card 2',
      details: 'This is a description of Card 2',
      features: ['Feature 4', 'Feature 5', 'Feature 6'],
      applyLink: 'https://example.com/apply/2',
    },
    //...
  ],
};

export default data;
