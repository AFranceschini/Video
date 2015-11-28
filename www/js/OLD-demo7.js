(function() {
	var container = document.querySelector( 'div.container' ),
		//triggerBttn = document.getElementById( 'trigger-overlay' ),
		triggerBttnGrenade = document.getElementById( 'trigger-overlay-grenade' ),
		triggerBttnAmande = document.getElementById( 'trigger-overlay-amande' ),
		triggerBttnCoton = document.getElementById( 'trigger-overlay-coton' ),

		/*overlay = document.querySelector( 'div.overlay' ),*/
		overlayPopup = document.querySelector( 'div.overlay-popup' ),
		overlayPopupAmande = document.querySelector( 'div.overlay-popup-amande' ),
		overlayPopupCoton = document.querySelector( 'div.overlay-popup-coton' ),

		/*closeBttn = overlay.querySelector( 'button.overlay-close' ),
		closeBttn1 = overlay.querySelector( '.clic.menu1' ),
		closeBttn2 = overlay.querySelector( '.clic.menu2' ),
		closeBttn3 = overlay.querySelector( '.clic.menu3' ),
		closeBttn4 = overlay.querySelector( '.clic.menu4' ),*/

		closeBttnPopupCoton = overlayPopupCoton.querySelector( 'button.overlay-close-popup-coton' ),
		closeBttnPopupAmande = overlayPopupAmande.querySelector( 'button.overlay-close-popup-amande' ),
		closeBttnPopup = overlayPopup.querySelector( 'button.overlay-close-popup' );

		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.remove( container, 'overlay-open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	function toggleOverlayPopup() {
		if( classie.has( overlayPopup, 'open' ) ) {
			classie.remove( overlayPopup, 'open' );
			classie.remove( container, 'overlay-open' );
			classie.add( overlayPopup, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlayPopup, 'close' );
			};
			if( support.transitions ) {
				overlayPopup.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlayPopup, 'close' ) ) {
			classie.add( overlayPopup, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	function toggleOverlayPopupAmande() {
		if( classie.has( overlayPopupAmande, 'open' ) ) {
			classie.remove( overlayPopupAmande, 'open' );
			classie.remove( container, 'overlay-open' );
			classie.add( overlayPopupAmande, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlayPopupAmande, 'close' );
			};
			if( support.transitions ) {
				overlayPopupAmande.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlayPopupAmande, 'close' ) ) {
			classie.add( overlayPopupAmande, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	function toggleOverlayPopupCoton() {
		if( classie.has( overlayPopupCoton, 'open' ) ) {
			classie.remove( overlayPopupCoton, 'open' );
			classie.remove( container, 'overlay-open' );
			classie.add( overlayPopupCoton, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlayPopupCoton, 'close' );
			};
			if( support.transitions ) {
				overlayPopupCoton.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlayPopupCoton, 'close' ) ) {
			classie.add( overlayPopupCoton, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	/*triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );

	closeBttn1.addEventListener( 'click', toggleOverlay );
	closeBttn2.addEventListener( 'click', toggleOverlay );
	closeBttn3.addEventListener( 'click', toggleOverlay );
	closeBttn4.addEventListener( 'click', toggleOverlay );*/

	triggerBttnGrenade.addEventListener( 'click', toggleOverlayPopup );
	closeBttnPopup.addEventListener( 'click', toggleOverlayPopup );

	triggerBttnAmande.addEventListener( 'click', toggleOverlayPopupAmande );
	closeBttnPopupAmande.addEventListener( 'click', toggleOverlayPopupAmande );

	triggerBttnCoton.addEventListener( 'click', toggleOverlayPopupCoton );
	closeBttnPopupCoton.addEventListener( 'click', toggleOverlayPopupCoton );
})();