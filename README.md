# PortFolio - Terminal

![GitHub followers](https://img.shields.io/github/followers/GyllenhaalSP?style=social&color=blue)
![GitHub forks](https://img.shields.io/github/forks/GyllenhaalSP/Portfolio?style=social)
![GitHub stars](https://img.shields.io/github/stars/GyllenhaalSP/Portfolio?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/GyllenhaalSP/Portfolio?style=social)

![Screenshot de la página principal](screenshot.png)

Este es un proyecto creado 'for fun' para poner en práctica todas las habilidades adquiridas durante el Grado Superior de Desarrollo de Aplicaciones Web y las habilidades que he ido adquiriendo por mi cuenta.

Además, sirve un propósito muy importante: es un portfolio personal para proporcionar a los visitantes, posibles empleadores, clientes, etc. información sobre mí, mis habilidades, mis proyectos y la experiencia adquirida.

![GitHub package.json version](https://img.shields.io/github/package-json/v/GyllenhaalSP/Portfolio?style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/GyllenhaalSP/Portfolio?style=flat)
![GitHub issues](https://img.shields.io/github/issues-raw/GyllenhaalSP/Portfolio?style=flat)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/GyllenhaalSP/Portfolio?style=flat)
![GitHub license](https://img.shields.io/github/license/GyllenhaalSP/Portfolio?style=flat)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
  - [Frontend](#frontend)
  - [Servidor](#servidor)
  - [Tooling](#tooling)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Autor](#autor)
- [Social](#social)

## Descripción

Como declaración de intenciones de mi fuerte inclinación hacia el backend, este proyecto de portfolio personal simula una terminal de bash interactiva. Esta terminal intenta ofrecer una sensación de terminal, contando con autocompletado de comandos, con comandos propios de entornos *NIX permitiendo la navegación por las distintas secciones del portfolio. También cuenta con unos cuantos easter eggs y comandos ocultos que te invito a descubrir.

El proyecto está alojado en [https://www.dalonsolaz.dev](https://www.dalonsolaz.dev).

Es un servidor casero con piezas recicladas que tiene un `Ubuntu Jammy Jellyfish 22.04.4 LTS` corriendo en un `HP ProDesk 400 G2 MINI` que monta un `Intel(R) Core(TM) i5-6500T CPU @ 2.50GHz` con 16 GB de RAM y 256 GB de SSD.

El servidor se nutre de mi propia conexión a internet, por lo que puede ser que la velocidad de carga sea variable según la hora del día y la carga de la red en ese momento, aunque por regla general, funciona bastante bien.

## Tecnologías

Estas son todas las tecnologías que se han utilizado para la creación de este proyecto.

### Frontend
[![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)](https://postcss.org)

### Servidor

[![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com)
[![Docker Compose](https://img.shields.io/badge/-Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/compose/gettingstarted/)
[![Nginx](https://img.shields.io/badge/-Nginx-269539?style=for-the-badge&logo=nginx&logoColor=white)](https://www.nginx.com)
[![Certbot](https://img.shields.io/badge/-Certbot-03A9F4?style=for-the-badge&logo=certbot&logoColor=white)](https://certbot.eff.org)
[![Ubuntu Server](https://img.shields.io/badge/-Ubuntu_Server-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)](https://ubuntu.com)


### Tooling
#### Package Managers
[![YARN](https://img.shields.io/badge/-Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com)

#### Linters
[![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io)

#### Code Analysis
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org)

#### IDE
[![WebStorm](https://img.shields.io/badge/-WebStorm-000000?style=for-the-badge&logo=webstorm&logoColor=white)](https://www.jetbrains.com/webstorm)

#### VCS

[![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com)

[Arriba](#tabla-de-contenidos)

## Instalación

Se puede instalar tanto en local para desarrollo o "toqueteo", como en un servidor para poder hacer pruebas. Se recomienda instalarlo con Docker para un despliegue más sencillo.

Como primer paso hay que clonar el repositorio de GitHub y acceder a la carpeta del proyecto:

```bash
git clone https://github.com/GyllenhaalSP/Portfolio.git
cd Portfolio
```

### Instalar con Docker (Recomendado)

Para instalar el proyecto en Docker, se necesita tener [Docker](https://www.docker.com/get-started) y [Docker Compose](https://docs.docker.com/compose/gettingstarted/) instalados. 

Una vez instalados:

```bash
docker compose up -d
```

Simple, sencillo y para toda la familia.

### Instalar en Local

Para instalar el proyecto se necesita tener [Node.js](https://nodejs.org/en/download) y Yarn instalados. Una vez instalado Node.js, ejecutar en la terminal:

```bash
npm install -g yarn
```

Instalar las dependencias del `package.json`:

```bash
yarn install
```

## Uso

En el caso de haber elegido `Docker`, una vez levantado el contenedor, el proyecto estará disponible en [http://localhost:7474](http://localhost:7474).

En el caso de usar el proyecto en `local`, para ejecutar el proyecto, utilizar el siguiente comando:

```bash
yarn start
```

Y acceder a [http://localhost:3000](http://localhost:3000) en el navegador.

[Arriba](#tabla-de-contenidos)

## Contribuciones

Las contribuciones son bienvenidas. 

Para cambios importantes, por favor, abre primero un issue para discutir qué te gustaría cambiar y por qué. 

Estoy abierto a sugerencias, correcciones de errores, notificaciones de bugs, y en general cualquier tipo de crítica constructiva.

Por favor, no dudes en enviar un correo electrónico a [contacto@dalonsolaz.dev](mailto:contacto@dalonsolaz.dev) para notificar cualquier error o problema grave.

## Licencia

Este proyecto está licenciado bajo la licencia MIT, que es bastante permisiva. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

[Arriba](#tabla-de-contenidos)

## Autor
![Daniel Alonso Lázaro](https://avatars.githubusercontent.com/u/86900724?v=4&s=75)
- Daniel Alonso Lázaro
- [https://www.dalonsolaz.dev](https://www.dalonsolaz.dev) (Esta misma página)
- contacto@dalonsolaz.dev

No dudes en contactar conmigo para cualquier cosa, ¡no muerdo!

## Social
[![LinkedIn](https://img.shields.io/badge/-Daniel_Alonso_Lázaro-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-alonso-l%C3%A1zaro-3b3b3b1b3/)

[![GitHub](https://img.shields.io/badge/-GyllenhaalSP-181717?style=for-the-badge&logo=github&logoColor=white)](http://github.com/gyllenhaalsp)

[![Twitter](https://img.shields.io/badge/-GyllenhaalSP-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GyllenhaalSP)


