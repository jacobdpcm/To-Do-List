/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
    font-family: Roboto, sans-serif;
    color: black;
    overflow-y: auto;
    overflow-x: auto;

    display: grid;
    grid-template-columns: 20rem 1fr;
}

form h1{
    margin-top: 0;
    text-align: center;
}

.overlay,
.overlayProject{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(3, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
}

form{
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

form>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/*The different input boxes don't have the same height unless I set it like this for some reason*/
input {
    width: 136px;
    height: 22px;
}
input[type='date']{
    width: 139px;
    height: 24px;
}
select {
    width: 144px;
    height: 28px;
}

.overlayButtons{
    display: flex;
    justify-content: space-between;
}

.hidden{
    display: none;
}

.formWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 20rem;
    height: 17rem;
    padding: 1rem;
    margin-top: 3rem;
}

.formWrapper label{
    width: 10rem;
}



.sidebar{
    background-color: #334155;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem;
}

.categories{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.cat{
    display: flex;
    align-items: center;
    gap: 1rem;
}

.cat img{
    width: 2rem;
    height: auto;
}

.project {
    padding: .5rem;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.xProjectButton {
    padding: .5rem;
}

.addTodo,
.addProject,
.categories,
.projects{
    cursor: pointer;
}

.content{
    background-color: #f1f5f9;
}

/*All Todos Page*/
.allTodoWrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
}

.todoArea{
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    height: 7rem;
    border: 2px solid black;
    background-color: #cbd5e1;
    padding: .5rem;
    width: 550px;
}

/*The X deletion button goes in the top right of every Todo on screen*/
.xButton {
    position: absolute;
    right: 0;
    top: 0;
    padding: .5rem;
    font-size: 9pt;
    cursor: pointer;
}

.titleDescription{
    text-align: center;
}

.details{
    display: flex;
    gap: 2rem;
    justify-content: center;
}

.checked {
    background-color: rgb(27, 178, 55);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,+BAA+B;IAC/B,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;;IAEhB,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,iGAAiG;AACjG;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;;;AAIA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;;;;IAII,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,cAAc;IACd,YAAY;AAChB;;AAEA,sEAAsE;AACtE;IACI,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,cAAc;IACd,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC","sourcesContent":["body {\n    height: 100vh;\n    margin: 0;\n    overflow: hidden;\n    font-family: Roboto, sans-serif;\n    color: black;\n    overflow-y: auto;\n    overflow-x: auto;\n\n    display: grid;\n    grid-template-columns: 20rem 1fr;\n}\n\nform h1{\n    margin-top: 0;\n    text-align: center;\n}\n\n.overlay,\n.overlayProject{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: rgba(3, 0, 0, 0.1);\n    backdrop-filter: blur(20px);\n    display: flex;\n    justify-content: center;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\nform>div{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n/*The different input boxes don't have the same height unless I set it like this for some reason*/\ninput {\n    width: 136px;\n    height: 22px;\n}\ninput[type='date']{\n    width: 139px;\n    height: 24px;\n}\nselect {\n    width: 144px;\n    height: 28px;\n}\n\n.overlayButtons{\n    display: flex;\n    justify-content: space-between;\n}\n\n.hidden{\n    display: none;\n}\n\n.formWrapper{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 20rem;\n    height: 17rem;\n    padding: 1rem;\n    margin-top: 3rem;\n}\n\n.formWrapper label{\n    width: 10rem;\n}\n\n\n\n.sidebar{\n    background-color: #334155;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    padding: 2rem;\n}\n\n.categories{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.cat{\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.cat img{\n    width: 2rem;\n    height: auto;\n}\n\n.project {\n    padding: .5rem;\n    padding-left: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.xProjectButton {\n    padding: .5rem;\n}\n\n.addTodo,\n.addProject,\n.categories,\n.projects{\n    cursor: pointer;\n}\n\n.content{\n    background-color: #f1f5f9;\n}\n\n/*All Todos Page*/\n.allTodoWrapper{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin: 1rem;\n}\n\n.todoArea{\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n    height: 7rem;\n    border: 2px solid black;\n    background-color: #cbd5e1;\n    padding: .5rem;\n    width: 550px;\n}\n\n/*The X deletion button goes in the top right of every Todo on screen*/\n.xButton {\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: .5rem;\n    font-size: 9pt;\n    cursor: pointer;\n}\n\n.titleDescription{\n    text-align: center;\n}\n\n.details{\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n}\n\n.checked {\n    background-color: rgb(27, 178, 55);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/alltodosDOM.js":
/*!****************************!*\
  !*** ./src/alltodosDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAllTodos: () => (/* binding */ renderAllTodos)
/* harmony export */ });
/* harmony import */ var _todoGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoGenerator.js */ "./src/todoGenerator.js");


function generateDOMTodoProperty(propertyClassName, propertyIdentifier, propertyValue, parent){
    const property = document.createElement('div');
    property.classList.add(propertyClassName);
    property.textContent = propertyIdentifier + propertyValue;
    parent.appendChild(property);
}

//For Rendering any specific set of todos
function renderAllTodos(array){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('allTodoWrapper');
    content.appendChild(wrapper);

    array.forEach((todo, index) => {
        const todoArea = document.createElement('div');
        todoArea.classList.add('todoArea');
        wrapper.appendChild(todoArea);

        const xButton = document.createElement('div');
        xButton.textContent = 'X';
        xButton.classList.add('xButton');
        todoArea.appendChild(xButton);
        xButton.addEventListener('click', (e) => {
            //use the index to delete the correct todo from the main allTodos array
            e.stopPropagation();
            _todoGenerator_js__WEBPACK_IMPORTED_MODULE_0__.allTodos.removeTodo(todo);
            if(array !== _todoGenerator_js__WEBPACK_IMPORTED_MODULE_0__.allTodos.getArrayTodos()){
                array.splice(array.indexOf(todo), 1)    
            }
            renderAllTodos(array);
        })

        const titleDescription = document.createElement('div');
        titleDescription.classList.add('titleDescription');
        todoArea.appendChild(titleDescription);

        const details = document.createElement('div');
        details.classList.add('details');
        todoArea.appendChild(details);

        
        generateDOMTodoProperty('todoTitle', '',todo.todoTitle, titleDescription);
        generateDOMTodoProperty('todoDescription', '',todo.todoDescription, titleDescription);
        generateDOMTodoProperty('todoDueDate', 'Due: ',todo.todoDueDate, details);
        generateDOMTodoProperty('todoPriority', 'Priority: ',todo.todoPriority, details);
        generateDOMTodoProperty('todoProject', 'Project: ',todo.todoProject, details);

        //Check or Uncheck a Todo
        if(todo.todoChecked === true){
            todoArea.classList.add('checked');
        } 
        todoArea.addEventListener('click', () => {
            if(todo.todoChecked === false){
                _todoGenerator_js__WEBPACK_IMPORTED_MODULE_0__.allTodos.updateTodo(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_0__.allTodos.getArrayTodos().indexOf(todo), null, null, null, null, null, true);
                todoArea.classList.add('checked');
            } else {
                _todoGenerator_js__WEBPACK_IMPORTED_MODULE_0__.allTodos.updateTodo(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_0__.allTodos.getArrayTodos().indexOf(todo), null, null, null, null, null, false);
                todoArea.classList.remove('checked');
            }

        })

    });
}





/***/ }),

