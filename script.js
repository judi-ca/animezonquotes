// Liste des animes
const animes = [
  "Naruto",
  "Naruto Shippuden",
  "One Piece",
  "Bleach",
  "Dragon Ball Z",
  "Dragon Ball Super",
  "Attack on Titan",
  "Fullmetal Alchemist: Brotherhood",
  "Hunter x Hunter",
  "Death Note",
  "Code Geass",
  "Jujutsu Kaisen",
  "Demon Slayer",
  "My Hero Academia",
  "Black Clover",
  "Tokyo Ghoul",
  "Blue Lock",
  "Haikyuu!!",
  "Chainsaw Man",
  "Fairy Tail",
  "Edens Zero",
  "Boruto",
  "Steins;Gate",
  "Neon Genesis Evangelion",
  "One Punch Man",
  "Mob Psycho 100",
  "The Seven Deadly Sins",
  "Re:Zero",
  "Sword Art Online",
  "No Game No Life",
  "Akame ga Kill",
  "Parasyte",
  "Erased",
  "Your Lie in April",
  "Clannad",
  "Toradora!",
  "Violet Evergarden",
  "Horimiya",
  "Kaguya-sama: Love is War",
  "Fruits Basket",
  "Made in Abyss",
  "Overlord",
  "Konosuba",
  "Jobless Reincarnation",
  "Akira",
  "Psycho-Pass",
  "Great Teacher Onizuka",
  "Assassination Classroom",
  "Kill la Kill",
  "Gurren Lagann",
  "Samurai Champloo",
  "Cowboy Bebop",
  "Trigun",
  "Black Lagoon",
  "Durarara!!",
  "Anohana",
  "Angel Beats!",
  "Monster",
  "Berserk",
  "Inuyasha",
  "Yu Yu Hakusho",
  "Shaman King",
  "Soul Eater",
  "Noragami",
  "Gintama",
  "Dr. Stone",
  "The Promised Neverland",
  "Elfen Lied",
  "Hellsing Ultimate",
  "Highschool of the Dead",
  "Ouran High School Host Club",
  "Lovely★Complex",
  "Nisekoi",
  "Kaichou wa Maid-sama",
  "Golden Time",
  "Bloom Into You",
  "March Comes in Like a Lion",
  "Barakamon",
  "Usagi Drop",
  "Ergo Proxy",
  "Texhnolyze",
  "Paranoia Agent",
  "Your Name",
  "Weathering With You",
  "Spy x Family",
  "Blue Period",
  "Tokyo Revengers",
  "Dr. Stone: Stone Wars",
  "Mushoku Tensei"
];

// Fonction pour afficher un anime au hasard
const button = document.getElementById('btn');
const menu = document.getElementById('menu');

function random_animes() {
    const index = Math.floor(Math.random() * animes.length);
    menu.innerText = animes[index];
}

// ✅ Ici on met la fonction, pas "index"
button.addEventListener('click', random_animes);


// ====== Recherche des citations/animes ======
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById('search'); // ton input de recherche
  const cards = document.querySelectorAll('.quotes-card .card'); // toutes les cartes
  const propos = document.querySelector('.propos'); // ton formulaire en bas
  let messageAucun = null;

  if (!searchInput) return; // si l'input n'existe pas

  searchInput.addEventListener('keyup', function() {
    const filtre = searchInput.value.toLowerCase();
    let premierTrouve = null;
    let aucuneTrouvee = true;

    cards.forEach(card => {
      const citation = card.querySelector('.citation').textContent.toLowerCase();
      const auteur = card.querySelector('.auteur').textContent.toLowerCase();

      if (citation.includes(filtre) || auteur.includes(filtre)) {
        card.style.display = '';
        aucuneTrouvee = false;
        if (!premierTrouve) premierTrouve = card;
      } else {
        card.style.display = 'none';
      }
    });

    // Scroll vers la première carte trouvée
    if (premierTrouve) {
      premierTrouve.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Afficher le message si aucune carte ne correspond
    if (aucuneTrouvee) {
      if (!messageAucun) {
        messageAucun = document.createElement('div');
        messageAucun.classList.add('aucune-trouvee');
        messageAucun.innerHTML = `
          <p>Aucune citation trouvée ! Tu peux la proposer ci-dessous :</p>
        `;
        propos.prepend(messageAucun);
      }
    } else {
      // Supprime le message si une carte correspond maintenant
      if (messageAucun) {
        messageAucun.remove();
        messageAucun = null;
      }
    }
  });
});