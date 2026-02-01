import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I still keep my car after getting the loan?",
      answer:
        "Yes. You continue to use your vehicle while accessing funds. We only use your car as collateral.",
    },
    {
      question: "How fast can I receive my money?",
      answer:
        "Most customers receive funds within 24 hours after inspection and agreement signing.",
    },
    {
      question: "What documents are required?",
      answer:
        "Valid ID, vehicle documents, proof of ownership, and basic personal details are required.",
    },
    {
      question: "Is CASHMYCARS safe and legitimate?",
      answer:
        "Yes. We operate using secure, transparent, asset-backed lending practices to protect both parties.",
    },
    {
      question: "How is my loan amount determined?",
      answer:
        "The loan amount depends on your vehicle’s make, model, year, and overall condition.",
    },
    {
      question: "What happens if I miss repayment?",
      answer:
        "Our team will work with you on flexible options, but timely repayment is important as your vehicle is used as collateral.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 [background-image:radial-gradient(circle,rgba(0,0,0,0.3)_1px,transparent_1px)] dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] bg-repeat will-change-[background-position]  h-screen flex justify-center items-center gap-10" 
    style={{
        padding: '10px 15px'
    }}
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Everything you need to know about unlocking cash from your vehicle.
        </p>

        <div className="flex   flex-col gap-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#159C47] dark:border-gray-800 rounded-xl overflow-hidden"
            
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 bg-gray-50  cursor-pointer  hover:bg-gray-100 dark:hover:bg-gray-800 transition flex justify-between items-center"
                style={{
                    padding: '14px 20px'
                }}
              >
                <span className="font-semibold text-gray-900 text-[16px]">
                  {faq.question}
                </span>
                <span className="text-2xl text-[#159C47]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                  openIndex === index ? "max-h-60 faq-padding" : "max-h-0 py-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
