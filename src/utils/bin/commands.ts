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
  } else if (langSetting === 'en') {
    return `Welcome! Here are all the available commands:
    \n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
Type 'sumfetch' to display summary.
`;
  } else if (langSetting === 'el') {
    return `Καλώς ήρθατε! Εδώ είναι όλες οι διαθέσιμες εντολές:
    \n${c}\n
[tab]: ενεργοποιήστε τη συμπλήρωση.
[ctrl+l]/clear: εκκαθάριση τερματικού.
Πληκτρολογήστε 'sumfetch' για να εμφανιστεί η σύνοψη.
`;
  }
};

//change language
export const lang = async (args: string[]): Promise<string> => {
  if ((args.length === 0 || args[0] === "") && langSetting === 'es') {
    return `Uso: lang [idioma]. Ejemplo: lang en`;
  } else if ((args.length === 0 || args[0] === "") && langSetting === 'en') {
    return `Usage: lang [language]. Example: lang es`;
  } else if ((args.length === 0 || args[0] === "") && langSetting === 'el') {
    return `Χρήση: lang [γλώσσα]. Παράδειγμα: lang es`;
  }
  if (args[0].toLowerCase() === langSetting) {
    if (langSetting === 'es') {
      return `El idioma ya está establecido en español.`;
    } else if (langSetting === 'en') {
      return `Language is already set to english.`;
    } else if (langSetting === 'el') {
      return `Η γλώσσα έχει ήδη οριστεί στα ελληνικά.`;
    }
  }
  if (args[0].toLowerCase() === 'es') {
    langSetting = 'es';
    return `Cambiando idioma a español...\n
    ${banner()}`;
  } else if (args[0].toLowerCase() === 'en') {
    langSetting = 'en';
    return `Changing language to english...\n
    ${banner()}`;
  }else if (args[0].toLowerCase() === 'el') {
    langSetting = 'el';
    return `Αλλαγή γλώσσας στα ελληνικά...\n
      ${banner()}`;
  }
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  if (langSetting === 'es') {
    return 'Abriendo el repositorio GitHub de esta página web...';
  } else if (langSetting === 'en') {
    return "Opening this website's GitHub repository...";
  } else if (langSetting === 'el') {
    return "Άνοιγμα αποθετηρίου GitHub αυτής της ιστοσελίδας...";
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
  } else if (langSetting === 'el') {
    return `Γεια σας, είμαι ο ${config.name}.
Καλώς ήρθατε στο Πορτφόλιο μου!

Περισσότερες πληροφορίες για μένα:
'sumfetch' - σύντομη περιγραφή.
'resume' - το βιογραφικό μου.
'readme' - το README του προφίλ μου στο GitHub.`;
  }
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  if (langSetting === 'es') {
    return 'Abriendo el currículum...';
  } else if (langSetting === 'en') {
    return 'Opening resume...';
  } else if (langSetting === 'el') {
    return 'Άνοιγμα βιογραφικού...';
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
  } else if (langSetting === 'el') {
    return `Άνοιγμα mail: ${config.email} ...`;
  }
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  if (langSetting === 'es') {
    return 'Abriendo perfil de GitHub...';
  } else if (langSetting === 'en') {
    return 'Opening GitHub profile...';
  } else if (langSetting === 'el') {
    return 'Άνοιγμα προφίλ GitHub...';
  }
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  if (langSetting === 'es') {
    return 'Abriendo perfil de LinkedIn...';
  } else if (langSetting === 'en') {
    return 'Opening LinkedIn profile...';
  } else if (langSetting === 'el') {
    return 'Άνοιγμα προφίλ LinkedIn...';
  }
};

// Search
export const google = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: google [término de consulta]. Ejemplo: google ¿cómo buscar en google?`;
    } else if (langSetting === 'en') {
      return `Usage: google [search query]. Example: google how to google?`;
    } else if (langSetting === 'el') {
      return `Χρήση: google [όρος ερώτησης]. Παράδειγμα: google πώς να γκουγκλάρω;`;
    }
  }
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  if (langSetting === 'es') {
    return `Buscando '${args.join(' ')}' en Google...`;
  } else if (langSetting === 'en') {
    return `Searching google for '${args.join(' ')}' ...`;
  } else if (langSetting === 'el') {
    return `Αναζήτηση '${args.join(' ')}' στο google...`;
  }
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: duckduckgo [término de consulta]. Ejemplo: duckduckgo ¿cuál es el sentido de la vida?`;
    } else if (langSetting === 'en') {
      return `Usage: duckduckgo [search query]. Example: duckduckgo what is the meaning of life?`;
    } else if (langSetting === 'el') {
      return `Χρήση: duckduckgo [όρος ερώτησης]. Παράδειγμα: duckduckgo ποιό είναι το νόημα της ζωής;`;
    }
  }
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  if (langSetting === 'es') {
    return `Buscando '${args.join(' ')}' en DuckDuckGo...`;
  } else if (langSetting === 'en') {
    return `Searching DuckDuckGo for '${args.join(' ')}'...`;
  } else if (langSetting === 'el') {
    return `Αναζήτηση '${args.join(' ')}' στο DuckDuckGo...`;
  }
};

