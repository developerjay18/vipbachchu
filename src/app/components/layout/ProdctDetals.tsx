import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Product {
  ImageURL: string;
  Name: string;
  highlight: string;
  SalePrice: number;
  RegularPrice: number;
  '% off': number;
  details: string;
  affiliateURL: string;
  storeName: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, error } = useSWR(id? `/api/product/${id}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="relative group w-full md:w-1/2">
          <Image
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={product.ImageURL}
            alt={product.Name}
            width={600}
            height={400}
            placeholder="blur"
            blurDataURL={product.ImageURL}
          />
        </div>
        <div className="md:ml-6 mt-6 md:mt-0 flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.Name}</h1>
          <p className="text-md text-yellow-500 mb-4">{product.highlight}</p>
          <p className="text-xl text-red-600 mb-2">${product.SalePrice}</p>
          <p className="text-lg line-through text-gray-500 mb-4">${product.RegularPrice}</p>
          <p className="text-md text-green-500 mb-4">{product['% off']}% off</p>
          <p className="text-lg text-gray-700 mb-4">{product.details}</p>
          <Link href={product.affiliateURL}>
            <a className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded inline-flex items-center">
              Buy from {product.storeName}
              <span className="transform rotate-45 ml-2">→</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;