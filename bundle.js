/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  /*background: url('../../dist/images/park.jpg') center/cover;*/
  /*height: 100vh;*/
  /*width: 100%;*/
  /*margin: auto;*/

}

.nav {
  background-color: var(--secondary-accent-color);
  height: 48px;
  width: 100%;
  position: relative;
  text-align: center;
  /*margin: auto;*/
}

.mainWrapper {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  display: block;
}

.insideView {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  overflow-y: auto;
  padding-right: 150px;
  text-align: center;
}

.dogIcon {
  width: 30px;
  margin: 10px;
  margin-left: 5px;
  float: left;
}

.options{
  color: #FFFFFF;
  font-family: "Raleway", sans-serif;
  position: relative;
  float: right;
  margin-right: 50px;
  margin-top: 12px;
  font-weight: 500;
  font-size: 20px;
}



.how{
}

.what{
margin-left: 30px;
  margin-right: 30px;
}

.facts{
}

.mainPup{
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover;
  text-align: center;
  height: 500px;
  padding-top: 47px;
}

.hereDog{
  display: block;
  color: #000000;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  padding-bottom: 30px;


}

.mainPupIcon{
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-color:  #3F8DA8;
  border-style: solid;
  border-width: 5px;
}

.whatAreDogs {
  font-family: "Raleway", sans-serif;
  text-align: center;
  color: #3F8DA8;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  width: 128px;
  height: 30px;
  border-color: #3F8DA8;
  border-style: solid;
  border-width: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;

}


.parentDiv {
  margin-top: -130px;
  z-index: 10;
}

.lowerSection {
  margin-top: 150px;
  text-align: center;
}

.indPups{
  display: inline-block;
  position: relative;
  margin-top: 10px;
  max-width: 540px;

}
.headingLowerSection{
  display: block;
  font-family: "Raleway", sans-serif;
  font-size: 30px;
  font-weight: 200;
  margin-top: 45px;
  margin-bottom: 28px;

}
.lowerSectionPup{

  display: block;
  margin-left: auto;
  margin-right: auto;
  border-color: #3F8DA8;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  width: 179px;
}

.lowerDiscription{
  font-family: "Raleway", sans-serif;
}
.lowerButton{
  margin-top: 100px;
  background-color: #FFFFFF;
  color: #3F8DA8;
  width: 128px;
  height: 30px;
  border-color: #3F8DA8;
  border-style: solid;
  border-width: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  margin-right: auto;
  margin-left: auto;
  font-size: larger;
}

.bottomSection{
  margin-top: 50px;
  text-align: center;
  background-color: #3F8DA8;
}
.learnAboutDogsOnlineSection{
  display: block;
  padding-top: 18px;
  font-family: "Raleway", sans-serif;
  color: #FFFFFF;
  font-size: 25px;
  font-weight: 100;

}
.sMIG{
  display: inline-block;
  padding-top: 37px;

}
.twitter{
  padding-left: 47px;
  padding-right: 47px;
}
.instagram{
  padding-right: 47px;
}

.gitHubLink{
  display: block;
  font-family: "Raleway", sans-serif;
  color: #F9FCFC;
  text-decoration: underline;
  font-size: 25px;
  padding-top: 25px;

}
.spacer {
  display: block;
height: 50px;
}

