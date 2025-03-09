
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-company-blue">YourCompany</span>
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-colors duration-300 hover:text-company-lightblue",
                      isActive 
                        ? "text-company-lightblue" 
                        : "text-company-blue"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button 
                asChild
                className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
              >
                <NavLink to="/careers">Join Our Team</NavLink>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-company-blue hover:text-company-lightblue"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                  isActive 
                    ? "text-company-lightblue" 
                    : "text-company-blue hover:text-company-lightblue"
                )
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Button 
            asChild
            className="w-full mt-3 bg-company-lightblue hover:bg-company-blue text-white"
          >
            <NavLink to="/careers" onClick={() => setIsOpen(false)}>Join Our Team</NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
