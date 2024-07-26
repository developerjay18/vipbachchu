import BlogGrid from '../components/layout/BlogGrid';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Headerimage from '../components/share/Headerimage';

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
    imageUrl: '/Images/Bannes/tamanna-rumee-KzidBAES-uE-unsplash.jpg'
  },
  {
    id: '3',
    title: 'Blue Ocean Waves Crash',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad aliquam a incidunt fuga, ducimus nisi iusto ipsum sit deleniti suscipit atque aliquid, velit at? At quasi magni voluptates molestiae aperiam.',
    imageUrl: '/Images/Bannes/artem-beliaikin-pPzQP35zh4o-unsplash.jpg'
  },
  {
    id: '4',
    title: 'Mountain Peaks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad aliquam a incidunt fuga, ducimus nisi iusto ipsum sit deleniti suscipit atque aliquid, velit at? At quasi magni voluptates molestiae aperiam.',
    imageUrl: '/Images/Bannes/tamanna-rumee-KzidBAES-uE-unsplash.jpg'
  },
  
];

const page: React.FC = () => {
  return (
    <main>
       <Header />
       <br /> <br /> <br /> <br /> 
       <Headerimage 
        backgroundImageUrl="https://images.unsplash.com/photo-1699891730669-2d15cf3a5979?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Blogs" />

      <div className='bg-black'>
        <br />
        <BlogGrid blogs={blogs} />
      </div>
      <Footer />
    </main>
  );
};

export default page;
