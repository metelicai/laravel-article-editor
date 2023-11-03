"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_site_components_editor_blocks_TextBlock_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _stores_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/stores/config */ "./resources/js/site/stores/config.js");
/* harmony import */ var _wangeditor_editor_for_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wangeditor/editor-for-vue */ "./node_modules/@wangeditor/editor-for-vue/dist/index.esm.js");
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
/* harmony import */ var _text_block_editor_modules_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text-block-editor-modules/i18n */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/i18n.js");
/* harmony import */ var _text_block_editor_modules_lead_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text-block-editor-modules/lead/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/index.js");
/* harmony import */ var _text_block_editor_modules_header_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-block-editor-modules/header/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/index.js");
/* harmony import */ var _text_block_editor_modules_text_style_select_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-block-editor-modules/text-style-select/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/index.js");
/* harmony import */ var _text_block_editor_modules_shift_enter_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text-block-editor-modules/shift-enter/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/shift-enter/index.js");
/* harmony import */ var _text_block_editor_modules_footnote_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text-block-editor-modules/footnote/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/index.js");
/* harmony import */ var _text_block_editor_modules_footnote_FootnoteModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text-block-editor-modules/footnote/FootnoteModal */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue");
/* harmony import */ var _text_block_editor_modules_footnote_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text-block-editor-modules/footnote/helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/helpers.js");












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'TextBlock',
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

    // Проверка на подключенные модели. При дестрое компонента они почему-то не теряют регистрацию
    // и при повторной инициализации блока редактор пдает в ошибку
    // (например после перетаскивания блока или удаления какого-либо другого)
    if (_wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.Boot.plugins.length < 13) {
      _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.Boot.registerModule(_text_block_editor_modules_header_index__WEBPACK_IMPORTED_MODULE_6__["default"]);
      _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.Boot.registerModule(_text_block_editor_modules_text_style_select_index__WEBPACK_IMPORTED_MODULE_7__["default"]);
      _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.Boot.registerModule(_text_block_editor_modules_lead_index__WEBPACK_IMPORTED_MODULE_5__["default"]);
      _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.Boot.registerModule(_text_block_editor_modules_shift_enter_index__WEBPACK_IMPORTED_MODULE_8__["default"]);
      if (props.data.withFootnotes) _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.Boot.registerModule(_text_block_editor_modules_footnote_index__WEBPACK_IMPORTED_MODULE_9__["default"]);
    }
    (0,_wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.i18nAddResources)('ru', _text_block_editor_modules_i18n__WEBPACK_IMPORTED_MODULE_4__["default"]);
    (0,_wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.i18nChangeLanguage)('ru');
    var editorRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef)();
    var textEditorContentComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.data);
    var config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return configStore.editorBlocks.text || {};
    });
    var toolbarConfig = {
      toolbarKeys: ['textStyleSelect',
      // 'myHeader1',
      // 'myHeader2',
      '|', 'bold', 'italic', 'underline', 'through', '|', 'sup', 'sub',
      // 'blockquote',
      '|',
      // 'color',
      // 'bgColor',
      'clearStyle', '|', 'bulletedList', 'numberedList',
      // {
      // 	key: 'group-indent',
      // 	title: 'Indent',
      // 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z\'></path></svg>',
      // 	menuKeys: [
      // 		'indent',
      // 		'delIndent',
      // 	],
      // },
      '|', 'insertLink', 'insertFootnote', '|', 'insertTable', 'divider', '|', 'undo', 'redo'
      // {
      // 	key: 'group-more-style',
      // 	title: 'More',
      // 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path><path d=\'M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path><path d=\'M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\'></path></svg>',
      // 	menuKeys: [
      // 		'code',
      //		'codeBlock',
      // 	],
      // },
      // '|',
      // 'fontSize',
      // 'fontFamily',
      // 'lineHeight',
      // 'todo',
      // {
      // 	key: 'group-justify',
      // 	title: 'Text align',
      // 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z\'></path></svg>',
      // 	menuKeys: [
      // 		'justifyLeft',
      // 		'justifyRight',
      // 		'justifyCenter',
      // 		'justifyJustify',
      // 	],
      // },
      // 'emotion',
      // {
      // 	key: 'group-image',
      // 	title: 'Image',
      // 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z\'></path></svg>',
      // 	menuKeys: [
      // 		'insertImage',
      // 		'uploadImage',
      // 	],
      // },
      // {
      // 	key: 'group-video',
      // 	title: 'Video',
      // 	iconSvg: '<svg viewBox=\'0 0 1024 1024\'><path d=\'M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z\'></path></svg>',
      // 	menuKeys: [
      // 		'insertVideo',
      // 		'uploadVideo',
      // 	],
      // },
      // '|',
      // 'fullScreen',
      ]
    };

    // Убираем элемент меню со сносками, если они не включены
    if (!props.data.withFootnotes) {
      toolbarConfig.toolbarKeys.splice(toolbarConfig.toolbarKeys.indexOf('insertFootnote'), 1);
    }
    var isShowFootnoteModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var editorConfig = {
      placeholder: 'Введите текст...',
      scroll: false,
      MENU_CONF: {
        color: {
          colors: ['#000', '#333', '#666']
        },
        bgColor: {
          colors: ['#000', '#333', '#666']
        },
        fontSize: {
          fontSizeList: ['12px', '16px', {
            name: '24px',
            value: '24px'
          }, '40px']
        }
      },
      hoverbarKeys: {
        link: {
          menuKeys: ['editLink', 'unLink', 'viewLink']
        },
        image: {
          menuKeys: ['imageWidth30', 'imageWidth50', 'imageWidth100', 'editImage', 'viewImageLink', 'deleteImage']
        },
        pre: {
          menuKeys: ['enter', 'codeBlock', 'codeSelectLang']
        },
        table: {
          menuKeys: ['enter', 'tableHeader', 'tableFullWidth', 'insertTableRow', 'deleteTableRow', 'insertTableCol', 'deleteTableCol', 'deleteTable']
        },
        divider: {
          menuKeys: ['enter']
        },
        video: {
          menuKeys: ['enter', 'editVideoSize']
        },
        text: {
          menuKeys: ['textStyleSelect', 'insertLink', '|', 'bold', 'italic', '|',
          // 'color',
          // 'bgColor',
          'clearStyle']
        },
        footnote: {
          menuKeys: ['editFootnote']
        }
      },
      EXTEND_CONF: {
        footnoteConfig: {
          showModal: function showModal() {
            isShowFootnoteModal.value = true;
          },
          hideModal: function hideModal() {
            isShowFootnoteModal.value = false;
          }
        }
      }
    };

    // Убираем настройки для сносок, если они не включены
    if (!props.data.withFootnotes) {
      delete editorConfig.hoverbarKeys.footnote;
      delete editorConfig.EXTEND_CONF.footnoteConfig;
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      if (Object.keys(_data.value).length === 0) {
        _data.value.content = '';
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function () {
      var editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });
    var handleCreated = function handleCreated(editor) {
      editorRef.value = editor;

      // Решение проблемы с варнингом о минимальной высоте в 300px
      // которое показывается всегда если жестко не задать высоту свойством height.
      // В инлайновых стилях задана жесткая высота, а здесь применяется класс который ее переопределяет
      var block = textEditorContentComponent.value.$el;
      block.classList.add('text-editor__content_fix');
    };
    var handleChange = function handleChange(editor) {
      if (props.data.withFootnotes) handleFootnotes(editor);
    };
    var lastFootnotesCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    function handleFootnotes(editor) {
      var footnotes = editor.getElemsByType('footnote');
      _data.value.footnotes = footnotes;

      // Обновить id сносок при удалении сноски
      var footnotesCount = footnotes.length;
      if (footnotesCount < lastFootnotesCount.value) (0,_text_block_editor_modules_footnote_helpers__WEBPACK_IMPORTED_MODULE_11__.updateFootnotesNumbers)(editor);
      lastFootnotesCount.value = footnotesCount;
    }
    var __returned__ = {
      configStore: configStore,
      props: props,
      editorRef: editorRef,
      textEditorContentComponent: textEditorContentComponent,
      _data: _data,
      config: config,
      toolbarConfig: toolbarConfig,
      isShowFootnoteModal: isShowFootnoteModal,
      editorConfig: editorConfig,
      handleCreated: handleCreated,
      handleChange: handleChange,
      lastFootnotesCount: lastFootnotesCount,
      handleFootnotes: handleFootnotes,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      onBeforeUnmount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      shallowRef: vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef,
      get useConfigStore() {
        return _stores_config__WEBPACK_IMPORTED_MODULE_1__.useConfigStore;
      },
      get Editor() {
        return _wangeditor_editor_for_vue__WEBPACK_IMPORTED_MODULE_2__.Editor;
      },
      get Toolbar() {
        return _wangeditor_editor_for_vue__WEBPACK_IMPORTED_MODULE_2__.Toolbar;
      },
      get Boot() {
        return _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.Boot;
      },
      get i18nAddResources() {
        return _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.i18nAddResources;
      },
      get i18nChangeLanguage() {
        return _wangeditor_editor__WEBPACK_IMPORTED_MODULE_3__.i18nChangeLanguage;
      },
      get ru() {
        return _text_block_editor_modules_i18n__WEBPACK_IMPORTED_MODULE_4__["default"];
      },
      get leadModule() {
        return _text_block_editor_modules_lead_index__WEBPACK_IMPORTED_MODULE_5__["default"];
      },
      get headerModule() {
        return _text_block_editor_modules_header_index__WEBPACK_IMPORTED_MODULE_6__["default"];
      },
      get textStyleSelectModule() {
        return _text_block_editor_modules_text_style_select_index__WEBPACK_IMPORTED_MODULE_7__["default"];
      },
      get shiftEnterModule() {
        return _text_block_editor_modules_shift_enter_index__WEBPACK_IMPORTED_MODULE_8__["default"];
      },
      get footnoteModule() {
        return _text_block_editor_modules_footnote_index__WEBPACK_IMPORTED_MODULE_9__["default"];
      },
      get FootnoteModal() {
        return _text_block_editor_modules_footnote_FootnoteModal__WEBPACK_IMPORTED_MODULE_10__["default"];
      },
      get updateFootnotesNumbers() {
        return _text_block_editor_modules_footnote_helpers__WEBPACK_IMPORTED_MODULE_11__.updateFootnotesNumbers;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
/* harmony import */ var _wangeditor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wangeditor/core */ "./node_modules/@wangeditor/core/dist/index.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'FootnoteModal',
  props: {
    modelValue: Boolean,
    editor: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emits = _ref.emit;
    expose();
    var props = __props;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      setModalPosition();
      getSelectedFootnote();
    });
    var top = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var bottom = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var left = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var right = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    function setModalPosition() {
      var positon = props.editor.getSelectionPosition();

      // Set modal position
      top.value = positon.top || null;
      bottom.value = positon.bottom || null;
      left.value = positon.left || null;
      right.value = positon.right || null;
      input.value.focus({
        preventScroll: true
      });
    }
    var selectedFootnote = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    function getSelectedFootnote() {
      selectedFootnote.value = _wangeditor_core__WEBPACK_IMPORTED_MODULE_2__.DomEditor.getSelectedNodeByType(props.editor, 'footnote');
      if (selectedFootnote.value) {
        var _selectedFootnote$val;
        input.value.value = ((_selectedFootnote$val = selectedFootnote.value) === null || _selectedFootnote$val === void 0 ? void 0 : _selectedFootnote$val.value) || '';
      }
    }
    var input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    function inputKeyupHandler(event) {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'Enter') submitFootnote();
    }
    function submitFootnote() {
      if (props.editor) {
        props.editor.restoreSelection();
        selectedFootnote.value ? updateFootnote() : insertFootnote();
      }
      closeModal();
    }
    function insertFootnote() {
      var footnoteNode = {
        type: 'footnote',
        number: '',
        value: input.value.value || '',
        children: [{
          text: ''
        }] // There must be an empty text as children
      };

      // props.editor.deleteBackward('character') // Delete '@'
      props.editor.insertNode(footnoteNode);
      props.editor.move(1); // Move cursor

      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.updateFootnotesNumbers)(props.editor);
    }
    function updateFootnote() {
      var footnote = _objectSpread(_objectSpread({}, selectedFootnote.value), {}, {
        value: input.value.value || ''
      });
      _wangeditor_editor__WEBPACK_IMPORTED_MODULE_1__.SlateTransforms.setNodes(props.editor, footnote, {
        match: function match(n) {
          return _wangeditor_core__WEBPACK_IMPORTED_MODULE_2__.DomEditor.checkNodeType(n, 'footnote');
        }
      });
    }
    function closeModal() {
      props.editor.restoreSelection();
      emits('update:modelValue', false);
    }
    var __returned__ = {
      props: props,
      emits: emits,
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      setModalPosition: setModalPosition,
      selectedFootnote: selectedFootnote,
      getSelectedFootnote: getSelectedFootnote,
      input: input,
      inputKeyupHandler: inputKeyupHandler,
      submitFootnote: submitFootnote,
      insertFootnote: insertFootnote,
      updateFootnote: updateFootnote,
      closeModal: closeModal,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get SlateTransforms() {
        return _wangeditor_editor__WEBPACK_IMPORTED_MODULE_1__.SlateTransforms;
      },
      get t() {
        return _wangeditor_editor__WEBPACK_IMPORTED_MODULE_1__.t;
      },
      get DomEditor() {
        return _wangeditor_core__WEBPACK_IMPORTED_MODULE_2__.DomEditor;
      },
      get updateFootnotesNumbers() {
        return _helpers__WEBPACK_IMPORTED_MODULE_3__.updateFootnotesNumbers;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=template&id=55f09c1a":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=template&id=55f09c1a ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "editor-block editor-block_text"
};
var _hoisted_2 = {
  key: 0,
  "class": "text-editor"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$setup._data.hasOwnProperty('content') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Toolbar"], {
    editor: $setup.editorRef,
    defaultConfig: $setup.toolbarConfig,
    mode: "default",
    "class": "text-editor__toolbar"
  }, null, 8 /* PROPS */, ["editor"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Editor"], {
    modelValue: $setup._data.content,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup._data.content = $event;
    }),
    defaultConfig: $setup.editorConfig,
    mode: "default",
    "class": "text-editor__content",
    style: {
      "height": "300px"
    },
    ref: "textEditorContentComponent",
    onOnCreated: $setup.handleCreated,
    onOnChange: $setup.handleChange
  }, null, 8 /* PROPS */, ["modelValue"]), $setup.props.data.withFootnotes && $setup.isShowFootnoteModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["FootnoteModal"], {
    key: 0,
    modelValue: $setup.isShowFootnoteModal,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.isShowFootnoteModal = $event;
    }),
    editor: $setup.editorRef
  }, null, 8 /* PROPS */, ["modelValue", "editor"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=template&id=77fde3bc":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=template&id=77fde3bc ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["onSubmit"];
var _hoisted_2 = {
  "class": "babel-container"
};
var _hoisted_3 = {
  "class": "button-container"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  viewBox: "0 0 1024 1024"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M1024 896.1024l-128 128L512 640 128 1024 0 896 384 512 0 128 128 0 512 384 896.1024 0l128 128L640 512z"
})], -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "w-e-modal",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      top: $setup.top,
      bottom: $setup.bottom,
      left: $setup.left,
      right: $setup.right,
      width: '300px'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submitFootnote, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.t('footnote.valueInputLabel')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    type: "text",
    rows: "4",
    required: "",
    ref: "input",
    onKeyup: $setup.inputKeyupHandler
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.t('common.ok')), 1 /* TEXT */)])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "btn-close",
    onClick: $setup.closeModal
  }, _hoisted_5)], 4 /* STYLE */);
}

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/elem-to-html.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/elem-to-html.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function footnoteToHtml(elem, childrenHtml) {
  var _elem$number = elem.number,
    number = _elem$number === void 0 ? null : _elem$number,
    _elem$value = elem.value,
    value = _elem$value === void 0 ? '' : _elem$value;
  return "<a href=\"#footnote-".concat(number, "\" id=\"footnote-link-").concat(number, "\" data-number=\"").concat(number, "\" data-value=\"").concat(value, "\" data-w-e-type=\"footnote\">[").concat(number, "]</a>");
}
var conf = {
  type: 'footnote',
  elemToHtml: footnoteToHtml
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conf);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/helpers.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/helpers.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFootnoteConfig": () => (/* binding */ getFootnoteConfig),
/* harmony export */   "showModal": () => (/* binding */ showModal),
/* harmony export */   "updateFootnotesNumbers": () => (/* binding */ updateFootnotesNumbers)
/* harmony export */ });
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
/* harmony import */ var _wangeditor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wangeditor/core */ "./node_modules/@wangeditor/core/dist/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function getFootnoteConfig(editor) {
  var _editor$getConfig = editor.getConfig(),
    EXTEND_CONF = _editor$getConfig.EXTEND_CONF;
  var footnoteConfig = EXTEND_CONF.footnoteConfig;
  return footnoteConfig;
}
function showModal(editor) {
  var _getFootnoteConfig = getFootnoteConfig(editor),
    showModal = _getFootnoteConfig.showModal,
    hideModal = _getFootnoteConfig.hideModal;
  if (showModal) showModal(editor);
  setTimeout(function () {
    function _hide() {
      if (hideModal) hideModal(editor);
    }
    editor.once('fullScreen', _hide);
    editor.once('unFullScreen', _hide);
    editor.once('scroll', _hide);
    editor.once('modalOrPanelShow', _hide);
    editor.once('modalOrPanelHide', _hide);
    function hideOnChange() {
      if (editor.selection != null) {
        _hide();
        editor.off('change', hideOnChange); // Unbind in time
      }
    }

    editor.on('change', hideOnChange);
  });
}
function updateFootnotesNumbers(editor) {
  var footnoteElements = _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.SlateEditor.nodes(editor, {
    at: [],
    // Path of Editor
    match: function match(node, path) {
      return node.type === 'footnote';
    }
  });
  var number = 1;
  var _iterator = _createForOfIteratorHelper(footnoteElements),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        nodeEntry = _step$value[0],
        location = _step$value[1];
      var footnote = _objectSpread({}, nodeEntry);
      footnote.number = number++;
      _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.SlateTransforms.select(editor, location);
      _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.SlateTransforms.setNodes(editor, footnote, {
        match: function match(n) {
          return _wangeditor_core__WEBPACK_IMPORTED_MODULE_1__.DomEditor.checkNodeType(n, 'footnote');
        }
      });
      // editor.restoreSelection()
      // editor.move(1) // Move cursor
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  editor.restoreSelection();
}

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/index.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/plugin.js");
/* harmony import */ var _render_elem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-elem */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/render-elem.js");
/* harmony import */ var _elem_to_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elem-to-html */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/elem-to-html.js");
/* harmony import */ var _parse_elem_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse-elem-html */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/parse-elem-html.js");
/* harmony import */ var _menu_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/index.js");





