import React from "react";
// import Button from "../components/Button";

const HeroSection: React.FC = () => {
  return (
    <section className=" w-full flex flex-col justify-center items-center p-6 h-[90vh]  text-center overflow-hidden mx-auto   [background-image:radial-gradient(circle,rgba(0,0,0,0.3)_1px,transparent_1px)] dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] bg-repeat will-change-[background-position] hero-section gap-5">

      
      
      <h1 className="lg:text-6xl text-4xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
      The Smart Way to Unlock Cash with{" "}
        <span className="text-[#159C47]">CASHMYCARS.NG</span>
      </h1>

      <p className="font-normal lg:text-[22px] text-base text-center  max-w-3xl text-gray-600 dark:text-gray-300"
      style={{
        padding: '0px 18px'
      }}
      >
        Turn your vehicle’s value into fast, secure financing. Get access to
        transparent, asset-backed loans without the delays and stress of
        traditional lending.
      </p>

      <div className="flex gap-4 p-10 flex-wrap justify-center">
       <a
    href="#valuation"
    className="bg-[#159C47] hover:bg-[#0f7a34] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-md w-[300px] h-[50px] flex justify-center items-center"
  >
   Apply for a Loan
  </a>

  {/* Secondary CTA */}
  <a
    href="#how-it-works"
    className="border-2 border-[#159C47] text-[#159C47] font-semibold py-4 px-8 rounded-full hover:bg-[#159C47] hover:text-white transition-all duration-300 w-[200px] h-[50px] flex justify-center items-center"
  >
    How It Works
  </a>
      </div>

    </section>
  );
};

export default HeroSection;
