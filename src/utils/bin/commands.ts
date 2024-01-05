// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

let langSetting = config.defaultLanguage;
export { langSetting };

export const web = async (args: string[]): Promise<string> => {
  window.open(`${config.personalUrl}`);
  if (langSetting === 'es') {
    return 'Abriendo https://www.dalonsolaz.dev/index/ ...';
  } else if (langSetting === 'en') {
    return 'Opening https://www.dalonsolaz.dev/index/ ...';
  }
};

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (Object.keys(bin).sort()[i - 1] === 'langSetting') {
      continue;
    }
    if (i % 9 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  if (langSetting === 'es') {
    return `¡Bienvenido! Aquí están todos los comandos disponibles:
    \n${c}\n
[tab]: activar autocompletado.
[ctrl+l]/clear: limpiar terminal.
Escribe 'sumfetch' para mostrar el resumen.
`;
  } else {
    return `Welcome! Here are all the available commands:
    \n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
Type 'sumfetch' to display summary.
`;
  }
};

//change language
export const lang = async (args: string[]): Promise<string> => {
  if (args.length === 0 && langSetting === 'es') {
    return `Uso: lang [idioma]. Ejemplo: lang en`;
  } else if (args.length === 0 && langSetting === 'en') {
    return `Usage: lang [language]. Example: lang es`;
  }
  if (args[0] === 'es') {
    langSetting = 'es';
    return `Cambiando idioma a español...\n
    ${banner()}`;
  } else if (args[0] === 'en') {
    langSetting = 'en';
    return `Changing language to english...\n
    ${banner()}`;
  }
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  if (langSetting === 'es') {
    return 'Abriendo el repositorio de esta página web...';
  } else if (langSetting === 'en') {
    return "Opening this website's Github repository...";
  }
};

// About
export const about = async (args: string[]): Promise<string> => {
  if (langSetting === 'es') {
    return `¡Hola!, me llamo ${config.name}.
¡Bienvenido a mi Portfolio!

Más información sobre mi:
'sumfetch' - resumen corto.
'resume' - mi currículum.
'readme' - el README de mi perfil de GitHub.`;
  } else if (langSetting === 'en') {
    return `Hi, I am ${config.name}.
Welcome to my Portfolio!

More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my GitHub README.`;
  }
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  if (langSetting === 'es') {
    return 'Abriendo el currículum...';
  } else if (langSetting === 'en') {
    return 'Opening resume...';
  }
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest.
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  if (langSetting === 'es') {
    return `Abriendo mail: ${config.email} ...`;
  } else if (langSetting === 'en') {
    return `Opening mailto: ${config.email} ...`;
  }
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  if (langSetting === 'es') {
    return 'Abriendo perfil de GitHub...';
  } else if (langSetting === 'en') {
    return 'Opening GitHub profile...';
  }
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  if (langSetting === 'es') {
    return 'Abriendo perfil de LinkedIn...';
  } else if (langSetting === 'en') {
    return 'Opening LinkedIn profile...';
  }
};

// Search
export const google = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: google [término de consulta]. Ejemplo: google ¿cómo buscar en google?`;
    } else if (langSetting === 'en') {
      return `Usage: google [search query]. Example: google how to google?`;
    }
  }
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  if (langSetting === 'es') {
    return `Buscando '${args.join(' ')}' en Google...`;
  } else if (langSetting === 'en') {
    return `Searching google for '${args.join(' ')}' ...`;
  }
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: duckduckgo [término de consulta]. Ejemplo: duckduckgo ¿cuál es el sentido de la vida?`;
    } else if (langSetting === 'en') {
      return `Usage: duckduckgo [search query]. Example: duckduckgo what is the meaning of life?`;
    }
  }
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  if (langSetting === 'es') {
    return `Buscando '${args.join(' ')}' en DuckDuckGo...`;
  } else if (langSetting === 'en') {
    return `Searching DuckDuckGo for '${args.join(' ')}'...`;
  }
};

