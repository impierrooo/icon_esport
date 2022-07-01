function clear_news(){
	document.getElementById("sidebar_bottom_input").value = "";
}

function lien_écran(){
	document.getElementById("box_fond_écran_lien1").style.borderColor = "#FF0000";
	document.getElementById("box_fond_écran_lien2").style.fill = "#FF0000";
}

function lien_écran2(){
	document.getElementById("box_fond_écran_lien1").style.borderColor = "#000000";
	document.getElementById("box_fond_écran_lien2").style.fill = "#000000";
}

function boutique_hover(identifiant){
	if (identifiant.id == "box_boutique_box1"){
		document.getElementById("box_boutique_image1").style.borderColor = "#000000";
	} else if (identifiant.id == "box_boutique_box2"){
		document.getElementById("box_boutique_image2").style.borderColor = "#000000";
	} else if (identifiant.id == "box_boutique_box3"){
		document.getElementById("box_boutique_image3").style.borderColor = "#000000";
	} else if (identifiant.id == "box_boutique_box4"){
		document.getElementById("box_boutique_image4").style.borderColor = "#000000";
	} else if (identifiant.id == "box_boutique_box5"){
		document.getElementById("box_boutique_image5").style.borderColor = "#000000";
	} else if (identifiant.id == "box_boutique_box6"){
		document.getElementById("box_boutique_image6").style.borderColor = "#000000";
	} else{
		document.getElementById("box_boutique_image7").style.borderColor = "#000000";
	}
}

function boutique_unhover(identifiant){
	if (identifiant.id == "box_boutique_box1"){
		document.getElementById("box_boutique_image1").style.borderColor = "#FFFFFF";
	} else if (identifiant.id == "box_boutique_box2"){
		document.getElementById("box_boutique_image2").style.borderColor = "#FFFFFF";
	} else if (identifiant.id == "box_boutique_box3"){
		document.getElementById("box_boutique_image3").style.borderColor = "#FFFFFF";
	} else if (identifiant.id == "box_boutique_box4"){
		document.getElementById("box_boutique_image4").style.borderColor = "#FFFFFF";
	} else if (identifiant.id == "box_boutique_box5"){
		document.getElementById("box_boutique_image5").style.borderColor = "#FFFFFF";
	} else if (identifiant.id == "box_boutique_box6"){
		document.getElementById("box_boutique_image6").style.borderColor = "#FFFFFF";
	} else{
		document.getElementById("box_boutique_image7").style.borderColor = "#FFFFFF";
	}
}

function Formulaire(){
	document.getElementById("nom").value = "";
	document.getElementById("email").value = "";
	document.getElementById("message").value = "";
}

function Equipe1(){
	document.getElementById("box_equipe_texte1").style.borderColor = "#FF0000";
	document.getElementById("box_equipe_texte2").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte3").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte4").style.borderColor = "#FFFFFF";

	document.getElementById("box_equipe_logo").style.fill = "#FF0000";
	document.getElementById("box_equipe_logo1").style.fill = "#000000";
	document.getElementById("box_equipe_logo2").style.fill = "#000000";
	document.getElementById("box_equipe_logo3").style.fill = "#000000";

	document.getElementById("box_equipe1").style.display = "flex";
	document.getElementById("box_equipe2").style.display = "none";
	document.getElementById("box_equipe3").style.display = "none";
	document.getElementById("box_equipe4").style.display = "none";
}

function Equipe2(){
	document.getElementById("box_equipe_texte1").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte2").style.borderColor = "#FF0000";
	document.getElementById("box_equipe_texte3").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte4").style.borderColor = "#FFFFFF";

	document.getElementById("box_equipe_logo").style.fill = "#000000";
	document.getElementById("box_equipe_logo1").style.fill = "#FF0000";
	document.getElementById("box_equipe_logo2").style.fill = "#000000";
	document.getElementById("box_equipe_logo3").style.fill = "#000000";

	document.getElementById("box_equipe1").style.display = "none";
	document.getElementById("box_equipe2").style.display = "flex";
	document.getElementById("box_equipe3").style.display = "none";
	document.getElementById("box_equipe4").style.display = "none";
}

function Equipe3(){
	document.getElementById("box_equipe_texte1").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte2").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte3").style.borderColor = "#FF0000";
	document.getElementById("box_equipe_texte4").style.borderColor = "#FFFFFF";

	document.getElementById("box_equipe_logo").style.fill = "#000000";
	document.getElementById("box_equipe_logo1").style.fill = "#000000";
	document.getElementById("box_equipe_logo2").style.fill = "#FF0000";
	document.getElementById("box_equipe_logo3").style.fill = "#000000";

	document.getElementById("box_equipe1").style.display = "none";
	document.getElementById("box_equipe2").style.display = "none";
	document.getElementById("box_equipe3").style.display = "flex";
	document.getElementById("box_equipe4").style.display = "none";
}

function Equipe4(){
	document.getElementById("box_equipe_texte1").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte2").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte3").style.borderColor = "#FFFFFF";
	document.getElementById("box_equipe_texte4").style.borderColor = "#FF0000";

	document.getElementById("box_equipe_logo").style.fill = "#000000";
	document.getElementById("box_equipe_logo1").style.fill = "#000000";
	document.getElementById("box_equipe_logo2").style.fill = "#000000";
	document.getElementById("box_equipe_logo3").style.fill = "#FF0000";

	document.getElementById("box_equipe1").style.display = "none";
	document.getElementById("box_equipe2").style.display = "none";
	document.getElementById("box_equipe3").style.display = "none";
	document.getElementById("box_equipe4").style.display = "flex";
}