var module = {
  editorPlugin: _plugin__WEBPACK_IMPORTED_MODULE_0__["default"],
  renderElems: [_render_elem__WEBPACK_IMPORTED_MODULE_1__["default"]],
  elemsToHtml: [_elem_to_html__WEBPACK_IMPORTED_MODULE_2__["default"]],
  parseElemsHtml: [_parse_elem_html__WEBPACK_IMPORTED_MODULE_3__["default"]],
  menus: [_menu_index__WEBPACK_IMPORTED_MODULE_4__.insertFootnoteMenuConf, _menu_index__WEBPACK_IMPORTED_MODULE_4__.editFootnoteMenuConf]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (module);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/EditFootnote.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/EditFootnote.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description button menu base
 */




var EditFootnoteButtonMenu = /*#__PURE__*/function () {
  function EditFootnoteButtonMenu() {
    _classCallCheck(this, EditFootnoteButtonMenu);
    _defineProperty(this, "title", (0,_wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.t)('footnote.edit'));
    _defineProperty(this, "iconSvg", '<svg viewBox="0 0 1024 1024"><path d="M864 0a160 160 0 0 1 128 256l-64 64-224-224 64-64c26.752-20.096 59.968-32 96-32zM64 736l-64 288 288-64 592-592-224-224L64 736z m651.584-372.416l-448 448-55.168-55.168 448-448 55.168 55.168z"></path></svg>');
    _defineProperty(this, "type", 'footnote');
    _defineProperty(this, "tag", 'button');
  }
  _createClass(EditFootnoteButtonMenu, [{
    key: "getValue",
    value: function getValue(editor) {
      return '';
    }
  }, {
    key: "isActive",
    value: function isActive(editor) {
      return false;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled(editor) {
      if (editor.selection == null) return true;
      var node = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.matchNode)(editor, function (type) {
        return type === 'footnote';
      });
      return !node;
    }
  }, {
    key: "exec",
    value: function exec(editor, value) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.showModal)(editor);
    }
  }]);
  return EditFootnoteButtonMenu;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditFootnoteButtonMenu);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/InsertFootnote.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/InsertFootnote.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description button menu base
 */




