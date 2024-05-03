/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/blocks/jsx/featured-types/index.js":
/*!***************************************************!*\
  !*** ./assets/blocks/jsx/featured-types/index.js ***!
  \***************************************************/
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
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section */ "./assets/blocks/jsx/featured-types/section.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title */ "./assets/blocks/jsx/featured-types/title.js");
/* harmony import */ var _inc_blocks_featured_types_block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../inc/blocks/featured-types/block.json */ "./inc/blocks/featured-types/block.json");








let registered = false;
const slug = 'it-listings/featured-types';
const attsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const blockData = {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "enable-background": "new 0 0 24 24",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      fill: "#000000"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      fill: "none",
      height: "24",
      width: "24"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z"
    }))))
  },
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      sections
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
        className: 'itre-editor-featured-types section'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(attsContext.Provider, {
      value: {
        attributes,
        setAttributes
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_title__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "itre-editor-featured-types__sections"
    }, sections.map(section => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      order: section.order
    })))));
  },
  save: () => null,
  ..._inc_blocks_featured_types_block_json__WEBPACK_IMPORTED_MODULE_6__
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

/***/ "./assets/blocks/jsx/featured-types/section.js":
/*!*****************************************************!*\
  !*** ./assets/blocks/jsx/featured-types/section.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./assets/blocks/jsx/featured-types/index.js");







const ALLOWED_TYPES = ['image'];
const Section = ({
  order
}) => {
  const {
    attributes,
    setAttributes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index__WEBPACK_IMPORTED_MODULE_5__.attsContext);
  const {
    sections
  } = attributes;
  const section = sections.filter(item => item['order'] === order)[0];
  const allTerms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core').getEntityRecords('taxonomy', 'property-type', {
    per_page: -1
  }));
  const onSelectMedia = media => {
    const newSections = sections.map(item => item['order'] === order ? {
      ...item,
      mediaId: media.id
    } : item);
    return setAttributes({
      sections: newSections
    });
  };
  const image = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => section.mediaId !== 0 ? select('core').getMedia(section.mediaId) : {}, [section]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "itre-editor-featured-types__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, allTerms !== null && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Property Type"),
    value: section['type'],
    onChange: value => {
      const newSections = sections.map(item => item['order'] === order ? {
        ...item,
        type: parseInt(value)
      } : item);
      setAttributes({
        sections: newSections
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: 0
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Property Type")), allTerms.map(term => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: term.id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(term.name))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    allowed: ALLOWED_TYPES,
    multiple: false,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, section.mediaId === 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        class: "dashicons dashicons-format-image"
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        class: "placeholder-text"
      }, "Image")), image !== undefined && Object.keys(image).length !== 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ResponsiveWrapper, {
        naturalWidth: image.media_details.width,
        naturalHeight: image.media_details.height
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: image.source_url
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: image === undefined || Object.keys(image).length === 0 ? 'is-primary' : 'is-secondary',
        onClick: open
      }, section.mediaId === 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Choose an Image', 'it-listings') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Image', 'it-listings'))));
    },
    value: section['mediaId'],
    onSelect: onSelectMedia
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./assets/blocks/jsx/featured-types/title.js":
/*!***************************************************!*\
  !*** ./assets/blocks/jsx/featured-types/title.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./assets/blocks/jsx/featured-types/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const Title = () => {
  const {
    attributes,
    setAttributes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index__WEBPACK_IMPORTED_MODULE_2__.attsContext);
  const {
    title,
    description
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Featured Property Types")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Title",
    value: title,
    onChange: value => setAttributes({
      title: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Description",
    value: description,
    onChange: value => setAttributes({
      description: value
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

/***/ "./inc/blocks/featured-types/block.json":
/*!**********************************************!*\
  !*** ./inc/blocks/featured-types/block.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"it-listings/featured-types","title":"Featured Property Types","description":"Featured Area to showcase properties based on type - Apartment, Studio,z Villa etc.","category":"it-listings","keywords":["featured area","properties","categories","types","property"],"attributes":{"title":{"type":"string","default":""},"description":{"type":"string","default":""},"align":{"type":"string","default":"center"},"sections":{"type":"array","default":[{"order":1,"mediaId":0,"type":0,"label":""},{"order":2,"mediaId":0,"type":0,"label":""},{"order":3,"mediaId":0,"type":0,"label":""},{"order":4,"mediaId":0,"type":0,"label":""}]}},"supports":{"align":["full","wide"],"alignWide":true},"editorStyle":"itre-editor-featured-types-css","style":"itre-featured-types-css","editorScript":"itre-featured-types-js","render":"./featured-types.php"}');

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/blocks/jsx/featured-types/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map