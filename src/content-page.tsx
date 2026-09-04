import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";
import logo from "./assets/orkestia-logo.jpeg";

const articles = {
  "gestao-de-manutencao": {
    category: "Gestão de manutenção",
    title: "Como um sistema de gestão de manutenção melhora a operação",
    description:
      "Entenda como centralizar ativos, ordens de serviço, equipes e indicadores para reduzir falhas e ganhar previsibilidade na manutenção.",
    intro:
      "Em operações técnicas, informações dispersas dificultam a priorização, aumentam retrabalho e tornam a tomada de decisão mais lenta. Um sistema de gestão de manutenção cria uma visão única da rotina operacional.",
    sections: [
      ["Centralização da rotina", "Ativos, histórico de intervenções, planos preventivos, solicitações e ordens de serviço deixam de depender de planilhas isoladas e conversas paralelas."],
      ["Mais previsibilidade", "Com agendas, responsáveis e alertas, a equipe consegue planejar atividades e acompanhar pendências antes que se tornem interrupções críticas."],
      ["Indicadores para decidir", "Indicadores de execução, atrasos, volume de ordens e recorrência de falhas dão base objetiva para priorizar melhorias e investimentos."],
    ],
    checklist: ["Mapeie os ativos e processos prioritários.", "Defina responsáveis, prazos e critérios de prioridade.", "Padronize as informações registradas em cada ordem de serviço.", "Acompanhe indicadores de execução em uma rotina de gestão."],
    cta: "Quero conhecer o Orkestia Maestro.",
  },
  "software-juridico": {
    category: "Gestão jurídica",
    title: "Software jurídico: como organizar processos, prazos e clientes",
    description:
      "Veja como um software jurídico ajuda escritórios e departamentos a concentrar processos, prazos, tarefas, documentos e relacionamentos.",
    intro:
      "A rotina jurídica exige controle de diversas frentes simultâneas. Quando processos, documentos, prazos e tarefas ficam dispersos, a equipe perde visibilidade e aumenta o risco de falhas operacionais.",
    sections: [
      ["Visão clara da carteira", "Um painel unificado permite acompanhar a situação dos processos, as prioridades da equipe e os compromissos que demandam atenção."],
      ["Prazos e tarefas conectados", "A agenda deixa de ser apenas um calendário e passa a apoiar a distribuição de responsabilidades, o acompanhamento e a rastreabilidade da execução."],
      ["Relacionamento organizado", "Dados de clientes, contatos, documentos e histórico de interações ficam associados à operação, facilitando a continuidade e a qualidade do atendimento."],
    ],
    checklist: ["Liste os tipos de processo e informações essenciais.", "Defina responsáveis por agenda, tarefas e atualizações.", "Padronize a organização de documentos e contatos.", "Escolha indicadores que representem a produtividade da operação."],
    cta: "Quero conhecer o Orkestia Legato.",
  },
  "gestao-no-agronegocio": {
    category: "Tecnologia no campo",
    title: "Gestão no agronegócio: dados para decisões melhores no campo",
    description:
      "Saiba como organizar propriedade, cultivos, atividades, clima e dados de solo para tornar a gestão rural mais precisa e conectada.",
    intro:
      "A gestão rural reúne informações que mudam diariamente: atividades, cultivos, equipes, clima e condições de solo. Integrar esses dados permite planejar melhor e acompanhar a operação com mais clareza.",
    sections: [
      ["Uma visão por propriedade e cultivo", "O acompanhamento por área ajuda a registrar atividades, organizar a agenda e manter o histórico necessário para análises futuras."],
      ["Dados que apoiam a decisão", "Informações de clima, umidade, pH, condutividade e outros sensores podem complementar a observação em campo e apoiar decisões mais consistentes."],
      ["Rotina operacional organizada", "Calendários, responsáveis e registros de atividades dão visibilidade ao que foi planejado, executado e ainda precisa de atenção."],
    ],
    checklist: ["Estruture as propriedades, talhões e cultivos.", "Defina a rotina de registro das atividades de campo.", "Comece com os indicadores que impactam suas decisões.", "Planeje integrações de sensores de acordo com a necessidade da operação."],
    cta: "Quero conhecer o Orkestia Agro.",
  },
} as const;

export const contentCards = Object.entries(articles).map(([slug, article]) => ({ slug, ...article }));

export function ContentPage({ slug }: { slug: string }) {
  const article = articles[slug as keyof typeof articles];
  useEffect(() => {
    const url = `https://orkestiasolucoes.com/conteudos/${slug}`;
    document.title = `${article.title} | Orkestia`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", article.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", article.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", article.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector("link[rel='canonical']")?.setAttribute("href", url);
  }, [article, slug]);

  const whatsappUrl = `https://wa.me/5519989840708?text=${encodeURIComponent(article.cta)}`;
  return <main className="articlePage">
    <header className="systemHeader">
      <a href="/"><img src={logo} alt="Orkestia" /></a>
      <a className="backHome" href="/">← Voltar ao site</a>
    </header>
    <article className="articleHero">
      <span>{article.category}</span>
      <h1>{article.title}</h1>
      <p>{article.intro}</p>
    </article>
    <div className="articleBody">
      {article.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
      <section className="articleChecklist">
        <span>Por onde começar</span>
        <h2>Uma base prática para evoluir a operação.</h2>
        <ul>{article.checklist.map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul>
      </section>
      <a className="articleCta" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a Orkestia <ArrowRight size={17} /></a>
      <a className="articleBack" href="/conteudos"><ArrowLeft size={16} /> Ver todos os conteúdos</a>
    </div>
  </main>;
}

export function ContentHub() {
  return <main className="articlePage"><header className="systemHeader"><a href="/"><img src={logo} alt="Orkestia" /></a><a className="backHome" href="/">← Voltar ao site</a></header><section className="articleHero compact"><span>Conteúdos Orkestia</span><h1>Conhecimento para operações que querem evoluir.</h1><p>Guias objetivos sobre gestão, tecnologia e organização de processos.</p></section><section className="contentHubGrid">{contentCards.map((article) => <a href={`/conteudos/${article.slug}`} key={article.slug}><span>{article.category}</span><h2>{article.title}</h2><p>{article.description}</p><strong>Ler conteúdo <ArrowRight size={16} /></strong></a>)}</section></main>;
}
