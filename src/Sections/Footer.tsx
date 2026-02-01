import React from "react";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import logo from '../assets/cmcar-logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 flex flex-col justify-center items-center lg:h-[50vh] h-auto gap-6"
    style={{
        padding: '15px 20px'
    }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 lg:gap-12 gap-6 justify-center items-center">

        {/* Brand */}
        <div className="flex gap-4 flex-col">
          <img src={logo} alt="ash My Car Logo" className="w-60" />
          <p className="text-sm leading-relaxed">
            We provide fast, secure, and transparent vehicle-backed loans,
            helping Nigerians unlock the value of their cars without the stress
            of traditional lending.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
            <li><a href="#faq" className="hover:text-white">FAQs</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +234 XXX XXX XXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@cashmycars.ng
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Nigeria
            </li>
          </ul>
        </div>

            {/* Social Media Link  */}
            <div className="flex gap-6">
                <Facebook />
                 <Facebook />
                  <Facebook />
            </div>
      </div>

      <hr className="bg-white  text-white"  style={{
        background: 'white'
      }}/>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-white"
      style={{
        paddingTop: '10px'
      }}
      >
        © {new Date().getFullYear()} CASHMYCARS.NG. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
