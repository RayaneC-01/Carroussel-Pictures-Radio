let tab1 = document.querySelectorAll("h3");
let tab2 = document.querySelectorAll("h3");
let tab3 = document.querySelectorAll("h3");
let elemText;
for (i = 0; i < 9; i++) {
  tab1[i].addEventListener("click", choixMenu);
  tab2[i].addEventListener("mouseover", survolMenu);
  tab3[i].addEventListener("mouseout", survolMenu2);

  function choixMenu() {
    for (i = 0; i < 9; i++) {
      tab1[i].style.backgroundColor = "white";
      tab1[i].style.color = "black";
      this.style.backgroundColor = "#2f455b";
      this.style.color = "white";
    }
  }

  function survolMenu() {
    if (this.style.backgroundColor == "white") {
      this.style.backgroundColor = "rgb(180, 200, 220)";
      this.style.cursor = "pointer";
    }
  }

  function survolMenu2() {
    if (this.style.backgroundColor == "rgb(180, 200, 220)") {
      this.style.backgroundColor = "white";
      this.style.color = "black";
    }
  }
  function survolArticle() {
    this.style.boxShadow = "2px 2px 4px rgba(0,0,0,0.5)";
  }
}

// ----------- CREATION TABLEAU ---------------- ////
for (i = 0; i < 10; i++) {
  let newElementTr = document.createElement("tr");
  let elementTb = document.getElementById("tab_articles");
  elementTb.appendChild(newElementTr);

  for (j = 0; j < 5; j++) {
    let newElementTd = document.createElement("td");
    newElementTr.appendChild(newElementTd);
    newElementTd.addEventListener("mouseover", survolArticle); /*Ombre Boites */
    newElementTd.addEventListener("mouseout", survolArticle2);

    let newElementImg = document.createElement("img");
    newElementImg.src = "Images/article.png";
    newElementImg.id = "images" + i+j;
    newElementImg.alt = "Images Chocolat";
    newElementTd.appendChild(newElementImg);

    let TitreH2 = document.createElement("h2");
    TitreH2.className = "nom_art";
    TitreH2.innerHTML = "Nom de l'article";
    newElementTd.appendChild(TitreH2);
    TitreH2.style.color = "#2f455b";

    let paragrapheP = document.createElement("p");
    paragrapheP.className = "pr_art";
    paragrapheP.innerHTML = "Prix de l'article";
    newElementTd.appendChild(paragrapheP);

    let newDiv = document.createElement("div");
    newDiv.className = "slide";
    newElementTd.appendChild(newDiv);

    for (let k = 0; k < 4; k++) {
      let input = document.createElement("input"); //creation de l'element
      input.setAttribute("id", "radio" + i + k + j);
      input.setAttribute("name", "radio-btn");
      input.setAttribute("type", "radio");

      newDiv.appendChild(input);
    }

  }
}

/*Example: https://www.epaperpress.com/radio/index.html
https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/button
*/
let change = document.querySelectorAll('img');
let click = document.querySelectorAll('input');

document.addEventListener('click', clickImage);

// function clickImage() {
// if(click.value == this.getAttribute('src') =="Images/article.png"){
    
//   this.setAttribute('src',"Images/C.png");
// }
// else if(this.getAttribute('src') == "Images/C.png")
// {
//   this.setAttribute('src',"Images/C++.png");
// }
// }
function clickImage(){
  switch(document.test.field.value){
     case "one":
       document.querySelectorAll("slide").innerHTML = "<img src='Images/article.png'>";
       break;
     case "two":
        document.querySelectorAll("slide").innerHTML = "<img src='Images/C.png'>";
        break;
     case "three":
        document.querySelectorAll("slide").innerHTML = "<img src='Images/C++.png'>";
        break;
  }
}

for(let d=0;d<50;d++)
{
	change[d].addEventListener('click',changeImage);
}

function changeImage()
{
	

	if(this.getAttribute('src') == "Images/article.png")
	{
		this.setAttribute('src',"Images/C.png");
	}
	 else if(this.getAttribute('src') == "Images/C.png")
	 		{
	 			this.setAttribute('src',"Images/C++.png");
	 		}
	 		else if(this.getAttribute('src') == "Images/C++.png")
	 		{
	 			this.setAttribute('src',"Images/JavaLogo.png");
	 		}
	 		else if(this.getAttribute('src') == "Images/JavaLogo.png")
	 		{
	 			this.setAttribute('src',"Images/jsLogo.png");
	 		}
	 		else if(this.getAttribute('src') == "Images/jsLogo.png")
	 		{
	 			this.setAttribute('src',"Images/article.png");
	 		}
}


function survolArticle() {
  this.style.boxShadow = "2px 2px 4px rgba(0,0,0,0.5)";
}

function survolArticle2() {
  this.style.border = "solid black 1px";

  this.style.boxShadow = "none";
}

/**********Bouton ScrollTop**********/
ele2 = document.getElementById("img_top"); // survol du bouton retour top

ele2.addEventListener("mouseover", survolBouton);

ele2.addEventListener("mouseout", survolBouton2);

ele2.addEventListener("click", scrollSmooth);

document.addEventListener("scroll", retourTop);
document.addEventListener("click", retourTop2);

let y = window.scrollY;

function retourTop() {
  let scroll = document.getElementById("boutonHaut");

  if (window.scrollY > 200) {
    scroll.style.right = "60px";
    scroll.style.scrollBehavior = "smooth";
  } else {
    scroll.style.right = "-100px";
  }
}

function retourTop2() {
  let scroll = document.getElementById("boutonHaut");

  scroll.style.right = "-100px";
}

function survolBouton() {
  this.src = "Images/Arrow1.png";
}

function survolBouton2() {
  this.src = "Images/Arrow2.png";
}

function scrollSmooth() {
  document.documentElement.style.scrollBehavior = "smooth";
}

