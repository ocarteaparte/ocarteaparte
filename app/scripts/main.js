'use strict';
$(document).ready(function () {
	var facebookBookContainer = $(".facebook-container").find(".flip-book");
	function appendFacebookElement(el){
		if (el.message){
			$(facebookBookContainer).append("<div class='facebook-post bb-item'>"+
				"<div class='post-container'>"+
					"<div class='facebook-post-title'>"+ el.message +"</div>"+
					"<span class='facebook-post-date'>"+ el.created_time +"</span>"+
				"</div>"+
			"</div>");
		}
		if (el.story){
			$(facebookBookContainer).append("<div class='facebook-post bb-item'>"+
				"<div class='facebook-post-title'>"+ el.story +"</div>"+
				"<span class='facebook-post-date'>"+ el.created_time +"</span>"+
			"</div>");
		}
		//$('#bb-bookblock').bookblock();

		// $(".action-page.next").on("click", function(){
		// 	$("#bb-bookblock").bookblock("next");
		// 	console.log(this);
		// });
		// $(".action-page.prev").on("click", function(){
		// 	$("#bb-bookblock").bookblock("prev");
		// });
	};

	$.ajaxSetup({
		cache: true
	});
	$.getScript('//connect.facebook.net/en_US/sdk.js', function () {
		FB.init({
			appId: '1633003497010586',
			xfbml: true,
			version: 'v2.7'
		});
		FB.login(function(data){
			console.log(data);
			FB.api('/tineriidecid/posts', function(response){
				response.data.forEach(function(el){
					appendFacebookElement(el);
				});
				Page.init();
			});
		});


	});



	var human = $(".human");
	human.click(function () {
		$(this).addClass("first-step");
	});

});

var Page = (function() {
	var config = {
			$bookBlock : $( '#bb-bookblock' ),
			$navNext : $( '#bb-nav-next' ),
			$navPrev : $( '#bb-nav-prev' ),
			$navFirst : $( '#bb-nav-first' ),
			$navLast : $( '#bb-nav-last' )
		},
		init = function() {
			config.$bookBlock.bookblock( {
				speed : 800,
				shadowSides : 0.8,
				shadowFlip : 0.7
			} );
			initEvents();
			console.log(config.$navNext);
		},
		initEvents = function() {

			var $slides = config.$bookBlock.children();
			// add navigation events
			config.$navNext.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'next' );
				return false;
			} );

			config.$navPrev.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'prev' );
				return false;
			} );

			config.$navFirst.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'first' );
				return false;
			} );

			config.$navLast.on( 'click touchstart', function() {
				config.$bookBlock.bookblock( 'last' );
				return false;
			} );

			// add swipe events
			$slides.on( {
				'swipeleft' : function( event ) {
					config.$bookBlock.bookblock( 'next' );
					return false;
				},
				'swiperight' : function( event ) {
					config.$bookBlock.bookblock( 'prev' );
					return false;
				}
			} );

			// add keyboard events
			$( document ).keydown( function(e) {
				var keyCode = e.keyCode || e.which,
					arrow = {
						left : 37,
						up : 38,
						right : 39,
						down : 40
					};

				switch (keyCode) {
					case arrow.left:
						config.$bookBlock.bookblock( 'prev' );
						break;
					case arrow.right:
						config.$bookBlock.bookblock( 'next' );
						break;
				}
			} );
		};
		return { init : init };
})();
