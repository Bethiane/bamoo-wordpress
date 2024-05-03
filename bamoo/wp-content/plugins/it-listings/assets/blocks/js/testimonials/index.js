/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/blocks/jsx/testimonials/index.js":
/*!*************************************************!*\
  !*** ./assets/blocks/jsx/testimonials/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attsContext: () => (/* binding */ attsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title */ "./assets/blocks/jsx/testimonials/title.js");
/* harmony import */ var _testimonials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimonials */ "./assets/blocks/jsx/testimonials/testimonials.js");
/* harmony import */ var _inc_blocks_testimonials_block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../inc/blocks/testimonials/block.json */ "./inc/blocks/testimonials/block.json");








const attsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
let registered = false;
const slug = 'it-listings/testimonials';
const blockData = {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "enable-background": "new 0 0 24 24",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      fill: "#000000"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M0,0h24v24H0V0z",
      fill: "none"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
      points: "12,15 13.57,11.57 17,10 13.57,8.43 12,5 10.43,8.43 7,10 10.43,11.57"
    }))))
  },
  edit: ({
    attributes,
    setAttributes
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(attsContext.Provider, {
      value: {
        attributes,
        setAttributes
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
        className: 'itre-editor-testimonials'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_title__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_testimonials__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  },
  save: () => null,
  ..._inc_blocks_testimonials_block_json__WEBPACK_IMPORTED_MODULE_6__
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(slug, blockData);

// Subscribe to State Changes
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.subscribe)(() => {
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/block-editor').getBlocks();
  if (!(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/editor')) {
    return;
  }
  const template = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/editor').getEditedPostAttribute('template');
  if (template === undefined) {
    return;
  }
  if (template === 'template-property-listings.php' && registered === false) {
    registered = true;
    if ((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockType)(slug)) {
      return;
    }
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(slug, blockData);
  }
  if (template !== 'template-property-listings.php') {
    if (blocks.length !== 0) {
      const filteredBlocks = blocks.filter(block => block.name === slug);
      filteredBlocks.forEach(block => {
        const {
          clientId
        } = block;
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/editor').removeBlock(clientId);
      });
    }
    if ((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockType)(slug)) {
      (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockType)(slug);
      registered = false;
    }
  }
});

/***/ }),

/***/ "./assets/blocks/jsx/testimonials/testimonials.js":
/*!********************************************************!*\
  !*** ./assets/blocks/jsx/testimonials/testimonials.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./assets/blocks/jsx/testimonials/index.js");






const Testimonials = () => {
  const {
    attributes,
    setAttributes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_4__.attsContext);
  let allTestimonials = [];
  allTestimonials = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select('core').getEntityRecords('postType', 'testimonial', {
    per_page: -1
  }), []);
  const {
    testimonials
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Testimonials"),
    multiple: true,
    autoFocus: true,
    value: testimonials,
    onChange: value => {
      setAttributes({
        testimonials: [...value]
      });
    }
  }, allTestimonials !== null && allTestimonials.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: item.id
    }, item.title.rendered);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

/***/ }),

/***/ "./assets/blocks/jsx/testimonials/title.js":
/*!*************************************************!*\
  !*** ./assets/blocks/jsx/testimonials/title.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./assets/blocks/jsx/testimonials/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const Title = () => {
  const {
    attributes,
    setAttributes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index__WEBPACK_IMPORTED_MODULE_2__.attsContext);
  const {
    title
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Testimonials")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Title",
    value: title,
    onChange: value => setAttributes({
      title: value
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./inc/blocks/testimonials/block.json":
/*!********************************************!*\
  !*** ./inc/blocks/testimonials/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"it-listings/testimonials","title":"Testimonials","description":"Featured area to showcase testimonials from clients","category":"it-listings","keywords":["testimonials","reviews","users","ratings","property"],"attributes":{"title":{"type":"string","default":""},"align":{"type":"string","default":"center"},"testimonials":{"type":"array","default":[]}},"supports":{"align":["full","wide"],"alignWide":true},"editorStyle":"itre-editor-testimonials-css","style":["itre-swiper-css","itre-testimonials-css"],"editorScript":"itre-testimonials-js","viewScript":["itre-swiper-js","itre-front.testimonials-js"],"render":"./testimonials.php"}');

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/blocks/jsx/testimonials/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map