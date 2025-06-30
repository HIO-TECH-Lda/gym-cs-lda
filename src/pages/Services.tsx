import React, { useState } from 'react';
import { Monitor, Network, Shield, Server, Cloud, HardDrive, Wrench, Clock } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('consultoria');

  const tabs = [
    { id: 'consultoria', name: 'Consultoria e Instalação', icon: <Monitor className="w-5 h-5" /> },
    { id: 'infraestrutura', name: 'Infraestrutura de Redes', icon: <Network className="w-5 h-5" /> },
    { id: 'suporte', name: 'Suporte Técnico', icon: <Wrench className="w-5 h-5" /> }
  ];

  const services = {
    consultoria: [
      {
        icon: <Monitor className="w-12 h-12 text-blue-600" />,
        title: "Desenvolvimento de Aplicativos e Websites",
        description: "Criação de soluções personalizadas para web e mobile",
        features: ["Desenvolvimento web responsivo", "Aplicações mobile nativas", "E-commerce completo", "Sistemas de gestão"]
      },
      {
        icon: <Cloud className="w-12 h-12 text-blue-600" />,
        title: "Virtualização de Sistemas e Cloud",
        description: "Migração e implementação de soluções em nuvem",
        features: ["Virtualização de servidores", "Migração para cloud", "Backup na nuvem", "Disaster recovery"]
      },
      {
        icon: <HardDrive className="w-12 h-12 text-blue-600" />,
        title: "Recuperação de Dados",
        description: "Recuperação profissional de dados perdidos",
        features: ["HDs danificados", "SSDs corrompidos", "Recuperação de RAID", "Análise forense"]
      }
    ],
    infraestrutura: [
      {
        icon: <Network className="w-12 h-12 text-blue-600" />,
        title: "Cabos UTP/Fibra Óptica",
        description: "Instalação e certificação de cabeamento estruturado",
        features: ["Cabeamento Cat6/Cat6a", "Fibra óptica monomodo/multimodo", "Certificação de rede", "Documentação completa"]
      },
      {
        icon: <Server className="w-12 h-12 text-blue-600" />,
        title: "Switches, Routers, Access Points",
        description: "Configuração e instalação de equipamentos de rede",
        features: ["Switches gerenciados", "Roteadores empresariais", "Wi-Fi corporativo", "VLANs e segmentação"]
      },
      {
        icon: <Monitor className="w-12 h-12 text-blue-600" />,
        title: "PABX e VoIP",
        description: "Sistemas de comunicação empresarial modernos",
        features: ["PABX digital", "VoIP empresarial", "Gravação de chamadas", "Integração com CRM"]
      }
    ],
    suporte: [
      {
        icon: <Shield className="w-12 h-12 text-blue-600" />,
        title: "Monitoramento Remoto de Datacenters",
        description: "Monitoramento 24/7 de infraestrutura crítica",
        features: ["Monitoramento 24/7", "Alertas em tempo real", "Relatórios detalhados", "Gestão proativa"]
      },
      {
        icon: <HardDrive className="w-12 h-12 text-blue-600" />,
        title: "Backup e Segurança de Dados",
        description: "Proteção completa dos seus dados empresariais",
        features: ["Backup automatizado", "Criptografia avançada", "Teste de restauração", "Políticas de retenção"]
      },
      {
        icon: <Wrench className="w-12 h-12 text-blue-600" />,
        title: "Manutenção Preventiva",
        description: "Manutenção regular para evitar problemas",
        features: ["Limpeza de equipamentos", "Atualização de sistemas", "Verificação de componentes", "Relatórios técnicos"]
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossos <span className="text-blue-300">Serviços</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Soluções completas em tecnologia da informação para empresas de todos os portes
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Especialização</h2>
            <p className="text-xl text-gray-600">Escolha a categoria de serviços</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeTab as keyof typeof services].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que nos escolher?</h2>
            <p className="text-xl text-gray-600">Garantias e benefícios exclusivos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">Assistência técnica disponível 24 horas por dia</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantia Estendida</h3>
              <p className="text-gray-600">12 meses de garantia em todos os equipamentos</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificações</h3>
              <p className="text-gray-600">Equipe certificada nas principais tecnologias</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <HardDrive className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Backup Gratuito</h3>
              <p className="text-gray-600">Backup dos dados durante todos os serviços</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de um orçamento personalizado?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato conosco e receba uma proposta adequada às suas necessidades
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
              href="mailto:info@gcs-lda.com"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;