var InsertFootnoteButtonMenu = /*#__PURE__*/function () {
  function InsertFootnoteButtonMenu() {
    _classCallCheck(this, InsertFootnoteButtonMenu);
    _defineProperty(this, "title", (0,_wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.t)('footnote.insert'));
    _defineProperty(this, "iconSvg", '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.84788 0V2.22643H2.88479V21.7616H4.84788V24H0V0H4.84788Z" fill="black"/><path d="M14.2564 2.60948V20.0978H11.3716V6.03292L7.09825 7.4813V5.09925L13.9092 2.60948H14.2564Z" fill="black"/><path d="M19.1282 2.22643V0H24V24H19.1282V21.7616H21.1152V2.22643H19.1282Z" fill="black"/></svg>');
    _defineProperty(this, "type", 'footnote');
    _defineProperty(this, "tag", 'button');
  }
  _createClass(InsertFootnoteButtonMenu, [{
    key: "getValue",
    value: function getValue(editor) {
      return '';
    }
  }, {
    key: "isActive",
    value: function isActive(editor) {
      return false;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled(editor) {
      if (editor.selection == null) return true;
      var node = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.matchNode)(editor, function (type) {
        return type === 'paragraph' || type === 'footnote';
      });
      return !node;
    }
  }, {
    key: "exec",
    value: function exec(editor, value) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.showModal)(editor);
    }
  }]);
  return InsertFootnoteButtonMenu;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsertFootnoteButtonMenu);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/index.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editFootnoteMenuConf": () => (/* binding */ editFootnoteMenuConf),
