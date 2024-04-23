let heure = new Date();
// Utilisation de la fonction toLocaleString() pour formater la date et l'heure
// La méthode toLocaleString() renvoie une chaîne de caractères représentant la date et/ou l'heure,
// en utilisant les paramètres de localisation spécifiés ('fr-FR' pour le français en France).

// Pour la date :
// - 'weekday: 'long'' : Renvoie le nom complet du jour de la semaine (par exemple "lundi").
// - 'day: 'numeric'' : Renvoie le jour du mois sous forme numérique (par exemple "22").
// - 'month: 'long'' : Renvoie le nom complet du mois (par exemple "avril").
// - 'year: 'numeric'' : Renvoie l'année sous forme numérique (par exemple "2024").
document.getElementById("date1").innerHTML = heure.toLocaleString('fr-FR',
	{
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

// Pour l'heure :
// - 'hour: 'numeric'' : Renvoie l'heure au format 24 heures
// - 'minute: 'numeric'' : Renvoie les minutes
document.getElementById("heure1").innerHTML = heure.toLocaleString('fr-FR',
	{
		hour: 'numeric',
		minute: 'numeric',
	});

console.log(heure);

// Événement pour changer la couleur de la date et de l'heure lorsqu'on clique dessus
document.getElementById("date_heure").addEventListener('click', toggleCouleurDate);

// Fonction pour changer la couleur de la date et de l'heure
function toggleCouleurDate() {
	let dateElement = document.getElementById("date1");
	let heureElement = document.getElementById("heure1");

	if (dateElement.style.color === "orange") {
		dateElement.style.color = "green";
		heureElement.style.color = "green";
	} else {
		dateElement.style.color = "orange";
		heureElement.style.color = "orange";
	}
}

// Fonction pour changer aléatoirement la couleur de la date et de l'heure
function couleurDateAleatoire() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let couleur = "rgb(" + r + "," + g + "," + b + ")";

	document.getElementById("date1").style.color = couleur;
	document.getElementById("heure1").style.color = couleur;
}
