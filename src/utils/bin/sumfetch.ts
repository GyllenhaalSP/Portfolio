import config from '../../../config.json';
import { langSetting } from './commands';

const sumfetch = async (args: string[]): Promise<string> => {
  if (langSetting === 'es') {
    return `
 Un pequeño resumen


 SOBRE MÍ
----------------
 ${config.name}
<span>Técnico Superior en Desarrollo de Aplicaciones Web</span>
<span>Trabajo como desarrollador backend en GFitSoft.</span>
 <u><a href="${config.resume_url}" target="_blank">Curriculum</a></u>
爵 <u><a href="${config.repo}" target="_blank">Repositorio de esta página</a></u>


 CONTACTO
----------------
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
`;
  } else if (langSetting === 'en') {
    return `
 Summary display


 ABOUT
----------------
 ${config.name}
<span>Web developer</span>
<span>I'm working at GFitSoft as a backend dev.</span>
 <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
爵 <u><a href="${config.repo}" target="_blank">This website's repo</a></u>


 CONTACT 
----------------
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
`;
  } else if (langSetting === 'el') {
    return `
 Μικρή συνοπτική παρουσίαση


 ΓΙΑ ΜΕΝΑ
----------------
 ${config.name}
<span>Προγραμματιστής ιστοσελίδων</span>
<span>Εργάζομαι στην GFitSoft ως backend dev.</span>
 <u><a href="${config.resume_url}" target="_blank">Βιογραφικό</a></u>
爵 <u><a href="${config.repo}" target="_blank">Αποθετήριο αυτής της ιστοσελίδας</a></u>


 ΕΠΙΚΟΙΝΩΝΙΑ
----------------
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
`;
  }
};

export default sumfetch;
