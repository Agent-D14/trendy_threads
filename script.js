var closePopup = document.getElementById("popupclose");
    var closePopup2 = document.getElementById("popupclose2");
	var popup = document.getElementById("popup");
	var button = document.getElementById("button");
    var button2 = document.getElementById("signin-btn");
	// Close Popup Event
	closePopup.onclick = function() {
	  popup.style.display = 'none';
      popup2.style.display = 'none';
	};
    closePopup2.onclick = function() {
	  popup.style.display = 'none';
      popup2.style.display = 'none';
	};
	// Show Overlay and Popup
	button.onclick = function() {
	  popup.style.display = 'block';
	}
    button2.onclick = function(){
        popup2.style.display = 'block';
    }