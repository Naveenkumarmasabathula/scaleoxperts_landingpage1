import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import WhoNeedsThis from '../components/WhoNeedsThis';
import WhatYouGet from '../components/WhatYouGet';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ContactForm />
      <WhoNeedsThis />
      <WhatYouGet />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm 
        title="Ready to grab your free audit?"
        subtitle="Let's Talk! No Sales, Just Support."
        ctaText="Send Me the Audit form"
      />
      <Footer />
    </div>
  );
}

export default App;