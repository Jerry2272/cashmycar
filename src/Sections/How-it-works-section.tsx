import React from "react";
import { Car, SearchCheck, Banknote } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Car,
      title: "Online Valuation",
      description:
        "Enter your vehicle details and get a quick estimate of how much cash you can unlock.",
    },
    {
      icon: SearchCheck,
      title: "Vehicle Inspection",
      description:
        "We verify your car’s condition and documentation through a short professional inspection.",
    },
    {
      icon: Banknote,
      title: "Instant Disbursement",
      description:
        "Once approved, funds are sent directly to your bank account — often within 24 hours.",
    },
  ];

  return (
    <section className="bg-black/10 lg:h-[100vh] flex flex-col justify-center items-center gap-6"
    style={{
      padding: '30px 10px'
    }}
    >
       <h2 className="text-2xl lg:text-4xl font-bold text-gray-900  mb-4">
          How <span className="text-[#159C47]">CASHMYCARS</span> Works
        </h2>
        <p className="text-gray-700  max-w-xl text-center mx-auto mb-16 lg:text-lg">
          Getting cash from your car is simple, secure, and fast. Just follow
          these three easy steps.
        </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center h-i-w"
      >
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className=" bg-white flex flex-col justify-center  rounded-xl shadow hover:shadow-lg transition h-[250px] gap-2"
              style={{
                padding: '18px'
              }}
            >
              <div className="text-gray-700 rounded-full bg-black/10 w-16 h-16 flex justify-center items-center mb-4 ">
                <Icon className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
