'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowitWorks';
import Pricing from '@/components/sections/Pricing';
import GeneratorModal from '@/components/generator/GeneratorModal';

const Home: NextPage = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>StackForge | Your custom project starter</title>
        <meta name="description" content="Generate production-ready boilerplates" />
      </Head>

      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 -z-10" />

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />

      <GeneratorModal
        isOpen={isGenerating}
        onClose={() => setIsGenerating(false)}
      />
    </div>
  );
};

export default Home;