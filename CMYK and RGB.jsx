var document = app.activeDocument;

document.documentColorSpace = DocumentColorSpace.RGB;

//~ var cmyk = new CMYKColor();
//~ cmyk.cyan = 80;
//~ cmyk.magenta = 50;
//~ cmyk.yellow = 0;
//~ cmyk.black = 0;

//~ document.defaultFillColor = cmyk;

var rgb = new RGBColor();
rgb.red = 255;
rgb.green = 255;
rgb.blue = 0;

document.defaultStrokeColor = rgb;