import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Industries from '../components/Industries';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Industries />
      <Pricing />
    </main>
  );
}