`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA;EACE,8DAA8D;EAC9D,iBAAiB;EACjB,eAAe;EACf,gBAAgB;;AAElB;;AAEA;EACE,+CAA+C;EAC/C,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,MAAM;EACN,QAAQ;EACR,OAAO;EACP,SAAS;EACT,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB;;;;AAIA;AACA;;AAEA;AACA,iBAAiB;EACf,kBAAkB;AACpB;;AAEA;AACA;;AAEA;EACE,gEAA0D;EAC1D,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;EACf,oBAAoB;;;AAGtB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;;AAElB;;;AAGA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;;AAElB;AACA;EACE,cAAc;EACd,kCAAkC;EAClC,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;;AAErB;AACA;;EAEE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kCAAkC;AACpC;AACA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,kCAAkC;EAClC,cAAc;EACd,eAAe;EACf,gBAAgB;;AAElB;AACA;EACE,qBAAqB;EACrB,iBAAiB;;AAEnB;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,cAAc;EACd,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;;AAEnB;AACA;EACE,cAAc;AAChB,YAAY;AACZ","sourcesContent":["@import 'variables';\n\nbody {\n  /*background: url('../../dist/images/park.jpg') center/cover;*/\n  /*height: 100vh;*/\n  /*width: 100%;*/\n  /*margin: auto;*/\n\n}\n\n.nav {\n  background-color: var(--secondary-accent-color);\n  height: 48px;\n  width: 100%;\n  position: relative;\n  text-align: center;\n  /*margin: auto;*/\n}\n\n.mainWrapper {\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  display: block;\n}\n\n.insideView {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: relative;\n  overflow-y: auto;\n  padding-right: 150px;\n  text-align: center;\n}\n\n.dogIcon {\n  width: 30px;\n  margin: 10px;\n  margin-left: 5px;\n  float: left;\n}\n\n.options{\n  color: #FFFFFF;\n  font-family: \"Raleway\", sans-serif;\n  position: relative;\n  float: right;\n  margin-right: 50px;\n  margin-top: 12px;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n\n\n.how{\n}\n\n.what{\nmargin-left: 30px;\n  margin-right: 30px;\n}\n\n.facts{\n}\n\n.mainPup{\n  background: url('../../dist/images/park.jpg') center/cover;\n  text-align: center;\n  height: 500px;\n  padding-top: 47px;\n}\n\n.hereDog{\n  display: block;\n  color: #000000;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  padding-bottom: 30px;\n\n\n}\n\n.mainPupIcon{\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-color:  #3F8DA8;\n  border-style: solid;\n  border-width: 5px;\n}\n\n.whatAreDogs {\n  font-family: \"Raleway\", sans-serif;\n  text-align: center;\n  color: #3F8DA8;\n  background-color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  flex-direction: column-reverse;\n  width: 128px;\n  height: 30px;\n  border-color: #3F8DA8;\n  border-style: solid;\n  border-width: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 25px;\n\n}\n\n\n.parentDiv {\n  margin-top: -130px;\n  z-index: 10;\n}\n\n.lowerSection {\n  margin-top: 150px;\n  text-align: center;\n}\n\n.indPups{\n  display: inline-block;\n  position: relative;\n  margin-top: 10px;\n  max-width: 540px;\n\n}\n.headingLowerSection{\n  display: block;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 30px;\n  font-weight: 200;\n  margin-top: 45px;\n  margin-bottom: 28px;\n\n}\n.lowerSectionPup{\n\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-color: #3F8DA8;\n  border-style: solid;\n  border-width: 5px;\n  border-radius: 50%;\n  width: 179px;\n}\n\n.lowerDiscription{\n  font-family: \"Raleway\", sans-serif;\n}\n.lowerButton{\n  margin-top: 100px;\n  background-color: #FFFFFF;\n  color: #3F8DA8;\n  width: 128px;\n  height: 30px;\n  border-color: #3F8DA8;\n  border-style: solid;\n  border-width: 5px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column-reverse;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: larger;\n}\n\n.bottomSection{\n  margin-top: 50px;\n  text-align: center;\n  background-color: #3F8DA8;\n}\n.learnAboutDogsOnlineSection{\n  display: block;\n  padding-top: 18px;\n  font-family: \"Raleway\", sans-serif;\n  color: #FFFFFF;\n  font-size: 25px;\n  font-weight: 100;\n\n}\n.sMIG{\n  display: inline-block;\n  padding-top: 37px;\n\n}\n.twitter{\n  padding-left: 47px;\n  padding-right: 47px;\n}\n.instagram{\n  padding-right: 47px;\n}\n\n.gitHubLink{\n  display: block;\n  font-family: \"Raleway\", sans-serif;\n  color: #F9FCFC;\n  text-decoration: underline;\n  font-size: 25px;\n  padding-top: 25px;\n\n}\n.spacer {\n  display: block;\nheight: 50px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-accent-color: #3F8DA8;
  --secondary-accent-color: #92E0E5;
  --main-text-color: #555555;
  --secondary-text-color: #4D93AE;
}


`, "",{"version":3,"sources":["webpack://./src/css/variables.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,iCAAiC;EACjC,0BAA0B;EAC1B,+BAA+B;AACjC","sourcesContent":[":root {\n  --main-accent-color: #3F8DA8;\n  --secondary-accent-color: #92E0E5;\n  --main-text-color: #555555;\n  --secondary-text-color: #4D93AE;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/park-c9a12750e1e9a8b3063f.jpg";

/***/ })
/******/ 	]);
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


console.log('hi')
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map