function darkMode(){
	document.getElementById('cuerpo');
	document.getElementById('darkModeButton');
	document.getElementById('lightModeButton');
	document.getElementById('cabecera');
	document.getElementById('pie');
	document.getElementById('lightLogo');
	document.getElementById('darkLogo');
	document.getElementById('blackText');
	document.getElementById('blackText2');
	document.getElementById('blackText3');
	document.getElementById('firstSection');
	document.getElementById('secondSection');
	document.getElementById('tirdSection');

	/* Intercambiar entre otorgar y quitar una clase*/

	cuerpo.classList.toggle('darkModeBody');
	cabecera.classList.toggle('darkModePart');
	pie.classList.toggle('darkModePart');
	blackText.classList.toggle('black-text');
	blackText2.classList.toggle('black-text');
	blackText3.classList.toggle('black-text');
	firstSection.classList.toggle('darkModeSection');
	secondSection.classList.toggle('darkModeSection');
	tirdSection.classList.toggle('darkModeSection');



	/* Que hacer al activar el modo oscuro*/


	if (darkModeButton.classList.contains('show')) {
		darkModeButton.classList.remove('show');
		darkModeButton.classList.add('hide');
		lightModeButton.classList.remove('hide');
		lightModeButton.classList.add('show');

		darkLogo.classList.add('hide');
		darkLogo.classList.remove('show');
		lightLogo.classList.remove('hide');
		lightLogo.classList.add('show');


	/* Que hacer al desactivar el modo oscuro*/

	}else{
		darkModeButton.classList.remove('hide');
		darkModeButton.classList.add('show');
		lightModeButton.classList.remove('show');
		lightModeButton.classList.add('hide');

		darkLogo.classList.add('show');
		darkLogo.classList.remove('hide');
		lightLogo.classList.remove('show');
		lightLogo.classList.add('hide');
	}
}