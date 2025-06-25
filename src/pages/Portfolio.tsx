import React from 'react';
import { Star, Building, CheckCircle, Quote } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Rede Corporativa - Empresa de Logística",
      description: "Instalação completa de infraestrutura de rede com cabeamento estruturado, switches gerenciados e sistema de monitoramento para empresa com 150 funcionários.",
      category: "Infraestrutura"
    },
    {
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Data Center - Hospital Privado",
      description: "Implementação de data center com redundância, sistemas de backup automático e monitoramento 24/7 para garantir disponibilidade crítica dos sistemas hospitalares.",
      category: "Data Center"
    },
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sistema VoIP - Escritório de Advocacia",
      description: "Instalação de sistema VoIP corporativo com 50 ramais, gravação de chamadas e integração com CRM para melhor atendimento aos clientes.",
      category: "Comunicações"
    },
    {
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Virtualização - Escola Técnica",
      description: "Migração de 15 servidores físicos para ambiente virtualizado, reduzindo custos operacionais em 60% e melhorando a eficiência energética.",
      category: "Virtualização"
    },
    {
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Wi-Fi Corporativo - Hotel 5 Estrelas",
      description: "Implementação de rede Wi-Fi de alta capacidade cobrindo 200 quartos e áreas comuns, com sistema de autenticação centralizada para hóspedes.",
      category: "Redes Sem Fio"
    },
    {
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Backup Corporativo - Banco Regional",
      description: "Sistema de backup empresarial com replicação off-site, criptografia avançada e testes regulares de recuperação para garantir integridade dos dados.",
      category: "Backup e Segurança"
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      company: "Empresa de Logística Maputo",
      text: "A Gym instalou nossa rede corporativa com eficiência excepcional. O projeto foi entregue no prazo e funcionou perfeitamente desde o primeiro dia.",
      rating: 5
    },
    {
      name: "Dr. João Macamo",
      company: "Hospital Privado Central",
      text: "Confiamos nosso data center crítico à Gym e não poderíamos estar mais satisfeitos. O suporte 24/7 nos dá total tranquilidade.",
      rating: 5
    },
    {
      name: "Carla Bento",
      company: "Escritório Jurídico Associados",
      text: "O sistema VoIP implementado pela Gym revolucionou nossa comunicação interna e com clientes. Excelente custo-benefício.",
      rating: 5
    },
    {
      name: "Prof. Miguel Santos",
      company: "Instituto Técnico de Maputo",
      text: "A virtualização dos nossos servidores foi um sucesso completo. Reduzimos custos significativamente e melhoramos a performance.",
      rating: 5
    }
  ];

  const clients = [
    "Hospital Privado Central",
    "Banco Regional de Moçambique",
    "Instituto Técnico de Maputo",
    "Empresa de Logística Maputo",
    "Hotel 5 Estrelas Palace",
    "Escritório Jurídico Associados",
    "Farmácia Central",
    "Supermercado Premium",
    "Clínica Médica São José",
    "Empresa de Consultoria FTX",
    "Transportadora Express",
    "Laboratório de Análises Clínicas"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nosso <span className="text-blue-300">Portfólio</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Projetos realizados com sucesso para empresas de diversos segmentos em Moçambique
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Suporte Técnico</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos Realizados</h2>
            <p className="text-xl text-gray-600">Alguns dos nossos trabalhos mais recentes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white rounded-full p-2">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Depoimentos</h2>
            <p className="text-xl text-gray-600">O que nossos clientes dizem sobre nós</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Clientes Atendidos</h2>
            <p className="text-xl text-gray-600">Empresas que confiam em nossos serviços</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                <Building className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-700">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Quer ser nosso próximo caso de sucesso?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
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
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;