import React, { useState } from 'react';
import { Monitor, Server, Wifi, Printer, HardDrive, Mouse, ShoppingCart, Shield, Database, Tv, Briefcase, Smartphone, Phone } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('hardware');

  const categories = [
    { id: 'hardware', name: 'Hardware', icon: <Monitor className="w-5 h-5" /> },
    { id: 'redes', name: 'Redes e Data Center', icon: <Server className="w-5 h-5" /> },
    { id: 'acessorios', name: 'Acessórios', icon: <Mouse className="w-5 h-5" /> },
    { id: 'software', name: 'Software', icon: <Database className="w-5 h-5" /> },
    { id: 'seguranca', name: 'Segurança', icon: <Shield className="w-5 h-5" /> },
    { id: 'comunicacao', name: 'Comunicação', icon: <Phone className="w-5 h-5" /> },
    { id: 'escritorio', name: 'Escritório', icon: <Briefcase className="w-5 h-5" /> }
  ];

  const products = {
    hardware: [
      {
        image: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Computadores Desktop",
        description: "Computadores de mesa completos para uso empresarial e doméstico",
        features: ["Intel Core i5/i7", "8GB-32GB RAM", "SSD 256GB-1TB", "Windows 11 Pro"],
        price: "A partir de 35.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Computadores Portáteis",
        description: "Laptops para mobilidade e produtividade",
        features: ["Tela 14-15.6\"", "Processadores Intel/AMD", "Bateria longa duração", "Design ultrafino"],
        price: "A partir de 28.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Tablets",
        description: "Tablets para produtividade e entretenimento",
        features: ["Tela 10-12\"", "Android/iOS", "Processadores de alta performance", "Bateria longa duração"],
        price: "A partir de 8.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Impressoras",
        description: "Impressoras multifuncionais para escritório",
        features: ["Impressão/Cópia/Scanner", "Wi-Fi integrado", "Duplex automático", "Alta velocidade"],
        price: "A partir de 8.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Monitores",
        description: "Monitores profissionais de alta qualidade",
        features: ["Full HD/4K", "IPS/LED", "Múltiplas conexões", "Ajuste ergonômico"],
        price: "A partir de 6.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Projetores",
        description: "Projetores para apresentações e eventos",
        features: ["Full HD/4K", "3000+ lumens", "HDMI/USB/Wi-Fi", "Controle remoto"],
        price: "A partir de 15.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/159299/graphic-card-hardware-technology-pc-159299.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Componentes PC",
        description: "Placas de vídeo, memórias e componentes",
        features: ["GPUs gaming/profissionais", "Memórias DDR4/DDR5", "SSDs NVMe", "Placas-mãe"],
        price: "Preços variados"
      }
    ],
    redes: [
      {
        image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Racks de Rede",
        description: "Racks profissionais para organização de equipamentos",
        features: ["12U até 42U", "Portas ventiladas", "Acessórios inclusos", "Montagem no chão/parede"],
        price: "A partir de 12.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Switches",
        description: "Switches gerenciados e não-gerenciados",
        features: ["8-48 portas", "Gigabit Ethernet", "PoE/PoE+", "Gerenciamento web"],
        price: "A partir de 3.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/4792647/pexels-photo-4792647.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Routers",
        description: "Roteadores empresariais e domésticos",
        features: ["Wi-Fi 6", "Dual-band", "Firewall integrado", "VPN"],
        price: "A partir de 2.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/4792647/pexels-photo-4792647.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Access Points",
        description: "Pontos de acesso Wi-Fi empresariais",
        features: ["Wi-Fi 6", "Dual-band", "Gerenciamento central", "Alta capacidade"],
        price: "A partir de 4.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/4792647/pexels-photo-4792647.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Adaptadores Wi-Fi",
        description: "Adaptadores USB e PCI para rede sem fio",
        features: ["USB 3.0", "PCI Express", "Dual-band", "Alta velocidade"],
        price: "A partir de 800 MT"
      },
      {
        image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Cabos UTP",
        description: "Cabos de rede Cat6/Cat6A",
        features: ["Cat6/Cat6A", "100m por bobina", "Certificação", "Diferentes cores"],
        price: "A partir de 2.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Cabos de Fibra Óptica",
        description: "Cabos de fibra monomodo e multimodo",
        features: ["Monomodo/Multimodo", "Diferentes cores", "Conectores LC/SC", "Certificação"],
        price: "A partir de 5.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "UPS/No-Breaks",
        description: "Sistemas de energia ininterrupta",
        features: ["1KVA-10KVA", "Senoidal pura", "Software de monitoramento", "Baterias seladas"],
        price: "A partir de 5.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Servidores",
        description: "Servidores para pequenas e médias empresas",
        features: ["Intel Xeon", "32GB-128GB RAM", "Storage RAID", "Redundância"],
        price: "A partir de 85.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Sistemas de Terminação",
        description: "Sistemas Cat6A e fibra óptica",
        features: ["Patch panels", "Conectores RJ45", "Conectores de fibra", "Organizadores"],
        price: "A partir de 1.500 MT"
      }
    ],
    acessorios: [
      {
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Toners e Cartuchos",
        description: "Toners originais e compatíveis",
        features: ["HP, Canon, Epson", "Alta qualidade", "Garantia incluída", "Entrega rápida"],
        price: "A partir de 1.200 MT"
      },
      {
        image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Mouses e Teclados",
        description: "Periféricos para escritório e gaming",
        features: ["Com/sem fio", "Ergonômicos", "Mecânicos/membrana", "RGB opcional"],
        price: "A partir de 350 MT"
      },
      {
        image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "HDs Externos",
        description: "Discos rígidos portáteis",
        features: ["1TB-8TB", "USB 3.0/3.1", "Backup automático", "Criptografia"],
        price: "A partir de 2.800 MT"
      },
      {
        image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Pendrives",
        description: "Dispositivos de armazenamento USB",
        features: ["8GB-128GB", "USB 3.0", "Design compacto", "Resistente à água"],
        price: "A partir de 150 MT"
      },
      {
        image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Webcams",
        description: "Câmeras para videoconferências",
        features: ["Full HD/4K", "Microfone integrado", "Foco automático", "Plug & play"],
        price: "A partir de 1.800 MT"
      },
      {
        image: "https://images.pexels.com/photos/3781789/pexels-photo-3781789.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Headsets",
        description: "Fones para comunicação profissional",
        features: ["Cancelamento de ruído", "Confortáveis", "Microfone flexível", "Controles integrados"],
        price: "A partir de 950 MT"
      },
      {
        image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Caboamentos Diversos",
        description: "Cabos HDMI, VGA, USB e outros",
        features: ["HDMI, VGA, DVI", "USB A/B/C", "Diferentes comprimentos", "Alta qualidade"],
        price: "A partir de 200 MT"
      }
    ],
    software: [
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Microsoft Office",
        description: "Suítes de produtividade Microsoft",
        features: ["Office 365", "Office 2021", "Licenças empresariais", "Suporte técnico"],
        price: "A partir de 2.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Antivírus",
        description: "Software de proteção contra malware",
        features: ["Kaspersky, Norton, McAfee", "Proteção em tempo real", "Firewall integrado", "Backup na nuvem"],
        price: "A partir de 800 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Software de Design",
        description: "Ferramentas de criação e edição",
        features: ["Adobe Creative Suite", "CorelDRAW", "Autodesk", "Licenças educacionais"],
        price: "A partir de 5.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Sistemas ERP",
        description: "Sistemas de gestão empresarial",
        features: ["SAP, Oracle", "Implementação completa", "Treinamento", "Suporte 24/7"],
        price: "Sob consulta"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Software de Backup",
        description: "Soluções de backup e recuperação",
        features: ["Backup automático", "Criptografia", "Recuperação rápida", "Monitoramento"],
        price: "A partir de 1.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Sistemas de Gestão",
        description: "Software para controle empresarial",
        features: ["Gestão de estoque", "Controle financeiro", "Relatórios", "Multi-usuário"],
        price: "A partir de 3.500 MT"
      }
    ],
    seguranca: [
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Câmeras de Segurança",
        description: "Sistemas de vigilância IP e analógicas",
        features: ["Full HD/4K", "Visão noturna", "Gravação 24/7", "Acesso remoto"],
        price: "A partir de 2.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "DVRs",
        description: "Gravadores de vídeo digital para câmeras analógicas",
        features: ["4-32 canais", "HDD incluído", "Backup automático", "App mobile"],
        price: "A partir de 4.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "NVRs",
        description: "Gravadores de vídeo em rede para câmeras IP",
        features: ["4-64 canais", "PoE integrado", "RAID", "Gerenciamento web"],
        price: "A partir de 6.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Câmeras IP",
        description: "Câmeras de rede de alta definição",
        features: ["Full HD/4K", "PoE", "PTZ", "Áudio integrado"],
        price: "A partir de 3.200 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Câmeras Analógicas",
        description: "Câmeras de vigilância tradicionais",
        features: ["720p/1080p", "Visão noturna", "IR LED", "Instalação simples"],
        price: "A partir de 1.800 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Controle de Acesso",
        description: "Sistemas de controle de entrada",
        features: ["Cartões RFID", "Biometria", "Controle remoto", "Relatórios"],
        price: "A partir de 3.200 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Alarmes",
        description: "Sistemas de alarme residencial",
        features: ["Sensores PIR", "Sirene", "App de controle", "Monitoramento"],
        price: "A partir de 1.800 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Cofres Digitais",
        description: "Cofres eletrônicos seguros",
        features: ["Senha digital", "Bateria de backup", "Alarme", "Diferentes tamanhos"],
        price: "A partir de 8.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Firewall",
        description: "Proteção de rede empresarial",
        features: ["Filtro de conteúdo", "VPN", "Relatórios", "Gerenciamento central"],
        price: "A partir de 12.000 MT"
      }
    ],
    comunicacao: [
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "PABX Híbridos",
        description: "Sistemas de telefonia empresarial",
        features: ["Analógico + IP", "4-128 extensões", "Gravação", "Relatórios"],
        price: "A partir de 15.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Caixas Telefônicas",
        description: "Telefones IP e analógicos",
        features: ["Display LCD", "Teclas programáveis", "Hands-free", "Diferentes modelos"],
        price: "A partir de 1.200 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Placas de Expansão",
        description: "Placas para PABX e sistemas",
        features: ["Placas analógicas", "Placas digitais", "Placas IP", "Instalação"],
        price: "A partir de 2.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Sistemas VoIP",
        description: "Telefonia sobre IP",
        features: ["Softphones", "Gateways", "Codecs", "QoS"],
        price: "A partir de 8.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Intercomunicadores",
        description: "Sistemas de comunicação interna",
        features: ["Áudio/vídeo", "Multi-estação", "Instalação", "Manutenção"],
        price: "A partir de 3.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Acessórios Telefônicos",
        description: "Cabos, conectores e acessórios",
        features: ["Cabos telefônicos", "Conectores RJ11/RJ45", "Adaptadores", "Organizadores"],
        price: "A partir de 150 MT"
      }
    ],
    escritorio: [
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Móveis de Escritório",
        description: "Móveis ergonômicos para escritório",
        features: ["Mesas ajustáveis", "Cadeiras ergonômicas", "Armários", "Estantes"],
        price: "A partir de 2.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Iluminação LED",
        description: "Sistemas de iluminação profissional",
        features: ["LED de alta eficiência", "Controle de intensidade", "Instalação", "Garantia"],
        price: "A partir de 1.200 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Ar Condicionado",
        description: "Sistemas de climatização",
        features: ["Split inverter", "Instalação", "Manutenção", "Garantia"],
        price: "A partir de 15.000 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Cabeamento Estruturado",
        description: "Instalação de rede completa",
        features: ["Cat6/Cat6a", "Fibra óptica", "Certificação", "Documentação"],
        price: "Sob consulta"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Sistemas de Som",
        description: "Sistemas de áudio profissional",
        features: ["Alto-falantes", "Amplificadores", "Mixers", "Instalação"],
        price: "A partir de 8.500 MT"
      },
      {
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Projetores e Telas",
        description: "Sistemas de apresentação",
        features: ["Projetores Full HD", "Telas motorizadas", "Instalação", "Calibração"],
        price: "A partir de 12.000 MT"
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
              Nossos <span className="text-blue-300">Produtos</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Equipamentos de qualidade das melhores marcas do mercado com garantia estendida
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Catálogo de Produtos</h2>
            <p className="text-xl text-gray-600">Escolha a categoria desejada</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[activeCategory as keyof typeof products].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Disponível
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <ul className="space-y-1 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-blue-600">{product.price}</div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Pedir Cotação</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens de Comprar Conosco</h2>
            <p className="text-xl text-gray-600">Benefícios exclusivos para nossos clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantia 12 Meses</h3>
              <p className="text-gray-600">Todos os equipamentos com garantia estendida</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardDrive className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Entrega Grátis</h3>
              <p className="text-gray-600">Entrega gratuita em toda cidade de Maputo</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instalação Incluída</h3>
              <p className="text-gray-600">Instalação e configuração sem custo adicional</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Printer className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suporte Técnico</h3>
              <p className="text-gray-600">Suporte pós-venda especializado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interessado em algum produto?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato conosco para receber uma cotação personalizada
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
              Solicitar Cotação
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 