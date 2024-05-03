/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/blocks/jsx/featured-locations/index.js":
/*!*******************************************************!*\
  !*** ./assets/blocks/jsx/featured-locations/index.js ***!
  \*******************************************************/
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
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./section */ "./assets/blocks/jsx/featured-locations/section.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title */ "./assets/blocks/jsx/featured-locations/title.js");
/* harmony import */ var _inc_blocks_featured_locations_block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../inc/blocks/featured-locations/block.json */ "./inc/blocks/featured-locations/block.json");








let registered = false;
const slug = 'it-listings/featured-locations';
const attsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const blockData = {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      fill: "#000000"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"
    }))
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
        className: 'itre-editor-featured-locations section'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(attsContext.Provider, {
      value: {
        attributes,
        setAttributes
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_title__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "itre-editor-featured-locations__sections"
    }, sections.map(section => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      order: section['order'],
      media: section['mediaId']
    })))));
  },
  save: () => null,
  ..._inc_blocks_featured_locations_block_json__WEBPACK_IMPORTED_MODULE_6__
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(slug, blockData);

// Listen for subsequent saves and template changes
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

/***/ "./assets/blocks/jsx/featured-locations/section.js":
/*!*********************************************************!*\
  !*** ./assets/blocks/jsx/featured-locations/section.js ***!
  \*********************************************************/
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./assets/blocks/jsx/featured-locations/index.js");







const ALLOWED_TYPES = ['image'];
const Section = ({
  order,
  media
}) => {
  const {
    attributes: {
      sections
    },
    setAttributes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index__WEBPACK_IMPORTED_MODULE_5__.attsContext);
  const section = sections.filter(item => item['order'] === order)[0];
  const allTerms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core').getEntityRecords('taxonomy', 'location', {
    per_page: -1
  }), []);
  const image = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => media !== undefined && select('core').getMedia(media), [media]);
  const onSelectMedia = media => {
    const newSections = sections.map(item => {
      if (item['order'] === order) {
        return {
          ...item,
          mediaId: media.id
        };
      }
      return item;
    });
    setAttributes({
      sections: newSections
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "itre-editor-featured-locations__section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, allTerms !== null && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Location"),
    value: section['location'],
    onChange: value => {
      const newSections = sections.map(item => {
        if (item['order'] === order) {
          return {
            ...item,
            location: parseInt(value)
          };
        }
        return item;
      });
      setAttributes({
        sections: newSections
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: 0
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Location")), allTerms.map(term => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
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

/***/ "./assets/blocks/jsx/featured-locations/title.js":
/*!*******************************************************!*\
  !*** ./assets/blocks/jsx/featured-locations/title.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./assets/blocks/jsx/featured-locations/index.js");
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Featured Locations")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
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

/***/ "./inc/blocks/featured-locations/block.json":
/*!**************************************************!*\
  !*** ./inc/blocks/featured-locations/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"it-listings/featured-locations","title":"Featured Locations","description":"Featured Area to highlight properties based on Location","category":"it-listings","keywords":["featured locations","properties","property"],"attributes":{"title":{"type":"string","default":""},"description":{"type":"string","default":""},"align":{"type":"string","default":"center"},"sections":{"type":"array","default":[{"order":1,"mediaId":0,"location":0},{"order":2,"mediaId":0,"location":0},{"order":3,"mediaId":0,"location":0},{"order":4,"mediaId":0,"location":0}]}},"supports":{"align":["full","wide"],"alignWide":true},"editorStyle":"itre-editor-featured-locations-css","style":"itre-featured-locations-css","editorScript":"itre-featured-locations-js","render":"./featured-locations.php"}');

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/blocks/jsx/featured-locations/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map