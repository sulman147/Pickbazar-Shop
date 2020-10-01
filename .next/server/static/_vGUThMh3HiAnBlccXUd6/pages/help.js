module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UyBh");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "UyBh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./components/SiteFooter/SiteFooter.tsx
var SiteFooter = __webpack_require__("jtiA");

// EXTERNAL MODULE: external "rc-collapse"
var external_rc_collapse_ = __webpack_require__("VxuB");
var external_rc_collapse_default = /*#__PURE__*/__webpack_require__.n(external_rc_collapse_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/Accordion/Accordion.style.tsx


const AccordionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Accordionstyle__AccordionWrapper",
  componentId: "jtov2r-0"
})([".rc-collapse{background-color:transparent;border-radius:0;border:0;> .rc-collapse-item{margin-bottom:5px;border-width:1px;border-style:solid;border-color:", ";border-image:initial;border-radius:6px;background-color:#ffffff;overflow:hidden;> .rc-collapse-header{display:flex;align-items:center;padding:23px 30px;padding-right:25px;cursor:pointer;outline:0;position:relative;justify-content:space-between;i{order:2;width:22px;height:22px;flex-shrink:0;color:", ";display:flex;align-items:center;justify-content:center;}h3{margin-top:0px;margin-bottom:0px;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.5;}}.rc-collapse-content{padding:0px;> .rc-collapse-content-box{box-sizing:border-box;margin-top:0px;margin-bottom:0px;padding:0px 30px 23px;p{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.75;}}}}}"], Object(theme_get_["themeGet"])('colors.borderColor', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkRegular', '#77798C'));
/* harmony default export */ var Accordion_style = (AccordionWrapper);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./components/Accordion/Accordion.tsx
var __jsx = external_react_default.a.createElement;





function expandIcon({
  isActive
}) {
  return __jsx("i", null, isActive ? __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "1.494",
    viewBox: "0 0 12 1.494"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-remove (4)",
    d: "M138.753,240H128.247a.747.747,0,0,0,0,1.494h10.506a.747.747,0,1,0,0-1.494Z",
    transform: "translate(-127.5 -240)",
    fill: "currentColor"
  })) : __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-add (7)",
    d: "M138.753,132.753h-4.506v-4.506a.747.747,0,1,0-1.494,0v4.506h-4.506a.747.747,0,0,0,0,1.494h4.506v4.506a.747.747,0,1,0,1.494,0v-4.506h4.506a.747.747,0,1,0,0-1.494Z",
    transform: "translate(-127.5 -127.5)",
    fill: "currentColor"
  })));
}

const Accordion = ({
  className,
  items = []
}) => {
  const addAllClasses = ['accordion'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(Accordion_style, null, __jsx(external_rc_collapse_default.a, {
    accordion: true,
    className: addAllClasses.join(' '),
    defaultActiveKey: "active",
    expandIcon: expandIcon
  }, items.length !== 0 && items.map(item => {
    return __jsx(external_rc_collapse_["Panel"], {
      header: __jsx("h3", null, __jsx(external_react_intl_["FormattedMessage"], {
        id: item.intlTitleId,
        defaultMessage: "Please add title in language file"
      })),
      headerClass: "accordion-title",
      key: item.id
    }, __jsx("p", {
      key: item.id
    }, __jsx(external_react_intl_["FormattedMessage"], {
      id: item.intlDetailsId,
      defaultMessage: "Please add description in language file"
    })));
  })));
};

/* harmony default export */ var Accordion_Accordion = (Accordion);
// CONCATENATED MODULE: ./pages/help.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageContainer", function() { return HelpPageContainer; });
var help_jsx = external_react_default.a.createElement;







const accor = [{
  id: 1,
  intlTitleId: 'faqNo1Title',
  intlDetailsId: 'faqNo1Desc'
}, {
  id: 2,
  intlTitleId: 'faqNo2Title',
  intlDetailsId: 'faqNo2Desc'
}, {
  id: 3,
  intlTitleId: 'faqNo3Title',
  intlDetailsId: 'faqNo3Desc'
}, {
  id: 4,
  intlTitleId: 'faqNo4Title',
  intlDetailsId: 'faqNo4Desc'
}];
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "help__Heading",
  componentId: "sc-1idi7wf-0"
})(["font-size:21px;font-weight:700;color:#0d1136;line-height:1.2;margin-bottom:25px;width:100%;text-align:center;"]);
const HelpPageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "help__HelpPageWrapper",
  componentId: "sc-1idi7wf-1"
})(["background-color:#f7f7f7;position:relative;padding:130px 0 60px 0;min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;@media (max-width:989px){padding-top:70px;}"]);
const HelpPageContainer = external_styled_components_default.a.div.withConfig({
  displayName: "help__HelpPageContainer",
  componentId: "sc-1idi7wf-2"
})(["background-color:transparent;padding:0;border-radius:6px;overflow:hidden;position:relative;@media (min-width:990px){width:870px;margin-left:auto;margin-right:auto;}@media (max-width:989px){padding:30px;}"]);
/* harmony default export */ var help = __webpack_exports__["default"] = (function () {
  return help_jsx(reuse_modal_["Modal"], null, help_jsx(head_default.a, null, help_jsx("title", null, "PickBazar")), help_jsx(HelpPageWrapper, null, help_jsx(HelpPageContainer, null, help_jsx(Heading, null, "F.A.Q"), help_jsx(Accordion_Accordion, {
    items: accor
  })), help_jsx(SiteFooter["a" /* default */], {
    style: {
      marginTop: 50
    }
  }, help_jsx(external_react_intl_["FormattedMessage"], {
    id: "siteFooter",
    defaultMessage: "Pickbazar is a product of"
  }), "\xA0 ", help_jsx("a", {
    href: "#"
  }, "Redq, Inc."))));
});

/***/ }),

/***/ "VxuB":
/***/ (function(module, exports) {

module.exports = require("rc-collapse");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "jtiA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "SiteFooter__Footer",
  componentId: "sc-11epunp-0"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";text-align:center;width:100%;display:flex;justify-content:center;align-items:center;padding:0 20px;a{color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colorsdarkRegular', '#77798C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#009e7f'));

const SiteFooter = ({
  children,
  style
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Footer, {
    style: style
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (SiteFooter);

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });