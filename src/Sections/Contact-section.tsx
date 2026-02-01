import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 lg:px-0 
      [background-image:radial-gradient(circle,rgba(0,0,0,0.3)_1px,transparent_1px)] 
      dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] 
      [background-size:20px_20px] bg-repeat 
      flex justify-center items-center "
      style={{
        padding: '96px 16px'
      }}
    >
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 lg:text-lg">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        {/* Form */}
        <form className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 md:p-8 flex flex-col gap-6 justify-center"
        style={{ padding: '10px', }}
        >
          
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full">
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#159C47]"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#159C47]"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full">
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#159C47]"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-2">Subject *</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#159C47]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Message *</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#159C47]"
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="lg:w-100 w-full mx-auto bg-[#159C47] text-white font-semibold py-4 rounded-full transition cursor-pointer" style={{ padding: '10px', }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