export const bing = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: bing [término de consulta]. Ejemplo: bing ¿quién usa bing?`;
    } else if (langSetting === 'en') {
      return `Usage: bing [search query]. Example: bing who uses bing?`;
    } else if (langSetting === 'el') {
      return `Χρήση: bing [όρος ερώτησης]. Παράδειγμα: bing ποιος χρησιμοποιεί bing;`;
    }
  }
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  if (langSetting === 'es') {
    return `¿En serio? ¿Quién usa hoy en día Bing para buscar cosas sobre '${args.join(' ')}' ...`;
  } else if (langSetting === 'en') {
    return `Wow, really? Who uses Bing for searching about '${args.join(' ')}'?`;
  } else if (langSetting === 'el') {
    return `Αλήθεια; Ποιος χρησιμοποιεί το Bing για να ψάξει για '${args.join(' ')}';`;
  }
};

export const reddit = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: reddit [término de consulta]. Ejemplo: reddit C# vs Java`;
    } else if (langSetting === 'en') {
      return `Usage: reddit [search query]. Example: reddit C# vs Java`;
    } else if (langSetting === 'el') {
      return `Χρήση: reddit [όρος ερώτησης]. Παράδειγμα: reddit C# εναντίον Java`;
    }
  }
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  if (langSetting === 'es') {
    return `Buscando '${args.join(' ')}' en Reddit...`;
  } else if (langSetting === 'en') {
    return `Searching Reddit for ${args.join(' ')} ...`;
  } else if (langSetting === 'el') {
    return `Αναζήτηση ${args.join(' ')} στο Reddit...`;
  }
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    if (langSetting === 'es') {
      return `Uso: echo [cadena]. Ejemplo: echo hola mundo!`;
    } else if (langSetting === 'en') {
      return `Usage: echo [string]. Example: echo hello world!`;
    } else if (langSetting === 'el') {
      return `Χρήση: echo [string]. Παράδειγμα: echo γεια σου κόσμε!`;
    }
  }
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  if (langSetting === 'es') {
    return `${config.ps1_username_es}`;
  } else if (langSetting === 'en') {
    return `${config.ps1_username_en}`;
  } else if (langSetting === 'el') {
    return `${config.ps1_username_el}`;
  }
};

export const ls = async (args: string[]): Promise<string> => {
  if (langSetting === 'es') {
    return `Permiso denegado a ${config.ps1_username_es}@${config.ps1_hostname}: Use 'sudo' para convertirse en root.`;
  } else if (langSetting === 'en') {
    return `Permission denied for ${config.ps1_username_en}@${config.ps1_hostname}: Use 'sudo' to become root.`;
  } else if (langSetting === 'el') {
    return `Άρνηση πρόσβασης για ${config.ps1_username_el}@${config.ps1_hostname}: Χρησιμοποιήστε 'sudo' για να γίνετε root.`;
  }
};

export const cd = async (args: string[]): Promise<string> => {
  if (langSetting === 'es') {
    return `Permiso denegado a ${config.ps1_username_es}@${config.ps1_hostname}: Use 'sudo' para convertirse en root.`;
  } else if (langSetting === 'en') {
    return `Permission denied for ${config.ps1_username_en}@${config.ps1_hostname}: Use 'sudo' to become root.`;
  } else if (langSetting === 'el') {
    return `Απορρίφθηκε η άδεια για ${config.ps1_username_el}@${config.ps1_hostname}: Χρησιμοποιήστε 'sudo' για να γίνετε root.`;
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
    return `Permiso denegado: JAJAJAJAJA `;
  } else if (langSetting === 'en') {
    return `Permission denied: HAHAHAHAHA `;
  } else if (langSetting === 'el') {
    return `Απορρίφθηκε η άδεια: ΧΑΧΑΧΑΧΑΧΑ `;
  }
};

const bannerName = `<div id="banner">
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
  ░░░░░░░░░░░  ░░░░░░░░  ░░░░░░░░░  ░░░░░░░░ ░░░░░      ░░░░░░</div>`;

// Banner
export const banner = (args?: string[]): string => {
  if (langSetting === 'es') {
    return `${bannerName}
- Escribe 'help' para ver la lista de comandos disponibles.
- Escribe 'web' para abrir el formato web.
- Escribe 'sumfetch' para mostrar un resumen.
- Escribe 'repo' o haz click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">aquí</a></u> para ver el repositorio de esta página web.
- Escribe 'about' para más información sobre mí.
- Escribe 'lang' para cambiar el idioma del Portfolio. Idiomas soportados ES/EN/EL.
`;
  } else if (langSetting === 'en') {
    return `${bannerName}                                                                                                                                  
- Type 'help' to see the list of available commands.
- Type 'web' to open this in web format.
- Type 'sumfetch' to display summary.
- Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for this website's Github repository.
- Type 'about' for more information about me.
- Type 'lang' to change the Portfolio language. Supported languages ES/EN/EL.
`;
  } else if (langSetting === 'el') {
  }
  return `${bannerName}
- Πληκτρολογήστε 'help' για να δείτε τη λίστα των διαθέσιμων εντολών.
- Πληκτρολογήστε 'web' για να ανοίξετε την κανονική ιστοσελίδα.
- Πληκτρολογήστε 'sumfetch' για μια σύνοψη.
- Πληκτρολογήστε 'repo' ή κάντε κλικ <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">εδώ</a></u> για να δείτε το αποθετήριο αυτής της ιστοσελίδας.
- Πληκτρολογήστε 'about' για περισσότερες πληροφορίες σχετικά με εμένα.
- Πληκτρολογήστε 'lang' για να αλλάξετε τη γλώσσα. Οι υποστηριζόμενες γλώσσες είναι ES/EN/EL.
`;
};