/***/ "./src/projectGenerator.js":
/*!*********************************!*\
  !*** ./src/projectGenerator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allProjects: () => (/* binding */ allProjects)
/* harmony export */ });
/* harmony import */ var _todoGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoGenerator.js */ "./src/todoGenerator.js");



const allProjects = (function(){
    let allProjectsArray = [];
    let currentProjectName = '';
    let currentProjectArray = [];

    const getProjects = () => {return allProjectsArray};
    const addProject = (projectName) => {
        allProjectsArray.push(projectName);
        allProjectsArray.sort();
        updateProjectStorage();
    };
    const removeProject = (projectName) => {
        allProjectsArray.splice(allProjectsArray.indexOf(projectName), 1);
        updateProjectStorage();
    }

    const getCurrentProject = () => {return currentProjectArray};
    const setCurrentProjectName = (projectName) => {currentProjectName = projectName};
    const generateCurrentProject = (arrayTodos) => {
        currentProjectArray = arrayTodos.filter(function(todo){
            return todo.todoProject === currentProjectName;
        })
    }

    const updateProjectStorage = () => {
        const arrayProjectsSerialized = JSON.stringify(allProjectsArray);
        localStorage.setItem('storedProjects', arrayProjectsSerialized);
    }
    const retrieveProjectStorage = () => {
        allProjectsArray = JSON.parse(localStorage.getItem('storedProjects'));
        if(allProjectsArray === null){allProjectsArray = []}
    }

    return {getProjects, addProject, removeProject, getCurrentProject, setCurrentProjectName, generateCurrentProject, updateProjectStorage, retrieveProjectStorage}
})();

//Adding some projects for placeholder purposes:
/*allProjects.addProject('Work');
allProjects.addProject('Vacation');
allProjects.addProject('Stream');
allProjects.addProject('Hopes and Dreams');
console.log(allProjects.getProjects());*/




/***/ }),

/***/ "./src/sidebarCat.js":
/*!***************************!*\
  !*** ./src/sidebarCat.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _images_sun_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sun.svg */ "./src/images/sun.svg");
/* harmony import */ var _images_calender_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/calender.svg */ "./src/images/calender.svg");
/* harmony import */ var _images_party_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/party.svg */ "./src/images/party.svg");
/* harmony import */ var _images_list_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/list.svg */ "./src/images/list.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoGenerator.js */ "./src/todoGenerator.js");
/* harmony import */ var _alltodosDOM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alltodosDOM.js */ "./src/alltodosDOM.js");
/* harmony import */ var _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectGenerator.js */ "./src/projectGenerator.js");









//DOM setup for the sidebar
function createCategory(parent, className, catName, imageName){
    const categories = parent;
    const category = document.createElement('div');
    category.classList.add('cat');
    category.classList.add(className);
    categories.appendChild(category);

    const image = document.createElement('img');
    image.src = imageName;
    category.appendChild(image);

    const name = document.createElement('div');
    name.classList.add('catName');
    name.textContent = catName;
    category.appendChild(name);
}

function toggleOverlay(overlayClass){
    const overlay = document.querySelector(overlayClass);
    overlay.classList.toggle('hidden');
}

function clearContent(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
}

function renderProjects(){
    const projectsDOM = document.querySelector('.projects');
    projectsDOM.innerHTML = '';
    const currentProjects = _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.getProjects();
    currentProjects.forEach((project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
    projectContainer.textContent = project;
    projectsDOM.appendChild(projectContainer);

    //Means to remove projects
    const xProjectButton = document.createElement('div');
    xProjectButton.classList.add('xProjectButton');
    xProjectButton.textContent = 'X';
    projectContainer.appendChild(xProjectButton);
    xProjectButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete the entire project and all to-dos within?')){
            _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.setCurrentProjectName(project);
            _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.generateCurrentProject(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.getArrayTodos())
            _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.getCurrentProject().forEach(todoDeleted => {
                _todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.removeTodo(todoDeleted);
            })
            _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.removeProject(project);
            renderProjects();
            const content = document.querySelector('.content');
            content.innerHTML = '';
        }
    })
   
    projectContainer.addEventListener('click', () => {
        _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.setCurrentProjectName(project);
        _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.generateCurrentProject(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.getArrayTodos());
        (0,_alltodosDOM_js__WEBPACK_IMPORTED_MODULE_6__.renderAllTodos)(_projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.getCurrentProject());
    })
})}

