import React from "react";
// import Button from "../components/Button";

const CTA: React.FC = () => {
  return (
    <div className="bg-black/10 text-white text-center h-auto flex flex-col gap-6 justify-center items-center cta" 
   
    >
      <div className="max-w-4xl mx-auto  flex flex-col gap-6 justify-center items-center">
        
        <h2 className="text-2xl lg:text-5xl font-bold mb-6 text-gray-900">
          Ready to Unlock Cash From Your Car?
        </h2>

        <p className="lg:text-xl mb-10 text-gray-700">
          Access fast, secure, and transparent vehicle-backed loans today.
          Your car’s value can become your next financial opportunity — without
          the stress of traditional lending.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:gap-6 gap-2">
          <a href=""     className="bg-[#159C47] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#159C47] hover:text-white transition-all duration-300 lg:w-[200px] w-[300px h-[50px] flex justify-center items-center">
           Apply for Loan
          </a>

          <a href="" className="border-2 border-[#159C47]   text-[#159C47] font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-md lg:w-[200px] w-[300px] h-[50px] flex justify-center items-center">
            Speak With an Agent
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