export const bing = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: bing [término de consulta]. Ejemplo: bing ¿quién usa bing?`;
    } else if (langSetting === 'en') {
      return `Usage: bing [search query]. Example: bing who uses bing?`;
    }
  }
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  if (langSetting === 'es') {
    return `¿En serio? ¿Quién usa hoy en día Bing para buscar cosas sobre '${args.join(' ')}' ...`;
  } else if (langSetting === 'en') {
    return `Wow, really? Who uses Bing for searching about '${args.join(' ')}'?`;
  }
};

export const reddit = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: reddit [término de consulta]. Ejemplo: reddit C# vs Java`;
    } else if (langSetting === 'en') {
      return `Usage: reddit [search query]. Example: reddit C# vs Java`;
    }
  }
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  if (langSetting === 'es') {
    return `Buscando '${args.join(' ')}' en Reddit...`;
  } else if (langSetting === 'en') {
    return `Searching Reddit for ${args.join(' ')} ...`;
  }
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: echo [cadena]. Ejemplo: echo hola mundo!`;
    } else if (langSetting === 'en') {
      return `Usage: echo [string]. Example: echo hello world!`;
    }
  }
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  if (langSetting === 'es') {
    return `${config.ps1_username_es}`;
  } else if (langSetting === 'en') {
    return `${config.ps1_username_en}`;
  }
};

export const ls = async (args: string[]): Promise<string> => {
  if (langSetting === 'es') {
    return `Permiso denegado a ${config.ps1_username_es}@${config.ps1_hostname}: Use 'sudo' para convertirse en root.`;
  } else if (langSetting === 'en') {
    return `Permission denied for ${config.ps1_username_en}@${config.ps1_hostname}: Use 'sudo' to become root.`;
  }
};

export const cd = async (args: string[]): Promise<string> => {
  if (langSetting === 'es') {
    return `Permiso denegado a ${config.ps1_username_es}@${config.ps1_hostname}: Use 'sudo' para convertirse en root.`;
  } else if (langSetting === 'en') {
    return `Permission denied for ${config.ps1_username_en}@${config.ps1_hostname}: Use 'sudo' to become root.`;
  }
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toLocaleString();
};

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };
//
// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };
//
// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };
//
// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  if (langSetting === 'es') {
    return `Permiso denegado: HAHAHAHA `;
  } else if (langSetting === 'en') {
    return `Permission denied: HAHAHAHA `;
  }
};

// Banner
export const banner = (args?: string[]): string => {
  if (langSetting === 'es') {
    return `
   ██████████                         ███           ████        
  ░░███░░░░███                       ░░░           ░░███        
   ░███   ░░███  ██████   ████████   ████   ██████  ░███        
   ░███    ░███ ░░░░░███ ░░███░░███ ░░███  ███░░███ ░███        
   ░███    ░███  ███████  ░███ ░███  ░███ ░███████  ░███        
   ░███    ███  ███░░███  ░███ ░███  ░███ ░███░░░   ░███        
   ██████████  ░░████████ ████ █████ █████░░██████  █████       
  ░░░░░░░░░░    ░░░░░░░░ ░░░░ ░░░░░ ░░░░░  ░░░░░░  ░░░░░        
                                                                
                                                                
                                                                
     █████████   ████                                           
    ███░░░░░███ ░░███                                           
   ░███    ░███  ░███   ██████  ████████    █████   ██████      
   ░███████████  ░███  ███░░███░░███░░███  ███░░   ███░░███     
   ░███░░░░░███  ░███ ░███ ░███ ░███ ░███ ░░█████ ░███ ░███     
   ░███    ░███  ░███ ░███ ░███ ░███ ░███  ░░░░███░███ ░███     
   █████   █████ █████░░██████  ████ █████ ██████ ░░██████      
  ░░░░░   ░░░░░ ░░░░░  ░░░░░░  ░░░░ ░░░░░ ░░░░░░   ░░░░░░       
                                                                
                                                                
                                                                
   █████           █                                             
  ░░███                                                         
   ░███         ██████    █████████  ██████   ████████   ██████ 
   ░███        ░░░░░███  ░█░░░░███  ░░░░░███ ░░███░░███ ███░░███
   ░███         ███████  ░   ███░    ███████  ░███ ░░░ ░███ ░███
   ░███      █ ███░░███    ███░   █ ███░░███  ░███     ░███ ░███
   ███████████░░████████  █████████░░████████ █████    ░░██████ 
  ░░░░░░░░░░░  ░░░░░░░░  ░░░░░░░░░  ░░░░░░░░ ░░░░░      ░░░░░░     
                                                              
Escribe 'help' para ver la lista de comandos disponibles.
Escribe 'sumfetch' para mostrar un resumen.
Escribe 'repo' o haz click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">aquí</a></u> para ver el repositorio de esta página web.
Escribe 'about' para más información sobre mí.
Escribe 'lang' para cambiar el idioma del Portfolio.
`;
  } else if (langSetting === 'en') {
    return `
   ██████████                         ███           ████        
  ░░███░░░░███                       ░░░           ░░███        
   ░███   ░░███  ██████   ████████   ████   ██████  ░███        
   ░███    ░███ ░░░░░███ ░░███░░███ ░░███  ███░░███ ░███        
   ░███    ░███  ███████  ░███ ░███  ░███ ░███████  ░███        
   ░███    ███  ███░░███  ░███ ░███  ░███ ░███░░░   ░███        
   ██████████  ░░████████ ████ █████ █████░░██████  █████       
  ░░░░░░░░░░    ░░░░░░░░ ░░░░ ░░░░░ ░░░░░  ░░░░░░  ░░░░░        
                                                                
     █████████   ████                                           
    ███░░░░░███ ░░███                                           
   ░███    ░███  ░███   ██████  ████████    █████   ██████      
   ░███████████  ░███  ███░░███░░███░░███  ███░░   ███░░███     
   ░███░░░░░███  ░███ ░███ ░███ ░███ ░███ ░░█████ ░███ ░███     
   ░███    ░███  ░███ ░███ ░███ ░███ ░███  ░░░░███░███ ░███     
   █████   █████ █████░░██████  ████ █████ ██████ ░░██████      
  ░░░░░   ░░░░░ ░░░░░  ░░░░░░  ░░░░ ░░░░░ ░░░░░░   ░░░░░░                                                                
                                                                
   █████           █                                             
  ░░███                                                         
   ░███         ██████    █████████  ██████   ████████   ██████ 
   ░███        ░░░░░███  ░█░░░░███  ░░░░░███ ░░███░░███ ███░░███
   ░███         ███████  ░   ███░    ███████  ░███ ░░░ ░███ ░███
   ░███      █ ███░░███    ███░   █ ███░░███  ░███     ░███ ░███
   ███████████░░████████  █████████░░████████ █████    ░░██████ 
  ░░░░░░░░░░░  ░░░░░░░░  ░░░░░░░░░  ░░░░░░░░ ░░░░░      ░░░░░░    
                                                                                                                                                                                    
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for this website's Github repository.
Type 'about' for more information about me.
Type 'lang' to change the Portfolio language.
`;
  }
};
