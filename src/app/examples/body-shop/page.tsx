import { Phone, Mail, MapPin, Paintbrush, Star, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BodyShopExample() {
  const services = [
    "Reparo de Colisão",
    "Remoção de Amassados",
    "Pintura e Acabamento",
    "Endireitamento de Chassi",
    "Reparo de Para-choque",
    "Sinistros de Seguro",
  ];

  const beforeAfter = [
    {
      before: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
      description: "Restauração completa do painel da porta",
    },
    {
      before: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
      description: "Reparo de para-choque e pintura combinada",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 dark:from-red-800 dark:to-red-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Paintbrush className="w-12 h-12" />
                <span className="text-2xl font-bold">Funilaria Elite</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Reparo e Pintura Automotiva Profissional
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8">
                Restaurando seu veículo à condição de showroom com precisão e cuidado
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-white text-red-600 font-bold py-4 px-8 text-lg rounded-lg hover:bg-red-50 transition-all duration-300 text-center shadow-xl active:scale-95"
                >
                  Obter Orçamento Grátis
                </a>
                <a
                  href="tel:+19782105084"
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 text-lg rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 text-center active:scale-95"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <img
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop"
                alt="Funilaria"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Serviços completos de reparo e acabamento automotivo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Check className="w-8 h-8 text-red-600 dark:text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Nosso Trabalho
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Veja a qualidade dos nossos reparos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beforeAfter.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative">
                    <img src={item.before} alt="Antes" className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4 bg-slate-800 text-white px-4 py-2 rounded-lg font-bold">
                      Antes
                    </div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="Depois" className="w-full h-64 object-cover" />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                      Depois
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Por Que Escolher a Funilaria Elite?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-red-100 dark:bg-red-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Técnicos Certificados</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Nossa equipe é totalmente certificada e treinada nas mais recentes técnicas de reparo
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-red-100 dark:bg-red-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Garantia Vitalícia</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Todos os reparos são cobertos por nossa garantia vitalícia abrangente
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-red-100 dark:bg-red-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-10 h-10 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Entrega Rápida</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                A maioria dos reparos é concluída em 3-5 dias úteis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Obtenha Seu Orçamento Grátis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Endereço</h3>
                  <p className="text-slate-600 dark:text-slate-400">456 Auto Lane, Peabody, MA 01960</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Telefone</h3>
                  <a href="tel:+19782105084" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    +1 (978) 210-5084
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Email</h3>
                  <a href="mailto:info@funilariaelite.com" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    info@funilariaelite.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Solicitar Orçamento</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-red-500 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Número de Telefone"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-red-500 transition-all"
                />
                <textarea
                  placeholder="Descreva o dano"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-red-500 transition-all"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 dark:bg-red-500 text-white font-bold py-4 rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-all duration-300 shadow-lg active:scale-95"
                >
                  Obter Orçamento Grátis
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Examples */}
      <section className="py-12 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/examples"
            className="inline-block text-red-600 dark:text-red-400 font-semibold hover:underline transition-all duration-300 active:scale-95"
          >
            ← Voltar aos Exemplos
          </Link>
        </div>
      </section>
    </div>
  );
}
