setInterval(function() {
	var x = new XMLHttpRequest();
	x.open("GET", "comments", true);
	x.onload = function () {
		if (x.responseText.length == 0)
			comments.innerHTML = "Здесь никто не оставлял ссылок";
		else
			comments.innerHTML = x.responseText;
	}
	x.send(null);
}, 1000);