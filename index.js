'use strict'

module.exports = function flip (pixels, w, h, c) {
	// handle Arrays
	if (Array.isArray(pixels)) {
		var result = flip(new Float64Array(pixels), w, h, c)
		for (var i = 0; i < pixels.length; i++) {
			pixels[i] = result[i]
		}
		return pixels
	}

	if (!w || !h) throw Error('Bad dimensions')
	if (!c) c = pixels.length / (w * h)

	var h2 = h / 2 | 0;  // the | 0 keeps the result an int
	var row = w * c;
	var Ctor = pixels.constructor


	// make a temp buffer to hold one row
	var temp = new Ctor(w * c);
	for (var y = 0; y < h2; ++y) {
	  var topOffset = y * row;
	  var bottomOffset = (h - y - 1) * row;

	  // make copy of a row on the top half
	  temp.set(pixels.subarray(topOffset, topOffset + row));

	  // copy a row from the bottom half to the top
	  pixels.copyWithin(topOffset, bottomOffset, bottomOffset + row);

	  // copy the copy of the top half row to the bottom half
	  pixels.set(temp, bottomOffset);
	}

	return pixels
}
