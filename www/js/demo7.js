(function() {
	var container = document.querySelector( 'div.container' ),
		triggerBttn = document.getElementById( 'trigger-overlay' ),
		triggerBttnGrenade = document.getElementById( 'trigger-overlay-grenade' ),
		triggerBttnAmande = document.getElementById( 'trigger-overlay-amande' ),
		triggerBttnCoton = document.getElementById( 'trigger-overlay-coton' ),
		triggerBttnVideo = document.getElementById( 'trigger-overlay-video' ),

		overlay = document.querySelector( 'div.overlay' ),
		overlayPopup = document.querySelector( 'div.overlay-popup' ),
		overlayPopupAmande = document.querySelector( 'div.overlay-popup-amande' ),
		overlayPopupCoton = document.querySelector( 'div.overlay-popup-coton' ),
		overlayPopupVideo = document.querySelector( 'div.overlay-popup-video' ),

		closeBttn = overlay.querySelector( 'button.overlay-close' ),
		closeBttn1 = overlay.querySelector( '.clic.menu1' ),
		closeBttn2 = overlay.querySelector( '.clic.menu2' ),
		closeBttn3 = overlay.querySelector( '.clic.menu3' ),
		closeBttn4 = overlay.querySelector( '.clic.menu4' ),
		closeBttnPopup = overlayPopup.querySelector( 'button.overlay-close-popup' ),
		closeBttnPopupCoton = overlayPopupCoton.querySelector( 'button.overlay-close-popup-coton' ),
		closeBttnPopupAmande = overlayPopupAmande.querySelector( 'button.overlay-close-popup-amande' ),
		closeBttnPopupVideo = overlayPopupVideo.querySelector( 'button.overlay-close-popup-video' );

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
			classie.remove( container, 'menu' );
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

			$('#main-info').fadeOut("slow");
            $(".slide1 #graph02").css('bottom', '-100px');
            $(".slide1 #graph03").css('bottom', '-100px');
            $(".slide1 #graph04").css('left', '-850px');
            $(".slide1 #graph05").css('bottom', '-100px');
            $(".slide1 #graph06").removeClass('grande').addClass('petite');
            $(".slide1 #graph07").removeClass('grande').addClass('petite');
            $(".slide1 #graph08").css('bottom', '-100px');
            $(".slide1 #graph09").fadeOut("slow");
            $(".slide1 #graph10").css('bottom', '-100px');

            $('.slide2 #graph01').css('bottom', '-200px');
            $(".slide2 #graph02").fadeOut("slow");
            $(".slide2 #graph03").css('bottom', '-200px');
            $(".slide2 #graph04").fadeOut("slow");
            $(".slide2 #graph05").css('bottom', '-200px');
            $(".slide2 #graph06").fadeOut("slow");
            $('.slide2 #graph07').css('bottom', '-200px');
            $(".slide2 #graph08").fadeOut("slow");

            $('.slide3 #graph01').css('bottom', '-200px');
            $(".slide3 #graph02").css('bottom', '-200px');
            $(".slide3 #graph03").removeClass('grande').addClass('petite');
            $(".slide3 #graph04").fadeOut("slow");
            $(".slide3 #graph05").css('bottom', '-200px');
            $(".slide3 #graph06").removeClass('grande').addClass('petite');

            $('.slide4 #graph01').css('bottom', '-200px');
            $(".slide4 #graph02").css('bottom', '-200px');
            $(".slide4 #graph03").css('bottom', '-200px');
            $(".slide4 #graph04").css('bottom', '-200px');
            $(".slide4 #graph05").fadeOut("slow");
            $(".slide4 #graph06").css('bottom', '-200px');
            $(".slide4 #graph07").fadeOut("slow");

            $(".slide5 #graph04").css('bottom', '-200px');

            $(".slide9 #graph01").fadeOut("slow");

            $('#control-next').css('display','none');
            $('#control-prev').css('display','none');
            $('#control-prev').removeClass('blanc');
            $('#control-next').removeClass('blanc');
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( container, 'menu' );
			classie.add( overlay, 'open' );
			classie.add( container, 'overlay-open' );
			
		}
	}

	function toggleOverlayPopup() {
		if( classie.has( overlayPopup, 'open' ) ) {
			classie.remove( container, 'popup' );
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
			classie.add( container, 'popup' );
			classie.add( overlayPopup, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	function toggleOverlayPopupAmande() {
		if( classie.has( overlayPopupAmande, 'open' ) ) {
			classie.remove( container, 'popup' );
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
			classie.add( container, 'popup' );
			classie.add( overlayPopupAmande, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	function toggleOverlayPopupCoton() {
		if( classie.has( overlayPopupCoton, 'open' ) ) {
			classie.remove( container, 'popup' );
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
			classie.add( container, 'popup' );
			classie.add( overlayPopupCoton, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	function toggleOverlayPopupVideo() {
		if( classie.has( overlayPopupVideo, 'open' ) ) {
			classie.remove( container, 'popup' );
			classie.remove( overlayPopupVideo, 'open' );
			classie.remove( container, 'overlay-open' );
			classie.add( overlayPopupVideo, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlayPopupVideo, 'close' );
			};
			if( support.transitions ) {
				overlayPopupVideo.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlayPopupVideo, 'close' ) ) {
			classie.add( container, 'popup' );
			classie.add( overlayPopupVideo, 'open' );
			classie.add( container, 'overlay-open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );

	closeBttn1.addEventListener( 'click', toggleOverlay );
	closeBttn2.addEventListener( 'click', toggleOverlay );
	closeBttn3.addEventListener( 'click', toggleOverlay );
	closeBttn4.addEventListener( 'click', toggleOverlay );

	triggerBttnGrenade.addEventListener( 'click', toggleOverlayPopup );
	closeBttnPopup.addEventListener( 'click', toggleOverlayPopup );

	triggerBttnAmande.addEventListener( 'click', toggleOverlayPopupAmande );
	closeBttnPopupAmande.addEventListener( 'click', toggleOverlayPopupAmande );

	triggerBttnCoton.addEventListener( 'click', toggleOverlayPopupCoton );
	closeBttnPopupCoton.addEventListener( 'click', toggleOverlayPopupCoton );

	triggerBttnVideo.addEventListener( 'click', toggleOverlayPopupVideo );
	closeBttnPopupVideo.addEventListener( 'click', toggleOverlayPopupVideo );
})();