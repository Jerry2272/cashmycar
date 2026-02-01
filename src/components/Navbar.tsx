import React from 'react'
import logo from '../assets/cmcar-logo.png'

const Navbar:React.FC = () => {
  return (
    <nav className="bg-white shadow-md lg:px-[3em] px-4 py-4 flex justify-between items-center lg:block hidden"
    style={{
        padding: '20px 70px'
    }}
    >
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-[#159C47]">
        <img
          src={logo}
          alt="CashMyCar  Logo"
          width={200}
          height={50}
          className='object-fit object-cover'
        />
      </a>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <a
          href="/"
          className=" hover:text-[#159C47] font-medium text-[16px]"
        >
          Home
        </a>
        <a
          href="#vendor"
          className=" hover:text-[#159C47] text-[#0f0f0f] font-medium text-[16px]"
        >
         Why CashMyCar
        </a>
          <a
          href="#vendor"
          className=" hover:text-[#159C47] text-[#0f0f0f] font-medium text-[16px]"
        >
         About Us
        </a>
          <a
          href="#vendor"
          className=" hover:text-[#159C47] text-[#0f0f0f] font-medium text-[16px]"
        >
        FAQs
        </a>
          <a
          href="#vendor"
          className=" hover:text-[#159C47] text-[#0f0f0f] font-medium text-[16px]"
        >
       Contact Us
        </a>
      </div>
    </nav>
  )
}

export default Navbar