function overlayButtonSetup(){
    const cancel = document.querySelector('.cancelButton');
    cancel.addEventListener('click', () => {
        toggleOverlay('.overlay');
        const form = document.querySelector('.taskForm');
        form.reset();
    })
    const cancelProject = document.querySelector('.cancelProjectButton');
    cancelProject.addEventListener('click', () => {
        toggleOverlay('.overlayProject');
        const form = document.querySelector('.projectForm');
        form.reset();
    })

    const add = document.querySelector('.addButton');
    add.addEventListener('click', () => {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#duedate');
        const priority = document.querySelector('#priority');
        const project = document.querySelector('#project');

        _todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.addTodo(title.value, description.value, dueDate.value, priority.value, project.value)
        clearContent();
        const form = document.querySelector('.taskForm');
        form.reset();
        (0,_alltodosDOM_js__WEBPACK_IMPORTED_MODULE_6__.renderAllTodos)(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.getArrayTodos());
    })

    const addProject = document.querySelector('.addProjectButton');
    addProject.addEventListener('click', () => {
        const projectField = document.querySelector('#projectName');
        if(projectField.value === 'None' || _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.getProjects().includes(projectField.value)){
            alert('Please use a different project name')
        } else {
            _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.addProject(projectField.value);
            //Rendering the Projects in the sidebar goes here
            renderProjects();
            const form = document.querySelector('.projectForm');
            form.reset();
            toggleOverlay('.overlayProject');
        }
    })
}

function renderAddTasks(){
    createCategory(document.querySelector('.addTasks'), 'addTodo', 'Add To-Do', _images_plus_svg__WEBPACK_IMPORTED_MODULE_4__);
    const buttonTodo = document.querySelector('.addTodo');
    buttonTodo.addEventListener('click', () => {
        //need to generate the dropdown of the current selection of projects
        const projectInputs = document.querySelector('#project');
        projectInputs.innerHTML = '';
        const none = document.createElement('option');
        none.value = 'None'
        none.textContent = 'None'
        projectInputs.appendChild(none);
        _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.getProjects().forEach(project => {
            const option = document.createElement('option');
            option.value = project;
            option.textContent = project;
            projectInputs.appendChild(option);
        })
        toggleOverlay('.overlay')
    });

    createCategory(document.querySelector('.addTasks'), 'addProject', 'Add Project', _images_plus_svg__WEBPACK_IMPORTED_MODULE_4__);
    const buttonProject = document.querySelector('.addProject');
    buttonProject.addEventListener('click', () => {toggleOverlay('.overlayProject')});

    overlayButtonSetup();
}

function categorySetup(){
    createCategory(document.querySelector('.categories'), 'all', 'All To-Dos', _images_list_svg__WEBPACK_IMPORTED_MODULE_3__);
    const allTodosButton = document.querySelector('.all');
    allTodosButton.addEventListener('click', () => {(0,_alltodosDOM_js__WEBPACK_IMPORTED_MODULE_6__.renderAllTodos)(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.getArrayTodos())})

    createCategory(document.querySelector('.categories'), 'today', 'Today', _images_sun_svg__WEBPACK_IMPORTED_MODULE_0__);
    const todayButton = document.querySelector('.today');
    todayButton.addEventListener('click', () => {
        const today = new Date();
        let year = today.getFullYear().toString();
        let day = today.getDate().toString()
        if(day.length === 1){day = 0 + day}
        let month = (today.getMonth() + 1).toString()
        if(month.length === 1){month = 0 + month}
        console.log(year + '-' + month + '-' + day)
        ;(0,_alltodosDOM_js__WEBPACK_IMPORTED_MODULE_6__.renderAllTodos)(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.getArrayTodos().filter((todo) => {
            console.log(todo.todoDueDate);
            return year + '-' + month + '-' + day === todo.todoDueDate.toString();
        }))
    })

    createCategory(document.querySelector('.categories'), 'month', 'This Month', _images_calender_svg__WEBPACK_IMPORTED_MODULE_1__);
    const monthButton = document.querySelector('.month');
    monthButton.addEventListener('click', () => {
        const today = new Date();
        let year = today.getFullYear().toString();
        let day = today.getDate().toString()
        if(day.length === 1){day = 0 + day}
        let month = (today.getMonth() + 1).toString()
        if(month.length === 1){month = 0 + month}
        (0,_alltodosDOM_js__WEBPACK_IMPORTED_MODULE_6__.renderAllTodos)(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.getArrayTodos().filter((todo) => {
            return year + '-' + month === todo.todoDueDate.toString().slice(0, 7)
        }))
    })

    createCategory(document.querySelector('.categories'), 'important', 'Important', _images_party_svg__WEBPACK_IMPORTED_MODULE_2__);
    const important = document.querySelector('.important');
    important.addEventListener('click', () => {
        (0,_alltodosDOM_js__WEBPACK_IMPORTED_MODULE_6__.renderAllTodos)(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.getArrayTodos().filter((todo) => {return todo.todoPriority === 'High'}))
    })
}

renderAddTasks();
categorySetup();






/***/ }),

/***/ "./src/todoGenerator.js":
/*!******************************!*\
  !*** ./src/todoGenerator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allTodos: () => (/* binding */ allTodos)
