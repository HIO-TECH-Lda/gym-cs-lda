import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Truck, Users, Server, Laptop, Network } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Assistência 24/7",
      description: "Suporte técnico disponível 24 horas por dia, 7 dias por semana"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Garantia 12 Meses",
      description: "Todos os equipamentos com garantia estendida de 12 meses"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Entrega Grátis",
      description: "Entrega gratuita em toda a cidade de Maputo"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Equipe Certificada",
      description: "Profissionais certificados em redes, hardware e software"
    }
  ];

  const services = [
    {
      icon: <Network className="w-12 h-12 text-white" />,
      title: "Redes e Infraestrutura",
      description: "Instalação de cabos, switches, fibra óptica e toda infraestrutura de rede",
      link: "/servicos"
    },
    {
      icon: <Laptop className="w-12 h-12 text-white" />,
      title: "Venda de Equipamentos",
      description: "Computadores, impressoras, periféricos e acessórios de TI",
      link: "/produtos"
    },
    {
      icon: <Server className="w-12 h-12 text-white" />,
      title: "Sistemas Corporativos",
      description: "VPN, virtualização, backup e soluções empresariais completas",
      link: "/servicos"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Soluções em <span className="text-blue-300">Tecnologia</span> e Infraestrutura de TI
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Venda, instalação e suporte técnico especializado em Maputo. 
                Sua empresa conectada com as melhores soluções tecnológicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/servicos"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
                >
                  Nossos Serviços
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Equipe técnica trabalhando"
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher a Gym?</h2>
            <p className="text-xl text-gray-600">Nossos diferenciais competitivos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviços em Destaque</h2>
            <p className="text-xl text-gray-600">Soluções completas para sua empresa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-blue-100 mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors duration-200"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de suporte em TI?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco agora e receba um orçamento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/258842679580"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              WhatsApp
            </a>
            <a
              href="mailto:qcs.qcs.lda@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="tel:+258842679580"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;