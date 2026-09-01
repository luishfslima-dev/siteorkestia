import { ArrowRight, Check, MessageCircle } from "lucide-react";
import logo from "./assets/orkestia-logo.jpeg";
import maestro from "./assets/maestro.png";
import legato from "./assets/legato.png";
import agro from "./assets/agro.png";
import legatoDashboard from "./assets/legato-dashboard.jpg";
import legatoTasks from "./assets/legato-tarefas.jpg";
import legatoCrm from "./assets/legato-crm.jpg";

const whatsapp = "5519989840708";
const data = {
  maestro: {
    name: "Orkestia Maestro",
    eyebrow: "Gestão de manutenção e operações",
    image: maestro,
    title:
      "Controle operacional para empresas que precisam manter tudo em movimento.",
    description:
      "Centralize ativos, ordens de serviço, equipes, agendas e indicadores em uma plataforma feita para a realidade da sua operação.",
    benefits: [
      "Organização de ativos, processos e equipes",
      "Ordens de serviço e histórico por equipamento",
      "Indicadores para decisões mais rápidas",
    ],
    modules: [
      "Dashboard gerencial",
      "Ativos e manutenção",
      "Ordens de serviço",
      "Agenda e alertas",
      "Indicadores e relatórios",
    ],
    audience:
      "Empresas de engenharia, manutenção, indústria e operações técnicas.",
  },
  legato: {
    name: "Orkestia Legato",
    eyebrow: "Gestão jurídica inteligente",
    image: legato,
    title: "A rotina jurídica mais organizada, integrada e previsível.",
    description:
      "Concentre processos, clientes, documentos e prazos em um ambiente simples, seguro e pensado para a produtividade da operação jurídica.",
    benefits: [
      "Visão clara de processos e prazos",
      "Organização de clientes e documentos",
      "Fluxos que reduzem tarefas manuais",
    ],
    modules: [
      "Painel de processos",
      "Agenda de prazos",
      "Clientes e contatos",
      "Documentos e histórico",
      "Relatórios da operação",
    ],
    audience:
      "Escritórios de advocacia, departamentos jurídicos e consultorias.",
    screens: [
      { image: legatoDashboard, title: "Visão geral da operação" },
      { image: legatoTasks, title: "Controle de tarefas e prazos" },
      { image: legatoCrm, title: "Relacionamento com clientes" },
    ],
  },
  agro: {
    name: "Orkestia Agro",
    eyebrow: "Tecnologia para o campo",
    image: agro,
    title: "Informação para tomar decisões mais precisas no campo.",
    description:
      "Acompanhe propriedade, cultivos, atividades, clima e dados de solo em uma experiência conectada entre web e mobile.",
    benefits: [
      "Visão integrada da propriedade",
      "Controle de cultivos e atividades rurais",
      "Base para monitoramento de solo e clima",
    ],
    modules: [
      "Painel da propriedade",
      "Cultivos e talhões",
      "Agenda de atividades",
      "Dados de campo",
      "Indicadores rurais",
    ],
    audience:
      "Produtores rurais e operações agrícolas de pequeno e médio porte.",
  },
} as const;

export function SystemPage({ slug }: { slug: string }) {
  const item = data[slug as keyof typeof data];
  const hasInterfaceScreens = "screens" in item;
  const heroStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(7, 27, 66, .96) 0%, rgba(7, 27, 66, .80) 48%, rgba(7, 27, 66, .42) 100%), url(${item.image})`,
  };
  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de conhecer melhor o ${item.name}.`)}`;
  return (
    <main className="systemPage">
      <header className="systemHeader">
        <a href="/">
          <img src={logo} alt="Orkestia" />
        </a>
        <a className="backHome" href="/">
          ← Voltar ao site
        </a>
      </header>
      <section className="systemHero visualHero" style={heroStyle}>
        <div>
          <span>{item.eyebrow}</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <a className="button" href={url} target="_blank" rel="noreferrer">
            Falar sobre {item.name} <MessageCircle size={17} />
          </a>
        </div>
      </section>
      <section className="systemContent">
        <div>
          <span className="eyebrow blue">Por que escolher</span>
          <h2>Uma solução preparada para a sua rotina.</h2>
          <div className="benefitList">
            {item.benefits.map((benefit) => (
              <div key={benefit}>
                <Check size={18} />
                {benefit}
              </div>
            ))}
          </div>
        </div>
        <aside>
          <span>Indicado para</span>
          <p>{item.audience}</p>
        </aside>
      </section>
      {"screens" in item && (
        <section className="systemScreens">
          <span className="eyebrow blue">Conheça a interface</span>
          <h2>
            Clareza para acompanhar
            <br />
            cada etapa da operação.
          </h2>
          <div>
            {item.screens.map((screen) => (
              <figure key={screen.title}>
                <img src={screen.image} alt={screen.title} />
                <figcaption>{screen.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <section className="systemModules">
        <span className="eyebrow blue">Recursos da plataforma</span>
        <h2>Uma visão completa para a operação.</h2>
        <div>
          {item.modules.map((module, index) => (
            <article key={module}>
              <b>0{index + 1}</b>
              <h3>{module}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="systemPlans">
        <span className="eyebrow">Planos disponíveis</span>
        <h2>Do essencial ao totalmente personalizado.</h2>
        <div>
          {["Basic", "Advanced", "Enterprise"].map((plan, index) => (
            <article key={plan}>
              <span>0{index + 1}</span>
              <h3>
                {item.name} {plan}
              </h3>
              <p>
                {index === 0
                  ? "Recursos essenciais para começar a organizar sua operação."
                  : index === 1
                    ? "Mais integração, automação e controle para crescer com segurança."
                    : "Estrutura completa, personalizada e escalável para cenários complexos."}
              </p>
              <a href={url} target="_blank" rel="noreferrer">
                Quero este plano <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