/* harmony export */ });
const allTodos = (function(){
    let arrayTodos = [];

    function newTodo(title, description, dueDate, priority, project){
        let todoTitle = title;
        let todoDescription = description;
        let todoDueDate = dueDate;
        let todoPriority = priority;
        let todoProject = project;
        let todoChecked = false;

        return {todoTitle, todoDescription, todoDueDate, todoPriority, todoProject, todoChecked};
    }

    const getArrayTodos = () => {return arrayTodos};
    const addTodo = (title, description, dueDate, priority, project) => {
        const todo = newTodo(title, description, dueDate, priority, project);
        arrayTodos.push(todo);
        allTodos.updateTodoStorage();
    };
    const removeTodo = (todo) => {
        arrayTodos.splice(arrayTodos.indexOf(todo), 1);
        updateTodoStorage();
    }

    //set value to null if unchanged
    const updateTodo = (oldTodoIndex, newTitle, newDescription, newDate, newPriority, newProject, newChecked) => {
        if(newTitle !== null){arrayTodos[oldTodoIndex].todoTitle = newTitle};
        if(newDescription !== null){arrayTodos[oldTodoIndex].todoDescription = newDescription};
        if(newDate !== null){arrayTodos[oldTodoIndex].todoDueDate = newDate};
        if(newPriority !== null){arrayTodos[oldTodoIndex].todoPriority = newPriority};
        if(newProject !== null){arrayTodos[oldTodoIndex].todoProject = newProject};
        if(newChecked !== null){arrayTodos[oldTodoIndex].todoChecked = newChecked}; 
        updateTodoStorage();
    }

    const updateTodoStorage = () => {
        const arrayTodosSerialized = JSON.stringify(arrayTodos);
        localStorage.setItem('storedTodos', arrayTodosSerialized);
    }
    const retrieveTodoStorage = () => {
        arrayTodos = JSON.parse(localStorage.getItem('storedTodos'));
        if(arrayTodos === null){arrayTodos = []}
    }

    return {getArrayTodos, addTodo, removeTodo, updateTodo, updateTodoStorage, retrieveTodoStorage}
})();



/***/ }),

/***/ "./src/images/calender.svg":
/*!*********************************!*\
  !*** ./src/images/calender.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "522e1d92ad34cfc408b1.svg";

/***/ }),

/***/ "./src/images/list.svg":
/*!*****************************!*\
  !*** ./src/images/list.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0db5df31d6005d937468.svg";

/***/ }),

/***/ "./src/images/party.svg":
/*!******************************!*\
  !*** ./src/images/party.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6aead490da84deb21d5.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a64cb3f8faae7e60d07.svg";

/***/ }),

/***/ "./src/images/sun.svg":
/*!****************************!*\
  !*** ./src/images/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f1a9edd07ab13ca7dfd.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sidebarCat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarCat.js */ "./src/sidebarCat.js");
/* harmony import */ var _todoGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoGenerator.js */ "./src/todoGenerator.js");
/* harmony import */ var _projectGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectGenerator */ "./src/projectGenerator.js");
/* harmony import */ var _alltodosDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alltodosDOM.js */ "./src/alltodosDOM.js");









//Get todos and projects from localStorage
_todoGenerator_js__WEBPACK_IMPORTED_MODULE_2__.allTodos.retrieveTodoStorage();
_projectGenerator__WEBPACK_IMPORTED_MODULE_3__.allProjects.retrieveProjectStorage();

