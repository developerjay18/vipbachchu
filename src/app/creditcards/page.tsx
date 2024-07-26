"use client";
import React from 'react';
import CardSlider from '../components/layout/CardSlider';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Headerimage from '../components/share/Headerimage';


const Home: React.FC = () => {
  return (
    <main>
      <Header />
       <br /> <br /><br /> <br />
    <Headerimage 
        backgroundImageUrl="https://images.unsplash.com/photo-1675334758608-8f2af855a8b1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        text="Credit Cards" />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Credit Card</h1>
      <CardSlider />
    </div>
    <Footer />
    </main>
  );
};

export default Home;