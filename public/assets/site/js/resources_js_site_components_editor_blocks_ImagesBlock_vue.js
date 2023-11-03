"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_site_components_editor_blocks_ImagesBlock_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _stores_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/stores/config */ "./resources/js/site/stores/config.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
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
      type: Number
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
    var configStore = (0,_stores_config__WEBPACK_IMPORTED_MODULE_1__.useConfigStore)();
    var _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.data);
    var config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return configStore.editorBlocks.images || {};
    });
    var pending = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      // Инициализация необходимых параметров блока
      if (Object.keys(_data.value).length === 0) {
        _data.value.style = 'gallery';
        _data.value.images = [];
      }
    });
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
      configStore: configStore,
      props: props,
      _data: _data,
      config: config,
      pending: pending,
      uploadImages: uploadImages,
      getPreview: getPreview,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get useConfigStore() {
        return _stores_config__WEBPACK_IMPORTED_MODULE_1__.useConfigStore;
      },
      get Draggable() {
        return (vuedraggable__WEBPACK_IMPORTED_MODULE_2___default());
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "editor-block editor-block_images"
};
var _hoisted_2 = ["src", "alt", "onLoad"];
var _hoisted_3 = {
  key: 0,
  "class": "image__badge image__badge_new",
  title: "Новое изображение"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-add-fill"
}, null, -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  key: 1,
  "class": "image__badge image__badge_deleted",
  title: "Изображение будет удалено"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-subtract-fill"
}, null, -1 /* HOISTED */);
var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = ["onClick"];
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-delete-bin-7-fill"
}, null, -1 /* HOISTED */);
var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = {
  "class": "images-footer"
};
var _hoisted_13 = {
  "class": "images-add"
};
var _hoisted_14 = ["accept"];
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "images-add__label"
}, "Добавить изображения", -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "images-limits"
};
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = {
  key: 1
};
var _hoisted_19 = {
  "class": "images-style",
  title: "Стиль отображения блока на странице"
};
var _hoisted_20 = {
  "class": "images-style__item"
};
var _hoisted_21 = ["name"];
var _hoisted_22 = {
  "class": "images-style__item"
};
var _hoisted_23 = ["name"];
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
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["image", {
          'image_loaded': image.loaded,
          'image_new': image.id === 'new',
          'image_deleted': image.deleted
        }])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" img "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: image.preview || (image.p || image.small || image.dxl) + '?' + Date.now(),
        alt: image.alt,
        "class": "image__picture",
        onLoad: function onLoad($event) {
          return image.loaded = true;
        }
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, image.loaded]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" badges & buttons "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" new badge "), image.id === 'new' && !image.deleted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" deleted badge "), image.deleted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" delete btn "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "image__delete",
        title: "Удалить",
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return image.deleted = !image.deleted;
        }, ["prevent"])
      }, _hoisted_11, 8 /* PROPS */, _hoisted_9)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, image.loaded]])], 2 /* CLASS */)];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" footer "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" add "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    multiple: "",
    accept: $setup.config.mimeTypes && $setup.config.mimeTypes.length ? $setup.config.mimeTypes.join(', ') : '',
    "class": "images-add__input",
    onChange: $setup.uploadImages
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_14), _hoisted_15]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" limits "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [$setup.configStore.filesLimits.maxFileSizeString ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Максимальный размер: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.configStore.filesLimits.maxFileSizeString), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span>Максимум одновременно загружаемых файлов: <strong>{{ configStore.filesLimits.maxFiles }}</strong></span> "), $setup.config.acceptExts && $setup.config.acceptExts.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Поддерживаются файлы форматов: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.config.acceptExts.join(' ')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" style "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    label: "Галерея",
    type: "radio",
    name: 'block-' + $props.id + '-style',
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup._data.style = $event;
    }),
    value: "gallery",
    "class": "images-style__item-input"
  }, null, 8 /* PROPS */, _hoisted_21), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup._data.style]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    label: "Слайдер",
    type: "radio",
    name: 'block-' + $props.id + '-style',
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup._data.style = $event;
    }),
    value: "slider",
    "class": "images-style__item-input"
  }, null, 8 /* PROPS */, _hoisted_23), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup._data.style]])])])])]);
}

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/ImagesBlock.vue":
/*!********************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/ImagesBlock.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImagesBlock_vue_vue_type_template_id_6b2fbaa2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagesBlock.vue?vue&type=template&id=6b2fbaa2 */ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2");
/* harmony import */ var _ImagesBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagesBlock.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ImagesBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImagesBlock_vue_vue_type_template_id_6b2fbaa2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/editor/blocks/ImagesBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImagesBlock.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2":
/*!**************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_template_id_6b2fbaa2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImagesBlock_vue_vue_type_template_id_6b2fbaa2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImagesBlock.vue?vue&type=template&id=6b2fbaa2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/ImagesBlock.vue?vue&type=template&id=6b2fbaa2");


/***/ })

}]);