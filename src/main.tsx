import { ArrowRight, Check, Menu, MessageCircle, X } from "lucide-react";
import { createRoot } from "react-dom/client";
import { FormEvent, useEffect, useRef, useState } from "react";
import "./styles.css";
import { SystemPage } from "./system-page";
import logo from "./assets/orkestia-logo.jpeg";
import hero from "./assets/hero-devices.png";
import maestro from "./assets/maestro.png";
import legato from "./assets/legato.png";
import agro from "./assets/agro.png";
import development from "./assets/dev-section.png";
import groupHto from "./assets/grupo-hto.png";
import hengel from "./assets/hengel.png";
import tl from "./assets/tl.png";
import orkestiaGroup from "./assets/orkestia-group.png";
import maestroLogo from "./assets/maestro-logo.png";
import legatoLogo from "./assets/legato-logo.png";
import agroLogo from "./assets/agro-logo.png";

const whatsapp = "5519989840708";
const solutions = [
  {
    title: "Orkestia Maestro",
    text: "Gestão inteligente para operações, manutenção, engenharia e processos.",
    image: legato,
    logo: maestroLogo,
    tag: "Gestão operacional",
    features: [
      "Ordens de serviço e manutenção",
      "Indicadores e agenda operacional",
      "Histórico completo por ativo",
    ],
    plans: [
      [
        "Basic",
        "Gestão essencial para organizar os principais processos da empresa.",
      ],
      [
        "Advanced",
        "Mais integração, automação e controle para operações em crescimento.",
      ],
      [
        "Enterprise",
        "Gestão completa, personalizada e escalável para operações complexas.",
      ],
    ],
  },
  {
    title: "Orkestia Legato",
    text: "Tecnologia e organização para a rotina jurídica e seus processos.",
    image: maestro,
    logo: legatoLogo,
    tag: "Gestão jurídica",
    features: [
      "Controle de processos e prazos",
      "Visão clara da carteira",
      "Fluxos e documentos centralizados",
    ],
    plans: [
      [
        "Basic",
        "Recursos essenciais para organizar clientes, processos e prazos jurídicos.",
      ],
      [
        "Advanced",
        "Mais controle e automação para ampliar a produtividade da operação jurídica.",
      ],
      [
        "Enterprise",
        "Gestão jurídica completa e personalizada para estruturas de maior complexidade.",
      ],
    ],
  },
  {
    title: "Orkestia Agro",
    text: "Dados, sensores e controle para uma operação rural mais eficiente.",
    image: agro,
    logo: agroLogo,
    tag: "Tecnologia no campo",
    features: [
      "Monitoramento da propriedade",
      "Dados de solo e clima",
      "Gestão de safras e operações",
    ],
    plans: [
      [
        "Basic",
        "Controle essencial da propriedade, dos cultivos e das atividades rurais.",
      ],
      [
        "Advanced",
        "Monitoramento ampliado para decisões mais precisas e produtivas no campo.",
      ],
      [
        "Enterprise",
        "Gestão rural completa, integrada e adaptada a operações de maior escala.",
      ],
    ],
  },
];
const groupCompanies = [
  {
    name: "Hengel Consultoria",
    image: hengel,
    brand: "hengel",
    text: "Especializada em classificação fiscal de mercadorias, auditoria de NCM, revisão de descrições técnicas e organização de catálogos, contribuindo para operações aduaneiras mais seguras e eficientes.",
  },
  {
    name: "T&L Treinamentos",
    image: tl,
    brand: "tl",
    text: "Voltada ao desenvolvimento de pessoas e empresas por meio de treinamentos, cursos e programas de capacitação profissional adaptados às necessidades de cada público.",
  },
  {
    name: "Orkestia Soluções Tecnológicas",
    image: orkestiaGroup,
    brand: "orkestia",
    text: "Responsável pelo desenvolvimento de sistemas, plataformas web, aplicativos e soluções digitais personalizadas para otimizar processos, integrar operações e apoiar a evolução dos negócios.",
  },
];
const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && element.classList.add("is-visible"),
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const started = performance.now();
        const tick = (time: number) => {
          const progress = Math.min((time - started) / 1050, 1);
          setCount(Math.round((1 - Math.pow(1 - progress, 3)) * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.7 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const active = solutions[selected];
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    window.open(
      whatsappUrl(
        `Olá, sou ${name}.\nE-mail: ${email}\n\n${message || "Gostaria de conversar sobre uma solução da Orkestia."}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Início">
          <img src={logo} alt="Orkestia" />
        </a>
        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a onClick={() => setMenuOpen(false)} href="#quem-somos">
            Quem somos
          </a>
          <a onClick={() => setMenuOpen(false)} href="#solucoes">
            Soluções
          </a>
          <a onClick={() => setMenuOpen(false)} href="#servicos">
            Serviços
          </a>
          <a onClick={() => setMenuOpen(false)} href="#contato">
            Contato
          </a>
        </nav>
        <a
          className="button headerCta"
          target="_blank"
          rel="noreferrer"
          href={whatsappUrl(
            "Olá! Gostaria de falar com um especialista da Orkestia.",
          )}
        >
          Falar com especialista <ArrowRight size={16} />
        </a>
      </header>
      <main>
        <section
          id="inicio"
          className="hero section-dark"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(7,27,66,.96) 0%, rgba(7,27,66,.78) 48%, rgba(7,27,66,.26) 100%), url(${hero})`,
          }}
        >
          <div className="container heroLayout">
            <Reveal className="heroCopy">
              <span className="eyebrow">
                Tecnologia que trabalha ao seu lado
              </span>
              <h1>
                Sua empresa em <em>perfeita harmonia.</em>
              </h1>
              <p>
                Conectamos pessoas, processos e inteligência para impulsionar a
                evolução digital do seu negócio.
              </p>
              <a className="button" href="#solucoes">
                Conheça as soluções <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>
        <section id="quem-somos" className="section container story">
          <Reveal>
            <span className="eyebrow blue">
              Orkestia · tecnologia que conecta
            </span>
            <h2>
              Nossa história
              <br />
              &amp; solidez
            </h2>
            <p>
              A Orkestia nasceu do encontro entre experiência, conhecimento e
              inovação. Criamos soluções que conectam pessoas, processos e
              resultados para gerar impacto real.
            </p>
          </Reveal>
          <Reveal className="from-right">
            <aside>
              <span>GRUPO HTO</span>
              <h3>
                Conhecimento, desenvolvimento e tecnologia trabalhando em
                conjunto.
              </h3>
              <p>
                O Grupo HTO reúne empresas especializadas em consultoria,
                capacitação profissional e desenvolvimento de soluções
                tecnológicas. Essa integração conecta conhecimento técnico,
                qualificação de pessoas e transformação digital.
              </p>
            </aside>
          </Reveal>
        </section>
        <section className="groupSection">
          <div className="container">
            <Reveal>
              <img className="groupLogo" src={groupHto} alt="Grupo HTO" />
              <p className="groupLead">
                Juntas, as empresas do Grupo HTO unem experiência, conhecimento
                e inovação para transformar desafios em oportunidades de
                crescimento.
              </p>
            </Reveal>
            <div className="groupCards">
              {groupCompanies.map((company) => (
                <Reveal key={company.name}>
                  <article className="groupCard">
                    <div className={`groupBrand ${company.brand}`}>
                      <img src={company.image} alt={company.name} />
                    </div>
                    <h3>{company.name}</h3>
                    <p>{company.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="metrics">
          <div className="container metricGrid">
            <div>
              <strong>
                <Counter value={3} />
              </strong>
              <span>soluções especializadas</span>
            </div>
            <div>
              <strong>
                <Counter value={1} suffix=" só ecossistema" />
              </strong>
              <span>para conectar sua operação</span>
            </div>
            <div>
              <strong>
                <Counter value={100} suffix="%" />
              </strong>
              <span>orientado ao seu negócio</span>
            </div>
          </div>
        </section>
        <section className="section challenges">
          <div className="container">
            <Reveal>
              <span className="eyebrow blue">Por onde começar?</span>
              <h2>
                Encontre a solução para
                <br />o seu desafio.
              </h2>
              <p className="sectionLead">
                Escolha o cenário que mais se aproxima da sua operação e conheça
                a solução indicada.
              </p>
            </Reveal>
            <div className="challengeGrid">
              <Reveal>
                <a
                  href="#solucoes"
                  onClick={() => setSelected(0)}
                  className="challengeCard"
                >
                  <span>01</span>
                  <h3>Manutenção e operações</h3>
                  <p>Organize processos, ativos, equipes e indicadores.</p>
                  <strong>
                    Conheça o Maestro <ArrowRight size={16} />
                  </strong>
                </a>
              </Reveal>
              <Reveal>
                <a
                  href="#solucoes"
                  onClick={() => setSelected(1)}
                  className="challengeCard"
                >
                  <span>02</span>
                  <h3>Gestão jurídica</h3>
                  <p>Centralize clientes, processos, prazos e documentos.</p>
                  <strong>
                    Conheça o Legato <ArrowRight size={16} />
                  </strong>
                </a>
              </Reveal>
              <Reveal>
                <a
                  href="#solucoes"
                  onClick={() => setSelected(2)}
                  className="challengeCard"
                >
                  <span>03</span>
                  <h3>Gestão rural e campo</h3>
                  <p>Transforme dados da propriedade em decisões melhores.</p>
                  <strong>
                    Conheça o Agro <ArrowRight size={16} />
                  </strong>
                </a>
              </Reveal>
              <Reveal>
                <a href="#servicos" className="challengeCard emphasis">
                  <span>04</span>
                  <h3>Uma necessidade específica</h3>
                  <p>Desenvolvemos a solução ideal para o seu negócio.</p>
                  <strong>
                    Fale com a Orkestia <ArrowRight size={16} />
                  </strong>
                </a>
              </Reveal>
            </div>
          </div>
        </section>
        <section id="solucoes" className="section muted">
          <div className="container">
            <Reveal>
              <span className="eyebrow blue">Nossas soluções</span>
              <h2>
                Um ecossistema para
                <br />
                cada desafio.
              </h2>
            </Reveal>
            <div className="cards">
              {solutions.map((item, index) => (
                <Reveal className="cardReveal" key={item.title}>
                  <article
                    className={selected === index ? "card active" : "card"}
                    onClick={() => setSelected(index)}
                  >
                    <div className="cardVisual">
                      <img src={item.image} alt="" />
                      <div className="systemBadge">
                        <img src={item.logo} alt={`Logo ${item.title}`} />
                      </div>
                    </div>
                    <div>
                      <span>{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <button type="button" className="textButton">
                        Explorar solução <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="solutionPanel">
                <div>
                  <span className="eyebrow blue">Em destaque</span>
                  <h3>{active.title}</h3>
                  <p>{active.text}</p>
                </div>
                <ul>
                  {active.features.map((feature) => (
                    <li key={feature}>
                      <Check size={17} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                  href={whatsappUrl(
                    `Olá! Gostaria de conhecer melhor o ${active.title}.`,
                  )}
                >
                  Quero conhecer <ArrowRight size={16} />
                </a>
              </div>
              <div className="planGrid">
                {active.plans.map(([name, description]) => (
                  <article className="planCard" key={name}>
                    <span>
                      Orkestia {active.title.replace("Orkestia ", "")} {name}
                    </span>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        <section
          id="servicos"
          className="section-dark services"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(7,27,66,.95) 0%, rgba(7,27,66,.78) 49%, rgba(7,27,66,.28) 100%), url(${development})`,
          }}
        >
          <div className="container serviceLayout">
            <Reveal>
              <span className="eyebrow">Soluções sob medida</span>
              <h2>
                Desenvolvimento
                <br />
                <em>personalizado.</em>
              </h2>
              <p>
                Sua necessidade, nossa arquitetura. Criamos plataformas e
                ferramentas pensadas para sua operação — da ideia à solução que
                realmente funciona.
              </p>
              <ul>
                <li>
                  <Check size={17} /> Sistemas web e aplicativos
                </li>
                <li>
                  <Check size={17} /> Integrações e automações
                </li>
                <li>
                  <Check size={17} /> Dados e inteligência aplicada
                </li>
              </ul>
              <a
                className="button"
                target="_blank"
                rel="noreferrer"
                href={whatsappUrl(
                  "Olá! Gostaria de conversar sobre desenvolvimento personalizado.",
                )}
              >
                Fale conosco <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>
        <section className="section cases">
          <div className="container">
            <Reveal>
              <span className="eyebrow blue">Aplicações Orkestia</span>
              <h2>
                Tecnologia aplicada a<br />
                desafios reais.
              </h2>
              <p className="sectionLead">
                Conheça exemplos de como nossas soluções podem apoiar diferentes
                operações.
              </p>
            </Reveal>
            <div className="caseGrid">
              <Reveal>
                <article className="caseCard">
                  <span>ENGENHARIA E MANUTENÇÃO</span>
                  <h3>Mais controle sobre operações críticas.</h3>
                  <p>
                    Uma gestão centralizada de ativos, agendas e indicadores
                    para apoiar decisões e prevenir paradas.
                  </p>
                  <a href="#solucoes" onClick={() => setSelected(0)}>
                    Ver solução <ArrowRight size={16} />
                  </a>
                </article>
              </Reveal>
              <Reveal>
                <article className="caseCard">
                  <span>ADVOCACIA E SERVIÇOS JURÍDICOS</span>
                  <h3>Rotinas jurídicas mais organizadas.</h3>
                  <p>
                    Processos, clientes e prazos integrados em uma visão simples
                    e confiável para toda a equipe.
                  </p>
                  <a href="#solucoes" onClick={() => setSelected(1)}>
                    Ver solução <ArrowRight size={16} />
                  </a>
                </article>
              </Reveal>
              <Reveal>
                <article className="caseCard">
                  <span>AGRONEGÓCIO</span>
                  <h3>Dados para decisões no campo.</h3>
                  <p>
                    Monitoramento de propriedade, cultivos e atividades para uma
                    operação rural mais eficiente.
                  </p>
                  <a href="#solucoes" onClick={() => setSelected(2)}>
                    Ver solução <ArrowRight size={16} />
                  </a>
                </article>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="sectors">
          <div className="container">
            <span>Setores que atendemos</span>
            <div>
              <b>Engenharia</b>
              <b>Indústria</b>
              <b>Jurídico</b>
              <b>Agronegócio</b>
              <b>Serviços</b>
            </div>
          </div>
        </section>
        <section id="contato" className="section contact">
          <Reveal className="container contactBox">
            <div>
              <span className="eyebrow blue">Vamos conversar</span>
              <h2>Transforme seu desafio em uma solução.</h2>
              <p>
                Preencha os dados e a conversa será aberta diretamente no
                WhatsApp da Orkestia.
              </p>
            </div>
            <form onSubmit={submit}>
              <input name="name" placeholder="Seu nome" required />
              <input
                name="email"
                type="email"
                placeholder="E-mail corporativo"
                required
              />
              <textarea
                name="message"
                placeholder="Como podemos ajudar?"
                rows={4}
              />
              <button className="button" type="submit">
                Continuar no WhatsApp <MessageCircle size={16} />
              </button>
            </form>
          </Reveal>
        </section>
      </main>
      <a
        className="whatsappFloat"
        target="_blank"
        rel="noreferrer"
        href={whatsappUrl("Olá! Gostaria de falar com a Orkestia.")}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={23} />
      </a>
      <footer>
        <div className="container footer">
          <img src={logo} alt="Orkestia" />
          <p>© {new Date().getFullYear()} Orkestia Soluções Tecnológicas</p>
          <div>
            <a href="#inicio">Instagram</a>
            <a href="#inicio">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
const slug = window.location.pathname.replace(/^\/+|\/+$/g, "");
createRoot(document.getElementById("root")!).render(
  ["maestro", "legato", "agro"].includes(slug) ? (
    <SystemPage slug={slug} />
  ) : (
    <App />
  ),
);