//Unlike the Add or Category options, the projects are dynamic and need to be uniquely set up when page loads
(0,_sidebarCat_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();

//Since the forms don't submit, prevent forms from refreshing the page with the Enter key
document.querySelectorAll('form').forEach(form => {addEventListener('submit', e => e.preventDefault())})












})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0QjtBQUNIO0FBQ0c7QUFDdkI7Ozs7O0FBSzFCO0FBQ0EsdURBQVE7QUFDUiwwREFBVzs7QUFFWDtBQUNBLDhEQUFjOztBQUVkO0FBQ0EsbURBQW1ELG9EQUFvRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWxsdG9kb3NET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJDYXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gMWZyO1xufVxuXG5mb3JtIGgxe1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3ZlcmxheSxcbi5vdmVybGF5UHJvamVjdHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMCwgMCwgMC4xKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuZm9ybT5kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLypUaGUgZGlmZmVyZW50IGlucHV0IGJveGVzIGRvbid0IGhhdmUgdGhlIHNhbWUgaGVpZ2h0IHVubGVzcyBJIHNldCBpdCBsaWtlIHRoaXMgZm9yIHNvbWUgcmVhc29uKi9cbmlucHV0IHtcbiAgICB3aWR0aDogMTM2cHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xufVxuaW5wdXRbdHlwZT0nZGF0ZSdde1xuICAgIHdpZHRoOiAxMzlweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG59XG5zZWxlY3Qge1xuICAgIHdpZHRoOiAxNDRweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG59XG5cbi5vdmVybGF5QnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybVdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBoZWlnaHQ6IDE3cmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLmZvcm1XcmFwcGVyIGxhYmVse1xuICAgIHdpZHRoOiAxMHJlbTtcbn1cblxuXG5cbi5zaWRlYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDNyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNhdGVnb3JpZXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uY2F0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5jYXQgaW1ne1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnByb2plY3Qge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ueFByb2plY3RCdXR0b24ge1xuICAgIHBhZGRpbmc6IC41cmVtO1xufVxuXG4uYWRkVG9kbyxcbi5hZGRQcm9qZWN0LFxuLmNhdGVnb3JpZXMsXG4ucHJvamVjdHN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xufVxuXG4vKkFsbCBUb2RvcyBQYWdlKi9cbi5hbGxUb2RvV3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLnRvZG9BcmVhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICBoZWlnaHQ6IDdyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICB3aWR0aDogNTUwcHg7XG59XG5cbi8qVGhlIFggZGVsZXRpb24gYnV0dG9uIGdvZXMgaW4gdGhlIHRvcCByaWdodCBvZiBldmVyeSBUb2RvIG9uIHNjcmVlbiovXG4ueEJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBmb250LXNpemU6IDlwdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRsZURlc2NyaXB0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjcsIDE3OCwgNTUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQSxpR0FBaUc7QUFDakc7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7OztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7Ozs7SUFJSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQSxzRUFBc0U7QUFDdEU7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gMWZyO1xcbn1cXG5cXG5mb3JtIGgxe1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vdmVybGF5LFxcbi5vdmVybGF5UHJvamVjdHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDAsIDAsIDAuMSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbmZvcm0+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qVGhlIGRpZmZlcmVudCBpbnB1dCBib3hlcyBkb24ndCBoYXZlIHRoZSBzYW1lIGhlaWdodCB1bmxlc3MgSSBzZXQgaXQgbGlrZSB0aGlzIGZvciBzb21lIHJlYXNvbiovXFxuaW5wdXQge1xcbiAgICB3aWR0aDogMTM2cHg7XFxuICAgIGhlaWdodDogMjJweDtcXG59XFxuaW5wdXRbdHlwZT0nZGF0ZSdde1xcbiAgICB3aWR0aDogMTM5cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG59XFxuc2VsZWN0IHtcXG4gICAgd2lkdGg6IDE0NHB4O1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5vdmVybGF5QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybVdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDE3cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4uZm9ybVdyYXBwZXIgbGFiZWx7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuXFxuXFxuLnNpZGViYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uY2F0ZWdvcmllc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5jYXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNhdCBpbWd7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueFByb2plY3RCdXR0b24ge1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLmFkZFRvZG8sXFxuLmFkZFByb2plY3QsXFxuLmNhdGVnb3JpZXMsXFxuLnByb2plY3Rze1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbn1cXG5cXG4vKkFsbCBUb2RvcyBQYWdlKi9cXG4uYWxsVG9kb1dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4udG9kb0FyZWF7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBoZWlnaHQ6IDdyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG4vKlRoZSBYIGRlbGV0aW9uIGJ1dHRvbiBnb2VzIGluIHRoZSB0b3AgcmlnaHQgb2YgZXZlcnkgVG9kbyBvbiBzY3JlZW4qL1xcbi54QnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiA5cHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlRGVzY3JpcHRpb257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAxNzgsIDU1KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFsbFRvZG9zIH0gZnJvbSBcIi4vdG9kb0dlbmVyYXRvci5qc1wiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZURPTVRvZG9Qcm9wZXJ0eShwcm9wZXJ0eUNsYXNzTmFtZSwgcHJvcGVydHlJZGVudGlmaWVyLCBwcm9wZXJ0eVZhbHVlLCBwYXJlbnQpe1xuICAgIGNvbnN0IHByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvcGVydHkuY2xhc3NMaXN0LmFkZChwcm9wZXJ0eUNsYXNzTmFtZSk7XG4gICAgcHJvcGVydHkudGV4dENvbnRlbnQgPSBwcm9wZXJ0eUlkZW50aWZpZXIgKyBwcm9wZXJ0eVZhbHVlO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9wZXJ0eSk7XG59XG5cbi8vRm9yIFJlbmRlcmluZyBhbnkgc3BlY2lmaWMgc2V0IG9mIHRvZG9zXG5mdW5jdGlvbiByZW5kZXJBbGxUb2RvcyhhcnJheSl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsbFRvZG9XcmFwcGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIGFycmF5LmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9BcmVhLmNsYXNzTGlzdC5hZGQoJ3RvZG9BcmVhJyk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0FyZWEpO1xuXG4gICAgICAgIGNvbnN0IHhCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgeEJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgeEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd4QnV0dG9uJyk7XG4gICAgICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHhCdXR0b24pO1xuICAgICAgICB4QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vdXNlIHRoZSBpbmRleCB0byBkZWxldGUgdGhlIGNvcnJlY3QgdG9kbyBmcm9tIHRoZSBtYWluIGFsbFRvZG9zIGFycmF5XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgYWxsVG9kb3MucmVtb3ZlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIGlmKGFycmF5ICE9PSBhbGxUb2Rvcy5nZXRBcnJheVRvZG9zKCkpe1xuICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShhcnJheS5pbmRleE9mKHRvZG8pLCAxKSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlckFsbFRvZG9zKGFycmF5KTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0aXRsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGl0bGVEZXNjcmlwdGlvbicpO1xuICAgICAgICB0b2RvQXJlYS5hcHBlbmRDaGlsZCh0aXRsZURlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuICAgICAgICB0b2RvQXJlYS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgICAgICBcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9UaXRsZScsICcnLHRvZG8udG9kb1RpdGxlLCB0aXRsZURlc2NyaXB0aW9uKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9EZXNjcmlwdGlvbicsICcnLHRvZG8udG9kb0Rlc2NyaXB0aW9uLCB0aXRsZURlc2NyaXB0aW9uKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9EdWVEYXRlJywgJ0R1ZTogJyx0b2RvLnRvZG9EdWVEYXRlLCBkZXRhaWxzKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9Qcmlvcml0eScsICdQcmlvcml0eTogJyx0b2RvLnRvZG9Qcmlvcml0eSwgZGV0YWlscyk7XG4gICAgICAgIGdlbmVyYXRlRE9NVG9kb1Byb3BlcnR5KCd0b2RvUHJvamVjdCcsICdQcm9qZWN0OiAnLHRvZG8udG9kb1Byb2plY3QsIGRldGFpbHMpO1xuXG4gICAgICAgIC8vQ2hlY2sgb3IgVW5jaGVjayBhIFRvZG9cbiAgICAgICAgaWYodG9kby50b2RvQ2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0b2RvQXJlYS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgIH0gXG4gICAgICAgIHRvZG9BcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYodG9kby50b2RvQ2hlY2tlZCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGFsbFRvZG9zLnVwZGF0ZVRvZG8oYWxsVG9kb3MuZ2V0QXJyYXlUb2RvcygpLmluZGV4T2YodG9kbyksIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRvZG9BcmVhLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxsVG9kb3MudXBkYXRlVG9kbyhhbGxUb2Rvcy5nZXRBcnJheVRvZG9zKCkuaW5kZXhPZih0b2RvKSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRvZG9BcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfSk7XG59XG5cblxuXG5leHBvcnQgeyByZW5kZXJBbGxUb2RvcyB9IiwiaW1wb3J0IFwiLi90b2RvR2VuZXJhdG9yLmpzXCI7XG5cblxuY29uc3QgYWxsUHJvamVjdHMgPSAoZnVuY3Rpb24oKXtcbiAgICBsZXQgYWxsUHJvamVjdHNBcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50UHJvamVjdE5hbWUgPSAnJztcbiAgICBsZXQgY3VycmVudFByb2plY3RBcnJheSA9IFtdO1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7cmV0dXJuIGFsbFByb2plY3RzQXJyYXl9O1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgYWxsUHJvamVjdHNBcnJheS5wdXNoKHByb2plY3ROYW1lKTtcbiAgICAgICAgYWxsUHJvamVjdHNBcnJheS5zb3J0KCk7XG4gICAgICAgIHVwZGF0ZVByb2plY3RTdG9yYWdlKCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzQXJyYXkuc3BsaWNlKGFsbFByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0TmFtZSksIDEpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0U3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge3JldHVybiBjdXJyZW50UHJvamVjdEFycmF5fTtcbiAgICBjb25zdCBzZXRDdXJyZW50UHJvamVjdE5hbWUgPSAocHJvamVjdE5hbWUpID0+IHtjdXJyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZX07XG4gICAgY29uc3QgZ2VuZXJhdGVDdXJyZW50UHJvamVjdCA9IChhcnJheVRvZG9zKSA9PiB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0QXJyYXkgPSBhcnJheVRvZG9zLmZpbHRlcihmdW5jdGlvbih0b2RvKXtcbiAgICAgICAgICAgIHJldHVybiB0b2RvLnRvZG9Qcm9qZWN0ID09PSBjdXJyZW50UHJvamVjdE5hbWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5UHJvamVjdHNTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHNBcnJheSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRQcm9qZWN0cycsIGFycmF5UHJvamVjdHNTZXJpYWxpemVkKTtcbiAgICB9XG4gICAgY29uc3QgcmV0cmlldmVQcm9qZWN0U3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgYWxsUHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFByb2plY3RzJykpO1xuICAgICAgICBpZihhbGxQcm9qZWN0c0FycmF5ID09PSBudWxsKXthbGxQcm9qZWN0c0FycmF5ID0gW119XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0TmFtZSwgZ2VuZXJhdGVDdXJyZW50UHJvamVjdCwgdXBkYXRlUHJvamVjdFN0b3JhZ2UsIHJldHJpZXZlUHJvamVjdFN0b3JhZ2V9XG59KSgpO1xuXG4vL0FkZGluZyBzb21lIHByb2plY3RzIGZvciBwbGFjZWhvbGRlciBwdXJwb3Nlczpcbi8qYWxsUHJvamVjdHMuYWRkUHJvamVjdCgnV29yaycpO1xuYWxsUHJvamVjdHMuYWRkUHJvamVjdCgnVmFjYXRpb24nKTtcbmFsbFByb2plY3RzLmFkZFByb2plY3QoJ1N0cmVhbScpO1xuYWxsUHJvamVjdHMuYWRkUHJvamVjdCgnSG9wZXMgYW5kIERyZWFtcycpO1xuY29uc29sZS5sb2coYWxsUHJvamVjdHMuZ2V0UHJvamVjdHMoKSk7Ki9cblxuXG5leHBvcnQgeyBhbGxQcm9qZWN0cyB9OyIsImltcG9ydCBzdW4gZnJvbSAnLi9pbWFnZXMvc3VuLnN2Zyc7XG5pbXBvcnQgY2FsZW5kZXIgZnJvbSAnLi9pbWFnZXMvY2FsZW5kZXIuc3ZnJztcbmltcG9ydCBwYXJ0eSBmcm9tICcuL2ltYWdlcy9wYXJ0eS5zdmcnO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9pbWFnZXMvbGlzdC5zdmcnO1xuaW1wb3J0IHBsdXMgZnJvbSAnLi9pbWFnZXMvcGx1cy5zdmcnO1xuaW1wb3J0IHsgYWxsVG9kb3MgfSBmcm9tICcuL3RvZG9HZW5lcmF0b3IuanMnO1xuaW1wb3J0IHsgcmVuZGVyQWxsVG9kb3MgfSBmcm9tICcuL2FsbHRvZG9zRE9NLmpzJztcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0R2VuZXJhdG9yLmpzJztcblxuLy9ET00gc2V0dXAgZm9yIHRoZSBzaWRlYmFyXG5mdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShwYXJlbnQsIGNsYXNzTmFtZSwgY2F0TmFtZSwgaW1hZ2VOYW1lKXtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gcGFyZW50O1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnY2F0Jyk7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZU5hbWU7XG4gICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnY2F0TmFtZScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBjYXROYW1lO1xuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKG5hbWUpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVPdmVybGF5KG92ZXJsYXlDbGFzcyl7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcmxheUNsYXNzKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpe1xuICAgIGNvbnN0IHByb2plY3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgcHJvamVjdHNET00uaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RzID0gYWxsUHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0c0RPTS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIC8vTWVhbnMgdG8gcmVtb3ZlIHByb2plY3RzXG4gICAgY29uc3QgeFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB4UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd4UHJvamVjdEJ1dHRvbicpO1xuICAgIHhQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoeFByb2plY3RCdXR0b24pO1xuICAgIHhQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgZW50aXJlIHByb2plY3QgYW5kIGFsbCB0by1kb3Mgd2l0aGluPycpKXtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLnNldEN1cnJlbnRQcm9qZWN0TmFtZShwcm9qZWN0KTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLmdlbmVyYXRlQ3VycmVudFByb2plY3QoYWxsVG9kb3MuZ2V0QXJyYXlUb2RvcygpKVxuICAgICAgICAgICAgYWxsUHJvamVjdHMuZ2V0Q3VycmVudFByb2plY3QoKS5mb3JFYWNoKHRvZG9EZWxldGVkID0+IHtcbiAgICAgICAgICAgICAgICBhbGxUb2Rvcy5yZW1vdmVUb2RvKHRvZG9EZWxldGVkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH0pXG4gICBcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0cy5zZXRDdXJyZW50UHJvamVjdE5hbWUocHJvamVjdCk7XG4gICAgICAgIGFsbFByb2plY3RzLmdlbmVyYXRlQ3VycmVudFByb2plY3QoYWxsVG9kb3MuZ2V0QXJyYXlUb2RvcygpKTtcbiAgICAgICAgcmVuZGVyQWxsVG9kb3MoYWxsUHJvamVjdHMuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgfSlcbn0pfVxuXG5mdW5jdGlvbiBvdmVybGF5QnV0dG9uU2V0dXAoKXtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsQnV0dG9uJyk7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVPdmVybGF5KCcub3ZlcmxheScpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tGb3JtJyk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KVxuICAgIGNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsUHJvamVjdEJ1dHRvbicpO1xuICAgIGNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZU92ZXJsYXkoJy5vdmVybGF5UHJvamVjdCcpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbicpO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuXG4gICAgICAgIGFsbFRvZG9zLmFkZFRvZG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC52YWx1ZSlcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0Zvcm0nKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZW5kZXJBbGxUb2RvcyhhbGxUb2Rvcy5nZXRBcnJheVRvZG9zKCkpO1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdXR0b24nKTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICAgICAgaWYocHJvamVjdEZpZWxkLnZhbHVlID09PSAnTm9uZScgfHwgYWxsUHJvamVjdHMuZ2V0UHJvamVjdHMoKS5pbmNsdWRlcyhwcm9qZWN0RmllbGQudmFsdWUpKXtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgdXNlIGEgZGlmZmVyZW50IHByb2plY3QgbmFtZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3RGaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICAvL1JlbmRlcmluZyB0aGUgUHJvamVjdHMgaW4gdGhlIHNpZGViYXIgZ29lcyBoZXJlXG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdG9nZ2xlT3ZlcmxheSgnLm92ZXJsYXlQcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrcygpe1xuICAgIGNyZWF0ZUNhdGVnb3J5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrcycpLCAnYWRkVG9kbycsICdBZGQgVG8tRG8nLCBwbHVzKTtcbiAgICBjb25zdCBidXR0b25Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvZG8nKTtcbiAgICBidXR0b25Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvL25lZWQgdG8gZ2VuZXJhdGUgdGhlIGRyb3Bkb3duIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBvZiBwcm9qZWN0c1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdElucHV0cy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3Qgbm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBub25lLnZhbHVlID0gJ05vbmUnXG4gICAgICAgIG5vbmUudGV4dENvbnRlbnQgPSAnTm9uZSdcbiAgICAgICAgcHJvamVjdElucHV0cy5hcHBlbmRDaGlsZChub25lKTtcbiAgICAgICAgYWxsUHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dHMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgdG9nZ2xlT3ZlcmxheSgnLm92ZXJsYXknKVxuICAgIH0pO1xuXG4gICAgY3JlYXRlQ2F0ZWdvcnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tzJyksICdhZGRQcm9qZWN0JywgJ0FkZCBQcm9qZWN0JywgcGx1cyk7XG4gICAgY29uc3QgYnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Jyk7XG4gICAgYnV0dG9uUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt0b2dnbGVPdmVybGF5KCcub3ZlcmxheVByb2plY3QnKX0pO1xuXG4gICAgb3ZlcmxheUJ1dHRvblNldHVwKCk7XG59XG5cbmZ1bmN0aW9uIGNhdGVnb3J5U2V0dXAoKXtcbiAgICBjcmVhdGVDYXRlZ29yeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpLCAnYWxsJywgJ0FsbCBUby1Eb3MnLCBsaXN0KTtcbiAgICBjb25zdCBhbGxUb2Rvc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgICBhbGxUb2Rvc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtyZW5kZXJBbGxUb2RvcyhhbGxUb2Rvcy5nZXRBcnJheVRvZG9zKCkpfSlcblxuICAgIGNyZWF0ZUNhdGVnb3J5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyksICd0b2RheScsICdUb2RheScsIHN1bik7XG4gICAgY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbiAgICB0b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGRheSA9IHRvZGF5LmdldERhdGUoKS50b1N0cmluZygpXG4gICAgICAgIGlmKGRheS5sZW5ndGggPT09IDEpe2RheSA9IDAgKyBkYXl9XG4gICAgICAgIGxldCBtb250aCA9ICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKVxuICAgICAgICBpZihtb250aC5sZW5ndGggPT09IDEpe21vbnRoID0gMCArIG1vbnRofVxuICAgICAgICBjb25zb2xlLmxvZyh5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXkpXG4gICAgICAgIHJlbmRlckFsbFRvZG9zKGFsbFRvZG9zLmdldEFycmF5VG9kb3MoKS5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8udG9kb0R1ZURhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheSA9PT0gdG9kby50b2RvRHVlRGF0ZS50b1N0cmluZygpO1xuICAgICAgICB9KSlcbiAgICB9KVxuXG4gICAgY3JlYXRlQ2F0ZWdvcnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKSwgJ21vbnRoJywgJ1RoaXMgTW9udGgnLCBjYWxlbmRlcik7XG4gICAgY29uc3QgbW9udGhCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9udGgnKTtcbiAgICBtb250aEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGRheSA9IHRvZGF5LmdldERhdGUoKS50b1N0cmluZygpXG4gICAgICAgIGlmKGRheS5sZW5ndGggPT09IDEpe2RheSA9IDAgKyBkYXl9XG4gICAgICAgIGxldCBtb250aCA9ICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKVxuICAgICAgICBpZihtb250aC5sZW5ndGggPT09IDEpe21vbnRoID0gMCArIG1vbnRofVxuICAgICAgICByZW5kZXJBbGxUb2RvcyhhbGxUb2Rvcy5nZXRBcnJheVRvZG9zKCkuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geWVhciArICctJyArIG1vbnRoID09PSB0b2RvLnRvZG9EdWVEYXRlLnRvU3RyaW5nKCkuc2xpY2UoMCwgNylcbiAgICAgICAgfSkpXG4gICAgfSlcblxuICAgIGNyZWF0ZUNhdGVnb3J5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyksICdpbXBvcnRhbnQnLCAnSW1wb3J0YW50JywgcGFydHkpO1xuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQnKTtcbiAgICBpbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckFsbFRvZG9zKGFsbFRvZG9zLmdldEFycmF5VG9kb3MoKS5maWx0ZXIoKHRvZG8pID0+IHtyZXR1cm4gdG9kby50b2RvUHJpb3JpdHkgPT09ICdIaWdoJ30pKVxuICAgIH0pXG59XG5cbnJlbmRlckFkZFRhc2tzKCk7XG5jYXRlZ29yeVNldHVwKCk7XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RzIH1cblxuXG4iLCJjb25zdCBhbGxUb2RvcyA9IChmdW5jdGlvbigpe1xuICAgIGxldCBhcnJheVRvZG9zID0gW107XG5cbiAgICBmdW5jdGlvbiBuZXdUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3Qpe1xuICAgICAgICBsZXQgdG9kb1RpdGxlID0gdGl0bGU7XG4gICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IHRvZG9EdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBsZXQgdG9kb1Byb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBsZXQgdG9kb0NoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4ge3RvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvUHJvamVjdCwgdG9kb0NoZWNrZWR9O1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFycmF5VG9kb3MgPSAoKSA9PiB7cmV0dXJuIGFycmF5VG9kb3N9O1xuICAgIGNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgYXJyYXlUb2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBhbGxUb2Rvcy51cGRhdGVUb2RvU3RvcmFnZSgpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGFycmF5VG9kb3Muc3BsaWNlKGFycmF5VG9kb3MuaW5kZXhPZih0b2RvKSwgMSk7XG4gICAgICAgIHVwZGF0ZVRvZG9TdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLy9zZXQgdmFsdWUgdG8gbnVsbCBpZiB1bmNoYW5nZWRcbiAgICBjb25zdCB1cGRhdGVUb2RvID0gKG9sZFRvZG9JbmRleCwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEYXRlLCBuZXdQcmlvcml0eSwgbmV3UHJvamVjdCwgbmV3Q2hlY2tlZCkgPT4ge1xuICAgICAgICBpZihuZXdUaXRsZSAhPT0gbnVsbCl7YXJyYXlUb2Rvc1tvbGRUb2RvSW5kZXhdLnRvZG9UaXRsZSA9IG5ld1RpdGxlfTtcbiAgICAgICAgaWYobmV3RGVzY3JpcHRpb24gIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvRGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbn07XG4gICAgICAgIGlmKG5ld0RhdGUgIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvRHVlRGF0ZSA9IG5ld0RhdGV9O1xuICAgICAgICBpZihuZXdQcmlvcml0eSAhPT0gbnVsbCl7YXJyYXlUb2Rvc1tvbGRUb2RvSW5kZXhdLnRvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5fTtcbiAgICAgICAgaWYobmV3UHJvamVjdCAhPT0gbnVsbCl7YXJyYXlUb2Rvc1tvbGRUb2RvSW5kZXhdLnRvZG9Qcm9qZWN0ID0gbmV3UHJvamVjdH07XG4gICAgICAgIGlmKG5ld0NoZWNrZWQgIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvQ2hlY2tlZCA9IG5ld0NoZWNrZWR9OyBcbiAgICAgICAgdXBkYXRlVG9kb1N0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb2RvU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlUb2Rvc1NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShhcnJheVRvZG9zKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRvZG9zJywgYXJyYXlUb2Rvc1NlcmlhbGl6ZWQpO1xuICAgIH1cbiAgICBjb25zdCByZXRyaWV2ZVRvZG9TdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBhcnJheVRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVG9kb3MnKSk7XG4gICAgICAgIGlmKGFycmF5VG9kb3MgPT09IG51bGwpe2FycmF5VG9kb3MgPSBbXX1cbiAgICB9XG5cbiAgICByZXR1cm4ge2dldEFycmF5VG9kb3MsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIHVwZGF0ZVRvZG8sIHVwZGF0ZVRvZG9TdG9yYWdlLCByZXRyaWV2ZVRvZG9TdG9yYWdlfVxufSkoKTtcblxuZXhwb3J0IHsgYWxsVG9kb3MgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSAnLi9zaWRlYmFyQ2F0LmpzJztcbmltcG9ydCB7IGFsbFRvZG9zIH0gZnJvbSAnLi90b2RvR2VuZXJhdG9yLmpzJztcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0R2VuZXJhdG9yJztcbmltcG9ydCAnLi9hbGx0b2Rvc0RPTS5qcyc7XG5cblxuXG5cbi8vR2V0IHRvZG9zIGFuZCBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZVxuYWxsVG9kb3MucmV0cmlldmVUb2RvU3RvcmFnZSgpO1xuYWxsUHJvamVjdHMucmV0cmlldmVQcm9qZWN0U3RvcmFnZSgpO1xuXG4vL1VubGlrZSB0aGUgQWRkIG9yIENhdGVnb3J5IG9wdGlvbnMsIHRoZSBwcm9qZWN0cyBhcmUgZHluYW1pYyBhbmQgbmVlZCB0byBiZSB1bmlxdWVseSBzZXQgdXAgd2hlbiBwYWdlIGxvYWRzXG5yZW5kZXJQcm9qZWN0cygpO1xuXG4vL1NpbmNlIHRoZSBmb3JtcyBkb24ndCBzdWJtaXQsIHByZXZlbnQgZm9ybXMgZnJvbSByZWZyZXNoaW5nIHRoZSBwYWdlIHdpdGggdGhlIEVudGVyIGtleVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goZm9ybSA9PiB7YWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpfSlcblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=