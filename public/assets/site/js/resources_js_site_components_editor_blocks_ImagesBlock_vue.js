(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_site_components_editor_blocks_ImagesBlock_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/trash.svg */ "./resources/js/site/components/editor/svg/trash.svg");
/* harmony import */ var _svg_trash_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_trash_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/plus.svg */ "./resources/js/site/components/editor/svg/plus.svg");
/* harmony import */ var _svg_plus_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_plus_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_minus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/minus.svg */ "./resources/js/site/components/editor/svg/minus.svg");
/* harmony import */ var _svg_minus_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_minus_svg__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ImagesBlock',
  props: {
    id: {
      type: Number,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.data);
    var pending = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    function uploadImages(event) {
      var files = _objectSpread({}, event.target.files);
      var countFiles = event.target.files.length;
      event.target.value = null;
      pending.value = true;
      var _loop = function _loop() {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          index = _Object$entries$_i[0],
          file = _Object$entries$_i[1];
        var imageIndex = _data.value.images.push({
          id: 'new',
          file: file
        }) - 1;
        getPreview(file).then(function (preview) {
          _data.value.images[imageIndex].preview = preview;
          if (Number(index) + 1 === countFiles) {
            pending.value = false;
          }
        });
      };
      for (var _i = 0, _Object$entries = Object.entries(files); _i < _Object$entries.length; _i++) {
        _loop();
      }
    }
    function getPreview(file) {
      return new Promise(function (resolve) {
        if (file instanceof File) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (event) {
            resolve(event.target.result);
          };
        } else {
          resolve(null);
        }
      });
    }
    var __returned__ = {
      props: props,
      _data: _data,
      pending: pending,
      uploadImages: uploadImages,
      getPreview: getPreview,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get Draggable() {
        return (vuedraggable__WEBPACK_IMPORTED_MODULE_1___default());
      },
      get iconTrash() {
        return (_svg_trash_svg__WEBPACK_IMPORTED_MODULE_2___default());
      },
      get iconPlus() {
        return (_svg_plus_svg__WEBPACK_IMPORTED_MODULE_3___default());
      },
      get iconMinus() {
        return (_svg_minus_svg__WEBPACK_IMPORTED_MODULE_4___default());
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6b2fbaa2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "editor-block editor-block_images"
};
var _hoisted_2 = ["href"];
var _hoisted_3 = ["src", "alt", "onLoad"];
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = ["onClick", "innerHTML"];
var _hoisted_7 = {
  "class": "images-footer"
};
var _hoisted_8 = {
  "class": "images-style",
  title: "Стиль отображения блока на странице"
};
var _hoisted_9 = {
  "class": "images-style__item"
};
var _hoisted_10 = ["name"];
var _hoisted_11 = {
  "class": "images-style__item"
};
var _hoisted_12 = ["name"];
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "images-counter"
  }, "0 / 50", -1 /* HOISTED */);
});
var _hoisted_14 = {
  "class": "images-add"
};
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "images-add__label"
  }, "Добавить изображения", -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" images list "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Draggable"], {
    modelValue: $setup._data.images,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup._data.images = $event;
    }),
    tag: "div",
    "item-key": "index",
    "class": "images-list",
    disabled: $setup.pending
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var image = _ref.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: image.big || image.small || null,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["image", {
          'image_loaded': image.loaded,
          'image_new': image.id === 'new',
          'image_deleted': image.deleted
        }])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" img "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: image.preview || image.small,
        alt: image.alt,
        "class": "image__picture",
        onLoad: function onLoad($event) {
          return image.loaded = true;
        }
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, image.loaded]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" badges & buttons "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" new badge "), image.id === 'new' && !image.deleted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        "class": "image__badge image__badge_new",
        title: "Новое изображение",
        innerHTML: $setup.iconPlus
      }, null, 8 /* PROPS */, _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" deleted badge "), image.deleted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 1,
        "class": "image__badge image__badge_deleted",
        title: "Изображение будет удалено",
        innerHTML: $setup.iconMinus
      }, null, 8 /* PROPS */, _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" delete btn "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "image__delete",
        title: "Удалить",
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return image.deleted = !image.deleted;
        }, ["prevent"]),
        innerHTML: $setup.iconTrash
      }, null, 8 /* PROPS */, _hoisted_6)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, image.loaded]])], 10 /* CLASS, PROPS */, _hoisted_2)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" footer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    label: "Галерея",
    type: "radio",
    name: 'block-' + $props.id + '-style',
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup._data.style = $event;
    }),
    value: "gallery",
    "class": "images-style__item-input"
  }, null, 8 /* PROPS */, _hoisted_10), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup._data.style]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    label: "Слайдер",
    type: "radio",
    name: 'block-' + $props.id + '-style',
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup._data.style = $event;
    }),
    value: "slider",
    "class": "images-style__item-input"
  }, null, 8 /* PROPS */, _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup._data.style]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" counter "), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" add "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    multiple: "",
    accept: "image/png, image/jpeg",
    "class": "images-add__input",
    onChange: $setup.uploadImages
  }, null, 32 /* HYDRATE_EVENTS */), _hoisted_15])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".images-list[data-v-6b2fbaa2] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  padding: 10px;\n  background-color: #222222;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.images-list .image[data-v-6b2fbaa2] {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 16/9;\n  cursor: move;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  background-color: black;\n  border-radius: 3px;\n  padding: 5px;\n}\n.images-list .image[data-v-6b2fbaa2]:not(.images-list .image_loaded)::after {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid #cdd1e0;\n  border-top-color: #388ae5;\n  left: 50%;\n  top: 50%;\n  margin-top: -15px;\n  margin-left: -15px;\n  animation: image-preloader-spin-6b2fbaa2 2s infinite linear;\n  box-sizing: border-box;\n}\n.images-list .image_new[data-v-6b2fbaa2] {\n  background-color: #388ae5;\n}\n.images-list .image_deleted[data-v-6b2fbaa2] {\n  background-color: #e76868;\n}\n.images-list .image__picture[data-v-6b2fbaa2] {\n  border-radius: 3px;\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  margin: auto;\n  -o-object-fit: cover;\n  object-fit: cover;\n  pointer-events: none;\n}\n.images-list .image__badge[data-v-6b2fbaa2] {\n  position: absolute;\n  display: flex;\n  top: 5px;\n  left: 5px;\n  line-height: 1;\n  border-radius: 0 0 3px 0;\n  transition: background-color 0.1s;\n  width: 24px;\n  height: 24px;\n  padding: 2px 4px 4px;\n  fill: #fff;\n}\n.images-list .image__badge_new[data-v-6b2fbaa2] {\n  background-color: #388ae5;\n}\n.images-list .image__badge_deleted[data-v-6b2fbaa2] {\n  background-color: #e76868;\n}\n.images-list .image__delete[data-v-6b2fbaa2] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  cursor: pointer;\n  color: #fff;\n  font-size: 18px;\n  background-color: rgba(0, 0, 0, 0.35);\n  line-height: 1;\n  padding: 6px 8px;\n  border-radius: 0 0 0 3px;\n  transition: background-color 0.1s;\n}\n.images-list .image__delete[data-v-6b2fbaa2]:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.images-footer[data-v-6b2fbaa2] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 8px;\n  background-color: black;\n}\n.images-style[data-v-6b2fbaa2] {\n  display: flex;\n  flex-grow: 1;\n}\n.images-style__item[data-v-6b2fbaa2] {\n  display: block;\n}\n.images-style__item:first-child input[data-v-6b2fbaa2]::before {\n  border-radius: 3px 0 0 3px;\n}\n.images-style__item:last-child input[data-v-6b2fbaa2]::before {\n  border-radius: 0 3px 3px 0;\n}\n.images-style__item input[data-v-6b2fbaa2] {\n  position: relative;\n  display: flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.images-style__item input[data-v-6b2fbaa2]::before {\n  content: attr(label);\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  padding: 8px 12px;\n  color: #707684;\n  background-color: white;\n}\n.images-style__item input[data-v-6b2fbaa2]:checked {\n  cursor: default;\n}\n.images-style__item input[data-v-6b2fbaa2]:checked::before {\n  color: white;\n  background-color: #388ae5;\n}\n.images-counter[data-v-6b2fbaa2] {\n  display: flex;\n  align-items: center;\n  color: gray;\n  font-size: 14px;\n}\n.images-add__input[data-v-6b2fbaa2] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  display: block;\n  width: 0;\n  height: 0;\n}\n.images-add__label[data-v-6b2fbaa2] {\n  padding: 8px 12px;\n  border-radius: 3px;\n  border: 1px solid rgba(201, 201, 204, 0.48);\n  font-size: 14px;\n  background: #fff;\n  color: #707684;\n  text-align: center;\n  cursor: pointer;\n}\n@keyframes image-preloader-spin-6b2fbaa2 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/site/components/editor/svg/minus.svg":
