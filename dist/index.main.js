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

.content{
    background-color: #f1f5f9;
}

.addTodo,
.addProject,
.categories,
.projects{
    cursor: pointer;
}


/*All Todos Page*/
.allTodoWrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
}

.todoArea{
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

.titleDescription{
    text-align: center;
}

.details{
    display: flex;
    gap: 2rem;
    justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,+BAA+B;IAC/B,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;;IAEhB,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;AAC3B;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,iGAAiG;AACjG;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;;;AAIA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;;;IAII,eAAe;AACnB;;;AAGA,iBAAiB;AACjB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B","sourcesContent":["body {\n    height: 100vh;\n    margin: 0;\n    overflow: hidden;\n    font-family: Roboto, sans-serif;\n    color: black;\n    overflow-y: auto;\n    overflow-x: auto;\n\n    display: grid;\n    grid-template-columns: 20rem 1fr;\n}\n\nform h1{\n    margin-top: 0;\n    text-align: center;\n}\n\n.overlay,\n.overlayProject{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: rgba(3, 0, 0, 0.1);\n    backdrop-filter: blur(20px);\n    display: flex;\n    justify-content: center;\n}\n\n\n\nform{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\nform>div{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n/*The different input boxes don't have the same height unless I set it like this for some reason*/\ninput {\n    width: 136px;\n    height: 22px;\n}\ninput[type='date']{\n    width: 139px;\n    height: 24px;\n}\nselect {\n    width: 144px;\n    height: 28px;\n}\n\n.overlayButtons{\n    display: flex;\n    justify-content: space-between;\n}\n\n.hidden{\n    display: none;\n}\n\n.formWrapper{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 20rem;\n    height: 17rem;\n    padding: 1rem;\n    margin-top: 3rem;\n}\n\n.formWrapper label{\n    width: 10rem;\n}\n\n\n\n.sidebar{\n    background-color: #334155;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    padding: 2rem;\n}\n\n.categories{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.cat{\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.cat img{\n    width: 2rem;\n    height: auto;\n}\n\n.content{\n    background-color: #f1f5f9;\n}\n\n.addTodo,\n.addProject,\n.categories,\n.projects{\n    cursor: pointer;\n}\n\n\n/*All Todos Page*/\n.allTodoWrapper{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin: 1rem;\n}\n\n.todoArea{\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n    height: 7rem;\n    border: 2px solid black;\n    background-color: #cbd5e1;\n    padding: .5rem;\n    width: 550px;\n}\n\n.titleDescription{\n    text-align: center;\n}\n\n.details{\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n}"],"sourceRoot":""}]);
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
function renderAllTodos(arrayTodos){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('allTodoWrapper');
    content.appendChild(wrapper);

    arrayTodos.forEach(todo => {
        const todoArea = document.createElement('div');
        todoArea.classList.add('todoArea');
        wrapper.appendChild(todoArea);

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
        generateDOMTodoProperty('todoChecked', 'Completed: ',todo.todoChecked, details);
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
        (0,_alltodosDOM_js__WEBPACK_IMPORTED_MODULE_6__.renderAllTodos)(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_5__.allTodos.getArrayTodos());
    })

    const addProject = document.querySelector('.addProjectButton');
    addProject.addEventListener('click', () => {
        const projectField = document.querySelector('#projectName');
        _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.addProject(projectField.value);
        //Rendering the Projects in the sidebar goes here
        renderProjects();
    })
}

function renderAddTasks(){
    createCategory(document.querySelector('.addTasks'), 'addTodo', 'Add To-Do', _images_plus_svg__WEBPACK_IMPORTED_MODULE_4__);
    const buttonTodo = document.querySelector('.addTodo');
    buttonTodo.addEventListener('click', () => {
        //need to generate the dropdown of the current selection of projects
        const projectInputs = document.querySelector('#project');
        projectInputs.innerHTML = '';
        _projectGenerator_js__WEBPACK_IMPORTED_MODULE_7__.allProjects.getProjects().forEach(project => {
            console.log(project)
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
    createCategory(document.querySelector('.categories'), 'week', 'This Week', _images_calender_svg__WEBPACK_IMPORTED_MODULE_1__);
    createCategory(document.querySelector('.categories'), 'special', 'Special Events', _images_party_svg__WEBPACK_IMPORTED_MODULE_2__);
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
        arrayTodos.splice(indexOf(todo, 1));
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






console.log(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_2__.allTodos.getArrayTodos())


//Get todos and projects from localStorage
_todoGenerator_js__WEBPACK_IMPORTED_MODULE_2__.allTodos.retrieveTodoStorage();
_projectGenerator__WEBPACK_IMPORTED_MODULE_3__.allProjects.retrieveProjectStorage();

//Unlike the Add or Category options, the projects are dynamic and need to be uniquely set up when page loads
(0,_sidebarCat_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();



//some placeholder todos
/*allTodos.addTodo('Pay Taxes', 'allegedly', 'Today', 'Important', 'Stream');
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'Work');
allTodos.addTodo('Pay Taxes', 'allegedly', 'not today', 'Low', 'Stream');
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'None', 'Work');
allTodos.addTodo('Excercise', 'allegedly', 'not today', 'Important', 'Stream');
allTodos.addTodo('Groceries', 'get the stuff', 'Today', 'Medium', 'Work');
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'None', 'Vacation');
allTodos.addTodo('Excercise', 'allegedly', 'not today', 'Important', 'Vacation');
allTodos.addTodo('Groceries', 'get the stuff', 'Today', 'Medium', 'Vacation');*/


console.log(_todoGenerator_js__WEBPACK_IMPORTED_MODULE_2__.allTodos.getArrayTodos());






console.log('test');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNEI7QUFDSDtBQUNHO0FBQ0M7O0FBRWxELFlBQVksdURBQVE7OztBQUdwQjtBQUNBLHVEQUFRO0FBQ1IsMERBQVc7O0FBRVg7QUFDQSw4REFBYzs7OztBQUlkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTs7O0FBRzlFLFlBQVksdURBQVE7Ozs7Ozs7QUFPcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FsbHRvZG9zRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0R2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyQ2F0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIDFmcjtcbn1cblxuZm9ybSBoMXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm92ZXJsYXksXG4ub3ZlcmxheVByb2plY3R7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDAsIDAsIDAuMSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuXG5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC41cmVtO1xufVxuXG5mb3JtPmRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKlRoZSBkaWZmZXJlbnQgaW5wdXQgYm94ZXMgZG9uJ3QgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgdW5sZXNzIEkgc2V0IGl0IGxpa2UgdGhpcyBmb3Igc29tZSByZWFzb24qL1xuaW5wdXQge1xuICAgIHdpZHRoOiAxMzZweDtcbiAgICBoZWlnaHQ6IDIycHg7XG59XG5pbnB1dFt0eXBlPSdkYXRlJ117XG4gICAgd2lkdGg6IDEzOXB4O1xuICAgIGhlaWdodDogMjRweDtcbn1cbnNlbGVjdCB7XG4gICAgd2lkdGg6IDE0NHB4O1xuICAgIGhlaWdodDogMjhweDtcbn1cblxuLm92ZXJsYXlCdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtV3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGhlaWdodDogMTdyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG4uZm9ybVdyYXBwZXIgbGFiZWx7XG4gICAgd2lkdGg6IDEwcmVtO1xufVxuXG5cblxuLnNpZGViYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogM3JlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uY2F0ZWdvcmllc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5jYXR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNhdCBpbWd7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xufVxuXG4uYWRkVG9kbyxcbi5hZGRQcm9qZWN0LFxuLmNhdGVnb3JpZXMsXG4ucHJvamVjdHN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qQWxsIFRvZG9zIFBhZ2UqL1xuLmFsbFRvZG9XcmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4udG9kb0FyZWF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgaGVpZ2h0OiA3cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgd2lkdGg6IDU1MHB4O1xufVxuXG4udGl0bGVEZXNjcmlwdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBLGlHQUFpRztBQUNqRztJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7SUFJSSxlQUFlO0FBQ25COzs7QUFHQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbSAxZnI7XFxufVxcblxcbmZvcm0gaDF7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm92ZXJsYXksXFxuLm92ZXJsYXlQcm9qZWN0e1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMCwgMCwgMC4xKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuZm9ybT5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLypUaGUgZGlmZmVyZW50IGlucHV0IGJveGVzIGRvbid0IGhhdmUgdGhlIHNhbWUgaGVpZ2h0IHVubGVzcyBJIHNldCBpdCBsaWtlIHRoaXMgZm9yIHNvbWUgcmVhc29uKi9cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiAxMzZweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5pbnB1dFt0eXBlPSdkYXRlJ117XFxuICAgIHdpZHRoOiAxMzlweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5zZWxlY3Qge1xcbiAgICB3aWR0aDogMTQ0cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuLm92ZXJsYXlCdXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtV3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMTdyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5mb3JtV3JhcHBlciBsYWJlbHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbn1cXG5cXG5cXG5cXG4uc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5jYXRlZ29yaWVze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmNhdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2F0IGltZ3tcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxufVxcblxcbi5hZGRUb2RvLFxcbi5hZGRQcm9qZWN0LFxcbi5jYXRlZ29yaWVzLFxcbi5wcm9qZWN0c3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKkFsbCBUb2RvcyBQYWdlKi9cXG4uYWxsVG9kb1dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4udG9kb0FyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuLnRpdGxlRGVzY3JpcHRpb257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhbGxUb2RvcyB9IGZyb20gXCIuL3RvZG9HZW5lcmF0b3IuanNcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkocHJvcGVydHlDbGFzc05hbWUsIHByb3BlcnR5SWRlbnRpZmllciwgcHJvcGVydHlWYWx1ZSwgcGFyZW50KXtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb3BlcnR5LmNsYXNzTGlzdC5hZGQocHJvcGVydHlDbGFzc05hbWUpO1xuICAgIHByb3BlcnR5LnRleHRDb250ZW50ID0gcHJvcGVydHlJZGVudGlmaWVyICsgcHJvcGVydHlWYWx1ZTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvcGVydHkpO1xufVxuXG4vL0ZvciBSZW5kZXJpbmcgYW55IHNwZWNpZmljIHNldCBvZiB0b2Rvc1xuZnVuY3Rpb24gcmVuZGVyQWxsVG9kb3MoYXJyYXlUb2Rvcyl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsbFRvZG9XcmFwcGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIGFycmF5VG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0FyZWEuY2xhc3NMaXN0LmFkZCgndG9kb0FyZWEnKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvQXJlYSk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RpdGxlRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQodGl0bGVEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICAgICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9UaXRsZScsICcnLHRvZG8udG9kb1RpdGxlLCB0aXRsZURlc2NyaXB0aW9uKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9EZXNjcmlwdGlvbicsICcnLHRvZG8udG9kb0Rlc2NyaXB0aW9uLCB0aXRsZURlc2NyaXB0aW9uKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9EdWVEYXRlJywgJ0R1ZTogJyx0b2RvLnRvZG9EdWVEYXRlLCBkZXRhaWxzKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9Qcmlvcml0eScsICdQcmlvcml0eTogJyx0b2RvLnRvZG9Qcmlvcml0eSwgZGV0YWlscyk7XG4gICAgICAgIGdlbmVyYXRlRE9NVG9kb1Byb3BlcnR5KCd0b2RvUHJvamVjdCcsICdQcm9qZWN0OiAnLHRvZG8udG9kb1Byb2plY3QsIGRldGFpbHMpO1xuICAgICAgICBnZW5lcmF0ZURPTVRvZG9Qcm9wZXJ0eSgndG9kb0NoZWNrZWQnLCAnQ29tcGxldGVkOiAnLHRvZG8udG9kb0NoZWNrZWQsIGRldGFpbHMpO1xuICAgIH0pO1xufVxuXG5cblxuZXhwb3J0IHsgcmVuZGVyQWxsVG9kb3MgfSIsImltcG9ydCBcIi4vdG9kb0dlbmVyYXRvci5qc1wiO1xuXG5cbmNvbnN0IGFsbFByb2plY3RzID0gKGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFsbFByb2plY3RzQXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudFByb2plY3ROYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0QXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge3JldHVybiBhbGxQcm9qZWN0c0FycmF5fTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGFsbFByb2plY3RzQXJyYXkuc29ydCgpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0U3RvcmFnZSgpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0c0FycmF5LnNwbGljZShhbGxQcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdE5hbWUpLCAxKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHtyZXR1cm4gY3VycmVudFByb2plY3RBcnJheX07XG4gICAgY29uc3Qgc2V0Q3VycmVudFByb2plY3ROYW1lID0gKHByb2plY3ROYW1lKSA9PiB7Y3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWV9O1xuICAgIGNvbnN0IGdlbmVyYXRlQ3VycmVudFByb2plY3QgPSAoYXJyYXlUb2RvcykgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdEFycmF5ID0gYXJyYXlUb2Rvcy5maWx0ZXIoZnVuY3Rpb24odG9kbyl7XG4gICAgICAgICAgICByZXR1cm4gdG9kby50b2RvUHJvamVjdCA9PT0gY3VycmVudFByb2plY3ROYW1lO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheVByb2plY3RzU2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzQXJyYXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnLCBhcnJheVByb2plY3RzU2VyaWFsaXplZCk7XG4gICAgfVxuICAgIGNvbnN0IHJldHJpZXZlUHJvamVjdFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRQcm9qZWN0cycpKTtcbiAgICAgICAgaWYoYWxsUHJvamVjdHNBcnJheSA9PT0gbnVsbCl7YWxsUHJvamVjdHNBcnJheSA9IFtdfVxuICAgIH1cblxuICAgIHJldHVybiB7Z2V0UHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdE5hbWUsIGdlbmVyYXRlQ3VycmVudFByb2plY3QsIHVwZGF0ZVByb2plY3RTdG9yYWdlLCByZXRyaWV2ZVByb2plY3RTdG9yYWdlfVxufSkoKTtcblxuLy9BZGRpbmcgc29tZSBwcm9qZWN0cyBmb3IgcGxhY2Vob2xkZXIgcHVycG9zZXM6XG4vKmFsbFByb2plY3RzLmFkZFByb2plY3QoJ1dvcmsnKTtcbmFsbFByb2plY3RzLmFkZFByb2plY3QoJ1ZhY2F0aW9uJyk7XG5hbGxQcm9qZWN0cy5hZGRQcm9qZWN0KCdTdHJlYW0nKTtcbmFsbFByb2plY3RzLmFkZFByb2plY3QoJ0hvcGVzIGFuZCBEcmVhbXMnKTtcbmNvbnNvbGUubG9nKGFsbFByb2plY3RzLmdldFByb2plY3RzKCkpOyovXG5cblxuZXhwb3J0IHsgYWxsUHJvamVjdHMgfTsiLCJpbXBvcnQgc3VuIGZyb20gJy4vaW1hZ2VzL3N1bi5zdmcnO1xuaW1wb3J0IGNhbGVuZGVyIGZyb20gJy4vaW1hZ2VzL2NhbGVuZGVyLnN2Zyc7XG5pbXBvcnQgcGFydHkgZnJvbSAnLi9pbWFnZXMvcGFydHkuc3ZnJztcbmltcG9ydCBsaXN0IGZyb20gJy4vaW1hZ2VzL2xpc3Quc3ZnJztcbmltcG9ydCBwbHVzIGZyb20gJy4vaW1hZ2VzL3BsdXMuc3ZnJztcbmltcG9ydCB7IGFsbFRvZG9zIH0gZnJvbSAnLi90b2RvR2VuZXJhdG9yLmpzJztcbmltcG9ydCB7IHJlbmRlckFsbFRvZG9zIH0gZnJvbSAnLi9hbGx0b2Rvc0RPTS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVByb2plY3QsIGFsbFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0R2VuZXJhdG9yLmpzJztcblxuLy9ET00gc2V0dXAgZm9yIHRoZSBzaWRlYmFyXG5mdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShwYXJlbnQsIGNsYXNzTmFtZSwgY2F0TmFtZSwgaW1hZ2VOYW1lKXtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gcGFyZW50O1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnY2F0Jyk7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZU5hbWU7XG4gICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnY2F0TmFtZScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBjYXROYW1lO1xuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKG5hbWUpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVPdmVybGF5KG92ZXJsYXlDbGFzcyl7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcmxheUNsYXNzKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpe1xuICAgIGNvbnN0IHByb2plY3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG4gICAgcHJvamVjdHNET00uaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RzID0gYWxsUHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0c0RPTS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0cy5zZXRDdXJyZW50UHJvamVjdE5hbWUocHJvamVjdCk7XG4gICAgICAgIGFsbFByb2plY3RzLmdlbmVyYXRlQ3VycmVudFByb2plY3QoYWxsVG9kb3MuZ2V0QXJyYXlUb2RvcygpKTtcbiAgICAgICAgcmVuZGVyQWxsVG9kb3MoYWxsUHJvamVjdHMuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgfSlcbn0pfVxuXG5mdW5jdGlvbiBvdmVybGF5QnV0dG9uU2V0dXAoKXtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsQnV0dG9uJyk7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVPdmVybGF5KCcub3ZlcmxheScpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tGb3JtJyk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KVxuICAgIGNvbnN0IGNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsUHJvamVjdEJ1dHRvbicpO1xuICAgIGNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZU92ZXJsYXkoJy5vdmVybGF5UHJvamVjdCcpO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbicpO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuXG4gICAgICAgIGFsbFRvZG9zLmFkZFRvZG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC52YWx1ZSlcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgIHJlbmRlckFsbFRvZG9zKGFsbFRvZG9zLmdldEFycmF5VG9kb3MoKSk7XG4gICAgfSlcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZScpO1xuICAgICAgICBhbGxQcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3RGaWVsZC52YWx1ZSk7XG4gICAgICAgIC8vUmVuZGVyaW5nIHRoZSBQcm9qZWN0cyBpbiB0aGUgc2lkZWJhciBnb2VzIGhlcmVcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRUYXNrcygpe1xuICAgIGNyZWF0ZUNhdGVnb3J5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrcycpLCAnYWRkVG9kbycsICdBZGQgVG8tRG8nLCBwbHVzKTtcbiAgICBjb25zdCBidXR0b25Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvZG8nKTtcbiAgICBidXR0b25Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvL25lZWQgdG8gZ2VuZXJhdGUgdGhlIGRyb3Bkb3duIG9mIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBvZiBwcm9qZWN0c1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdElucHV0cy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgYWxsUHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdClcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXRzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgIHRvZ2dsZU92ZXJsYXkoJy5vdmVybGF5JylcbiAgICB9KTtcblxuICAgIGNyZWF0ZUNhdGVnb3J5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrcycpLCAnYWRkUHJvamVjdCcsICdBZGQgUHJvamVjdCcsIHBsdXMpO1xuICAgIGNvbnN0IGJ1dHRvblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpO1xuICAgIGJ1dHRvblByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7dG9nZ2xlT3ZlcmxheSgnLm92ZXJsYXlQcm9qZWN0Jyl9KTtcblxuICAgIG92ZXJsYXlCdXR0b25TZXR1cCgpO1xufVxuXG5mdW5jdGlvbiBjYXRlZ29yeVNldHVwKCl7XG4gICAgY3JlYXRlQ2F0ZWdvcnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKSwgJ2FsbCcsICdBbGwgVG8tRG9zJywgbGlzdCk7XG4gICAgY29uc3QgYWxsVG9kb3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gICAgYWxsVG9kb3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cmVuZGVyQWxsVG9kb3MoYWxsVG9kb3MuZ2V0QXJyYXlUb2RvcygpKX0pXG5cbiAgICBjcmVhdGVDYXRlZ29yeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpLCAndG9kYXknLCAnVG9kYXknLCBzdW4pO1xuICAgIGNyZWF0ZUNhdGVnb3J5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyksICd3ZWVrJywgJ1RoaXMgV2VlaycsIGNhbGVuZGVyKTtcbiAgICBjcmVhdGVDYXRlZ29yeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpLCAnc3BlY2lhbCcsICdTcGVjaWFsIEV2ZW50cycsIHBhcnR5KTtcbn1cblxucmVuZGVyQWRkVGFza3MoKTtcbmNhdGVnb3J5U2V0dXAoKTtcblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdHMgfVxuXG5cbiIsImNvbnN0IGFsbFRvZG9zID0gKGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFycmF5VG9kb3MgPSBbXTtcblxuICAgIGZ1bmN0aW9uIG5ld1RvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCl7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSB0aXRsZTtcbiAgICAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgdG9kb0R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBsZXQgdG9kb1ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIGxldCB0b2RvUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIGxldCB0b2RvQ2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB7dG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9Qcm9qZWN0LCB0b2RvQ2hlY2tlZH07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QXJyYXlUb2RvcyA9ICgpID0+IHtyZXR1cm4gYXJyYXlUb2Rvc307XG4gICAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgICAgICBhcnJheVRvZG9zLnB1c2godG9kbyk7XG4gICAgICAgIGFsbFRvZG9zLnVwZGF0ZVRvZG9TdG9yYWdlKCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgYXJyYXlUb2Rvcy5zcGxpY2UoaW5kZXhPZih0b2RvLCAxKSk7XG4gICAgICAgIHVwZGF0ZVRvZG9TdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLy9zZXQgdmFsdWUgdG8gbnVsbCBpZiB1bmNoYW5nZWRcbiAgICBjb25zdCB1cGRhdGVUb2RvID0gKG9sZFRvZG9JbmRleCwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEYXRlLCBuZXdQcmlvcml0eSwgbmV3UHJvamVjdCwgbmV3Q2hlY2tlZCkgPT4ge1xuICAgICAgICBpZihuZXdUaXRsZSAhPT0gbnVsbCl7YXJyYXlUb2Rvc1tvbGRUb2RvSW5kZXhdLnRvZG9UaXRsZSA9IG5ld1RpdGxlfTtcbiAgICAgICAgaWYobmV3RGVzY3JpcHRpb24gIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvRGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbn07XG4gICAgICAgIGlmKG5ld0RhdGUgIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvRHVlRGF0ZSA9IG5ld0RhdGV9O1xuICAgICAgICBpZihuZXdQcmlvcml0eSAhPT0gbnVsbCl7YXJyYXlUb2Rvc1tvbGRUb2RvSW5kZXhdLnRvZG9Qcmlvcml0eSA9IG5ld1ByaW9yaXR5fTtcbiAgICAgICAgaWYobmV3UHJvamVjdCAhPT0gbnVsbCl7YXJyYXlUb2Rvc1tvbGRUb2RvSW5kZXhdLnRvZG9Qcm9qZWN0ID0gbmV3UHJvamVjdH07XG4gICAgICAgIGlmKG5ld0NoZWNrZWQgIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvQ2hlY2tlZCA9IG5ld0NoZWNrZWR9OyBcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUb2RvU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlUb2Rvc1NlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeShhcnJheVRvZG9zKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRvZG9zJywgYXJyYXlUb2Rvc1NlcmlhbGl6ZWQpO1xuICAgIH1cbiAgICBjb25zdCByZXRyaWV2ZVRvZG9TdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBhcnJheVRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVG9kb3MnKSk7XG4gICAgICAgIGlmKGFycmF5VG9kb3MgPT09IG51bGwpe2FycmF5VG9kb3MgPSBbXX1cbiAgICB9XG5cbiAgICByZXR1cm4ge2dldEFycmF5VG9kb3MsIGFkZFRvZG8sIHJlbW92ZVRvZG8sIHVwZGF0ZVRvZG8sIHVwZGF0ZVRvZG9TdG9yYWdlLCByZXRyaWV2ZVRvZG9TdG9yYWdlfVxufSkoKTtcblxuZXhwb3J0IHsgYWxsVG9kb3MgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSAnLi9zaWRlYmFyQ2F0LmpzJztcbmltcG9ydCB7IGFsbFRvZG9zIH0gZnJvbSAnLi90b2RvR2VuZXJhdG9yLmpzJztcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0R2VuZXJhdG9yJztcbmltcG9ydCB7IHJlbmRlckFsbFRvZG9zIH0gZnJvbSAnLi9hbGx0b2Rvc0RPTS5qcyc7XG5cbmNvbnNvbGUubG9nKGFsbFRvZG9zLmdldEFycmF5VG9kb3MoKSlcblxuXG4vL0dldCB0b2RvcyBhbmQgcHJvamVjdHMgZnJvbSBsb2NhbFN0b3JhZ2VcbmFsbFRvZG9zLnJldHJpZXZlVG9kb1N0b3JhZ2UoKTtcbmFsbFByb2plY3RzLnJldHJpZXZlUHJvamVjdFN0b3JhZ2UoKTtcblxuLy9Vbmxpa2UgdGhlIEFkZCBvciBDYXRlZ29yeSBvcHRpb25zLCB0aGUgcHJvamVjdHMgYXJlIGR5bmFtaWMgYW5kIG5lZWQgdG8gYmUgdW5pcXVlbHkgc2V0IHVwIHdoZW4gcGFnZSBsb2Fkc1xucmVuZGVyUHJvamVjdHMoKTtcblxuXG5cbi8vc29tZSBwbGFjZWhvbGRlciB0b2Rvc1xuLyphbGxUb2Rvcy5hZGRUb2RvKCdQYXkgVGF4ZXMnLCAnYWxsZWdlZGx5JywgJ1RvZGF5JywgJ0ltcG9ydGFudCcsICdTdHJlYW0nKTtcbmFsbFRvZG9zLmFkZFRvZG8oJ0dyb2NlcmllcycsICdnZXQgdGhlbSBncm9jZXJpZXMnLCAnVG9kYXknLCAnSW1wb3J0YW50JywgJ1dvcmsnKTtcbmFsbFRvZG9zLmFkZFRvZG8oJ1BheSBUYXhlcycsICdhbGxlZ2VkbHknLCAnbm90IHRvZGF5JywgJ0xvdycsICdTdHJlYW0nKTtcbmFsbFRvZG9zLmFkZFRvZG8oJ0dyb2NlcmllcycsICdnZXQgdGhlbSBncm9jZXJpZXMnLCAnVG9kYXknLCAnTm9uZScsICdXb3JrJyk7XG5hbGxUb2Rvcy5hZGRUb2RvKCdFeGNlcmNpc2UnLCAnYWxsZWdlZGx5JywgJ25vdCB0b2RheScsICdJbXBvcnRhbnQnLCAnU3RyZWFtJyk7XG5hbGxUb2Rvcy5hZGRUb2RvKCdHcm9jZXJpZXMnLCAnZ2V0IHRoZSBzdHVmZicsICdUb2RheScsICdNZWRpdW0nLCAnV29yaycpO1xuYWxsVG9kb3MuYWRkVG9kbygnR3JvY2VyaWVzJywgJ2dldCB0aGVtIGdyb2NlcmllcycsICdUb2RheScsICdOb25lJywgJ1ZhY2F0aW9uJyk7XG5hbGxUb2Rvcy5hZGRUb2RvKCdFeGNlcmNpc2UnLCAnYWxsZWdlZGx5JywgJ25vdCB0b2RheScsICdJbXBvcnRhbnQnLCAnVmFjYXRpb24nKTtcbmFsbFRvZG9zLmFkZFRvZG8oJ0dyb2NlcmllcycsICdnZXQgdGhlIHN0dWZmJywgJ1RvZGF5JywgJ01lZGl1bScsICdWYWNhdGlvbicpOyovXG5cblxuY29uc29sZS5sb2coYWxsVG9kb3MuZ2V0QXJyYXlUb2RvcygpKTtcblxuXG5cblxuXG5cbmNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=