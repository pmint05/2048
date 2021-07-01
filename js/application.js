// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
	new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
var infoBtn = document.querySelector("#info");
var closeBtn = document.querySelector("#close");

infoBtn.addEventListener("click", () => {
	$(".game-explanation").toggleClass("show");
});
closeBtn.addEventListener("click", () => {
	$(".game-explanation").removeClass("show");
});
jQuery(function($) {

	// MAD-RIPPLE // (jQ+CSS)
	$(document).on("mousedown", "[data-ripple]", function(e) {
	
	var $self = $(this);
	
	if($self.is(".btn-disabled")) {
		return;
	}
	if($self.closest("[data-ripple]")) {
		e.stopPropagation();
	}
	
	var initPos = $self.css("position"),
		offs = $self.offset(),
		x = e.pageX - offs.left,
		y = e.pageY - offs.top,
		dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
		$ripple = $('<div/>', {class : "ripple",appendTo : $self });
	
	if(!initPos || initPos==="static") {
		$self.css({position:"relative"});
	}
	
	$('<div/>', {
		class : "rippleWave",
		css : {
		background: $self.data("ripple"),
		width: dia,
		height: dia,
		left: x - (dia/2),
		top: y - (dia/2),
		},
		appendTo : $ripple,
		one : {
		animationend : function(){
			$ripple.remove();
		}
		}
	});
	});

});
$(document).ready(function() {
	$("html").on("contextmenu", function(e) {
		return false;
	});
});