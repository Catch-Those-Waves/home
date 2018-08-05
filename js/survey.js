var init = function() {
	var box = document.querySelector('#survey').children[0],
		showPanelButtons = document.querySelectorAll('.show-buttons input'),
		panelClassName = 'show-front',
		
		onButtonClick = function ( event ){
			box.removeClassName( panelClassName );
			panelClassName = event.target.className;
			box.addClassName( panelClassName );
		};
		
	for (var i=0, len = showPanelButtons.length; i < len; i++ ){
		showPanelButtoms[i].addEventListener( 'click', onButtonClick, false);
	}
	formElement = doc.getElementById('question1');
	formElement.addEventListener('blur',partySizeResult,false);
	
	formElement = doc.getElementById('question1');
	formElement.addEventListener('change',partySizeResult,false);
}

window.addEventListener( 'DOMContentLoaded', init, false);

function partySizeChanged(e) {
	target = e.target;
	theValue = target.value;
	localStorage.setItem('partySize',partySizeResult);
}

function availabilityChanged(e){
	target = e.target;
	theValue = target.value;
	localStorage.setItem('availability',availabilityResult);
}