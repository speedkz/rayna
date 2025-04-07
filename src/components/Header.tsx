import React from 'react';
import { Menu } from '@headlessui/react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export type HeaderVariant = 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'eleven';

interface HeaderProps {
  variant?: HeaderVariant;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ variant = 'one', className = '' }) => {
  const renderVariantOne = () => (
    <div className="w-full">
      {/* Product Hunt Banner */}
      <div className="w-full bg-[#290B00] py-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-white">Rayna UI is now features on Product Hunt!</span>
          <button className="text-sm font-semibold text-[#F3A218] hover:text-[#F3A218]/90">
            Support Us
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full px-[72px] py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/logo.svg" alt="Logo" width={129} height={32} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
                Solutions
                <FiChevronDown className="h-5 w-5 text-[#667185]" />
              </Menu.Button>
            </Menu>
            <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
              How it works
            </button>
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
                About
                <FiChevronDown className="h-5 w-5 text-[#667185]" />
              </Menu.Button>
            </Menu>
            <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
              Resources
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="rounded-lg bg-[#EB5017] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#EB5017]/90">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVariantTwo = () => (
    <div className="w-full px-[72px] py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={129} height={32} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
            Use Cases
          </button>
          <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
            Pricing
          </button>
          <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
            Partners
          </button>
          <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
            Affiliates
          </button>
          <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
            Customers
          </button>
          <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
            Blog
          </button>
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
              Resources
              <FiChevronDown className="h-5 w-5 text-[#667185]" />
            </Menu.Button>
          </Menu>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold text-[#EB5017] hover:text-[#EB5017]/90">
            Login
          </button>
          <button className="rounded-lg bg-[#EB5017] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#EB5017]/90">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );

  const renderVariantThree = () => (
    <div className="w-full px-[112px] py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={129} height={32} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          <div className="flex items-center rounded-[40px] bg-[#F7F9FC] px-10 py-4">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
                Use Cases
                <FiChevronDown className="h-5 w-5 text-[#667185]" />
              </Menu.Button>
            </Menu>
            <Menu as="div" className="relative ml-8">
              <Menu.Button className="flex items-center gap-2 text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
                Resources
                <FiChevronDown className="h-5 w-5 text-[#667185]" />
              </Menu.Button>
            </Menu>
            <button className="ml-8 text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
              Pricing
            </button>
            <button className="ml-8 text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
              What's New?
            </button>
            <div className="ml-8 h-2 w-2 rounded-full bg-[#D42620]" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="rounded-[40px] bg-[#EB5017] px-6 py-4 text-sm font-semibold text-white hover:bg-[#EB5017]/90">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );

  const renderVariantNine = () => (
    <div className="w-full px-[112px] py-6">
      <div className="flex items-center justify-between">
        {/* Left Content */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" width={129} height={32} />
          </Link>

          {/* Search */}
          <div className="relative">
            <div className="flex items-center rounded-md border border-[#D0D5DD] bg-white px-3 py-2">
              <FiSearch className="h-5 w-5 text-[#667185]" />
              <input
                type="text"
                placeholder="Search for components..."
                className="ml-2 w-[375px] border-none bg-transparent text-sm text-[#98A2B3] outline-none placeholder:text-[#98A2B3]"
              />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
            About
          </button>
          <button className="text-sm font-semibold text-[#101928] hover:text-[#101928]/80">
            Partners
          </button>
          <button className="text-sm font-semibold text-[#0235SZ] hover:text-[#0235SZ]/80">
            Sign in
          </button>
          <button className="rounded-2xl bg-[#EB5017] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#EB5017]/90">
            Post a job
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'one':
        return renderVariantOne();
      case 'two':
        return renderVariantTwo();
      case 'three':
        return renderVariantThree();
      case 'nine':
        return renderVariantNine();
      default:
        return renderVariantOne();
    }
  };

  return (
    <header className={`relative bg-white ${className}`}>
      {renderContent()}
    </header>
  );
};

export default Header; 