/* harmony export */   "insertFootnoteMenuConf": () => (/* binding */ insertFootnoteMenuConf)
/* harmony export */ });
/* harmony import */ var _InsertFootnote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsertFootnote */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/InsertFootnote.js");
/* harmony import */ var _EditFootnote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditFootnote */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/menu/EditFootnote.js");


var insertFootnoteMenuConf = {
  key: 'insertFootnote',
  factory: function factory() {
    return new _InsertFootnote__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
};
var editFootnoteMenuConf = {
  key: 'editFootnote',
  factory: function factory() {
    return new _EditFootnote__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
};


/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/parse-elem-html.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/parse-elem-html.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function parseHtml(elem, children, editor) {
  var number = elem.getAttribute('data-number') || null;
  var value = elem.getAttribute('data-value') || null;

  // void node (children) must have a blank text
  return {
    type: 'footnote',
    number: number,
    value: value,
    children: [{
      text: ''
    }]
  };
}
var parseHtmlConf = {
  selector: 'a[data-w-e-type="footnote"]',
  parseElemHtml: parseHtml
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseHtmlConf);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/plugin.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/plugin.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");

function withFootnote(editor) {
  var isInline = editor.isInline,
    isVoid = editor.isVoid;
  var newEditor = editor;

  // rewrite isInline
  newEditor.isInline = function (elem) {
    var type = _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.DomEditor.getNodeType(elem);
    if (type === 'footnote') {
      return true;
    }
    return isInline(elem);
  };

  // rewrite isVoid
  newEditor.isVoid = function (elem) {
    var type = _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.DomEditor.getNodeType(elem);
    if (type === 'footnote') {
      return true;
    }
    return isVoid(elem);
  };
  return newEditor;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withFootnote);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/render-elem.js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/render-elem.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/h.js");
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");


function renderFootnote(elem, children, editor) {
  // Is the current node selected?
  var selected = _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.DomEditor.isNodeSelected(editor, elem);
  var _elem$number = elem.number,
    number = _elem$number === void 0 ? null : _elem$number,
    _elem$value = elem.value,
    value = _elem$value === void 0 ? null : _elem$value;
  var vnode = (0,snabbdom__WEBPACK_IMPORTED_MODULE_1__.h)('span', {
    id: "footnote-link-".concat(number),
    props: {
      // href: `#footnote-${id}`,
      contentEditable: false
    },
    attrs: {
      'data-value': value
    },
    style: {
      marginLeft: '3px',
      marginRight: '3px',
      backgroundColor: 'var(--w-e-textarea-slight-bg-color)',
      border: selected // Selected/unselected, the styles are different
      ? '2px solid var(--w-e-textarea-selected-border-color)' // wangEditor provided css var https://www.wangeditor.com/v5/theme.html
      : '2px solid transparent',
      borderRadius: '3px',
      padding: '0 3px'
    }
  }, "[".concat(number, "]"));
  return vnode;
}
var conf = {
  type: 'footnote',
  renderElem: renderFootnote
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conf);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/elem-to-html.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/elem-to-html.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header1ToHtmlConf": () => (/* binding */ header1ToHtmlConf),
/* harmony export */   "header2ToHtmlConf": () => (/* binding */ header2ToHtmlConf),
/* harmony export */   "header3ToHtmlConf": () => (/* binding */ header3ToHtmlConf),
/* harmony export */   "header4ToHtmlConf": () => (/* binding */ header4ToHtmlConf),
/* harmony export */   "header5ToHtmlConf": () => (/* binding */ header5ToHtmlConf)
/* harmony export */ });
/**
 * @description to html
 * @author wangfupeng
 */

function genToHtmlFn(level) {
  function headerToHtml(elem, childrenHtml) {
    // data-custom - для того, чтобы разделить базовые блоки редактора и собственные,
    // иначе будет конфликт из-за похожих тегов. Способа отключить базовые модули в редакторе не нашел
    return "<h".concat(level, " data-w-e-type=\"header").concat(level, "\">").concat(childrenHtml, "</h").concat(level, ">");
  }
  return headerToHtml;
}
var header1ToHtmlConf = {
  type: 'myHeader1',
  elemToHtml: genToHtmlFn(1)
};
var header2ToHtmlConf = {
  type: 'myHeader2',
  elemToHtml: genToHtmlFn(2)
};
var header3ToHtmlConf = {
  type: 'myHeader3',
  elemToHtml: genToHtmlFn(3)
};
var header4ToHtmlConf = {
  type: 'myHeader4',
  elemToHtml: genToHtmlFn(4)
};
var header5ToHtmlConf = {
  type: 'myHeader5',
  elemToHtml: genToHtmlFn(5)
};

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/index.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_elem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-elem */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/render-elem.js");
/* harmony import */ var _menu_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/index.js");
/* harmony import */ var _elem_to_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elem-to-html */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/elem-to-html.js");
/* harmony import */ var _parse_elem_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse-elem-html */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/parse-elem-html.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugin */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/plugin.js");
/**
 * @description header entry
 * @author wangfupeng
 */






