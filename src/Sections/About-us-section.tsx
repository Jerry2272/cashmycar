import React from "react";
import aboutImage from "../assets/aboutImg.jpg";  

const AboutSection: React.FC = () => {
  return (
    <section className=" bg-white  flex justify-center items-center flex-col gap-10 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] about" 
    >
        <h1 className="text-2xl text-center font-[500]">Get to understand Cashmycar and what we do.</h1>
      <div className="max-w-6xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image */}
        <div className=" w-full">
          <img
            src={aboutImage}
            alt="CASHMYCARS Mission"
            className="rounded-xl shadow-lg w-full h-[600px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full  text-left flex  flex-col gap-4">
            <div className="flex gap-4 flex-col">
                 <h2 className="text-xl lg:text-3xl font-bold text-gray-900 text-center" 
                 style={{
                  textAlign: 'center'
                 }}
                 >About Us</h2>
        <p className="text-gray-700 lg:text-lg mb-4">
            At  <span className="text-[#159C47] font-bold">CASHMYCARS</span>, we believe your assets should work for you. We specialize in providing streamlined credit solutions by leveraging the equity in your vehicle. Our mission is to offer fast, transparent, and secure loan disbursements, helping Nigerians access capital without the traditional hurdles of unsecured lending. Whether you’re looking to grow a business or manage an unexpected expense, we turn your car’s value into immediate opportunity.
        </p>
            </div>
         
         <div className="bg-white flex gap-4 flex-col">
             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 lg:text-lg mb-4">
            At <span className="text-[#159C47] font-bold">CASHMYCARS</span>, our mission is to empower Nigerians by turning their vehicle’s value into fast, transparent, and secure financial opportunities.
          </p>
          <p className="text-gray-700 lg:text-lg mb-4">
            We simplify the lending process, eliminate unnecessary delays, and ensure every customer has access to reliable, asset-backed loans to grow their business, manage emergencies, or achieve personal goals.
          </p>
          <p className="text-gray-700 lg:text-lg mb-4">
            With technology at the core of our operations, we aim to create a seamless experience where your car becomes more than just transportation — it becomes a source of opportunity.
          </p>
         </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
