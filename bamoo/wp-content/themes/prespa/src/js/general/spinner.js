// Site preloader
function preloader() {
	// eslint-disable-next-line no-shadow
	const spinner = document.getElementsByClassName( 'preloader' )[ 0 ];
	if ( ! spinner ) {
		return;
	}
	if ( spinner.length ) {
		spinner.style.animation = 'none';
	}
	spinner.style.opacity = 0;
	setTimeout( function() {
		spinner.remove();
	}, 50 );
}

export function spinner() {
	window.addEventListener( 'load', preloader );
}
