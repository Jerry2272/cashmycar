import React from "react";
import { Clock, Shield, Eye } from "lucide-react";

const Whychoose: React.FC = () => {

    const whyChooseData = [
  {
    icon: Clock,
    title: "Instant Cash",
    description: "Receive funds in under 24 hours — no long waits or delays."
  },
  {
    icon: Shield,
    title: "Secure Loans",
    description: "Asset-backed lending ensures safe and reliable transactions."
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "Clear terms, no hidden fees or surprises."
  }
];
  return (
    <section className="bg-black lg:h-[100vh] flex flex-col justify-center items-center gap-6"
    style={{
      padding: '30px 10px'
    }}
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
        {" "}
        Why Choose <span className="text-[#159C47]">CASHMYCARS</span>?
      </h2>
      <p className="text-white  lg:text-xl max-w-3xl mx-auto mb-16 text-center">
        Fast. Transparent. Secure. We turn your car’s value into immediate cash
        while giving you a seamless, stress-free experience.
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center why-us "
   
      >
        {whyChooseData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className=" bg-white flex flex-col justify-center  dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition h-[250px] gap-2"
              style={{
                padding: '18px'
              }}
            >
              <div className="text-white rounded-full bg-black w-16 h-16 flex justify-center items-center mb-4 ">
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

export default Whychoose;
