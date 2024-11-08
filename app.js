console.log('Welcome to my portfolio!');

const darkmodeButton = document.getElementById('mode');
console.log(darkmodeButton);

darkmodeButton.addEventListener('click', () => {
	document.body.classList.toggle('darkmode');
});