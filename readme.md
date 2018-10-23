[![Build Status](https://travis-ci.org/dy/flip-pixels.svg?branch=master)](https://travis-ci.org/dy/flip-pixels)

Flip pixels after `gl.readTexture`:

```js
var flip = require('flip-pixels')

var w = gl.drawingBufferWidth;
var h = gl.drawingBufferHeight
var pixels = new Uint8Array(w * h * 4);
gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

flip(pixels, w, h)
```

Based on [this question](https://stackoverflow.com/questions/41969562/how-can-i-flip-the-result-of-webglrenderingcontext-readpixels).

See also [clip-pixels](https://ghub.io/clip-pixels).
