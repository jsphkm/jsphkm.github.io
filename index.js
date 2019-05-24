const projectsEl = document.querySelector('#projects .flex-col-container');

const createEl = (element, classname) => {
  const newEl = document.createElement(element);
  newEl.className = classname;
  return newEl;
};

const ProjectCard = ({
  imgsrc,
  title,
  description,
  livelink,
  repo
}) => {
  const card = createEl('div', 'project-card flex-row-container');
  const imageContainer = createEl('div', 'card-image-container');
  const infoContainer = createEl('div', 'card-info-container');

  const image = createEl('img', 'card-image');
  image.src = imgsrc;
  imageContainer.appendChild(image);

  const infoTitle = createEl('a', 'info-title');
  infoTitle.setAttribute('href', livelink);
  infoTitle.setAttribute('target', '_blank');
  infoTitle.innerHTML += title;
  infoContainer.appendChild(infoTitle);

  const infoDescription = createEl('div', 'info-description');
  infoDescription.innerHTML += description;
  infoContainer.appendChild(infoDescription);

  const liveLink = createEl('a', 'info-livelink');
  liveLink.setAttribute('href', livelink);
  liveLink.setAttribute('target', '_blank');
  liveLink.innerHTML += 'Live Demo';
  infoContainer.appendChild(liveLink);

  const repoContainer = createEl('div', 'repo-container');

  const clientRepo = createEl('a', 'info-clientrepo');
  clientRepo.setAttribute('href', repo.client);
  clientRepo.setAttribute('target', '_blank');
  clientRepo.innerHTML += 'Client Repo';
  repoContainer.appendChild(clientRepo);

  if (repo.server) {
    const serverRepo = createEl('a', 'info-serverrepo');
    serverRepo.setAttribute('href', repo.server);
    serverRepo.setAttribute('target', '_blank');
    serverRepo.innerHTML += 'Server Repo';
    repoContainer.appendChild(serverRepo);
  }
  infoContainer.appendChild(repoContainer);

  card.appendChild(imageContainer);
  card.appendChild(infoContainer);
  return card;
};

const createProjectCards = () => {
  const cards = [
    {
      imgsrc: './img/blog_post.png',
      title: 'Markdown Blog',
      description: `
      This blog is written with Gatsby.
      It translates markdown files as blog posts.
      Gorgeous syntax highlighting is included.
      `,
      livelink: 'https://inwords.netlify.com',
      repo: {
        client: 'https://github.com/jsphkm/inwords',
      },
    },
    {
      imgsrc: './img/medium.png',
      title: 'Responsive Emails',
      description: `
      This is a reproduction of three emails.
      Created using MJML and Pine.
      `,
      livelink: 'https://jsphkm.github.io/responsive-emails/',
      repo: {
        client: 'https://github.com/jsphkm/responsive-emails',
      },
    },
    {
      imgsrc: './img/gradlabs.png',
      title: 'GradLabs',
      description: `
      A corporate website for a property management firm.
      Made using SASS and JavaScript.
      `,
      livelink: 'https://gradlabs.netlify.com/d9cd57d07d407587f8cbb925f1d2f6c1abe34f16/index.html',
      repo: {
        client: 'https://github.com/jsphkm/gradlabs',
      },
    },
    {
      imgsrc: './img/colorpicker.png',
      title: 'Colorpicker',
      description: `
      A website for generating and retrieving color palettes.
      Made with MERN stack.
      `,
      livelink: 'https://colorpicker-client.herokuapp.com/',
      repo: {
        client: 'https://github.com/jsphkm/colorpicker-client',
        server: 'https://github.com/jsphkm/colorpicker-server',
      },
    },
    {
      imgsrc: './img/minimap.png',
      title: 'MiniMap',
      description: `
      Web application for navigation and location search.
      Made with 4 Google API's.
      Written with JavaScript and jQuery.
      `,
      livelink: 'https://jsphkm.github.io/MiniMaps/',
      repo: {
        client: 'https://github.com/jsphkm/MiniMaps',
      },
    },
  ];

  for (let i = 0; i < cards.length; i += 1) {
    const card = ProjectCard(cards[i]);
    projectsEl.appendChild(card);
  }
};

const master = () => {
  createProjectCards();
};

window.onload = master;
