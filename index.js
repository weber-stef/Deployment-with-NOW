const express = require("express");
const app = express();
const convert = require("color-convert");
const fs = require("fs");
const port = 3000;
const router = express.Router();

// // jQuery -> $
// (function ($, undefined) {
//   $('.button')
// })(document.querySelectorAll)
//   // Mootools -> $
//   (function ($) {
//     $.mootools()
//   })(mootools)


//How my search-parameters get converted
const colorHandler = (req, res, colorCase) => {
  const myColor = req.query.color.split(",").map(channel => parseInt(channel));
  // const color = convert.rgb.colorCase(...myColor);
  const color = convert.rgb[colorCase](...myColor);
  const [hue, saturation, luminance] = color;
  console.log(`ROCK: ${color[hue]}`);

  const convertedChannels = res.json({ hue, saturation, luminance });
  console.log(`ROLL: ${color[hue]}`)
  console.log(`Cool cat, so you found out, what ${myColor} is becoming ${color.hue} , when being converted to ${colorCase}`);
  return convertedChannels;
};
app.use(function (req, res, next) {
  if (!req.query.color) {
    res.status(500).send("No color");
    console.log("Color parameter is missing")
  } else {
    console.log('color there');
    next();
  }
});
app.get("/convert/:colorConversionMode", function (req, res) {
  const { colorConversionMode } = req.params
  switch (colorConversionMode) {
    // in case I want to convert rgb to --- hsl
    case "hsl":
      colorHandler(req, res, 'hsl');
      break;

    default:
      res.status(400).json({ error: `Route ${colorConversionMode} is not supported.` })
      break;
  }
})







//////////////////////////

//////////////////////////////////////

// router.use('/1', function (req, res, next) {
//   console.log('Requested Route:', req.originalUrl, 'HTTP-Method used:', req.method);
//   next();
// }, function (req, res, next) {
//   res.send("1. task accomplished, as far as I can tell..");

// });

app.listen(port, () => console.log(`Example app listening on port ${port}`));
// mount the router on the app
// app.use('/', router);