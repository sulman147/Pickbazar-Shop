exports.ids = [0];
exports.modules = {

/***/ "1XDB":
/***/ (function(module, exports) {



/***/ }),

/***/ "KBQx":
/***/ (function(module, exports) {



/***/ }),

/***/ "S+LZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("99J/");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PDTj");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KBQx");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MultiCarousel_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1XDB");
/* harmony import */ var _MultiCarousel_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MultiCarousel_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const SingleItem = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.li.withConfig({
  displayName: "MultiCarousel__SingleItem",
  componentId: "sc-1nzkl3p-0"
})(["border:1px solid ", ";border-radius:6px;margin-right:20px;padding:0;outline:none;width:70px;height:auto;overflow:hidden;&:last-child{margin-right:0;}&.custom-dot--active{border:2px solid ", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200
    },
    items: 1
  }
};

const CarouselWithCustomDots = (_ref) => {
  let {
    items = [],
    deviceType: {
      mobile,
      tablet,
      desktop
    },
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["items", "deviceType", "title"]);

  const children = items.slice(0, 6).map((item, index) => __jsx(components_Image_Image__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    url: item.url,
    key: index,
    alt: title,
    style: {
      minWidth: 'auto',
      height: 'auto',
      position: 'relative',
      margin: 'auto'
    },
    className: "product-image"
  }));
  const images = items.map((item, index) => __jsx(components_Image_Image__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    url: item.url,
    key: index,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  }));

  const CustomDot = ({
    index,
    onClick,
    active,
    carouselState: {
      currentSlide,
      deviceType
    }
  }) => {
    return __jsx(SingleItem, {
      "data-index": index,
      key: index,
      onClick: () => onClick(),
      className: `custom-dot ${active && 'custom-dot--active'}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(images)[index]);
  };

  let deviceType = 'desktop';

  if (mobile) {
    deviceType = 'mobile';
  }

  if (tablet) {
    deviceType = 'tablet';
  }

  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    showDots: true,
    ssr: true,
    infinite: true,
    slidesToSlide: 1,
    containerClass: "carousel-with-custom-dots",
    responsive: responsive,
    deviceType: deviceType,
    autoPlay: false,
    arrows: false,
    customDot: __jsx(CustomDot, null)
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["a"] = (CarouselWithCustomDots);

/***/ }),

/***/ "eFaF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ReadMore = ({
  children,
  more,
  less,
  character
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleLines = event => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!children) return null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children && children.length < character || expanded ? children : children.substring(0, character), children && children.length > character && !expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx("span", null, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    }
  }, more))), children && children.length > character && expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx("span", null, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    }
  }, less))));
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less'
};
/* harmony default export */ __webpack_exports__["a"] = (ReadMore);

/***/ }),

/***/ "q8M2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: ./components/Button/Button.tsx + 2 modules
var Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: ./components/InputIncDec/InputIncDec.tsx + 1 modules
var InputIncDec = __webpack_require__("2vWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./containers/QuickView/QuickView.style.tsx


const QuickViewWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__QuickViewWrapper",
  componentId: "sc-6nsgke-0"
})(["max-width:1020px;"]);
const ProductDetailsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductDetailsWrapper",
  componentId: "sc-6nsgke-1"
})(["background-color:#fff;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;min-height:100%;border-radius:6px;overflow:hidden;box-sizing:border-box;box-shadow:0 10px 40px rgba(0,0,0,0.16);*{box-sizing:border-box;}"]);
const ProductPreview = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductPreview",
  componentId: "sc-6nsgke-2"
})(["flex:0 0 50%;max-width:50%;padding:30px 60px;display:flex;align-items:center;justify-content:center;position:relative;@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 47px 40px 30px;order:0;}img{width:100%;@media (max-width:767px){min-width:auto !important;}}"]);
const SaleTag = external_styled_components_default.a.span.withConfig({
  displayName: "QuickViewstyle__SaleTag",
  componentId: "sc-6nsgke-3"
})(["font-size:12px;font-weight:700;color:#ffffff;background-color:", ";padding:0 10px;line-height:24px;border-radius:12px;display:inline-block;position:absolute;top:40px;right:30px;"], Object(theme_get_["themeGet"])('colors.yellow', '#FBB979'));
const DiscountPercent = external_styled_components_default.a.span.withConfig({
  displayName: "QuickViewstyle__DiscountPercent",
  componentId: "sc-6nsgke-4"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:#ffffff;line-height:24px;background-color:", ";padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:30px;right:30px;border-radius:12px;"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.yellow', '#FBB979'));
const ProductInfoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductInfoWrapper",
  componentId: "sc-6nsgke-5"
})(["flex:0 0 50%;max-width:50%;border-left:1px solid ", ";@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:10px 0 30px;order:1;}"], Object(theme_get_["themeGet"])('colors.lightMediumColor', '#f3f3f3'));
const ProductInfo = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductInfo",
  componentId: "sc-6nsgke-6"
})(["padding:50px;@media (max-width:767px){padding:0px 45px 30px 30px;}"]);
const ProductTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "QuickViewstyle__ProductTitle",
  componentId: "sc-6nsgke-7"
})(["font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.5s;margin-bottom:10px;"], Object(theme_get_["themeGet"])('fontSizes.4', '21'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
const ProductWeight = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductWeight",
  componentId: "sc-6nsgke-8"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkRegular', '#77798c'));
const ProductDescription = external_styled_components_default.a.p.withConfig({
  displayName: "QuickViewstyle__ProductDescription",
  componentId: "sc-6nsgke-9"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:2;margin-top:30px;margin-bottom:65px;"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkMedium', '#424561'));
const ProductPriceWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductPriceWrapper",
  componentId: "sc-6nsgke-10"
})(["display:flex;align-items:center;"]);
const ProductPrice = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductPrice",
  componentId: "sc-6nsgke-11"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fontSizes.3', '19'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const SalePrice = external_styled_components_default.a.span.withConfig({
  displayName: "QuickViewstyle__SalePrice",
  componentId: "sc-6nsgke-12"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;overflow:hidden;position:relative;margin-right:15px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.yellow', '#FBB979'), Object(theme_get_["themeGet"])('colors.yellow', '#FBB979'));
const ProductCartBtn = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductCartBtn",
  componentId: "sc-6nsgke-13"
})(["margin-top:30px;.reusecore__button{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";height:36px;border-radius:4rem;.btn-icon{margin-right:5px;}&:hover{color:#fff;background-color:", ";border-color:", ";}}"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const ProductCartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductCartWrapper",
  componentId: "sc-6nsgke-14"
})(["display:flex;flex-direction:column;"]);
const ProductMeta = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__ProductMeta",
  componentId: "sc-6nsgke-15"
})(["margin-top:30px;"]);
const MetaSingle = external_styled_components_default.a.div.withConfig({
  displayName: "QuickViewstyle__MetaSingle",
  componentId: "sc-6nsgke-16"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:10px;&:last-child{margin-bottom:0;}"]);
const MetaItem = external_styled_components_default.a.span.withConfig({
  displayName: "QuickViewstyle__MetaItem",
  componentId: "sc-6nsgke-17"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin-right:10px;background-color:", ";padding:0 15px;border-radius:6px;cursor:pointer;height:30px;display:flex;align-items:center;justify-content:center;"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'), Object(theme_get_["themeGet"])('colors.lightColor', '#f7f7f7'));
const ModalClose = external_styled_components_default.a.button.withConfig({
  displayName: "QuickViewstyle__ModalClose",
  componentId: "sc-6nsgke-18"
})(["position:fixed;top:20px;right:15px;padding:10px 15px;z-index:1;cursor:pointer;display:block;color:rgba(0,0,0,0.5);background:transparent;border:0;outline:none;display:inline-block;svg{width:12px;height:12px;}@media (max-width:767px){top:5px;right:0;}"]);
// EXTERNAL MODULE: ./helper/constant.ts
var constant = __webpack_require__("5kK8");

// EXTERNAL MODULE: ./components/AllSvgIcon.tsx
var AllSvgIcon = __webpack_require__("yBv+");

// EXTERNAL MODULE: ./contexts/cart/cart.context.tsx
var cart_context = __webpack_require__("q8k2");

// EXTERNAL MODULE: ./helper/utility.ts
var utility = __webpack_require__("3uFM");

// EXTERNAL MODULE: ./components/Truncate/Truncate.tsx
var Truncate = __webpack_require__("eFaF");

// EXTERNAL MODULE: ./components/MultiCarousel/MultiCarousel.tsx
var MultiCarousel = __webpack_require__("S+LZ");

// EXTERNAL MODULE: ./contexts/language/language.context.js
var language_context = __webpack_require__("4rEm");

// CONCATENATED MODULE: ./containers/QuickView/QuickView.tsx
var __jsx = external_react_default.a.createElement;















const QuickView = ({
  modalProps,
  deviceType,
  onModalClose
}) => {
  const {
    add,
    update,
    products
  } = Object(external_react_["useContext"])(cart_context["a" /* CartContext */]);
  const {
    id,
    type,
    title,
    unit,
    price,
    discountInPercent,
    salePrice,
    description,
    gallery,
    categories
  } = modalProps;
  const {
    state: {
      lang
    }
  } = Object(external_react_["useContext"])(language_context["a" /* default */]);
  const index = Object(utility["c" /* findProductIndex */])(products, id);
  const quantity = Object(utility["g" /* getProductQuantity */])(products, index);

  const handleClick = e => {
    e.stopPropagation();
    add(e, modalProps);
  };

  const handleUpdate = (value, e) => {
    if (index === -1 && value === 1) {
      add(e, modalProps);
    } else {
      update(id, value);
    }
  };

  function onCategoryClick(slug) {
    router_default.a.push({
      pathname: `/${type.toLowerCase()}`,
      query: {
        category: slug
      }
    }).then(() => window.scrollTo(0, 0));
    Object(reuse_modal_["closeModal"])();
  }

  return __jsx(external_react_default.a.Fragment, null, __jsx(ModalClose, {
    onClick: onModalClose
  }, __jsx(AllSvgIcon["o" /* CloseIcon */], null)), __jsx(QuickViewWrapper, null, __jsx(ProductDetailsWrapper, {
    className: "product-card",
    dir: "ltr"
  }, lang === 'ar' || lang === 'he' ? '' : __jsx(ProductPreview, null, __jsx(MultiCarousel["a" /* default */], {
    items: gallery,
    deviceType: deviceType
  }), !!discountInPercent && __jsx(external_react_default.a.Fragment, null, __jsx(DiscountPercent, null, discountInPercent, "%"))), __jsx(ProductInfoWrapper, {
    dir: lang === 'ar' || lang === 'he' ? 'rtl' : 'ltr'
  }, __jsx(external_react_custom_scrollbars_["Scrollbars"], {
    universal: true,
    autoHide: true,
    autoHeight: true,
    autoHeightMax: "90vh"
  }, __jsx(ProductInfo, null, __jsx(ProductTitle, null, title), __jsx(ProductWeight, null, unit), __jsx(ProductDescription, null, __jsx(Truncate["a" /* default */], {
    character: 600
  }, description)), __jsx(ProductCartWrapper, null, __jsx(ProductPriceWrapper, null, discountInPercent ? __jsx(SalePrice, null, constant["a" /* CURRENCY */], price) : '', __jsx(ProductPrice, null, constant["a" /* CURRENCY */], salePrice ? salePrice : price)), __jsx(ProductCartBtn, null, quantity <= 0 ? __jsx(Button["a" /* default */], {
    title: "Cart",
    intlButtonId: "addCartButton",
    iconPosition: "left",
    colors: "primary",
    size: "small",
    variant: "outlined",
    className: "cart-button",
    icon: __jsx(AllSvgIcon["l" /* CartIcon */], null),
    onClick: e => handleClick(e)
  }) : __jsx(InputIncDec["a" /* default */], {
    value: quantity,
    onUpdate: (value, e) => handleUpdate(value, e)
  }))), __jsx(ProductMeta, null, __jsx(MetaSingle, null, categories ? categories.map(item => __jsx(MetaItem, {
    onClick: () => onCategoryClick(item.slug),
    key: item.id
  }, item.title)) : ''))))), lang === 'ar' || lang === 'he' ? __jsx(ProductPreview, null, __jsx(MultiCarousel["a" /* default */], {
    items: gallery,
    deviceType: deviceType
  }), !!discountInPercent && __jsx(external_react_default.a.Fragment, null, __jsx(DiscountPercent, null, discountInPercent, "%"))) : '')));
};

/* harmony default export */ var QuickView_QuickView = __webpack_exports__["default"] = (QuickView);

/***/ })

};;