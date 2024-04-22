const slides = document.querySelectorAll('.carrousel-slides img');
const radioButtons = document.querySelectorAll('.carrousel-buttons input[type="radio"]');

// Création du Tableau
const elementTb = document.getElementById('tab_photos');
// Nombre de lignes et de colonnes
const numRows = 8;
const numCols = 4;

// Compteur pour les cellules de tableau
let cellCounter = 0;

let heightImg = 110;
let widthImg = 110;

// Boucles pour créer les lignes et les colonnes
for (let i = 0; i < numRows; i++) {
  // Crée une nouvelle ligne (<tr>)
  let newElementTr = document.createElement('tr');
  elementTb.appendChild(newElementTr);

  for (let j = 0; j < numCols; j++) {
    // Crée une nouvelle cellule (<td>)
    let newElementTd = document.createElement('td');
    newElementTr.appendChild(newElementTd);

    // Crée un élément <p> avec la classe "p1"
    let textBox = document.createElement('p');
    textBox.className = 'p1';
    textBox.textContent = 'Logo';
    textBox.style.color = '#2f455b';
    textBox.style.textAlign = 'center';
    textBox.style.fontFamily = 'Verdana';
    textBox.style.fontSize = '18px';
    newElementTd.appendChild(textBox);

    // Création du carrousel à partir du code HTML
    const carrouselContainer = document.createElement('div');
    carrouselContainer.classList.add('carrousel-container');

    const carrouselSlides = document.createElement('div');
    carrouselSlides.classList.add('carrousel-slides');

    const images = [
      'Images/C++.png',
      'Images/C.png',
      'Images/JavaLogo.png',
      'Images/jsLogo.png'
    ];

    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
	  img.height = heightImg;
	  img.width = widthImg;
	  img.alt = 'Texte alternatif pour votre image';
	  img.style.objectFit = 'cover';
      img.alt = `Image ${index + 1}`;
      carrouselSlides.appendChild(img);
    });

    const carrouselButtons = document.createElement('div');
    carrouselButtons.classList.add('carrousel-buttons');

    for (let k = 0; k < images.length; k++) {
      const radioButton = document.createElement('input');
      radioButton.setAttribute('type', 'radio');
	  newElementTd.style.textAlign = "center";
      radioButton.setAttribute('name', `slide_${cellCounter}`);
      radioButton.setAttribute('value', k.toString());
      radioButton.id = `radio_${cellCounter}_${k}`;
      carrouselButtons.appendChild(radioButton);

      const label = document.createElement('label');
      label.setAttribute('for', `radio_${cellCounter}_${k}`);
      carrouselButtons.appendChild(label);
	  /*label.style.width = '15px';
	label.style.height = '15px';
	label.style.backgroundColor = 'black';
	label.style.borderRadius = '50%';
	label.style.margin = '0 5px';
	label.style.cursor = 'pointer';
	*/
    }

    // Ajout du carrousel au document
    newElementTd.appendChild(carrouselContainer);
    carrouselContainer.appendChild(carrouselSlides);
    carrouselContainer.appendChild(carrouselButtons);

    // Incrémenter le compteur de cellules de tableau
    cellCounter++;
  }
}

// Écouteur d'événement pour les boutons radio
radioButtons.forEach((button) => {
  button.addEventListener('change', (event) => {
    const selectedValue = parseInt(event.target.value);
    showSlide(selectedValue);
  });
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

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
  toTop.addEventListener("click", scrollToTop);
  