/*!***********************************************************!*\
  !*** ./resources/js/site/components/editor/svg/minus.svg ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z\"/></svg>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./resources/js/site/components/editor/svg/plus.svg":
/*!**********************************************************!*\
  !*** ./resources/js/site/components/editor/svg/plus.svg ***!
  \**********************************************************/
/***/ ((module) => {

// Module
var code = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z\"/></svg>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./resources/js/site/components/editor/svg/trash.svg":
/*!***********************************************************!*\
  !*** ./resources/js/site/components/editor/svg/trash.svg ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n  <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n  <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n</svg>";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_style_index_0_id_6b2fbaa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_style_index_0_id_6b2fbaa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_style_index_0_id_6b2fbaa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/ImagesBlock.vue":
/*!********************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/ImagesBlock.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImagesBlock_vue_vue_type_template_id_6b2fbaa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagesBlock.vue?vue&type=template&id=6b2fbaa2&scoped=true */ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2&scoped=true");
/* harmony import */ var _ImagesBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagesBlock.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _ImagesBlock_vue_vue_type_style_index_0_id_6b2fbaa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true */ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ImagesBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImagesBlock_vue_vue_type_template_id_6b2fbaa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6b2fbaa2"],['__file',"resources/js/site/components/editor/blocks/ImagesBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImagesBlock.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_template_id_6b2fbaa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_template_id_6b2fbaa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImagesBlock.vue?vue&type=template&id=6b2fbaa2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2&scoped=true");


/***/ }),

/***/ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_style_index_0_id_6b2fbaa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=style&index=0&id=6b2fbaa2&lang=scss&scoped=true");


/***/ })

}]);