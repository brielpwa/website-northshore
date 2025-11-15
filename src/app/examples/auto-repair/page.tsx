import { Phone, Mail, MapPin, Clock, Wrench, Star, Check } from "lucide-react";
import Link from "next/link";

export default function AutoRepairExample() {
  const services = [
    "Troca de Óleo e Manutenção",
    "Reparo e Substituição de Freios",
    "Diagnóstico de Motor",
    "Serviço de Transmissão",
    "Reparo de Ar Condicionado e Aquecimento",
    "Serviços de Pneus",
  ];

  const reviews = [
    { name: "João D.", rating: 5, text: "Melhor mecânico da cidade! Serviço rápido e honesto." },
    { name: "Sarah M.", rating: 5, text: "Consertaram meu carro rapidamente e o preço foi justo." },
    { name: "Mike R.", rating: 5, text: "Altamente recomendado! Profissional e confiável." },
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-12 h-12" />
                <span className="text-2xl font-bold">Oficina do Mike</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Reparo Automotivo Especializado em Que Você Pode Confiar
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Atendendo North Shore há mais de 20 anos com serviço honesto e confiável
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-white text-blue-600 font-bold py-4 px-8 text-lg rounded-lg hover:bg-blue-50 transition-all duration-300 text-center shadow-xl active:scale-95"
                >
                  Agendar Consulta
                </a>
                <a
                  href="tel:+19782105084"
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 text-lg rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-center active:scale-95"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop"
                alt="Oficina Mecânica"
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
              Serviços completos de reparo e manutenção automotiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Check className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-slate-800 dark:text-white">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Visite-nos Hoje
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Endereço</h3>
                  <p className="text-slate-600 dark:text-slate-400">123 Main Street, Salem, MA 01970</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Telefone</h3>
                  <a href="tel:+19782105084" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +1 (978) 210-5084
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Email</h3>
                  <a href="mailto:info@oficinandomike.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    info@oficinandomike.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-1">Horário</h3>
                  <p className="text-slate-600 dark:text-slate-400">Seg-Sex: 8h - 18h</p>
                  <p className="text-slate-600 dark:text-slate-400">Sáb: 9h - 16h</p>
                  <p className="text-slate-600 dark:text-slate-400">Dom: Fechado</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Agendar Consulta</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Número de Telefone"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <textarea
                  placeholder="Descreva o problema"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 dark:bg-blue-500 text-white font-bold py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg active:scale-95"
                >
                  Solicitar Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Examples */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/examples"
            className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-all duration-300 active:scale-95"
          >
            ← Voltar aos Exemplos
          </Link>
        </div>
      </section>
    </div>
  );
}
