const express = require("express");
const app = express();
const convert = require("color-convert");
const fs = require("fs");
const port = 3000;
//How my search-parameters get converted
const colorHandler = (req, res, convertFrom, convertTo) => {
  const myColor = req.query.color.split(",").map(channel => parseInt(channel));
  // const color = convert.convertFrom.convertTo(...myColor);
  const color = convert[convertFrom][convertTo](...myColor);
  console.log(convertTo);
  let convertedChannels;
  let myConversionTo;
  // empty variable defined, which later on can be filled  with different entries from my if-cases
  if (convertTo === "hsl") {
    const [hue, saturation, luminance] = color;
    convertedChannels = res.json({ hue, saturation, luminance });
  }
  else if (convertTo === "hex") {
    convertedChannels = res.json({ hex: color });
    const myConversionTo = color;
    console.log(`So you found out,that ${convertFrom} ${myColor} is becoming ${myConversionTo} , when being converted to ${convertTo}`);
  }
  else if (convertTo === "rgb") {
    const [red, green, blue] = color;
    convertedChannels = res.json({ red, green, blue });
    const myConversionTo = { red, green, blue };
  }
  else {
    convertedChannels = res.json({ error: { message: "This conversion is not allowed." } });
  }

  return convertedChannels;
};

app.use(function (req, res, next) {
  // see also "javascript - falesy values" (!req.query.color) is noot working here, because NULL, FALSE and undefined and 0 would all be false values
  if ("color" in req.query) {
    next();
  }
  else {
    console.log('no color present in your query');
    return res.status(400).send("Please add the color-parameter to your query");
  }

});
app.get("/convert/:colorConversionMode", function (req, res) {
  const { colorConversionMode } = req.params
  switch (colorConversionMode) {
    // - convert rgb to hsl
    case "rgb-hsl":
      colorHandler(req, res, 'rgb', 'hsl');
      break;
    // convert rgb to hex
    case "rgb-hex":
      colorHandler(req, res, 'rgb', 'hex');
      break;
    // - convert hex to rgb
    case "hex-rgb":
      colorHandler(req, res, 'hex', 'rgb');
      break;
    default:
      res.status(400).json({ error: `Route ${colorConversionMode} is not supported.` })
      break;
  }

})

app.listen(port, () => console.log(`Example app listening on port ${port}`));
