import { animator, isInViewport } from './helpers.js';
import { runStatsAnimation } from './patterns/index.js';

// animate post archives
export function postLoopAnimation() {
	if (
		document.body.className.indexOf( 'single' ) > -1 ||
		document.body.className.indexOf( 'page ' ) > -1
	) {
		return;
	}
	const articles = document.getElementsByClassName( 'hentry' );
	animator( articles );
}

// for blog posts in viewport, run the animation on page load for better ui
export function articlesInViewport() {
	if (
		document.body.className.indexOf( 'single' ) > -1 ||
		document.body.className.indexOf( 'page ' ) > -1
	) {
		return;
	}
	const articles = document.getElementsByClassName( 'hentry' );
	for ( let i = 0; i < articles.length; i++ ) {
		if ( isInViewport( articles[ i ] ) ) {
			articles[ i ].className += ' animated';
		}
	}
}
// for block patterns in viewport, run the animation on page load for better ui
export function blocksInViewport() {
	const allElements = document.querySelectorAll(
		'[class^="p-animation"],[class*=" p-animation"]'
	);
	for ( let i = 0; i < allElements.length; i++ ) {
		if ( isInViewport( allElements[ i ] ) ) {
			allElements[ i ].className += ' animated';
		}
	}
	runStatsAnimation();
}

//animate the static homepage
export function blocksAnimation() {
	if ( document.body.className.indexOf( 'page' ) == -1 ) {
		return;
	}
	const allElements = document.querySelectorAll(
		'[class^="p-animation"],[class*=" p-animation"]'
	);
	animator( allElements, 60 ); // distance from top element. optional.
}

// typewrite animation

export function typingAnimation() {
	/**
	 * Wrap the animated text content in span tags
	 */
	if ( ! document.querySelector( '.p-typewrite-animation' ) ) {
		return;
	}
	const p = document.querySelectorAll( '.p-typewrite-animation' );

	for ( let i = 0; i < p.length; i++ ) {
		const pText = p[ i ].textContent;
		const span = document.createElement( 'span' );
		span.textContent = pText;
		p[ i ].textContent = ''; // Remove the existing text content of the p element
		p[ i ].appendChild( span ); // Append the span element to the p element

		/**
		 * Animate the span tag that we have just created
		 */
		const spanElement = p[ i ].querySelector( 'span' );
		const h = p[ i ].clientHeight;
		spanElement.innerText = '';
		p[ i ].style.visibility = 'visible';
		p[ i ].style.opacity = '1';
		p[ i ].style.height = h + 'px';
		const str = pText.split( '' );
		const el = p[ i ].querySelector( 'span' );
		let running = '';

		function animate() {
			// eslint-disable-next-line no-unused-expressions
			str.length > 0
				? ( el.innerHTML += str.shift() )
				: clearTimeout( running );
			running = setTimeout( animate, 45 );
		}

		setTimeout( animate, 900 );
	}
}
