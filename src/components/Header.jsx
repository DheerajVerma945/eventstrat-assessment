import { ChevronDown, Menu } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    'Home',
    'Agri Trade 101',
    'Exporters Handbook',
    'Commodity Focus',
    'Resources',
  ]

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img 
            src="./logo.png" 
            alt="Logo" 
            className="h-12 w-auto" 
          />

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item}
                className="flex items-center text-[#445464] hover:text-[#f49729] cursor-pointer transition-colors"
              >
                {item}
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button className="cursor-pointer text-[#124673] font-medium hover:text-[#f49729] transition-colors">
              Log in
            </button>
            <button className=" cursor-pointer bg-[#124673] text-white px-4 py-2 rounded-md hover:bg-[#f49729] transition-colors">
              Contact Us
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-[#445464]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute w-full bg-white border-t shadow-lg left-0 right-0">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div 
                  key={item}
                  className="flex items-center justify-between text-[#445464] hover:text-[#f49729] cursor-pointer"
                >
                  <span>{item}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              ))}
              <div className="pt-4 space-y-4 border-t">
                <button className="w-full text-[#124673] font-medium">
                  Log in
                </button>
                <button className="w-full bg-[#124673] text-white px-4 py-2 rounded-md">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header