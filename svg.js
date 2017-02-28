clear = document.getElementById("clear");
svg = document.getElementById("vimage");

var clearScreen = function() {
	while (svg.hasChildNodes()) {
		svg.removeChild(svg.lastChild);
	}
}

var circ = function(e) {
	var x1;
	var y1;

	if (svg.hasChildNodes()) {
		var last = svg.lastChild;
		x1 = last.getAttribute("cx");
		y1 = last.getAttribute("cy");
		var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
		l.setAttribute("x1", x1.toString() );
		l.setAttribute("y1", y1.toString() );
		l.setAttribute("x2", e.offsetX.toString());
		l.setAttribute("y2", e.offsetY);
		l.setAttribute("stroke-width", "2");
		l.setAttribute("stroke", "black");
		svg.appendChild(l);

		var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		c.setAttribute("cx", x1);
		c.setAttribute("cy", y1);
		c.setAttribute("r", "20");
		c.setAttribute("fill", "aliceblue");
		c.setAttribute("stroke", "black");
		svg.appendChild(c);

	} else {
		x1 = Math.random() * svg.width;
		y1 = Math.random() * svg.height;
	}

	var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
	t.setAttribute("x", e.offsetX+20);
	t.setAttribute("y", e.offsetY);
	t.setAttribute("fill", "red");
	t.innerHTML = svg.childNodes.length/4;
	svg.appendChild(t);

	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", e.offsetX);
	c.setAttribute("cy", e.offsetY);
	c.setAttribute("r", "20");
	c.setAttribute("fill", "aliceblue");
	c.setAttribute("stroke", "black");
	svg.appendChild(c);
}

clearScreen();
svg.addEventListener('click', circ);
clear.addEventListener('click', clearScreen);