var header = {
  renderElems: [_render_elem__WEBPACK_IMPORTED_MODULE_0__.renderHeader1Conf, _render_elem__WEBPACK_IMPORTED_MODULE_0__.renderHeader2Conf, _render_elem__WEBPACK_IMPORTED_MODULE_0__.renderHeader3Conf, _render_elem__WEBPACK_IMPORTED_MODULE_0__.renderHeader4Conf, _render_elem__WEBPACK_IMPORTED_MODULE_0__.renderHeader5Conf],
  elemsToHtml: [_elem_to_html__WEBPACK_IMPORTED_MODULE_2__.header1ToHtmlConf, _elem_to_html__WEBPACK_IMPORTED_MODULE_2__.header2ToHtmlConf, _elem_to_html__WEBPACK_IMPORTED_MODULE_2__.header3ToHtmlConf, _elem_to_html__WEBPACK_IMPORTED_MODULE_2__.header4ToHtmlConf, _elem_to_html__WEBPACK_IMPORTED_MODULE_2__.header5ToHtmlConf],
  parseElemsHtml: [_parse_elem_html__WEBPACK_IMPORTED_MODULE_3__.parseHeader1HtmlConf, _parse_elem_html__WEBPACK_IMPORTED_MODULE_3__.parseHeader2HtmlConf, _parse_elem_html__WEBPACK_IMPORTED_MODULE_3__.parseHeader3HtmlConf, _parse_elem_html__WEBPACK_IMPORTED_MODULE_3__.parseHeader4HtmlConf, _parse_elem_html__WEBPACK_IMPORTED_MODULE_3__.parseHeader5HtmlConf],
  menus: [_menu_index__WEBPACK_IMPORTED_MODULE_1__.Header1ButtonMenuConf, _menu_index__WEBPACK_IMPORTED_MODULE_1__.Header2ButtonMenuConf, _menu_index__WEBPACK_IMPORTED_MODULE_1__.Header3ButtonMenuConf, _menu_index__WEBPACK_IMPORTED_MODULE_1__.Header4ButtonMenuConf, _menu_index__WEBPACK_IMPORTED_MODULE_1__.Header5ButtonMenuConf],
  editorPlugin: _plugin__WEBPACK_IMPORTED_MODULE_4__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header1ButtonMenu.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header1ButtonMenu.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderButtonMenuBase */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/HeaderButtonMenuBase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description header1 button menu
 * @author wangfupeng
 */


var Header1ButtonMenu = /*#__PURE__*/function (_HeaderButtonMenuBase) {
  _inherits(Header1ButtonMenu, _HeaderButtonMenuBase);
  var _super = _createSuper(Header1ButtonMenu);
  function Header1ButtonMenu() {
    var _this;
    _classCallCheck(this, Header1ButtonMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "title", 'H1');
    _defineProperty(_assertThisInitialized(_this), "type", 'myHeader1');
    return _this;
  }
  return _createClass(Header1ButtonMenu);
}(_HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header1ButtonMenu);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header2ButtonMenu.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header2ButtonMenu.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderButtonMenuBase */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/HeaderButtonMenuBase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description header2 button menu
 * @author wangfupeng
 */


var Header2ButtonMenu = /*#__PURE__*/function (_HeaderButtonMenuBase) {
  _inherits(Header2ButtonMenu, _HeaderButtonMenuBase);
  var _super = _createSuper(Header2ButtonMenu);
  function Header2ButtonMenu() {
    var _this;
    _classCallCheck(this, Header2ButtonMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "title", 'H2');
    _defineProperty(_assertThisInitialized(_this), "type", 'myHeader2');
    return _this;
  }
  return _createClass(Header2ButtonMenu);
}(_HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header2ButtonMenu);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header3ButtonMenu.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header3ButtonMenu.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderButtonMenuBase */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/HeaderButtonMenuBase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description header3 button menu
 * @author wangfupeng
 */


var Header3ButtonMenu = /*#__PURE__*/function (_HeaderButtonMenuBase) {
  _inherits(Header3ButtonMenu, _HeaderButtonMenuBase);
  var _super = _createSuper(Header3ButtonMenu);
  function Header3ButtonMenu() {
    var _this;
    _classCallCheck(this, Header3ButtonMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "title", 'H3');
    _defineProperty(_assertThisInitialized(_this), "type", 'myHeader3');
    return _this;
  }
  return _createClass(Header3ButtonMenu);
}(_HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header3ButtonMenu);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header4ButtonMenu.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header4ButtonMenu.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderButtonMenuBase */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/HeaderButtonMenuBase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description header4 button menu
 * @author wangfupeng
 */


var Header4ButtonMenu = /*#__PURE__*/function (_HeaderButtonMenuBase) {
  _inherits(Header4ButtonMenu, _HeaderButtonMenuBase);
  var _super = _createSuper(Header4ButtonMenu);
  function Header4ButtonMenu() {
    var _this;
    _classCallCheck(this, Header4ButtonMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "title", 'H4');
    _defineProperty(_assertThisInitialized(_this), "type", 'myHeader4');
    return _this;
  }
  return _createClass(Header4ButtonMenu);
}(_HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header4ButtonMenu);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header5ButtonMenu.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header5ButtonMenu.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderButtonMenuBase */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/HeaderButtonMenuBase.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description header5 button menu
 * @author wangfupeng
 */


var Header5ButtonMenu = /*#__PURE__*/function (_HeaderButtonMenuBase) {
  _inherits(Header5ButtonMenu, _HeaderButtonMenuBase);
  var _super = _createSuper(Header5ButtonMenu);
  function Header5ButtonMenu() {
    var _this;
    _classCallCheck(this, Header5ButtonMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "title", 'H5');
    _defineProperty(_assertThisInitialized(_this), "type", 'myHeader5');
    return _this;
  }
  return _createClass(Header5ButtonMenu);
}(_HeaderButtonMenuBase__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header5ButtonMenu);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/HeaderButtonMenuBase.js":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/HeaderButtonMenuBase.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _wangeditor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/core */ "./node_modules/@wangeditor/core/dist/index.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description button menu base
 * @author wangfupeng
 */




var HeaderButtonMenuBase = /*#__PURE__*/function () {
  function HeaderButtonMenuBase() {
    _classCallCheck(this, HeaderButtonMenuBase);
    _defineProperty(this, "title", void 0);
    _defineProperty(this, "type", void 0);
    _defineProperty(this, "tag", 'button');
  }
  _createClass(HeaderButtonMenuBase, [{
    key: "getValue",
    value: function getValue(editor) {
      return '';
    }
  }, {
    key: "isActive",
    value: function isActive(editor) {
      return !!_wangeditor_core__WEBPACK_IMPORTED_MODULE_0__.DomEditor.getSelectedNodeByType(editor, this.type);
    }
  }, {
    key: "isDisabled",
    value: function isDisabled(editor) {
      if (editor.selection == null) return true;
      var node = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.matchNode)(editor, function (type) {
        return type === 'paragraph' || type === 'lead' || type.startsWith('myHeader');
      });
      return !node;
    }
  }, {
    key: "exec",
    value: function exec(editor, value) {
      if (this.isDisabled(editor)) return;
      var newType = this.isActive(editor) ? 'paragraph' : this.type;
      slate__WEBPACK_IMPORTED_MODULE_2__.Transforms.setNodes(editor, {
        type: newType
      }, {
        mode: 'highest'
      });
    }
  }]);
  return HeaderButtonMenuBase;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderButtonMenuBase);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/index.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header1ButtonMenuConf": () => (/* binding */ Header1ButtonMenuConf),
/* harmony export */   "Header2ButtonMenuConf": () => (/* binding */ Header2ButtonMenuConf),
/* harmony export */   "Header3ButtonMenuConf": () => (/* binding */ Header3ButtonMenuConf),
/* harmony export */   "Header4ButtonMenuConf": () => (/* binding */ Header4ButtonMenuConf),
/* harmony export */   "Header5ButtonMenuConf": () => (/* binding */ Header5ButtonMenuConf)
/* harmony export */ });
/* harmony import */ var _Header1ButtonMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header1ButtonMenu */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header1ButtonMenu.js");
/* harmony import */ var _Header2ButtonMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header2ButtonMenu */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header2ButtonMenu.js");
/* harmony import */ var _Header3ButtonMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header3ButtonMenu */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header3ButtonMenu.js");
/* harmony import */ var _Header4ButtonMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header4ButtonMenu */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header4ButtonMenu.js");
/* harmony import */ var _Header5ButtonMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header5ButtonMenu */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/menu/Header5ButtonMenu.js");
/**
 * @description menu entry
 * @author wangfupeng
 */






var Header1ButtonMenuConf = {
  key: 'myHeader1',
  factory: function factory() {
    return new _Header1ButtonMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
};
var Header2ButtonMenuConf = {
  key: 'myHeader2',
  factory: function factory() {
    return new _Header2ButtonMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
};
var Header3ButtonMenuConf = {
  key: 'myHeader3',
  factory: function factory() {
    return new _Header3ButtonMenu__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }
};
var Header4ButtonMenuConf = {
  key: 'myHeader4',
  factory: function factory() {
    return new _Header4ButtonMenu__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }
};
var Header5ButtonMenuConf = {
  key: 'myHeader5',
  factory: function factory() {
    return new _Header5ButtonMenu__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }
};

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/parse-elem-html.js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/parse-elem-html.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseHeader1HtmlConf": () => (/* binding */ parseHeader1HtmlConf),
/* harmony export */   "parseHeader2HtmlConf": () => (/* binding */ parseHeader2HtmlConf),
/* harmony export */   "parseHeader3HtmlConf": () => (/* binding */ parseHeader3HtmlConf),
/* harmony export */   "parseHeader4HtmlConf": () => (/* binding */ parseHeader4HtmlConf),
/* harmony export */   "parseHeader5HtmlConf": () => (/* binding */ parseHeader5HtmlConf)
/* harmony export */ });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/**
 * @description parse html
 * @author wangfupeng
 */


