

// get modal element
var modal = document.getElementById('simpleModal');
// get open modal button
var modalBtn = document.getElementById('modalBtn');
// get close btn
var closeBtn = document.getElementById('closeBtns');




// listen for open click
modalBtn.addEventListener('click', openModal);
// listen for close click
closeBtn.addEventListener('click', closeModal);
// liste for outside click
window.addEventListener('click', outSideClick);


// function to open modal
function openModal() {
	modal.style.display = 'block';
}
// function to open modal
function closeModal() {
	modal.style.display = 'none';
}

// function for outside click
function outSideClick(e) {
	if(e.target == modal){
		modal.style.display = 'none';
	}
}