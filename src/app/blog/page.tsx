import BlogGrid from '../components/layout/BlogGrid';

const blogs = [
  {
    id: '1',
    title: 'Blue Ocean Waves Crash',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad aliquam a incidunt fuga, ducimus nisi iusto ipsum sit deleniti suscipit atque aliquid, velit at? At quasi magni voluptates molestiae aperiam.',
    imageUrl: '/Images/Bannes/artem-beliaikin-pPzQP35zh4o-unsplash.jpg'
  },
  {
    id: '2',
    title: 'Mountain Peaks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad aliquam a incidunt fuga, ducimus nisi iusto ipsum sit deleniti suscipit atque aliquid, velit at? At quasi magni voluptates molestiae aperiam.',
    imageUrl: '/Images/Bannes/mountain.jpg'
  },
  
];

const page: React.FC = () => {
  return (
    <div>
      <BlogGrid blogs={blogs} />
    </div>
  );
};

export default page;