function genParser(level) {
  function parseHtml(elem, children, editor) {
    children = children.filter(function (child) {
      if (slate__WEBPACK_IMPORTED_MODULE_0__.Text.isText(child)) return true;
      if (editor.isInline(child)) return true;
      return false;
    });

    // 无 children ，则用纯文本
    if (children.length === 0) {
      children = [{
        text: elem.textContent.replace(/\s+/gm, ' ')
      }];
    }
    var headerNode = {
      type: "myHeader".concat(level),
      children: children
    };
    return headerNode;
  }
  return parseHtml;
}
var parseHeader1HtmlConf = {
  selector: 'h1[data-w-e-type="header1"]',
  parseElemHtml: genParser(1)
};
var parseHeader2HtmlConf = {
  selector: 'h2[data-w-e-type="header2"]',
  parseElemHtml: genParser(2)
};
var parseHeader3HtmlConf = {
  selector: 'h3[data-w-e-type="header3"]',
  parseElemHtml: genParser(3)
};
var parseHeader4HtmlConf = {
  selector: 'h4[data-w-e-type="header4"]',
  parseElemHtml: genParser(4)
};
var parseHeader5HtmlConf = {
  selector: 'h5[data-w-e-type="header6"]',
  parseElemHtml: genParser(5)
};

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/plugin.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/plugin.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _wangeditor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/core */ "./node_modules/@wangeditor/core/dist/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @description editor 插件，重写 editor API
 * @author wangfupeng
 */



function withHeader(editor) {
  var insertBreak = editor.insertBreak;
  var newEditor = editor;

  // 重写 insertBreak - header 末尾回车时要插入 paragraph
  newEditor.insertBreak = function () {
    var _Editor$nodes = slate__WEBPACK_IMPORTED_MODULE_1__.Editor.nodes(newEditor, {
        match: function match(n) {
          var type = _wangeditor_core__WEBPACK_IMPORTED_MODULE_0__.DomEditor.getNodeType(n);
          return type.startsWith('myHeader'); // 匹配 node.type 是 header 开头的 node
        },

        universal: true
      }),
      _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
      match = _Editor$nodes2[0];
    if (!match) {
      // 未匹配到
      insertBreak();
      return;
    }
    var isAtLineEnd = _wangeditor_core__WEBPACK_IMPORTED_MODULE_0__.DomEditor.isSelectionAtLineEnd(editor, match[1]);

    // 如果在行末插入一个空 p，否则正常换行
    if (isAtLineEnd) {
      var p = {
        type: 'paragraph',
        children: [{
          text: ''
        }]
      };
      slate__WEBPACK_IMPORTED_MODULE_1__.Transforms.insertNodes(newEditor, p, {
        mode: 'highest'
      });
    } else {
      insertBreak();
    }
  };

  // 返回 editor ，重要！
  return newEditor;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withHeader);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/header/render-elem.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/header/render-elem.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader1Conf": () => (/* binding */ renderHeader1Conf),
/* harmony export */   "renderHeader2Conf": () => (/* binding */ renderHeader2Conf),
/* harmony export */   "renderHeader3Conf": () => (/* binding */ renderHeader3Conf),
/* harmony export */   "renderHeader4Conf": () => (/* binding */ renderHeader4Conf),
/* harmony export */   "renderHeader5Conf": () => (/* binding */ renderHeader5Conf)
/* harmony export */ });
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/h.js");
/**
 * @description render header
 * @author wangfupeng
 */


function genRenderElem(level) {
  /**
   * render header elem
   * @param elemNode slate elem
   * @param children children
   * @param editor editor
   * @returns vnode
   */
  function renderHeader(elemNode, children, editor) {
    var tag = "h".concat(level);
    var headerNode = (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.h)(tag, {}, children);
    return headerNode;
  }
  return renderHeader;
}
var renderHeader1Conf = {
  type: 'myHeader1',
  renderElem: genRenderElem(1)
};
var renderHeader2Conf = {
  type: 'myHeader2',
  renderElem: genRenderElem(2)
};
var renderHeader3Conf = {
  type: 'myHeader3',
  renderElem: genRenderElem(3)
};
var renderHeader4Conf = {
  type: 'myHeader4',
  renderElem: genRenderElem(4)
};
var renderHeader5Conf = {
  type: 'myHeader5',
  renderElem: genRenderElem(5)
};


/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/helpers.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/helpers.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchNode": () => (/* binding */ matchNode)
/* harmony export */ });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _wangeditor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/core */ "./node_modules/@wangeditor/core/dist/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function matchNode(editor, matchCallback) {
  var _Editor$nodes = slate__WEBPACK_IMPORTED_MODULE_1__.Editor.nodes(editor, {
      match: function match(n) {
        var type = _wangeditor_core__WEBPACK_IMPORTED_MODULE_0__.DomEditor.getNodeType(n);
        return matchCallback(type);
      },
      universal: true,
      mode: 'highest'
    }),
    _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
    nodeEntry = _Editor$nodes2[0];
  return (nodeEntry === null || nodeEntry === void 0 ? void 0 : nodeEntry[0]) || null;
}

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/i18n.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/i18n.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  paragraph: {
    title: 'Текст',
    text: 'Текст'
  },
  lead: {
    title: 'Лид',
    text: 'Лид'
  },
  textStyleSelect: {
    title: 'Стиль текста'
  },
  textStyle: {
    bold: 'Жирный',
    italic: 'Наклонный',
    underline: 'Подчеркнутый',
    through: 'Зачеркнутый',
    sup: 'Надстрочный знак',
    sub: 'Подстрочный знак',
    clear: 'Очистить стиль теста'
  },
  blockQuote: {
    title: 'Цитата'
  },
  color: {
    color: 'Цвет текста',
    bgColor: 'Цвет фона текста'
  },
  listModule: {
    unOrderedList: 'Маркированный список',
    orderedList: 'Нумерованный список'
  },
  indent: {
    increase: 'Увеличить отступ',
    decrease: 'Уменьшить отступ'
  },
  link: {
    text: 'Текст',
    url: 'Ссылка',
    insert: 'Вставить ссылку',
    edit: 'Изменить',
    unLink: 'Удалить',
    view: 'Перейти'
  },
  tableModule: {
    header: 'Наличие шапки',
    widthAuto: 'Автоматическая ширина',
    insertTable: 'Вставить таблицу',
    deleteTable: 'Удалить таблицу',
    insertRow: 'Вставить строку',
    deleteRow: 'Удалить строку',
    insertCol: 'Вставить столбец',
    deleteCol: 'Удалить столбец'
  },
  divider: {
    title: 'Разделитель'
  },
  common: {
    ok: 'Ок',
    enter: 'Новая строка'
  },
  undo: {
    undo: 'Отменить',
    redo: 'Повторить'
  },
  footnote: {
    insert: 'Вставить сноску',
    edit: 'Изменить сноску',
    valueInputLabel: 'Текст сноски'
  }
});

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/elem-to-html.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/elem-to-html.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leadToHtmlConf": () => (/* binding */ leadToHtmlConf)
/* harmony export */ });
/**
 * @description to html
 */

function leadToHtml(elem, childrenHtml) {
  return "<p class=\"lead\" data-w-e-type=\"lead\">".concat(childrenHtml, "</p>");
}
var leadToHtmlConf = {
  type: 'lead',
  elemToHtml: leadToHtml
};

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/index.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_elem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-elem */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/render-elem.js");
/* harmony import */ var _elem_to_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elem-to-html */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/elem-to-html.js");
/* harmony import */ var _parse_elem_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse-elem-html */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/parse-elem-html.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugin */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/plugin.js");
/* harmony import */ var _menu_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/menu/index.js");
/**
 * @description lead entry
 */






