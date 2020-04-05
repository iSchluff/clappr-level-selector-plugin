(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["LevelSelector"] = factory(require("clappr"));
	else
		root["LevelSelector"] = factory(root["Clappr"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_clappr__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/ // css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports=function(useSourceMap){var list=[];// return the list of modules as css string\nlist.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return\"@media \".concat(item[2],\" {\").concat(content,\"}\");}return content;}).join('');};// import a list of modules into the list\n// eslint-disable-next-line func-names\nlist.i=function(modules,mediaQuery,dedupe){if(typeof modules==='string'){// eslint-disable-next-line no-param-reassign\nmodules=[[null,modules,'']];}var alreadyImportedModules={};if(dedupe){for(var i=0;i<this.length;i++){// eslint-disable-next-line prefer-destructuring\nvar id=this[i][0];if(id!=null){alreadyImportedModules[id]=true;}}}for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);if(dedupe&&alreadyImportedModules[item[0]]){// eslint-disable-next-line no-continue\ncontinue;}if(mediaQuery){if(!item[2]){item[2]=mediaQuery;}else{item[2]=\"\".concat(mediaQuery,\" and \").concat(item[2]);}}list.push(item);}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';// eslint-disable-next-line prefer-destructuring\nvar cssMapping=item[3];if(!cssMapping){return content;}if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return\"/*# sourceURL=\".concat(cssMapping.sourceRoot||'').concat(source,\" */\");});return[content].concat(sourceURLs).concat([sourceMapping]).join('\\n');}return[content].join('\\n');}// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap){// eslint-disable-next-line no-undef\nvar base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data=\"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);return\"/*# \".concat(data,\" */\");}\n\n//# sourceURL=webpack://LevelSelector/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LevelSelector; });\n/* harmony import */ var clappr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clappr */ \"clappr\");\n/* harmony import */ var clappr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clappr__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_level_selector_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/level-selector.html */ \"./src/public/level-selector.html\");\n/* harmony import */ var _public_level_selector_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_level_selector_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/style.scss */ \"./src/public/style.scss\");\n/* harmony import */ var _public_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_style_scss__WEBPACK_IMPORTED_MODULE_2__);\nconst AUTO=-1;class LevelSelector extends clappr__WEBPACK_IMPORTED_MODULE_0__[\"UICorePlugin\"]{static get version(){return VERSION;}get name(){return'level_selector';}get template(){return Object(clappr__WEBPACK_IMPORTED_MODULE_0__[\"template\"])(_public_level_selector_html__WEBPACK_IMPORTED_MODULE_1___default.a);}get attributes(){return{'class':this.name,'data-level-selector':''};}get events(){return{'click [data-level-selector-select]':'onLevelSelect','click [data-level-selector-button]':'onShowLevelSelectMenu'};}bindEvents(){this.listenTo(this.core,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].CORE_READY,this.bindPlaybackEvents);this.listenTo(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_CONTAINERCHANGED,this.reload);this.listenTo(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_RENDERED,this.render);this.listenTo(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_HIDE,this.hideSelectLevelMenu);}unBindEvents(){this.stopListening(this.core,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].CORE_READY);this.stopListening(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_CONTAINERCHANGED);this.stopListening(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_RENDERED);this.stopListening(this.core.mediaControl,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].MEDIACONTROL_HIDE);this.stopListening(this.core.getCurrentPlayback(),clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].PLAYBACK_LEVELS_AVAILABLE);this.stopListening(this.core.getCurrentPlayback(),clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].PLAYBACK_BITRATE);}bindPlaybackEvents(){var currentPlayback=this.core.getCurrentPlayback();this.listenTo(currentPlayback,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].PLAYBACK_LEVELS_AVAILABLE,this.fillLevels);this.listenTo(currentPlayback,clappr__WEBPACK_IMPORTED_MODULE_0__[\"Events\"].PLAYBACK_BITRATE,this.handleAdaptation);var playbackLevelsAvailableWasTriggered=currentPlayback.levels&&currentPlayback.levels.length>0;playbackLevelsAvailableWasTriggered&&this.fillLevels(currentPlayback.levels);}reload(){this.unBindEvents();this.bindEvents();this.bindPlaybackEvents();}shouldRender(){if(!this.core.getCurrentContainer())return false;var currentPlayback=this.core.getCurrentPlayback();if(!currentPlayback)return false;var respondsToCurrentLevel=currentPlayback.currentLevel!==undefined;// Only care if we have at least 2 to choose from\nvar hasLevels=!!(this.levels&&this.levels.length>1);return respondsToCurrentLevel&&hasLevels;}render(){if(this.shouldRender()){var style=clappr__WEBPACK_IMPORTED_MODULE_0__[\"Styler\"].getStyleFor(_public_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a,{baseUrl:this.core.options.baseUrl});this.$el.html(this.template({'levels':this.levels,'title':this.getTitle()}));this.$el.append(style);this.core.mediaControl.$('.media-control-right-panel').append(this.el);this.highlightCurrentLevel();}return this;}fillLevels(levels,initialLevel=AUTO){if(this.selectedLevelId===undefined)this.selectedLevelId=initialLevel;this.levels=levels;this.configureLevelsLabels();this.render();}configureLevelsLabels(){// set default labels\nthis.levels.forEach(level=>{level.label=`${level.height?level.height:level.level.height}p`;});if(this.core.options.levelSelectorConfig===undefined)return;var labelCallback=this.core.options.levelSelectorConfig.labelCallback;if(labelCallback&&typeof labelCallback!=='function')throw new TypeError('labelCallback must be a function');var hasLabels=this.core.options.levelSelectorConfig.labels;var labels=hasLabels?this.core.options.levelSelectorConfig.labels:{};if(labelCallback||hasLabels){var level,label;for(var levelId in this.levels){level=this.levels[levelId];label=labels[level.id];if(labelCallback){level.label=labelCallback(level,label);}else if(label){level.label=label;}}}}findLevelBy(id){var foundLevel;this.levels.forEach(level=>{if(level.id===id){foundLevel=level;}});return foundLevel;}onLevelSelect(event){this.selectedLevelId=parseInt(event.target.dataset.levelSelectorSelect,10);if(this.core.getCurrentPlayback().currentLevel==this.selectedLevelId)return false;this.core.getCurrentPlayback().currentLevel=this.selectedLevelId;this.toggleContextMenu();event.stopPropagation();return false;}onShowLevelSelectMenu(event){this.toggleContextMenu();}hideSelectLevelMenu(){this.$('.level_selector ul').hide();}toggleContextMenu(){this.$('.level_selector ul').toggle();}buttonElement(){return this.$('.level_selector button');}levelElement(id){return this.$('.level_selector ul a'+(!isNaN(id)?'[data-level-selector-select=\"'+id+'\"]':'')).parent();}getTitle(){return(this.core.options.levelSelectorConfig||{}).title;}updateText(level){if(level===AUTO){this.buttonElement().text(this.currentLevel?'AUTO ('+this.currentLevel.label+')':'AUTO');}else{this.buttonElement().text(this.findLevelBy(level).label);}}handleAdaptation(info){var level=this.findLevelBy(info.level);this.currentLevel=level?level:null;this.highlightCurrentLevel();}highlightCurrentLevel(){// update title text\nthis.updateText(this.selectedLevelId);// update current level\nthis.levelElement().removeClass('current');this.currentLevel&&this.levelElement(this.currentLevel.id).addClass('current');// hide levels with other languages\nvar currentLanguage=this.currentLevel&&this.currentLevel.language;if(currentLanguage){this.levelElement().removeClass('hidden');this.levels.forEach(level=>{if(level.language!=currentLanguage)this.levelElement(level.id).addClass('hidden');});}}}\n\n//# sourceURL=webpack://LevelSelector/./src/main.js?");

/***/ }),

/***/ "./src/public/level-selector.html":
/*!****************************************!*\
  !*** ./src/public/level-selector.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<button data-level-selector-button>\\n  Auto\\n</button>\\n<ul>\\n  <% if (title) { %>\\n  <li data-title><%= title %></li>\\n  <% }; %>\\n  <li><a href=\\\"#\\\" data-level-selector-select=\\\"-1\\\">AUTO</a></li>\\n  <% for (var i = 0; i < levels.length; i++) { %>\\n    <li><a href=\\\"#\\\" data-level-selector-select=\\\"<%= levels[i].id %>\\\"><%= levels[i].label %></a></li>\\n  <% }; %>\\n</ul>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://LevelSelector/./src/public/level-selector.html?");

/***/ }),

