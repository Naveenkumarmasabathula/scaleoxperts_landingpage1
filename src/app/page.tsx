import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import WhoNeedsThis from '../components/WhoNeedsThis';
import WhatYouGet from '../components/WhatYouGet';
import Services from '../components/Services';
// import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section id="contact">
        <ContactForm />
      </section>
      <WhoNeedsThis />
      <WhatYouGet />
      <section id='services'>
        <Services />
      </section>
      {/* <WhyChooseUs /> */}
      <section id="testimonials">
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
}

export default App;