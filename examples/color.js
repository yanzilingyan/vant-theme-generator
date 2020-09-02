const path = require("path");
const { generateTheme } = require("../../index");
const join = p => path.join(__dirname, p);

const options = {
  vantDir: join("./node_modules/vant"),
  stylesDir: join("./src/styles"),
  themeVarFile: join("./src/theme/default.less"),
  outputFilePath: join("./public/color.less"),
  themeVariables: [
    "@button-default-color",
    "@button-default-background-color",
    "@button-default-border-color",
    "@button-primary-color",
    "@button-primary-background-color",
    "@button-primary-border-color",
    "@button-info-color",
    "@button-info-background-color",
    "@button-info-border-color",
    "@button-danger-color",
    "@button-danger-background-color",
    "@button-danger-border-color",
    "@button-warning-color",
    "@button-warning-background-color",
    "@button-warning-border-color",
    "@button-plain-background-color"
  ],
  customColorRegexArray: [/^fade\(.*\)$/]
};

generateTheme(options)
  .then(() => {
    console.log("Theme generated successfully");
  })
  .catch(error => {
    console.log("Error", error);
  });
