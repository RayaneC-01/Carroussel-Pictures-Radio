// JavaScript pour créer la table avec des images et des boutons radio
document.addEventListener('DOMContentLoaded', function () {
  // Création de la table
  let table = document.createElement('table');
  table.id = 'tab_photos';

  // Nombre de lignes et de colonnes
  let rows = 3; // Modifier le nombre de lignes
  let cols = 3; // Modifier le nombre de colonnes

  // Tableau des chemins d'accès des images
  let imagePaths = [
    'Images/C.png', 'Images/C++.png', 'Images/JavaLogo.png', 'Images/jsLogo.png'
  ];


  // Création des lignes et colonnes avec des images et des boutons radio
  for (let i = 0; i < rows; i++) {
    let row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      let cell = row.insertCell();
      cell.style.textAlign = "center"; // Centrer le contenu de la cellule
      // Ajouter les images dans la cellule
      let imagesContainer = document.createElement('div');
      imagesContainer.classList.add('images-container');
      for (let k = 0; k < 4; k++) {
        let imagePath = imagePaths[k];
        let img = document.createElement('img');
        img.src = imagePath;
        img.style.width = "100px"; // Modifier la largeur de l'image
        img.style.height = "100px"; // Modifier la hauteur de l'image
        img.style.objectFit = "cover"; // Utiliser object-fit: cover

        img.alt = "Logo of Programming langage";
        img.classList.add('photo');
        if (k !== 0) {
          img.style.display = 'none'; // Masquer toutes les images sauf la première
        }
        imagesContainer.appendChild(img);
      }
      cell.appendChild(imagesContainer);

      // Ajouter les boutons radio
      let div = document.createElement('div');
      div.classList.add('controls');
      for (let l = 0; l < 4; l++) {
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `image_${i}_${j}`;
        radio.value = l;
        if (l === 0) {
          radio.checked = true;
        }
        radio.addEventListener('change', function () {
          let selectedImageIndex = parseInt(this.value);
          let images = this.parentElement.parentElement.querySelector('.images-container').querySelectorAll('.photo');
          images.forEach((img, index) => {
            img.style.display = (index === selectedImageIndex) ? 'block' : 'none';
          });
        });
        div.appendChild(radio);
      }
      cell.appendChild(div);
    }
  }

  // Ajout de la table au corps du document
  document.body.appendChild(table);
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



