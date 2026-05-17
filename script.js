const data = {
  karina: {
    name: 'Karina Braun',
    role: 'Mère de Reiner Braun.',
    details: ['Eldienne vivant à Liberio.', 'Pousse Reiner à devenir Guerrier.', 'Très loyale envers Marley.']
  },
  reiner: {
    name: 'Reiner Braun',
    role: 'Détenteur du Titan Cuirassé.',
    details: ['Membre des Guerriers de Marley.', 'Infiltre Paradis avec Annie et Bertholdt.', 'Personnage central du conflit Marley / Paradis.']
  },
  gabi: {
    name: 'Gabi Braun',
    role: 'Candidate Guerrière.',
    details: ['Cousine de Reiner.', 'Très nationaliste au début.', 'Évolue énormément durant la saison 4.']
  },
  grice: {
    name: 'Grice',
    role: 'Membre des restaurationnistes eldiens.',
    details: ['Lié au mouvement secret contre Marley.', 'Oncle de Colt et Falco.']
  },
  colt: {
    name: 'Colt Grice',
    role: 'Grand frère de Falco.',
    details: ['Protège Falco.', 'Candidat au Titan Bestial avant Falco.']
  },
  falco: {
    name: 'Falco Grice',
    role: 'Détenteur du Titan Mâchoire.',
    details: ['Très différent des autres candidats.', 'Veut sauver Gabi.', 'Hérite plus tard d’un Titan.']
  },
  marcel: {
    name: 'Marcel Galliard',
    role: 'Ancien détenteur du Titan Mâchoire.',
    details: ['Grand frère de Porco.', 'Sauve Reiner au début de la mission Paradis.']
  },
  porco: {
    name: 'Porco Galliard',
    role: 'Titan Mâchoire.',
    details: ['Petit frère de Marcel.', 'Très agressif au combat.']
  },
  annie: {
    name: 'Annie Leonhart',
    role: 'Titan Féminin.',
    details: ['Experte en combat.', 'Mission d’infiltration sur Paradis.']
  },
  bertholdt: {
    name: 'Bertholdt Hoover',
    role: 'Titan Colossal.',
    details: ['Très discret et calme.', 'Responsable de la destruction du mur Maria.']
  },
  pieck: {
    name: 'Pieck Finger',
    role: 'Titan Charrette.',
    details: ['Très intelligente.', 'Grande stratège de Marley.']
  },
  zeke: {
    name: 'Zeke Jäger',
    role: 'Titan Bestial.',
    details: ['Fils de Grisha Jäger.', 'Double jeu entre Marley et Eldia.', 'Possède le sang royal par sa mère.']
  },
  dina: {
    name: 'Dina Fritz',
    role: 'Descendante royale.',
    details: ['Mère de Zeke.', 'Transformée en Titan pur.']
  },
  tybur: {
    name: 'Famille Tybur',
    role: 'Famille noble liée à Marley.',
    details: ['Possède le Titan Marteau d’Armes.', 'Influence politique énorme sur Marley.']
  },
  magath: {
    name: 'Theo Magath',
    role: 'Commandant militaire de Marley.',
    details: ['Encadre les Guerriers.', 'Devient plus humain au fil de l’histoire.']
  }
};

const panelName = document.getElementById('panelName');
const panelRole = document.getElementById('panelRole');
const panelDetails = document.getElementById('panelDetails');

const persons = document.querySelectorAll('.person');

persons.forEach(person => {
  person.addEventListener('click', () => {
    const id = person.dataset.id;
    const character = data[id];

    panelName.textContent = character.name;
    panelRole.textContent = character.role;

    panelDetails.innerHTML = '';

    character.details.forEach(detail => {
      const li = document.createElement('li');
      li.textContent = detail;
      panelDetails.appendChild(li);
    });
  });
});

const filters = document.querySelectorAll('.filter');
const blocks = document.querySelectorAll('.family-block');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    blocks.forEach(block => {
      if(filter === 'all') {
        block.classList.remove('hidden');
      } else {
        const group = block.dataset.group;
        if(group.includes(filter) || filter === 'titan') {
          block.classList.remove('hidden');
        } else {
          block.classList.add('hidden');
        }
      }
    });

    if(filter === 'titan') {
      blocks.forEach(block => {
        const hasTitan = block.querySelector('.person.titan');
        block.classList.toggle('hidden', !hasTitan);
      });
    }
  });
});