/***/ "./src/public/style.scss":
/*!*******************************!*\
  !*** ./src/public/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".level_selector[data-level-selector] {\\n  float: right;\\n  margin-top: 7px;\\n  position: relative; }\\n  .level_selector[data-level-selector] button {\\n    background-color: transparent;\\n    color: #fff;\\n    font-family: Roboto,\\\"Open Sans\\\",Arial,sans-serif;\\n    -webkit-font-smoothing: antialiased;\\n    border: none;\\n    font-size: 12px; }\\n    .level_selector[data-level-selector] button:hover {\\n      color: #c9c9c9; }\\n    .level_selector[data-level-selector] button.changing {\\n      -webkit-animation: pulse 0.5s infinite alternate; }\\n  .level_selector[data-level-selector] > ul {\\n    list-style-type: none;\\n    position: absolute;\\n    bottom: 25px;\\n    border: 1px solid black;\\n    display: none;\\n    background-color: #e6e6e6; }\\n  .level_selector[data-level-selector] li {\\n    font-size: 12px; }\\n    .level_selector[data-level-selector] li[data-title] {\\n      background-color: #c3c2c2;\\n      padding: 5px; }\\n    .level_selector[data-level-selector] li a {\\n      color: #444;\\n      padding: 2px 10px;\\n      display: block;\\n      text-decoration: none; }\\n      .level_selector[data-level-selector] li a:hover {\\n        background-color: #555;\\n        color: white; }\\n        .level_selector[data-level-selector] li a:hover a {\\n          color: white;\\n          text-decoration: none; }\\n    .level_selector[data-level-selector] li.current a {\\n      color: #f00; }\\n    .level_selector[data-level-selector] li.hidden {\\n      display: none; }\\n\\n@-webkit-keyframes pulse {\\n  0% {\\n    color: #fff; }\\n  50% {\\n    color: #ff0101; }\\n  100% {\\n    color: #B80000; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://LevelSelector/./src/public/style.scss?");

/***/ }),

/***/ "clappr":
/*!******************************************************************************************!*\
  !*** external {"amd":"clappr","commonjs":"clappr","commonjs2":"clappr","root":"Clappr"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_clappr__;\n\n//# sourceURL=webpack://LevelSelector/external_%7B%22amd%22:%22clappr%22,%22commonjs%22:%22clappr%22,%22commonjs2%22:%22clappr%22,%22root%22:%22Clappr%22%7D?");

/***/ })

/******/ })["default"];
});