import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      <div className="hidden md:block fixed top-0 right-0 w-[40%] h-screen z-0">
        <div
          className="absolute inset-0 bg-mondrian-blue"
          style={{
            clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />
      </div>

      <main className="pt-20 min-h-screen relative">
        <div className="grid grid-cols-1 lg:grid-cols-10 min-h-[calc(100vh-5rem)]">
          <div className="lg:col-span-6 flex items-center order-1 lg:order-1 relative z-10">
            <HeroSection />
          </div>

          <div className="lg:col-span-4 min-h-[400px] lg:min-h-full order-2 lg:order-2 relative z-10">
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