var lead = {
  renderElems: [_render_elem__WEBPACK_IMPORTED_MODULE_0__.renderLeadConf],
  elemsToHtml: [_elem_to_html__WEBPACK_IMPORTED_MODULE_1__.leadToHtmlConf],
  parseElemsHtml: [_parse_elem_html__WEBPACK_IMPORTED_MODULE_2__.parseLeadHtmlConf],
  menus: [_menu_index__WEBPACK_IMPORTED_MODULE_4__.leadMenuConf],
  editorPlugin: _plugin__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lead);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/menu/LeadButtonMenu.js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/menu/LeadButtonMenu.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _wangeditor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wangeditor/core */ "./node_modules/@wangeditor/core/dist/index.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description button menu base
 */





var LeadButtonMenu = /*#__PURE__*/function () {
  function LeadButtonMenu() {
    _classCallCheck(this, LeadButtonMenu);
    _defineProperty(this, "title", (0,_wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.t)('lead.text'));
    _defineProperty(this, "type", 'lead');
    _defineProperty(this, "tag", 'button');
  }
  _createClass(LeadButtonMenu, [{
    key: "getValue",
    value: function getValue(editor) {
      return '';
    }
  }, {
    key: "isActive",
    value: function isActive(editor) {
      return !!_wangeditor_core__WEBPACK_IMPORTED_MODULE_1__.DomEditor.getSelectedNodeByType(editor, this.type);
    }
  }, {
    key: "isDisabled",
    value: function isDisabled(editor) {
      if (editor.selection == null) return true;
      var node = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.matchNode)(editor, function (type) {
        return type === 'paragraph' || type === 'lead' || type.startsWith('my-header');
      });
      return !node;
    }
  }, {
    key: "exec",
    value: function exec(editor, value) {
      if (this.isDisabled(editor)) return;
      var newType = this.isActive(editor) ? 'paragraph' : this.type;
      slate__WEBPACK_IMPORTED_MODULE_3__.Transforms.setNodes(editor, {
        type: newType
      }, {
        mode: 'highest'
      });
    }
  }]);
  return LeadButtonMenu;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeadButtonMenu);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/menu/index.js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/menu/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leadMenuConf": () => (/* binding */ leadMenuConf)
/* harmony export */ });
/* harmony import */ var _LeadButtonMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeadButtonMenu */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/menu/LeadButtonMenu.js");

var leadMenuConf = {
  key: 'lead',
  factory: function factory() {
    return new _LeadButtonMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
};

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/parse-elem-html.js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/parse-elem-html.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseLeadHtmlConf": () => (/* binding */ parseLeadHtmlConf)
/* harmony export */ });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/**
 * @description parse html
 */


function parseLeadHtml(elem, children, editor) {
  children = children.filter(function (child) {
    if (slate__WEBPACK_IMPORTED_MODULE_0__.Text.isText(child)) return true;
    if (editor.isInline(child)) return true;
    return false;
  });
  if (children.length === 0) {
    children = [{
      text: elem.textContent.replace(/\s+/gm, ' ')
    }];
  }
  return {
    type: 'lead',
    children: children
  };
}
var parseLeadHtmlConf = {
  selector: 'p[data-w-e-type="lead"',
  parseElemHtml: parseLeadHtml
};

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/plugin.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/plugin.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @description editor 插件，重写 editor API
 * @author wangfupeng
 */


function deleteHandler(newEditor) {
  var _Editor$nodes = slate__WEBPACK_IMPORTED_MODULE_0__.Editor.nodes(newEditor, {
      match: function match(n) {
        return newEditor.children[0] === n;
      },
      // editor 第一个节点
      mode: 'highest' // 最高层级
    }),
    _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
    nodeEntry = _Editor$nodes2[0];
  if (nodeEntry == null) return false;
  var n = nodeEntry[0];
  if (!slate__WEBPACK_IMPORTED_MODULE_0__.Element.isElement(n)) return false;
  if (n.type === 'lead') return false; // 命中了 paragraph ，则不再继续判断
  if (slate__WEBPACK_IMPORTED_MODULE_0__.Node.string(n) !== '') return false; // 未删除全部内容，则不再继续判断

  var _n$children = n.children,
    children = _n$children === void 0 ? [] : _n$children;
  if (!slate__WEBPACK_IMPORTED_MODULE_0__.Text.isText(children[0])) return false; // n.children 不是 text （如 table），则不再继续判断

  // 至此，就命中了一个（非 paragraph）+（children 都是 text）+（内容为空）的顶级 node ，如 header blockQuote 等
  // 然后，将其却换为 paragraph
  slate__WEBPACK_IMPORTED_MODULE_0__.Transforms.setNodes(newEditor, {
    type: 'paragraph'
  });
  return true;
}
function withLead(editor) {
  var deleteBackward = editor.deleteBackward,
    deleteForward = editor.deleteForward;
  var newEditor = editor;

  // 删除非 p 的文本 elem（如 header blockQuote 等），删除没有内容时，切换为 p
  newEditor.deleteBackward = function (unit) {
    var res = deleteHandler(newEditor);
    if (res) return; // 命中结果，则 return

    // 执行默认的删除
    deleteBackward(unit);
  };
  newEditor.deleteForward = function (unit) {
    var res = deleteHandler(newEditor);
    if (res) return; // 命中结果，则 return

    // 执行默认的删除
    deleteForward(unit);
  };

  // 返回 editor ，重要！
  return newEditor;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withLead);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/render-elem.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/lead/render-elem.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLeadConf": () => (/* binding */ renderLeadConf)
/* harmony export */ });
/* harmony import */ var snabbdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snabbdom */ "./node_modules/snabbdom/build/h.js");
/**
 * @description render lead elem
 */



/**
 * render paragraph elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
function renderLead(elemNode, children, editor) {
  var leadNode = (0,snabbdom__WEBPACK_IMPORTED_MODULE_0__.h)('p.lead', {
    "class": {
      lead: true
    }
  }, children);
  return leadNode;
}
var renderLeadConf = {
  type: 'lead',
  renderElem: renderLead
};

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/shift-enter/index.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/shift-enter/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/shift-enter/plugin.js");
/**
 * @description module entry
 */


