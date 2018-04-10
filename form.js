 
 function validate()
 {
 	/*if (document.formul.prenom.value == "")  
 	{
 		alert("Merci de renseigner votre Prénom");
 		document.formul.prenom.focus();
 		return false;
 	}*/
 			


 
 		if (document.formul.name.value == "")  
 	{
 		alert("Merci de renseigner votre Nom");
 		document.formul.name.focus();
 		return false;
 	}
 		


 	/*	if (document.formul.genre.value == "")  
	{
 		alert("Merci de renseigner votre genre");
 		
 		return false;

 	}
 	*/
 		

 		if (document.formul.email.value == "")  
	{
 		alert("Merci de renseigner votre e-mail");
 		document.formul.email.focus();
 		return false;
 	}
 		

 		/*if (document.formul.age.value == "")  
	{
 		alert("Merci de renseigner votre âge");
 		document.formul.age.focus();
 		return false;
 	}*/

	/*if (document.formul.speci.value == "-1")  
	{
 		alert("Merci de renseigner votre spécificité");
 		document.formul.speci.focus();
 		return false;
 	}*/
 	
 	if (document.formul.message.value == "")  
	{
 		alert("Veuillez écrire un message");
 		document.formul.message.focus();
 		return false;
 	}

 	/*if (document.formul.outils.value == "")  
	{
 		alert("Merci de renseigner votre outil préféré");
 		
 		return false;
 	}*/
 		
 		return true;
 }
