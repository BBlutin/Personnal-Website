

import portfolio from "./images/projects/portfolio.png";
import tbit from "./images/projects/tbit.png";
import tesla from "./images/projects/tesla.png";
import chat from "./images/projects/chat.png";
import disney from "./images/projects/disney.png";
import spotify from "./images/projects/spotify.png";

export const projectData = [
  {
    title: "Portfolio",
    description: `Ce portfolio a été réalisé en utilisant React. L'inspiration général du site est basée sur les jeu d'arcade retro des 80's. Le site est responsive (Mobile et Desktop).`,
    technologies:
      "React, JavaScript, HTML, CSS, Adobe Illustrator",
    image: portfolio,
    date_created: "Mai 2021",
    link: "https://thomas-fritschy.tech",
    github: "https://github.com/BBlutin/Personnal-Website",
  },
  {
    title: "TB-IT",
    description: `Le site vitrine TB-IT a été développé avec le framework CSS Bulma. Il s'agit de la microentreprise que je possède avec un collègue de ma promotion. Le site est responsive (Mobile et Desktop).`,
    technologies:
      "Bulma, JavaScript, HTML, CSS, jQuery",
    image: tbit,
    date_created: "Janvier 2021",
    link: "https://tb-it.fr/",
  },
  {
    title: "Tesla Clone",
    description: `Ce clone du site de Tesla a été produit avec React. Ce clone représente environ 3-4h de travail et ne concerne que le design. Le site est responsive (Mobile et Desktop).`,
    technologies:
      "React, Styled-components, JavaScript, HTML, CSS",
    image: tesla,
    date_created: "Mai 2021",
    link: "https://tesla.thomas-fritschy.tech/",
    github: "https://github.com/BBlutin/Tesla-Clone-React",
  },
  {
    title: "SuperChat",
    description: `Il s'agit d'un projet FullStack permettant de chatter dans des salles. Ce projet représente 15-20h de travail et je compte refaire le design dans le futur.`,
    technologies:
      "Socket.io, React, NodeJS, CSS, Javascript, HTML",
    image: chat,
    date_created: "Juin 2021",
    link: "https://chat.thomas-fritschy.tech/",
  },
  {
    title: "Clone Disney +",
    description: `Il s'agit d'un clone du site de Disney + fait en Next JS. Ce clone représente environ 16h de travail`,
    technologies:
      "React JS, Next JS, NodeJS, Tailwind CSS, Firebase, API",
    image: disney,
    date_created: "Septembre 2021",
    link: "https://disney.thomas-fritschy.tech/",
  },
  {
    title: "Better Spotify",
    description: `|WIP| Le concept de cette WebApp est de fournir une meilleure interface pour Spotify. L'application est toujours en cours de développement mais vous pouvez déjà expérimenter les fonctionnalitées de base.`,
    technologies:
      "React JS, Next JS, NodeJS, Tailwind CSS, Firebase, API",
    image: spotify,
    date_created: "Septembre 2021",
    link: "https://better-spotify.thomas-fritschy.tech/",
  },
  // {
  //   title: "",
  //   description: ``,
  //   technologies:
  //     "",
  //   image: ,
  //   date_created: "September 2020",
  //   link: "",
  //   github: "",
  //   test_user: "",
  //   test_password: "",
  // },
];
