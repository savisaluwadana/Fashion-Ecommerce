import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Collections } from '../components/sections/Collections';
import { NewArrivals } from '../components/sections/NewArrivals';
import { Testimonials } from '../components/sections/Testimonials';
import { Instagram } from '../components/sections/Instagram';
import { Newsletter } from '../components/sections/Newsletter';

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Collections />
      <NewArrivals />
      <Testimonials />
      <Instagram />
      <Newsletter />
    </>
  );
}