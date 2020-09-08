const projectsEl = document.getElementById('projects-ul');

const createEl = (element, classname) => {
  const el = document.createElement(element);
  if (classname) { el.className = classname; }
  return el;
};

const generateCard = ({
  bgcolor,
  imgsrc,
  title,
  descriptions,
  livelink,
  repos,
}) => {
  const card = createEl('li', 'project');
  card.style.backgroundColor = bgcolor;

  const imageContainer = createEl('div', 'project-image-container');

  const imageLink = createEl('a', 'project-image-link');
  imageLink.setAttribute('href', livelink);
  imageLink.setAttribute('target', '_blank');

  const image = createEl('img', 'project-image');
  image.src = imgsrc;
  imageLink.appendChild(image);

  imageContainer.appendChild(imageLink);
  card.appendChild(imageContainer);

  const infoContainer = createEl('div', 'project-info-container');
  const infoTitle = createEl('div', 'info-title');
  infoTitle.innerHTML += title;
  infoContainer.appendChild(infoTitle);

  const infoDescription = createEl('div', 'info-description');
  for (let i = 0; i < descriptions.length; i += 1) {
    const p = createEl('p');
    p.innerHTML += descriptions[i];
    infoDescription.appendChild(p);
  }
  infoContainer.appendChild(infoDescription);

  const infoLivelink = createEl('a', 'info-livelink');
  infoLivelink.innerHTML += 'Live Demo';
  infoLivelink.setAttribute('href', livelink);
  infoLivelink.setAttribute('target', '_blank');
  infoContainer.appendChild(infoLivelink);


  if (repos) {
    const infoLinks = createEl('div', 'info-links');
    const linkClientRepo = createEl('a', 'link-repos');
    linkClientRepo.innerHTML += 'Client Repo';
    linkClientRepo.setAttribute('href', repos.client);
    linkClientRepo.setAttribute('target', '_blank');
    infoLinks.appendChild(linkClientRepo);
    if (repos.server) {
      const linkServerRepo = createEl('a', 'link-repos');
      linkServerRepo.innerHTML += 'Server Repo';
      linkServerRepo.setAttribute('href', repos.server);
      infoLinks.appendChild(linkServerRepo);
    }
    infoContainer.appendChild(infoLinks);
  }

  card.appendChild(infoContainer);

  return card;
};

const renderProjects = () => {
  const cards = [
    {
      bgcolor: '#052515',
      imgsrc: './img/projects/school-sp-apostle.png',
      title: 'SP Apostle Catholic School',
      descriptions: [
        'Wordpress website for redesign and maintenance',
        'Wrote custom auth header with hamburger menu',
        'Built with <span class="tech">Wordpress, Enfold Theme, JavaScript,</span> and <span class="tech">PHP</span>',
      ],
      livelink: 'https://school.sp-apostle.org',
      repos: null,
    },
    {
      bgcolor: '#063749',
      imgsrc: './img/projects/yimbydemssd.png',
      title: 'Yimby Dems SD',
      descriptions: [
        'Wordpress website for a political organization',
        'Custom theme using Underscores',
        'Built with <span class="tech">Wordpress, ACF, JavaScript,</span> and <span class="tech">SASS</span>',
      ],
      livelink: 'https://www.yimbydemssd.com',
      repos: {
        client: 'https://github.com/jsphkm/yimby-theme',
      },
    },
    {
      bgcolor: '#3479ae',
      imgsrc: './img/projects/blog.png',
      title: 'Markdown Blog',
      descriptions: [
        'SSR blog with syntax highlighting.',
        'Includes placeholder entries for testing.',
        'Built with <span class="tech">Gatsby</span>',
      ],
      livelink: 'https://inwords.now.sh',
      repos: {
        client: 'https://github.com/jsphkm/inwords',
      },
    },
    {
      bgcolor: '#802',
      imgsrc: './img/projects/medium.png',
      title: 'Responsive Emails',
      descriptions: [
        'Reproduction of three emails.',
        'Built with <span class="tech">MJML</span> and <span class="tech">Pine</span>',
      ],
      livelink: 'https://jsphkm.github.io/responsive-emails/',
      repos: {
        client: 'https://github.com/jsphkm/responsive-emails.git',
      },
    },
    {
      bgcolor: '#378',
      imgsrc: './img/projects/gradlabs.png',
      title: 'Gradlabs',
      descriptions: [
        'Developed a corporate website for a client.',
        'Built with <span class="tech">JavaScript, SASS, HTML5</span>',
      ],
      livelink: 'https://gradlabs.netlify.com/d9cd57d07d407587f8cbb925f1d2f6c1abe34f16/index.html',
      repos: {
        client: 'https://github.com/jsphkm/gradlabs',
      },
    },
    {
      bgcolor: '#ba143d',
      imgsrc: './img/projects/colorpicker.png',
      title: 'Colorpicker',
      descriptions: [
        'Create color palettes on the web.',
        'Built with <span class="tech">React, Node, Express, Mongo</span>',
      ],
      livelink: 'https://colorpicker-client.herokuapp.com/',
      repos: {
        client: 'https://github.com/jsphkm/colorpicker-client.git',
        server: 'https://github.com/jsphkm/colorpicker-server.git',
      },
    },
    {
      bgcolor: '#011947',
      imgsrc: './img/projects/textbottle.png',
      title: 'Textbottle',
      descriptions: [
        'Write and view articles on the web.',
        'Built with <span class="tech">Node, Express, Mongo</span>',
      ],
      livelink: 'https://textbottle.herokuapp.com/',
      repos: {
        client: 'https://github.com/jsphkm/Textbottle.git',
      },
    },
    {
      bgcolor: '#b29d8d',
      imgsrc: './img/projects/minimap.png',
      title: 'MiniMaps',
      descriptions: [
        'Look up drive times quickly on the web.',
        'Built with <span class="tech">JavaScript and Google API</span>',
      ],
      livelink: 'https://jsphkm.github.io/MiniMaps/',
      repos: {
        client: 'https://github.com/jsphkm/MiniMaps.git',
      },
    },
  ];
  for (let i = 0; i < cards.length; i += 1) {
    const card = generateCard(cards[i]);
    projectsEl.appendChild(card);
  }
};

const master = () => {
  renderProjects();
};

window.onload = () => {
  master();
};
