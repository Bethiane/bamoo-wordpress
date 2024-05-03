import { isInViewport } from '../helpers.js';

// global prespa_counter value
let prespa_counter = 0;
// helper for the stats animation
function animateValue( obj, start, beforeChars, end, afterChars, duration ) {
	let startTimestamp = null;
	const step = function( timestamp ) {
		if ( ! startTimestamp ) {
			startTimestamp = timestamp;
		}
		const progress = Math.min( ( timestamp - startTimestamp ) / duration, 1 );
		obj.innerHTML =
			beforeChars +
			Math.floor( progress * ( end - start ) + start ) +
			afterChars;
		if ( progress < 1 ) {
			window.requestAnimationFrame( step );
		}
	};
	window.requestAnimationFrame( step );
}

export function runStatsAnimation() {
	const objects = document.querySelectorAll(
		'.section-stats-counter .increase h2'
	);
	if ( prespa_counter > 0 ) {
		return;
	}
	for ( let i = 0; i < objects.length; i++ ) {
		const obj = objects[ i ];
		const objNumber = obj.textContent.replace( /\D/g, '' );
		const objBeforeChars = obj.textContent.match( /[^0-9]*/ );
		const objAfterChars = obj.textContent.match( /[^0-9]*$/ );
		const visible = isInViewport( obj );
		if ( visible ) {
			animateValue(
				obj,
				0,
				objBeforeChars,
				objNumber,
				objAfterChars,
				2250
			);
			prespa_counter++;
		}
	}
}

export function featuresDarkMode() {
	const darkModeButton = document.getElementsByClassName( 'dark-mode-widget' )[ 0 ];
	if ( ! darkModeButton ) {
		return;
	}
	const images = document.querySelectorAll( '.pattern-features img, .six-services img, .section-stats-counter img' );
	let isDark = localStorage.getItem( 'prespaNightMode' ) || false;

	if ( document.body.className.indexOf( 'dark-mode' ) > -1 ) {
		for ( let i = 0; i < images.length; i++ ) {
			images[ i ].src = images[ i ].src.replace( '.svg', '-dark-mode.svg' );
			images[ i ].srcset = '';
		}
	}

	darkModeButton.addEventListener( 'click', function() {
		isDark = ! isDark;
		if ( isDark ) {
			for ( let i = 0; i < images.length; i++ ) {
				images[ i ].src = images[ i ].src.replace( '.svg', '-dark-mode.svg' );
				images[ i ].srcset = '';
			}
		} else {
			for ( let i = 0; i < images.length; i++ ) {
				images[ i ].src = images[ i ].src.replace( '-dark-mode.svg', '.svg' );
				images[ i ].srcset = '';
			}
		}
	} );
}
