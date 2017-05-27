var themeConverter = require('/usr/local/lib/node_modules/generator-code/generators/app/themeConverter');
var shell = require("shelljs");
var fs = require("fs");
var path = require("path");

var config = {}

shell.ls("./themes/*.tmTheme").forEach(function(file) {
    themeConverter.convertTheme(file, config, false)
    //console.log(JSON.stringify(config) + "\n")
    filename = path.join("themes", config.themeName + "-color-theme.json")
    fs.writeFileSync(filename, JSON.stringify(config.themeContent, null, 2))
    console.log(JSON.stringify({
        label: config.themeName,
        uiTheme: config.themeName.indexOf("Light") >= 0 ? "vs": "vs-dark",
        path: path.join(".", filename)
    }, null, 2) + ",\n")
})