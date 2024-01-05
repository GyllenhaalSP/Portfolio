// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import config from '../../../config.json';
import { langSetting } from './commands';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();

  const filteredProjects = projects.filter(
    (project: { fork: any; visibility: string }) =>
      !project.fork && project.visibility !== 'private',
  );

  if (langSetting === 'es') {
    return `Haz click en el nombre del repositorio para ir a GitHub:\n ${filteredProjects
      .map(
        (repo) =>
          `<a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.name}</a> - '${repo.description}'`,
      )
      .join('\n')}`;
  } else if (langSetting === 'en') {
    return `Click on the repository name to go to GitHub:\n ${filteredProjects
      .map(
        (repo) =>
          `<a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.name}</a> - '${repo.description}'`,
      )
      .join('\n')}`;
  }
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  if (args.length == 0) {
    if (langSetting === 'es') {
      return `Use readme [opción].
      Use 'fetch' para obtener código del README de mi GitHub. Ejemplo: readme fetch
      Use 'open' para abrir el README de mi GitHub. Ejemplo: readme open`;
    } else if (langSetting === 'en') {
      return `Use readme [option].
      Use 'fetch' to fetch my GitHub README. Example: readme fetch
      Use 'open' to open my GitHub README. Example: readme open`;
    }
  }
  if (args[0] === 'fetch') {
    if (langSetting === 'es') {
      return `Obteniendo README de GitHub...\n
      ${await getReadme()}`;
    } else if (langSetting === 'en') {
      return `Fetching GitHub README...\n
      ${await getReadme()}`;
    }
  } else if (args[0] === 'open') {
    window.open(`https://github.com/${config.social.github}`);
    if (langSetting === 'es') {
      return 'Abriendo README de GitHub...';
    } else if (langSetting === 'en') {
      return 'Opening GitHub README...';
    }
  }
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    if (langSetting === 'es')
      return 'Uso: weather [ciudad]. Ejemplo: weather Madrid';
    else if (langSetting === 'en')
      return 'Usage: weather [city]. Example: weather Madrid';
  }
  const weather = await getWeather(city);
  return weather;
};
