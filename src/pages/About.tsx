import React from 'react';
import { Target, Eye, Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Qualidade",
      description: "Oferecemos apenas produtos e serviços da mais alta qualidade"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Inovação",
      description: "Sempre atualizados com as últimas tecnologias do mercado"
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Suporte Pós-Venda",
      description: "Acompanhamos nossos clientes mesmo após a venda"
    }
  ];

  const stats = [
    { number: "10+", label: "Anos de Experiência" },
    { number: "500+", label: "Clientes Atendidos" },
    { number: "24/7", label: "Suporte Técnico" },
    { number: "100%", label: "Moçambicana" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre a <span className="text-blue-300">Gym</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Uma empresa 100% moçambicana especializada em soluções de tecnologia 
              e infraestrutura de TI, comprometida com a excelência e inovação.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem Somos</h2>
              <p className="text-lg text-gray-600 mb-6">
                A Gym Comércio & Serviços é uma empresa 100% moçambicana especializada 
                em soluções de tecnologia da informação e infraestrutura de TI. 
                Estabelecida com o objetivo de fornecer soluções tecnológicas de ponta 
                para empresas em Moçambique.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe é composta por profissionais altamente qualificados e 
                certificados, prontos para atender às demandas mais complexas do mercado 
                de TI. Trabalhamos com as principais marcas do mercado e oferecemos 
                suporte completo desde a consultoria até a implementação e manutenção.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Informações Legais</h3>
                <p className="text-gray-600">
                  <strong>NUIT:</strong> 400195765<br />
                  <strong>Endereço:</strong> Rua da Pereira de Lago nº 194, Maputo
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe da Gym Comércio & Serviços"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-blue-600 text-white rounded-2xl p-8">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-blue-100">
                Fornecer tecnologia de ponta com suporte personalizado, 
                ajudando empresas a crescer através de soluções inovadoras 
                e confiáveis em tecnologia da informação.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-teal-600 text-white rounded-2xl p-8">
              <Eye className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-teal-100">
                Ser a empresa de referência em infraestrutura de TI em Moçambique, 
                reconhecida pela qualidade dos serviços e pela satisfação dos clientes.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <Heart className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-gray-300">
                Qualidade em tudo que fazemos, inovação constante, 
                comprometimento com nossos clientes e suporte pós-venda excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600">Os princípios que nos guiam</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600">Profissionais qualificados e certificados</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-2xl p-8">
                <Users className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Equipe Técnica Especializada</h3>
                <p className="text-blue-100 mb-6">
                  Nossa equipe é formada por profissionais certificados em diversas 
                  tecnologias, sempre atualizados com as últimas tendências do mercado.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Certificações em redes e infraestrutura</li>
                  <li>✓ Especialistas em hardware e software</li>
                  <li>✓ Técnicos em segurança digital</li>
                  <li>✓ Consultores em soluções corporativas</li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe técnica trabalhando"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;