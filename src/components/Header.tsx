import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+258 84 267 9580 | +258 82 768 9370</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>qcs.qcs.lda@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Seg-Sex, 8h–17h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Gym Comércio & Serviços</h1>
              <p className="text-sm text-gray-600">Soluções em TI</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive(item.href) ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Solicitar Orçamento
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 ${
                    isActive(item.href) ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                Solicitar Orçamento
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;