var module = {
  editorPlugin: _plugin__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (module);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/shift-enter/plugin.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/shift-enter/plugin.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
/**
 * @description plugin
 */


function withShiftEnter(editor) {
  var insertBreak = editor.insertBreak,
    insertText = editor.insertText;
  var newEditor = editor;
  setTimeout(function () {
    // beforeInput event not recognized shift+enter，so bind DOM events yourself
    var _DomEditor$getTextare = _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.DomEditor.getTextarea(newEditor),
      $textArea = _DomEditor$getTextare.$textArea;
    if ($textArea == null) return;
    $textArea.on('keydown', function (event) {
      var isShift = event.shiftKey || event.metaKey;
      if (event.key === 'Enter' && isShift) {
        // shift+enter trigger newline
        newEditor.insertText('\n');
      } else if (event.key === 'Enter') {
        // enter trigger new break (paragraph line)
        newEditor.insertBreak();
      }
    });
  });
  newEditor.insertBreak = function () {
    var event = window.event;
    var isShift = event.shiftKey || event.metaKey;
    if (isShift) {
      // shift+enter trigger newline
      insertText('\n');
    } else if (event.key === 'Enter') {
      // enter trigger new break (paragraph line)
      insertBreak();
    }
  };
  return newEditor;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withShiftEnter);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/index.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/index */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/menu/index.js");

var textStyleSelect = {
  menus: [_menu_index__WEBPACK_IMPORTED_MODULE_0__.TextStyleSelectConf]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textStyleSelect);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/menu/TextStyleSelect.js":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/menu/TextStyleSelect.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor */ "./node_modules/@wangeditor/editor/dist/index.esm.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var _wangeditor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wangeditor/core */ "./node_modules/@wangeditor/core/dist/index.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @description header menu
 * @author wangfupeng
 */





var TextStyleSelect = /*#__PURE__*/function () {
  function TextStyleSelect() {
    _classCallCheck(this, TextStyleSelect);
    _defineProperty(this, "title", (0,_wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.t)('textStyleSelect.title'));
    _defineProperty(this, "iconSvg", '<svg viewBox="0 0 1024 1024"><path d="M960 960c-51.2 0-102.4-3.2-153.6-3.2-51.2 0-99.2 3.2-150.4 3.2-19.2 0-28.8-22.4-28.8-38.4 0-51.2 57.6-28.8 86.4-48 19.2-12.8 19.2-60.8 19.2-80v-224-19.2c-9.6-3.2-19.2-3.2-28.8-3.2H320c-9.6 0-19.2 0-28.8 3.2V780.8c0 22.4 0 80 22.4 92.8 28.8 19.2 96-6.4 96 44.8 0 16-9.6 41.6-28.8 41.6-54.4 0-105.6-3.2-160-3.2-48 0-96 3.2-147.2 3.2-19.2 0-28.8-22.4-28.8-38.4 0-51.2 51.2-28.8 80-48 19.2-12.8 19.2-60.8 19.2-83.2V294.4c0-28.8 3.2-115.2-22.4-131.2-25.6-16-86.4 9.6-86.4-41.6 0-16 6.4-41.6 28.8-41.6 51.2 0 105.6 3.2 156.8 3.2 48 0 96-3.2 144-3.2 19.2 0 28.8 22.4 28.8 41.6 0 48-57.6 25.6-83.2 41.6-19.2 12.8-19.2 73.6-19.2 92.8v201.6c6.4 3.2 16 3.2 22.4 3.2h400c6.4 0 12.8 0 22.4-3.2V256c0-22.4 0-80-19.2-92.8-28.8-16-86.4 6.4-86.4-41.6 0-16 9.6-41.6 28.8-41.6 51.2 0 99.2 3.2 150.4 3.2 48 0 99.2-3.2 147.2-3.2 19.2 0 28.8 22.4 28.8 41.6 0 51.2-57.6 25.6-86.4 41.6-19.2 12.8-19.2 70.4-19.2 92.8v537.6c0 19.2 0 67.2 19.2 80 28.8 19.2 89.6-6.4 89.6 44.8 0 19.2-6.4 41.6-28.8 41.6z"></path></svg>');
    _defineProperty(this, "tag", 'select');
    _defineProperty(this, "width", 60);
  }
  _createClass(TextStyleSelect, [{
    key: "getOptions",
    value: function getOptions(editor) {
      // 基本的 options 列表
      var options = [
      // value 和 elemNode.type 对应
      {
        value: 'myHeader1',
        text: 'H1',
        styleForRenderMenuList: {
          'font-size': '32px',
          'font-weight': 'bold'
        }
      }, {
        value: 'myHeader2',
        text: 'H2',
        styleForRenderMenuList: {
          'font-size': '24px',
          'font-weight': 'bold'
        }
      }, {
        value: 'myHeader3',
        text: 'H3',
        styleForRenderMenuList: {
          'font-size': '18px',
          'font-weight': 'bold'
        }
      }, {
        value: 'myHeader4',
        text: 'H4',
        styleForRenderMenuList: {
          'font-size': '16px',
          'font-weight': 'bold'
        }
      }, {
        value: 'myHeader5',
        text: 'H5',
        styleForRenderMenuList: {
          'font-size': '13px',
          'font-weight': 'bold'
        }
      }, {
        value: 'lead',
        text: (0,_wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.t)('lead.text'),
        styleForRenderMenuList: {
          'font-size': '24px',
          'font-weight': 'normal'
        }
      }, {
        value: 'paragraph',
        text: (0,_wangeditor_editor__WEBPACK_IMPORTED_MODULE_0__.t)('paragraph.text')
      }
      // { value: 'paragraph', text: 'Text' },
      ];

      // 获取 value ，设置 selected
      var curValue = this.getValue(editor).toString();
      options.forEach(function (opt) {
        if (opt.value === curValue) {
          opt.selected = true;
        } else {
          delete opt.selected;
        }
      });
      return options;
    }
  }, {
    key: "isActive",
    value: function isActive(editor) {
      // select menu 会显示 selected value ，用不到 active
      return false;
    }

    /**
     * 获取选中节点的 node.type
     * @param editor editor
     */
  }, {
    key: "getValue",
    value: function getValue(editor) {
      var node = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.matchNode)(editor, function (type) {
        return type === 'lead' || type.startsWith('myHeader');
      });
      return node ? _wangeditor_core__WEBPACK_IMPORTED_MODULE_1__.DomEditor.getNodeType(node) : 'paragraph';
    }
  }, {
    key: "isDisabled",
    value: function isDisabled(editor) {
      if (editor.selection == null) return true;
      var node = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.matchNode)(editor, function (type) {
        return type === 'paragraph' || type === 'lead' || type.startsWith('myHeader');
      });
      return !node;
    }
  }, {
    key: "exec",
    value: function exec(editor, value) {
      if (this.isDisabled(editor)) return;
      var type = value.toString();
      var newType = this.isActive(editor) ? 'paragraph' : type;
      slate__WEBPACK_IMPORTED_MODULE_3__.Transforms.setNodes(editor, {
        type: newType
      }, {
        mode: 'highest'
      });
    }
  }]);
  return TextStyleSelect;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextStyleSelect);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/menu/index.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/menu/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextStyleSelectConf": () => (/* binding */ TextStyleSelectConf)
/* harmony export */ });
/* harmony import */ var _TextStyleSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextStyleSelect */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/text-style-select/menu/TextStyleSelect.js");

var TextStyleSelectConf = {
  key: 'textStyleSelect',
  factory: function factory() {
    return new _TextStyleSelect__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
};

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/TextBlock.vue":
/*!******************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/TextBlock.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextBlock_vue_vue_type_template_id_55f09c1a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBlock.vue?vue&type=template&id=55f09c1a */ "./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=template&id=55f09c1a");
/* harmony import */ var _TextBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextBlock.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TextBlock_vue_vue_type_template_id_55f09c1a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/editor/blocks/TextBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FootnoteModal_vue_vue_type_template_id_77fde3bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FootnoteModal.vue?vue&type=template&id=77fde3bc */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=template&id=77fde3bc");
/* harmony import */ var _FootnoteModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FootnoteModal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FootnoteModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FootnoteModal_vue_vue_type_template_id_77fde3bc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextBlock.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FootnoteModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FootnoteModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FootnoteModal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=template&id=55f09c1a":
/*!************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=template&id=55f09c1a ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextBlock_vue_vue_type_template_id_55f09c1a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextBlock_vue_vue_type_template_id_55f09c1a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextBlock.vue?vue&type=template&id=55f09c1a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/TextBlock.vue?vue&type=template&id=55f09c1a");


/***/ }),

/***/ "./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=template&id=77fde3bc":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=template&id=77fde3bc ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FootnoteModal_vue_vue_type_template_id_77fde3bc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FootnoteModal_vue_vue_type_template_id_77fde3bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FootnoteModal.vue?vue&type=template&id=77fde3bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/blocks/text-block-editor-modules/footnote/FootnoteModal.vue?vue&type=template&id=77fde3bc");


/***/ })

}]);