var themeConverter = require("generator-code/generators/app/themeConverter");
var shell = require("shelljs");
var fs = require("fs");
var path = require("path");
var parseString = require('xml2js').parseString;

var cache = null;

shell.ls("./themes/*.tmTheme").forEach(function (file) {
    var theme = getTheme(file);
    resetColorCache();
    addActivitybarColors(theme);
    addBadgeColors(theme);
    addButtonColors(theme);
    addDebugToolbarColors(theme);
    addDiffColors(theme);
    addDropdownColors(theme);
    addGitColors(theme);
    addGroupColors(theme);
    addGutterColors(theme);
    addInputColors(theme);
    addListColors(theme);
    addNotificationColors(theme);
    addPanelColors(theme);
    addProgressColors(theme);
    addRulerColors(theme);
    addScrollbarColors(theme);
    addSelectionColors(theme);
    addSidebarColors(theme);
    addStatusbarColors(theme);
    addTabColors(theme);
    addTerminalColors(theme);
    addTitlebarColors(theme);
    addWidgetColors(theme);
    writeTheme(theme);
    writeDebug(theme);
});

function addActivitybarColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["activityBar.background"] = ansi.Black;
    theme.themeContent.colors["activityBar.border"] = ansi.BrightBlack;
    theme.themeContent.colors["activityBar.dropBackground"] = ansi.Black;
    theme.themeContent.colors["activityBar.foreground"] = ansi.White;
    theme.themeContent.colors["activityBarBadge.background"] = ansi.Blue;
    theme.themeContent.colors["activityBarBadge.foreground"] = ansi.Black;
}

function addBadgeColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["badge.background"] = ansi.Black;
    theme.themeContent.colors["badge.foreground"] = ansi.White;
}

function addButtonColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["button.background"] = ansi.Blue;
    theme.themeContent.colors["button.foreground"] = ansi.Black;
    theme.themeContent.colors["button.hoverBackground"] = ansi.White;
}

function addDebugToolbarColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["debugToolBar.background"] = ansi.Black;
}

function addDiffColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["diffEditor.insertedTextBorder"] = ansi.Green;
    theme.themeContent.colors["diffEditor.removedTextBorder"] = ansi.Red;
}

function addDropdownColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["dropdown.background"] = ansi.Black;
    theme.themeContent.colors["dropdown.border"] = ansi.BrightBlack;
    theme.themeContent.colors["dropdown.foreground"] = ansi.BrightBlack;
}

function addGitColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["gitDecoration.conflictingResourceForeground"] = ansi.Magenta;
    theme.themeContent.colors["gitDecoration.deletedResourceForeground"] = ansi.Red;
    theme.themeContent.colors["gitDecoration.ignoredResourceForeground"] = ansi.Blue;
    theme.themeContent.colors["gitDecoration.modifiedResourceForeground"] = ansi.Yellow;
    theme.themeContent.colors["gitDecoration.untrackedResourceForeground"] = ansi.Green;
}

function addGroupColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["editorGroup.background"] = ansi.Black;
    theme.themeContent.colors["editorGroup.border"] = ansi.BrightBlack;
    theme.themeContent.colors["editorGroup.dropBackground"] = ansi.Black;
    theme.themeContent.colors["editorGroupHeader.noTabsBackground"] = ansi.Black;
    theme.themeContent.colors["editorGroupHeader.tabsBackground"] = ansi.Black;
}

function addGutterColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["editorGutter.addedBackground"] = ansi.Green;
    theme.themeContent.colors["editorGutter.deletedBackground"] = ansi.Red;
    theme.themeContent.colors["editorGutter.modifiedBackground"] = ansi.Blue;
    theme.themeContent.colors["editorLineNumber.foreground"] = ansi.BrightBlack;
}

function addInputColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["input.background"] = ansi.Black;
    theme.themeContent.colors["input.border"] = ansi.BrightBlack;
    theme.themeContent.colors["input.foreground"] = ansi.White;
    theme.themeContent.colors["input.placeholderForeground"] = ansi.BrightBlack;
    theme.themeContent.colors["inputOption.activeBorder"] = ansi.BrightBlack;
    theme.themeContent.colors["inputValidation.errorBackground"] = ansi.Black;
    theme.themeContent.colors["inputValidation.errorBorder"] = ansi.Red;
    theme.themeContent.colors["inputValidation.infoBackground"] = ansi.Black;
    theme.themeContent.colors["inputValidation.infoBorder"] = ansi.Cyan;
    theme.themeContent.colors["inputValidation.warningBackground"] = ansi.Black;
    theme.themeContent.colors["inputValidation.warningBorder"] = ansi.Yellow;
}

function addListColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["list.activeSelectionBackground"] = ansi.BrightBlack;
    theme.themeContent.colors["list.activeSelectionForeground"] = ansi.BrightWhite;
    theme.themeContent.colors["list.dropBackground"] = ansi.BrightBlack;
    theme.themeContent.colors["list.focusBackground"] = ansi.BrightBlack;
    theme.themeContent.colors["list.focusForeground"] = ansi.White;
    theme.themeContent.colors["list.highlightForeground"] = ansi.Blue;
    theme.themeContent.colors["list.hoverBackground"] = ansi.BrightBlack;
    theme.themeContent.colors["list.hoverForeground"] = ansi.White;
    theme.themeContent.colors["list.inactiveFocusBackground"] = ansi.BrightBlack;
    theme.themeContent.colors["list.inactiveFocusForeground"] = ansi.BrightWHite;
    theme.themeContent.colors["list.inactiveSelectionBackground"] = ansi.BrightBlack;
    theme.themeContent.colors["list.inactiveSelectionForeground"] = ansi.White;
    theme.themeContent.colors["list.invalidItemForeground"] = ansi.Red;
}

function addNotificationColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["notification.background"] = ansi.BrightBlack;
    theme.themeContent.colors["notification.buttonBackground"] = ansi.Blue;
    theme.themeContent.colors["notification.buttonForeground"] = ansi.Black;
    theme.themeContent.colors["notification.buttonHoverBackground"] = ansi.Blue;
    theme.themeContent.colors["notification.errorBackground"] = ansi.Red;
    theme.themeContent.colors["notification.errorForeground"] = ansi.Black;
    theme.themeContent.colors["notification.foreground"] = ansi.BrightWhite;
    theme.themeContent.colors["notification.infoBackground"] = ansi.Cyan;
    theme.themeContent.colors["notification.infoForeground"] = ansi.Black;
    theme.themeContent.colors["notification.warningBackground"] = ansi.Yellow;
    theme.themeContent.colors["notification.warningForeground"] = ansi.Black;
}

function addPanelColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["panel.background"] = ansi.Black;
    theme.themeContent.colors["panel.border"] = ansi.BrightBlack;
    theme.themeContent.colors["panelTitle.activeBorder"] = ansi.BrightBlack;
    theme.themeContent.colors["panelTitle.activeForeground"] = ansi.BrightWhite;
    theme.themeContent.colors["panelTitle.inactiveForeground"] = ansi.White;
}

function addProgressColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["progressBar.background"] = ansi.BrightBlack;
}

function addRulerColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["editorIndentGuide.background"] = ansi.BrightBlack;
    theme.themeContent.colors["editorRuler.foreground"] = ansi.BrightBlack;
}

function addScrollbarColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["editorOverviewRuler.addedForeground"] = ansi.Green;
    theme.themeContent.colors["editorOverviewRuler.border"] = ansi.BrightBlack;
    theme.themeContent.colors["editorOverviewRuler.deletedForeground"] = ansi.Red;
    theme.themeContent.colors["editorOverviewRuler.errorForeground"] = ansi.Red;
    theme.themeContent.colors["editorOverviewRuler.findMatchForeground"] = ansi.Cyan;
    theme.themeContent.colors["editorOverviewRuler.infoForeground"] = ansi.Cyan;
    theme.themeContent.colors["editorOverviewRuler.modifiedForeground"] = ansi.Blue;
    theme.themeContent.colors["editorOverviewRuler.warningForeground"] = ansi.Yellow;
    theme.themeContent.colors["editorOverviewRuler.wordHighlightForeground"] = ansi.Magenta;
    theme.themeContent.colors["scrollbar.shadow"] = ansi.Black;
    theme.themeContent.colors["scrollbarSlider.activeBackground"] = ansi.BrightWhite;
    theme.themeContent.colors["scrollbarSlider.background"] = ansi.BrightBlack;
    theme.themeContent.colors["scrollbarSlider.hoverBackground"] = ansi.White;
}

function addSelectionColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["editor.selectionBackground"] = ansi.BrightBlack;
}

function addSidebarColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["sideBar.background"] = ansi.Black;
    theme.themeContent.colors["sideBar.border"] = ansi.BrightBlack;
    theme.themeContent.colors["sideBar.dropBackground"] = ansi.BrightBlack;
    theme.themeContent.colors["sideBar.foreground"] = ansi.White;
    theme.themeContent.colors["sideBarSectionHeader.background"] = ansi.Black;
    theme.themeContent.colors["sideBarSectionHeader.foreground"] = ansi.White;
    theme.themeContent.colors["sideBarTitle.foreground"] = ansi.White;
}

function addStatusbarColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["statusBar.background"] = ansi.Black;
    theme.themeContent.colors["statusBar.debuggingBackground"] = ansi.Yellow;
    theme.themeContent.colors["statusBar.debuggingForeground"] = ansi.Black;
    theme.themeContent.colors["statusBar.foreground"] = ansi.White;
    theme.themeContent.colors["statusBar.noFolderBackground"] = ansi.Magenta;
    theme.themeContent.colors["statusBar.noFolderForeground"] = ansi.Black;
}

function addTabColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["tab.activeBackground"] = ansi.Black;
    theme.themeContent.colors["tab.activeForeground"] = ansi.BrightWhite;
    theme.themeContent.colors["tab.border"] = ansi.BrightBlack;
    theme.themeContent.colors["tab.inactiveBackground"] = ansi.Black;
    theme.themeContent.colors["tab.inactiveForeground"] = ansi.BrightBlack;
    theme.themeContent.colors["tab.unfocusedActiveBorder"] = ansi.BrightBlack;
    theme.themeContent.colors["tab.unfocusedActiveForeground"] = ansi.BrightBlack;
    theme.themeContent.colors["tab.unfocusedInactiveForeground"] = ansi.BrightBlack;
}

function addTerminalColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["terminal.background"] = ansi.Black;
    theme.themeContent.colors["terminal.foreground"] = ansi.White;
    theme.themeContent.colors["terminal.ansiBlack"] = ansi.Black;
    theme.themeContent.colors["terminal.ansiRed"] = ansi.Red;
    theme.themeContent.colors["terminal.ansiGreen"] = ansi.Green;
    theme.themeContent.colors["terminal.ansiYellow"] = ansi.Yellow;
    theme.themeContent.colors["terminal.ansiBlue"] = ansi.Blue;
    theme.themeContent.colors["terminal.ansiMagenta"] = ansi.Magenta;
    theme.themeContent.colors["terminal.ansiCyan"] = ansi.Cyan;
    theme.themeContent.colors["terminal.ansiWhite"] = ansi.White;
    theme.themeContent.colors["terminal.ansiBrightBlack"] = ansi.BrightBlack;
    theme.themeContent.colors["terminal.ansiBrightRed"] = ansi.BrightRed;
    theme.themeContent.colors["terminal.ansiBrightGreen"] = ansi.BrightGreen;
    theme.themeContent.colors["terminal.ansiBrightYellow"] = ansi.BrightYellow;
    theme.themeContent.colors["terminal.ansiBrightBlue"] = ansi.BrightBlue;
    theme.themeContent.colors["terminal.ansiBrightMagenta"] = ansi.BrightMagenta;
    theme.themeContent.colors["terminal.ansiBrightCyan"] = ansi.BrightCyan;
    theme.themeContent.colors["terminal.ansiBrightWhite"] = ansi.BrightWhite;
    theme.themeContent.colors["terminalCursor.background"] = ansi.Black;
    theme.themeContent.colors["terminalCursor.foreground"] = ansi.White;
}

function addTitlebarColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["titleBar.activeBackground"] = ansi.Black;
    theme.themeContent.colors["titleBar.activeForeground"] = ansi.BrightBlack;
    theme.themeContent.colors["titleBar.border"] = ansi.Black;
    theme.themeContent.colors["titleBar.inactiveBackground"] = ansi.Black;
    theme.themeContent.colors["titleBar.inactiveForeground"] = ansi.Black;
}

