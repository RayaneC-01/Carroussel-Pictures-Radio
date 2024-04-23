// Création du Tableau
const elementTb = document.getElementById('tab_photos');
const numRows = 4; // Nombre de lignes 
const numCols = 4; // Nombre de colonnes

// Compteur pour les cellules de tableau
let cellCounter = 0;

let heightImg = 90;
let widthImg = 90;

// Tableau des chemins des images
const imagePaths = [
  'Images/C++.png',
  'Images/C.png',
  'Images/JavaLogo.png',
  'Images/jsLogo.png'
];

// Boucles pour créer les lignes et les colonnes
for (let i = 0; i < numRows; i++) {
  // Crée une nouvelle ligne (<tr>)
  let newElementTr = document.createElement('tr');
  elementTb.appendChild(newElementTr);

  for (let j = 0; j < numCols; j++) {
    // Crée une nouvelle cellule (<td>)
    let newElementTd = document.createElement('td');
    newElementTd.style.textAlign = 'center'; // Centrer le contenu
    newElementTr.appendChild(newElementTd);

    // Crée un élément de carrousel contenant les images
    const carrouselContainer = document.createElement('div');
    carrouselContainer.classList.add('carrousel-container');

    const carrouselSlides = document.createElement('div');
    carrouselSlides.classList.add('carrousel-slides');
    carrouselSlides.style.display = 'flex'; // Affiche les images dans une ligne

    // Ajoute chaque image au carrousel
    imagePaths.forEach((path, index) => {
      const img = document.createElement('img');
      img.src = path;
      img.height = heightImg;
      img.width = widthImg;
      img.alt = `Image ${index + 1}`;
      img.style.margin = '0 auto'; // Centre l'image dans la cellule
      img.style.display = index === 0 ? 'block' : 'none'; // Affiche la première image, cache les autres
      carrouselSlides.appendChild(img);
    });

    // Crée un groupe de boutons radio
    const radioGroup = document.createElement('div');
    radioGroup.classList.add('carrousel-buttons');

    // Ajoute un bouton radio pour chaque image
    imagePaths.forEach((path, index) => {
      const radioBtn = document.createElement('input');
      radioBtn.type = 'radio';
      radioBtn.name = `carrousel-${cellCounter}`;
      radioBtn.value = index;
      radioGroup.appendChild(radioBtn);
    });

    // Ajoute le carrousel et les boutons radio à la cellule du tableau
    newElementTd.appendChild(carrouselContainer);
    carrouselContainer.appendChild(carrouselSlides);
    carrouselContainer.appendChild(radioGroup);

    // Incrémente le compteur de cellules de tableau
    cellCounter++;
  }
}

// Sélectionne toutes les images du carrousel
const slides = document.querySelectorAll('.carrousel-slides img');
// Sélectionne tous les boutons radio du carrousel
const radioButtons = document.querySelectorAll('.carrousel-buttons input[type="radio"]');

// Ajoute un écouteur d'événements à chaque bouton radio
radioButtons.forEach((button, index) => {
  button.addEventListener('change', () => {
    // Cache toutes les images
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    // Affiche l'image correspondante dans toutes les cellules
    slides[index].style.display = 'block';
  });
});



/**********Bouton ScrollTop**********/
const toTop = document.querySelector(".to-top");

function handleScroll() {
  if (window.scrollY > 160) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", handleScroll);
toTop.addEventListener("click", scrollToTop); // Fait défiler vers le haut lorsqu'on clique sur le bouton
