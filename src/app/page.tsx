import Image from "next/image";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ProductCard from "./components/layout/Prodctcard";
import Slider from './components/layout/Slider';

type Props = {}
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Paragraph {
  id: number;
  story: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    image: '/Images/Bannes/M6vB29xwziv5tPQeYDm0W.webp',
    title: 'Custom Slide 1',
    description: 'Sale upto 50% off',
  },
  {
    id: 2,
    image: '/Images/Bannes/11062b_7050648587a64464888be99c32976ec6~mv2.webp',
    title: 'Custom Slide 2',
    description: 'Sale upto 50% off',
  },
  {
    id: 3,
    image: '/Images/Bannes/lKO6Ty-lqynYSKx2QbOyx.webp',
    title: 'Custom Slide 3',
    description: 'Sale upto 50% off',
  },
  {
    id: 4,
    image: '/Images/Bannes/0iPaMo6ahGuDtEgd8_t81.webp',
    title: 'Custom Slide 4',
    description: 'Sale now',
  },
  {
    id: 5,
    image: '/Images/Bannes/markus-spiske-BTKF6G-O8fU-unsplash.jpg',
    title: 'Custom Slide 5',
    description: 'Sale',
  },
  
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
        <Slider slides={slidesData} />
        {/* <ProductCard /> */}
      
      <Footer />
    </main>
  );
}