function addWidgetColors(theme) {
    var ansi = getAnsiColors(theme);
    theme.themeContent.colors["editorError.foreground"] = ansi.Red;
    theme.themeContent.colors["editorWarning.foreground"] = ansi.Yellow;
    theme.themeContent.colors["editorWidget.background"] = ansi.Black;
    theme.themeContent.colors["editorWidget.border"] = ansi.BrightBlack;
    theme.themeContent.colors["focusBorder"] = ansi.BrightBlack;
    theme.themeContent.colors["pickerGroup.foreground"] = ansi.Yellow;
    theme.themeContent.colors["widget.shadow"] = ansi.Black;
}

function getAnsiColors(theme) {
    if (cache) {
        return cache;
    }
    var base = getBaseColors(theme);
    var ansi = {};
    ansi.Black = base["00"];
    ansi.Red = base["08"];
    ansi.Green = base["0B"];
    ansi.Yellow = base["0A"];
    ansi.Blue = base["0D"];
    ansi.Magenta = base["0E"];
    ansi.Cyan = base["0C"];
    ansi.White = base["05"];
    ansi.BrightBlack = base["03"];
    ansi.BrightRed = base["08"];
    ansi.BrightGreen = base["0B"];
    ansi.BrightYellow = base["0A"];
    ansi.BrightBlue = base["0D"];
    ansi.BrightMagenta = base["0E"];
    ansi.BrightCyan = base["0C"];
    ansi.BrightWhite = base["07"];
    cache = ansi;
    return ansi;
}

function getBaseColors(theme) {
    var base = {};
    var xml = parseXml(theme.tmThemeContent);
    base["00"] = xml.plist.dict[0].array[0].dict[0].dict[0].string[0];
    base["01"] = xml.plist.dict[0].dict[0].string[0];
    base["02"] = xml.plist.dict[0].dict[0].string[3];
    base["03"] = xml.plist.dict[0].dict[0].string[2];
    base["04"] = xml.plist.dict[0].dict[0].string[4];
    base["05"] = xml.plist.dict[0].array[0].dict[0].dict[0].string[1];
    base["06"] = "not used";
    base["07"] = xml.plist.dict[0].array[0].dict[10].dict[0].string[0];
    base["08"] = xml.plist.dict[0].array[0].dict[7].dict[0].string[0];
    base["09"] = xml.plist.dict[0].array[0].dict[15].dict[0].string[0];
    base["0A"] = xml.plist.dict[0].array[0].dict[9].dict[0].string[0];
    base["0B"] = xml.plist.dict[0].array[0].dict[14].dict[0].string[0];
    base["0C"] = xml.plist.dict[0].array[0].dict[13].dict[0].string[0];
    base["0D"] = xml.plist.dict[0].array[0].dict[8].dict[0].string[0];
    base["0E"] = xml.plist.dict[0].array[0].dict[6].dict[0].string[0];
    base["0F"] = xml.plist.dict[0].array[0].dict[43].dict[0].string[0];
    return base;
}

function getTheme(file) {
    var theme = {}
    themeConverter.convertTheme(file, theme, false);
    return theme;
}

function parseXml(xml) {
    var data
    parseString(xml, function(err, result) {
        if (err) {
            throw err;
        }
        data = result;
    });
    return data;
}

function resetColorCache() {
    cache = null;
}

function writeTheme(theme) {
    try {
        fs.mkdirSync("themes");
    } catch (e) { /* do nothing */ }
    var filename = path.join("themes", theme.themeName + "-color-theme.json");
    var content = JSON.stringify(theme.themeContent, null, 2) + "\n";
    fs.writeFileSync(filename, content);
}

function writeDebug(theme) {
    var filename = path.join("debug", "theme." + theme.themeName.replace(' ', '-') + ".json");
    var colors = JSON.stringify(theme.themeContent.colors, null, 2);
    var offset = 246;
    var content = colors.substr(offset, colors.length - offset - 2) + "\n";
    try {
        fs.mkdirSync("debug");
    } catch (e) { /* do nothing */ }
    fs.writeFileSync(filename, content);
}
