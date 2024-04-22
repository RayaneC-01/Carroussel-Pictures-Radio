let i, liste_noeuds, heure, r, g, b, couleur;

document.getElementById("date_heure").addEventListener('click', couleurDate);


// ----------- DATE ET HEURE ----------------

heure = new Date();
document.getElementById("date1").innerHTML = heure.toLocaleString('fr-FR',
	{ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
document.getElementById("heure1").innerHTML = heure.toLocaleString('fr-FR',
	{ hour: 'numeric', minute: 'numeric' });


// ----------- EVENEMENTS ----------------



function couleurDate() {
	if (document.getElementById("date1").style['color'] == "orange") {
		document.getElementById("date1").style['color'] = "green";
		document.getElementById("heure1").style['color'] = "green";
	}
	else {
		document.getElementById("date1").style['color'] = "orange";
		document.getElementById("heure1").style['color'] = "orange";
	}
}

function couleurDate2() {
	r = Math.floor(Math.random() * 255);
	g = Math.floor(Math.random() * 255);
	b = Math.floor(Math.random() * 255);
	couleur = "rgb(" + r + "," + g + "," + b + ")";
	document.getElementById("date1").style['color'] = couleur;
	document.getElementById("heure1").style['color'] = couleur;
}


/*
liste_noeuds = document.querySelectorAll("td");
for (i=0; i < liste_noeuds.length; i++) {
	liste_noeuds[i].addEventListener('mouseover', survolArticles);
	liste_noeuds[i].addEventListener('mouseout', survolArticles2);
}*/
/*
function survolArticles() {
	this.style.boxShadow = "2px 2px 4px rgba(0,0,0,0.5)";
}

function survolArticles2() {
	this.style.boxShadow = "none";
}*/