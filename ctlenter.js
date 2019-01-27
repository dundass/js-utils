var ctlenter = ctlenter || {};

(function(ctl) {
	
	var ctrlPressed = false,
		enterPressed = false;
	
	ctl.keydown = function(keyCode) {
			if(keyCode === 17) ctrlPressed = true;
			else if(keyCode === 13) enterPressed = true;
		};
	ctl.keyup = function(keyCode) {
			if(keyCode === 17) ctrlPressed = false;
			else if(keyCode === 13) enterPressed = false;
		};
	ctl.isPressed = function() {
			return ctrlPressed && enterPressed;
		};
	
})(ctlenter);