window.onload = function(){
	var changeButton = document.getElementById('changeIcon');
	var inputPass = document.getElementById('passInput');
	changeButton.onclick = function(){
		if(inputPass.type == 'password'){
			inputPass.type = 'text';
		} else {
			inputPass.type = 'password';
		}
	};
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("myBtn");
	// var span = document.getElementsByClassName("close")[0];
	if(btn!=null){
		btn.onclick = function() {
		modal.style.display = "block";
		}
	}
	// span.onclick = function() {
	//     modal.style.display = "none";
	// }
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
};