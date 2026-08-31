import { createRoot } from 'react-dom/client'
import { ArrowRight, Check, Menu, X } from 'lucide-react'
import { useState } from 'react'
import './styles.css'
import logo from './assets/orkestia-logo.jpeg'
import hero from './assets/hero-devices.png'
import team from './assets/hero-team.png'
import maestro from './assets/maestro.png'
import legato from './assets/legato.png'
import agro from './assets/agro.png'
import development from './assets/dev-section.png'

const solutions = [
  { title: 'Orkestia Maestro', text: 'Gestão inteligente para operações, manutenção, engenharia e processos.', image: maestro, tag: 'Gestão operacional' },
  { title: 'Orkestia Legato', text: 'Tecnologia e organização para a rotina jurídica e seus processos.', image: legato, tag: 'Gestão jurídica' },
  { title: 'Orkestia Agro', text: 'Dados, sensores e controle para uma operação rural mais eficiente.', image: agro, tag: 'Tecnologia no campo' }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <header className="header">
      <a className="brand" href="#inicio"><img src={logo} alt="Orkestia" /></a>
      <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a onClick={() => setMenuOpen(false)} href="#quem-somos">Quem somos</a><a onClick={() => setMenuOpen(false)} href="#solucoes">Soluções</a><a onClick={() => setMenuOpen(false)} href="#servicos">Serviços</a><a onClick={() => setMenuOpen(false)} href="#contato">Contato</a>
      </nav>
      <a className="button headerCta" href="#contato">Falar com especialista <ArrowRight size={16}/></a>
    </header>

    <main>
      <section id="inicio" className="hero section-dark">
        <div className="container split">
          <div className="heroCopy"><span className="eyebrow">Tecnologia que trabalha ao seu lado</span><h1>Sua empresa em <em>perfeita harmonia.</em></h1><p>Conectamos pessoas, processos e inteligência para impulsionar a evolução digital do seu negócio.</p><a className="button" href="#solucoes">Conheça as soluções <ArrowRight size={16}/></a></div>
          <img className="heroImage" src={hero} alt="Ecossistema tecnológico Orkestia" />
        </div>
      </section>

      <section id="quem-somos" className="section container story">
        <div><span className="eyebrow blue">Orkestia · tecnologia que conecta</span><h2>Nossa história<br/>&amp; solidez</h2><p>A Orkestia nasceu do encontro entre experiência, conhecimento e inovação. Criamos soluções que conectam pessoas, processos e resultados para gerar impacto real.</p></div>
        <aside><span>GRUPO HTO</span><h3>Uma ponte entre estratégia, tecnologia e operação.</h3><p>Como parte do Grupo HTO, unimos integração de consultoria, engenharia e capacitação profissional em uma estrutura preparada para construir soluções aplicáveis e de alto valor.</p></aside>
      </section>

      <section id="solucoes" className="section muted"><div className="container"><span className="eyebrow blue">Nossas soluções</span><h2>Um ecossistema para<br/>cada desafio.</h2><div className="cards">{solutions.map((item) => <article className="card" key={item.title}><img src={item.image} alt=""/><div><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contato">Conhecer solução <ArrowRight size={16}/></a></div></article>)}</div></div></section>

      <section id="servicos" className="section-dark services"><div className="container split"><div><span className="eyebrow">Soluções sob medida</span><h2>Desenvolvimento<br/><em>personalizado.</em></h2><p>Sua necessidade, nossa arquitetura. Criamos plataformas e ferramentas pensadas para sua operação — da ideia à solução que realmente funciona.</p><ul><li><Check size={17}/> Sistemas web e aplicativos</li><li><Check size={17}/> Integrações e automações</li><li><Check size={17}/> Dados e inteligência aplicada</li></ul><a className="button" href="#contato">Fale conosco <ArrowRight size={16}/></a></div><img className="development" src={development} alt="Desenvolvimento de soluções personalizadas"/></div></section>

      <section id="contato" className="section contact"><div className="container contactBox"><div><span className="eyebrow blue">Vamos conversar</span><h2>Transforme seu desafio em uma solução.</h2><p>Conte o que sua empresa precisa. Nossa equipe entrará em contato para construir o próximo passo.</p></div><form onSubmit={(e) => e.preventDefault()}><input placeholder="Seu nome" required/><input type="email" placeholder="E-mail corporativo" required/><textarea placeholder="Como podemos ajudar?" rows={4}/><button className="button" type="submit">Enviar mensagem <ArrowRight size={16}/></button></form></div></section>
    </main>
    <footer><div className="container footer"><img src={logo} alt="Orkestia"/><p>© {new Date().getFullYear()} Orkestia Soluções Tecnológicas</p><div><a href="#inicio">Instagram</a><a href="#inicio">LinkedIn</a></div></div></footer>
  </>
}

createRoot(document.getElementById('root')!).render(<App />)
