interface SectionContent {
  ptBR: string;
  enUS: string;
}

interface SectionTitle {
  ptBR: string;
  enUS: string;
}

export interface Section {
  title: SectionTitle;
  content: SectionContent;
}

export default [
  {
    title: { ptBR: "Sobre mim", enUS: "About me" },
    content: {
      ptBR: `Olá meu nome é Victor, sou desenvolvedor de software atualmente trabalhando como desenvolvedor frontend. 
      Desde que realizei meu Técnico em Informática, me apaixonei
      por programação. Formado em Ciência da Computação pela
      UNESP. Tenho como objetivo de vida sempre continuar aprendendo coisas novas, ultimamente tenho utilizado mais ferramentas como: React, React Redux, React
      Native, Vue (2 e 3), Vuex, Unity.<br><br>
      Profissionalmente, atuei em projetos internacionais, com interações com pessoas de vários países como: Estados Unidos, Suécia, França e Índia. Atualmente estou
      trabalhando em projetos concentrados aqui na América Latina com empresas de diversos setores.
      <br><br>Você pode acompanhar alguns dos meus projetos na seção "Projetos Recentes". *Participo de outros projetos privados que não estão
      listados aqui`,
      enUS: `Hi my name is Victor, I'm sofware developer currently working as a frontend developer. Since I've finished my IT course, I fell in love with programming.
      Graduated in Computer Science by UNESP. I've as an life goal to always keep learning new things, lately I've been using technologies as: React, React Redux,
      React Native, Vue (2 and 3), Vuex, Unity.<br><br>
      Profissionally, I worked at international projects, with people from many countries, like: United States, Sweden, France and India. Currently I'm working in
      projects focused in Latin America with companies from various sectors.
      <br><br>You can follow some of my prohects in the section "Recent Projects". *I work in many private projects that are not listed in here`
    }
  },
  {
    title: { ptBR: "Formação", enUS: "Education" },
    content: {
      ptBR: `Bacharelado em Ciência da Computação – Junho, 2019 Universidade Estadual Paulista – UNESP – Rio Claro, SP<br>
Curso Técnico em Tecnologia da Informação – Dezembro, 2012 ETEC – Escola Técnica Dep. Ary de Camargo Pedroso – Piracicaba, SP`,
      enUS: `Bacharel in Computer Science - June 2019 Universidade Estadual Paulista – UNESP – Rio Claro, SP<br>
      Technical Course in Information Technology IT – December 2012 ETEC – Escola Técnica Dep. Ary de Camargo Pedroso – Piracicaba, SP`
    }
  },
  {
    title: { ptBR: "Experiência Profissional", enUS: "Work Experience" },
    content: {
      ptBR: `<li>GAtec S/A – Gestão Agroindustrial; Agosto/2016 até Dezembro/2016; Infra - Estágio</li>
              <li>CENTRUS – Central do SUS – Prefeitura de Piracicaba; Junho/2015 até Julho/2016; Infra - Estágio</li>
              <li>Icaro Tech – Serviços e Comércio; Janeiro/2017 até Junho/2017; Analista de Suporte - Estágio</li>
              <li>DEDINI – Indústrias de Base; Agosto/2017 – até Agosto/2019; Analista de Sistema Júnior</li>
              <li><b>Daitan Group; Agosto/2019 – até o momento; Desenvolvedor Front-end</b></li>`,
      enUS: `<li>GAtec S/A – Gestão Agroindustrial; August/2016 until December/2016; Infrastructure - Internship</li>
      <li>CENTRUS – Central do SUS – Piracicaba City Hall; June/2015 until July/2016; Infrastructure - Internship</li>
      <li>Icaro Tech – Serviços e Comércio; Janeiro/2017 until June/2017; Support Analyst - Internship</li>
      <li>DEDINI – Indústrias de Base; August/2017 – until August/2019; Júnior System Analyst</li>
      <li><b>Daitan Group; August/2019 – until now; Frontend Developer</b></li>`
    }
  }
] as Section[];
