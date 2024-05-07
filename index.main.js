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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzRCO0FBQ0g7QUFDRztBQUNDOzs7OztBQUtsRDtBQUNBLHVEQUFRO0FBQ1IsMERBQVc7O0FBRVg7QUFDQSw4REFBYzs7OztBQUlkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTs7O0FBRzlFLFlBQVksdURBQVE7Ozs7Ozs7QUFPcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FsbHRvZG9zRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0R2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyQ2F0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIDFmcjtcbn1cblxuZm9ybSBoMXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm92ZXJsYXksXG4ub3ZlcmxheVByb2plY3R7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDAsIDAsIDAuMSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuXG5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC41cmVtO1xufVxuXG5mb3JtPmRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKlRoZSBkaWZmZXJlbnQgaW5wdXQgYm94ZXMgZG9uJ3QgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgdW5sZXNzIEkgc2V0IGl0IGxpa2UgdGhpcyBmb3Igc29tZSByZWFzb24qL1xuaW5wdXQge1xuICAgIHdpZHRoOiAxMzZweDtcbiAgICBoZWlnaHQ6IDIycHg7XG59XG5pbnB1dFt0eXBlPSdkYXRlJ117XG4gICAgd2lkdGg6IDEzOXB4O1xuICAgIGhlaWdodDogMjRweDtcbn1cbnNlbGVjdCB7XG4gICAgd2lkdGg6IDE0NHB4O1xuICAgIGhlaWdodDogMjhweDtcbn1cblxuLm92ZXJsYXlCdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtV3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGhlaWdodDogMTdyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG4uZm9ybVdyYXBwZXIgbGFiZWx7XG4gICAgd2lkdGg6IDEwcmVtO1xufVxuXG5cblxuLnNpZGViYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogM3JlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4uY2F0ZWdvcmllc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5jYXR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNhdCBpbWd7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xufVxuXG4uYWRkVG9kbyxcbi5hZGRQcm9qZWN0LFxuLmNhdGVnb3JpZXMsXG4ucHJvamVjdHN7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qQWxsIFRvZG9zIFBhZ2UqL1xuLmFsbFRvZG9XcmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4udG9kb0FyZWF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgaGVpZ2h0OiA3cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgd2lkdGg6IDU1MHB4O1xufVxuXG4udGl0bGVEZXNjcmlwdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBLGlHQUFpRztBQUNqRztJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7SUFJSSxlQUFlO0FBQ25COzs7QUFHQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbSAxZnI7XFxufVxcblxcbmZvcm0gaDF7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm92ZXJsYXksXFxuLm92ZXJsYXlQcm9qZWN0e1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMywgMCwgMCwgMC4xKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuZm9ybT5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLypUaGUgZGlmZmVyZW50IGlucHV0IGJveGVzIGRvbid0IGhhdmUgdGhlIHNhbWUgaGVpZ2h0IHVubGVzcyBJIHNldCBpdCBsaWtlIHRoaXMgZm9yIHNvbWUgcmVhc29uKi9cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiAxMzZweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5pbnB1dFt0eXBlPSdkYXRlJ117XFxuICAgIHdpZHRoOiAxMzlweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5zZWxlY3Qge1xcbiAgICB3aWR0aDogMTQ0cHg7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuLm92ZXJsYXlCdXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtV3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMTdyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5mb3JtV3JhcHBlciBsYWJlbHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbn1cXG5cXG5cXG5cXG4uc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDE1NTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5jYXRlZ29yaWVze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmNhdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2F0IGltZ3tcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxufVxcblxcbi5hZGRUb2RvLFxcbi5hZGRQcm9qZWN0LFxcbi5jYXRlZ29yaWVzLFxcbi5wcm9qZWN0c3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKkFsbCBUb2RvcyBQYWdlKi9cXG4uYWxsVG9kb1dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4udG9kb0FyZWF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgaGVpZ2h0OiA3cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHdpZHRoOiA1NTBweDtcXG59XFxuXFxuLnRpdGxlRGVzY3JpcHRpb257XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhbGxUb2RvcyB9IGZyb20gXCIuL3RvZG9HZW5lcmF0b3IuanNcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkocHJvcGVydHlDbGFzc05hbWUsIHByb3BlcnR5SWRlbnRpZmllciwgcHJvcGVydHlWYWx1ZSwgcGFyZW50KXtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb3BlcnR5LmNsYXNzTGlzdC5hZGQocHJvcGVydHlDbGFzc05hbWUpO1xuICAgIHByb3BlcnR5LnRleHRDb250ZW50ID0gcHJvcGVydHlJZGVudGlmaWVyICsgcHJvcGVydHlWYWx1ZTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvcGVydHkpO1xufVxuXG4vL0ZvciBSZW5kZXJpbmcgYW55IHNwZWNpZmljIHNldCBvZiB0b2Rvc1xuZnVuY3Rpb24gcmVuZGVyQWxsVG9kb3MoYXJyYXlUb2Rvcyl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsbFRvZG9XcmFwcGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIGFycmF5VG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0FyZWEuY2xhc3NMaXN0LmFkZCgndG9kb0FyZWEnKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvQXJlYSk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RpdGxlRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQodGl0bGVEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICAgICAgdG9kb0FyZWEuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9UaXRsZScsICcnLHRvZG8udG9kb1RpdGxlLCB0aXRsZURlc2NyaXB0aW9uKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9EZXNjcmlwdGlvbicsICcnLHRvZG8udG9kb0Rlc2NyaXB0aW9uLCB0aXRsZURlc2NyaXB0aW9uKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9EdWVEYXRlJywgJ0R1ZTogJyx0b2RvLnRvZG9EdWVEYXRlLCBkZXRhaWxzKTtcbiAgICAgICAgZ2VuZXJhdGVET01Ub2RvUHJvcGVydHkoJ3RvZG9Qcmlvcml0eScsICdQcmlvcml0eTogJyx0b2RvLnRvZG9Qcmlvcml0eSwgZGV0YWlscyk7XG4gICAgICAgIGdlbmVyYXRlRE9NVG9kb1Byb3BlcnR5KCd0b2RvUHJvamVjdCcsICdQcm9qZWN0OiAnLHRvZG8udG9kb1Byb2plY3QsIGRldGFpbHMpO1xuICAgICAgICBnZW5lcmF0ZURPTVRvZG9Qcm9wZXJ0eSgndG9kb0NoZWNrZWQnLCAnQ29tcGxldGVkOiAnLHRvZG8udG9kb0NoZWNrZWQsIGRldGFpbHMpO1xuICAgIH0pO1xufVxuXG5cblxuZXhwb3J0IHsgcmVuZGVyQWxsVG9kb3MgfSIsImltcG9ydCBcIi4vdG9kb0dlbmVyYXRvci5qc1wiO1xuXG5cbmNvbnN0IGFsbFByb2plY3RzID0gKGZ1bmN0aW9uKCl7XG4gICAgbGV0IGFsbFByb2plY3RzQXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudFByb2plY3ROYW1lID0gJyc7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0QXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge3JldHVybiBhbGxQcm9qZWN0c0FycmF5fTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGFsbFByb2plY3RzQXJyYXkuc29ydCgpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0U3RvcmFnZSgpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBhbGxQcm9qZWN0c0FycmF5LnNwbGljZShhbGxQcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdE5hbWUpLCAxKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHtyZXR1cm4gY3VycmVudFByb2plY3RBcnJheX07XG4gICAgY29uc3Qgc2V0Q3VycmVudFByb2plY3ROYW1lID0gKHByb2plY3ROYW1lKSA9PiB7Y3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWV9O1xuICAgIGNvbnN0IGdlbmVyYXRlQ3VycmVudFByb2plY3QgPSAoYXJyYXlUb2RvcykgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdEFycmF5ID0gYXJyYXlUb2Rvcy5maWx0ZXIoZnVuY3Rpb24odG9kbyl7XG4gICAgICAgICAgICByZXR1cm4gdG9kby50b2RvUHJvamVjdCA9PT0gY3VycmVudFByb2plY3ROYW1lO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheVByb2plY3RzU2VyaWFsaXplZCA9IEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzQXJyYXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkUHJvamVjdHMnLCBhcnJheVByb2plY3RzU2VyaWFsaXplZCk7XG4gICAgfVxuICAgIGNvbnN0IHJldHJpZXZlUHJvamVjdFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGFsbFByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRQcm9qZWN0cycpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgc2V0Q3VycmVudFByb2plY3ROYW1lLCBnZW5lcmF0ZUN1cnJlbnRQcm9qZWN0LCB1cGRhdGVQcm9qZWN0U3RvcmFnZSwgcmV0cmlldmVQcm9qZWN0U3RvcmFnZX1cbn0pKCk7XG5cbi8vQWRkaW5nIHNvbWUgcHJvamVjdHMgZm9yIHBsYWNlaG9sZGVyIHB1cnBvc2VzOlxuLyphbGxQcm9qZWN0cy5hZGRQcm9qZWN0KCdXb3JrJyk7XG5hbGxQcm9qZWN0cy5hZGRQcm9qZWN0KCdWYWNhdGlvbicpO1xuYWxsUHJvamVjdHMuYWRkUHJvamVjdCgnU3RyZWFtJyk7XG5hbGxQcm9qZWN0cy5hZGRQcm9qZWN0KCdIb3BlcyBhbmQgRHJlYW1zJyk7XG5jb25zb2xlLmxvZyhhbGxQcm9qZWN0cy5nZXRQcm9qZWN0cygpKTsqL1xuXG5cbmV4cG9ydCB7IGFsbFByb2plY3RzIH07IiwiaW1wb3J0IHN1biBmcm9tICcuL2ltYWdlcy9zdW4uc3ZnJztcbmltcG9ydCBjYWxlbmRlciBmcm9tICcuL2ltYWdlcy9jYWxlbmRlci5zdmcnO1xuaW1wb3J0IHBhcnR5IGZyb20gJy4vaW1hZ2VzL3BhcnR5LnN2Zyc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2ltYWdlcy9saXN0LnN2Zyc7XG5pbXBvcnQgcGx1cyBmcm9tICcuL2ltYWdlcy9wbHVzLnN2Zyc7XG5pbXBvcnQgeyBhbGxUb2RvcyB9IGZyb20gJy4vdG9kb0dlbmVyYXRvci5qcyc7XG5pbXBvcnQgeyByZW5kZXJBbGxUb2RvcyB9IGZyb20gJy4vYWxsdG9kb3NET00uanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0LCBhbGxQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdEdlbmVyYXRvci5qcyc7XG5cbi8vRE9NIHNldHVwIGZvciB0aGUgc2lkZWJhclxuZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkocGFyZW50LCBjbGFzc05hbWUsIGNhdE5hbWUsIGltYWdlTmFtZSl7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHBhcmVudDtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2NhdCcpO1xuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBjYXRlZ29yaWVzLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VOYW1lO1xuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NhdE5hbWUnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gY2F0TmFtZTtcbiAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChuYW1lKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheShvdmVybGF5Q2xhc3Mpe1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG92ZXJsYXlDbGFzcyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKXtcbiAgICBjb25zdCBwcm9qZWN0c0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIHByb2plY3RzRE9NLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IGFsbFByb2plY3RzLmdldFByb2plY3RzKCk7XG4gICAgY3VycmVudFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgcHJvamVjdHNET00uYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgXG4gICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWxsUHJvamVjdHMuc2V0Q3VycmVudFByb2plY3ROYW1lKHByb2plY3QpO1xuICAgICAgICBhbGxQcm9qZWN0cy5nZW5lcmF0ZUN1cnJlbnRQcm9qZWN0KGFsbFRvZG9zLmdldEFycmF5VG9kb3MoKSk7XG4gICAgICAgIHJlbmRlckFsbFRvZG9zKGFsbFByb2plY3RzLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgIH0pXG59KX1cblxuZnVuY3Rpb24gb3ZlcmxheUJ1dHRvblNldHVwKCl7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbEJ1dHRvbicpO1xuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlT3ZlcmxheSgnLm92ZXJsYXknKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRm9ybScpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSlcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbFByb2plY3RCdXR0b24nKTtcbiAgICBjYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVPdmVybGF5KCcub3ZlcmxheVByb2plY3QnKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdXR0b24nKTtcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcblxuICAgICAgICBhbGxUb2Rvcy5hZGRUb2RvKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUsIHByb2plY3QudmFsdWUpXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICByZW5kZXJBbGxUb2RvcyhhbGxUb2Rvcy5nZXRBcnJheVRvZG9zKCkpO1xuICAgIH0pXG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdXR0b24nKTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICAgICAgYWxsUHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0RmllbGQudmFsdWUpO1xuICAgICAgICAvL1JlbmRlcmluZyB0aGUgUHJvamVjdHMgaW4gdGhlIHNpZGViYXIgZ29lcyBoZXJlXG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkVGFza3MoKXtcbiAgICBjcmVhdGVDYXRlZ29yeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza3MnKSwgJ2FkZFRvZG8nLCAnQWRkIFRvLURvJywgcGx1cyk7XG4gICAgY29uc3QgYnV0dG9uVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUb2RvJyk7XG4gICAgYnV0dG9uVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9uZWVkIHRvIGdlbmVyYXRlIHRoZSBkcm9wZG93biBvZiB0aGUgY3VycmVudCBzZWxlY3Rpb24gb2YgcHJvamVjdHNcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGFsbFByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICAgICAgcHJvamVjdElucHV0cy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KVxuICAgICAgICB0b2dnbGVPdmVybGF5KCcub3ZlcmxheScpXG4gICAgfSk7XG5cbiAgICBjcmVhdGVDYXRlZ29yeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza3MnKSwgJ2FkZFByb2plY3QnLCAnQWRkIFByb2plY3QnLCBwbHVzKTtcbiAgICBjb25zdCBidXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QnKTtcbiAgICBidXR0b25Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3RvZ2dsZU92ZXJsYXkoJy5vdmVybGF5UHJvamVjdCcpfSk7XG5cbiAgICBvdmVybGF5QnV0dG9uU2V0dXAoKTtcbn1cblxuZnVuY3Rpb24gY2F0ZWdvcnlTZXR1cCgpe1xuICAgIGNyZWF0ZUNhdGVnb3J5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyksICdhbGwnLCAnQWxsIFRvLURvcycsIGxpc3QpO1xuICAgIGNvbnN0IGFsbFRvZG9zQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuICAgIGFsbFRvZG9zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3JlbmRlckFsbFRvZG9zKGFsbFRvZG9zLmdldEFycmF5VG9kb3MoKSl9KVxuXG4gICAgY3JlYXRlQ2F0ZWdvcnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKSwgJ3RvZGF5JywgJ1RvZGF5Jywgc3VuKTtcbiAgICBjcmVhdGVDYXRlZ29yeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpLCAnd2VlaycsICdUaGlzIFdlZWsnLCBjYWxlbmRlcik7XG4gICAgY3JlYXRlQ2F0ZWdvcnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKSwgJ3NwZWNpYWwnLCAnU3BlY2lhbCBFdmVudHMnLCBwYXJ0eSk7XG59XG5cbnJlbmRlckFkZFRhc2tzKCk7XG5jYXRlZ29yeVNldHVwKCk7XG5cbmV4cG9ydCB7IHJlbmRlclByb2plY3RzIH1cblxuXG4iLCJjb25zdCBhbGxUb2RvcyA9IChmdW5jdGlvbigpe1xuICAgIGxldCBhcnJheVRvZG9zID0gW107XG5cbiAgICBmdW5jdGlvbiBuZXdUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3Qpe1xuICAgICAgICBsZXQgdG9kb1RpdGxlID0gdGl0bGU7XG4gICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IHRvZG9EdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBsZXQgdG9kb1Byb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBsZXQgdG9kb0NoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4ge3RvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCB0b2RvUHJvamVjdCwgdG9kb0NoZWNrZWR9O1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFycmF5VG9kb3MgPSAoKSA9PiB7cmV0dXJuIGFycmF5VG9kb3N9O1xuICAgIGNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICAgICAgYXJyYXlUb2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBhbGxUb2Rvcy51cGRhdGVUb2RvU3RvcmFnZSgpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGFycmF5VG9kb3Muc3BsaWNlKGluZGV4T2YodG9kbywgMSkpO1xuICAgICAgICB1cGRhdGVUb2RvU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIC8vc2V0IHZhbHVlIHRvIG51bGwgaWYgdW5jaGFuZ2VkXG4gICAgY29uc3QgdXBkYXRlVG9kbyA9IChvbGRUb2RvSW5kZXgsIG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RGF0ZSwgbmV3UHJpb3JpdHksIG5ld1Byb2plY3QsIG5ld0NoZWNrZWQpID0+IHtcbiAgICAgICAgaWYobmV3VGl0bGUgIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvVGl0bGUgPSBuZXdUaXRsZX07XG4gICAgICAgIGlmKG5ld0Rlc2NyaXB0aW9uICE9PSBudWxsKXthcnJheVRvZG9zW29sZFRvZG9JbmRleF0udG9kb0Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb259O1xuICAgICAgICBpZihuZXdEYXRlICE9PSBudWxsKXthcnJheVRvZG9zW29sZFRvZG9JbmRleF0udG9kb0R1ZURhdGUgPSBuZXdEYXRlfTtcbiAgICAgICAgaWYobmV3UHJpb3JpdHkgIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvUHJpb3JpdHkgPSBuZXdQcmlvcml0eX07XG4gICAgICAgIGlmKG5ld1Byb2plY3QgIT09IG51bGwpe2FycmF5VG9kb3Nbb2xkVG9kb0luZGV4XS50b2RvUHJvamVjdCA9IG5ld1Byb2plY3R9O1xuICAgICAgICBpZihuZXdDaGVja2VkICE9PSBudWxsKXthcnJheVRvZG9zW29sZFRvZG9JbmRleF0udG9kb0NoZWNrZWQgPSBuZXdDaGVja2VkfTsgXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVG9kb1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5VG9kb3NTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoYXJyYXlUb2Rvcyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUb2RvcycsIGFycmF5VG9kb3NTZXJpYWxpemVkKTtcbiAgICB9XG4gICAgY29uc3QgcmV0cmlldmVUb2RvU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgYXJyYXlUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRvZG9zJykpO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0QXJyYXlUb2RvcywgYWRkVG9kbywgcmVtb3ZlVG9kbywgdXBkYXRlVG9kbywgdXBkYXRlVG9kb1N0b3JhZ2UsIHJldHJpZXZlVG9kb1N0b3JhZ2V9XG59KSgpO1xuXG5leHBvcnQgeyBhbGxUb2RvcyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tICcuL3NpZGViYXJDYXQuanMnO1xuaW1wb3J0IHsgYWxsVG9kb3MgfSBmcm9tICcuL3RvZG9HZW5lcmF0b3IuanMnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RHZW5lcmF0b3InO1xuaW1wb3J0IHsgcmVuZGVyQWxsVG9kb3MgfSBmcm9tICcuL2FsbHRvZG9zRE9NLmpzJztcblxuXG5cblxuLy9HZXQgdG9kb3MgYW5kIHByb2plY3RzIGZyb20gbG9jYWxTdG9yYWdlXG5hbGxUb2Rvcy5yZXRyaWV2ZVRvZG9TdG9yYWdlKCk7XG5hbGxQcm9qZWN0cy5yZXRyaWV2ZVByb2plY3RTdG9yYWdlKCk7XG5cbi8vVW5saWtlIHRoZSBBZGQgb3IgQ2F0ZWdvcnkgb3B0aW9ucywgdGhlIHByb2plY3RzIGFyZSBkeW5hbWljIGFuZCBuZWVkIHRvIGJlIHVuaXF1ZWx5IHNldCB1cCB3aGVuIHBhZ2UgbG9hZHNcbnJlbmRlclByb2plY3RzKCk7XG5cblxuXG4vL3NvbWUgcGxhY2Vob2xkZXIgdG9kb3Ncbi8qYWxsVG9kb3MuYWRkVG9kbygnUGF5IFRheGVzJywgJ2FsbGVnZWRseScsICdUb2RheScsICdJbXBvcnRhbnQnLCAnU3RyZWFtJyk7XG5hbGxUb2Rvcy5hZGRUb2RvKCdHcm9jZXJpZXMnLCAnZ2V0IHRoZW0gZ3JvY2VyaWVzJywgJ1RvZGF5JywgJ0ltcG9ydGFudCcsICdXb3JrJyk7XG5hbGxUb2Rvcy5hZGRUb2RvKCdQYXkgVGF4ZXMnLCAnYWxsZWdlZGx5JywgJ25vdCB0b2RheScsICdMb3cnLCAnU3RyZWFtJyk7XG5hbGxUb2Rvcy5hZGRUb2RvKCdHcm9jZXJpZXMnLCAnZ2V0IHRoZW0gZ3JvY2VyaWVzJywgJ1RvZGF5JywgJ05vbmUnLCAnV29yaycpO1xuYWxsVG9kb3MuYWRkVG9kbygnRXhjZXJjaXNlJywgJ2FsbGVnZWRseScsICdub3QgdG9kYXknLCAnSW1wb3J0YW50JywgJ1N0cmVhbScpO1xuYWxsVG9kb3MuYWRkVG9kbygnR3JvY2VyaWVzJywgJ2dldCB0aGUgc3R1ZmYnLCAnVG9kYXknLCAnTWVkaXVtJywgJ1dvcmsnKTtcbmFsbFRvZG9zLmFkZFRvZG8oJ0dyb2NlcmllcycsICdnZXQgdGhlbSBncm9jZXJpZXMnLCAnVG9kYXknLCAnTm9uZScsICdWYWNhdGlvbicpO1xuYWxsVG9kb3MuYWRkVG9kbygnRXhjZXJjaXNlJywgJ2FsbGVnZWRseScsICdub3QgdG9kYXknLCAnSW1wb3J0YW50JywgJ1ZhY2F0aW9uJyk7XG5hbGxUb2Rvcy5hZGRUb2RvKCdHcm9jZXJpZXMnLCAnZ2V0IHRoZSBzdHVmZicsICdUb2RheScsICdNZWRpdW0nLCAnVmFjYXRpb24nKTsqL1xuXG5cbmNvbnNvbGUubG9nKGFsbFRvZG9zLmdldEFycmF5VG9kb3MoKSk7XG5cblxuXG5cblxuXG5jb25zb2xlLmxvZygndGVzdCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9