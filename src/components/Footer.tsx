import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">GCS</h3>
                <p className="text-sm text-gray-400">Gym Comércio & Serviços - Soluções em TI</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empresa 100% moçambicana especializada em soluções de tecnologia e infraestrutura de TI.
            </p>
            <p className="text-xs text-gray-500">NUIT: 400195765</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors duration-200">Sobre</Link></li>
              <li><Link to="/servicos" className="text-gray-400 hover:text-white transition-colors duration-200">Serviços</Link></li>
              <li><Link to="/produtos" className="text-gray-400 hover:text-white transition-colors duration-200">Produtos</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-200">Portfólio</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors duration-200">Contato</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <div>
                  <p className="text-sm">+258 84 267 9580</p>
                  <p className="text-sm">+258 82 768 9370</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">info@gcs-lda.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span className="text-sm">Rua da Pereira de Lago nº 194<br />Maputo, Moçambique</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="flex items-start space-x-3">
              <Clock size={16} className="text-blue-400 mt-1" />
              <div className="text-sm">
                <p>Segunda - Sexta</p>
                <p className="text-gray-400">8:00 - 17:00</p>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Nossos Diferenciais</h5>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ Assistência técnica 24/7</li>
                <li>✓ Garantia de 12 meses</li>
                <li>✓ Entrega grátis em Maputo</li>
                <li>✓ Equipe certificada</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 GCS, Lda. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Desenvolvido por: <a href="https://hiotech.co" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Hio Tech, Lda</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;