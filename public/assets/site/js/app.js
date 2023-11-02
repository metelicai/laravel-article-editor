(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/Editorjs.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/Editorjs.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editorjs_quote_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editorjs/quote/index */ "./resources/js/site/components/editorjs/quote/index.js");
/* harmony import */ var _editorjs_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/table */ "./node_modules/@editorjs/table/dist/table.js");
/* harmony import */ var _editorjs_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editorjs_footnotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/footnotes */ "./node_modules/@editorjs/footnotes/dist/bundle.js");
/* harmony import */ var _editorjs_footnotes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_footnotes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editorjs_editorjs_gallery_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editorjs/editorjs-gallery/index */ "./resources/js/site/components/editorjs/editorjs-gallery/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");







// import Gallery from '@vtchinh/gallery-editorjs'
// import Undo from 'editorjs-undo'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Editorjs',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var editor = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)(null);
    var editorData = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)({});
    var footnotes = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)({});
    var images = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)({
      'vj52bJ-TI9': [{
        id: 1,
        small: 'https://placehold.co/300x200.jpg',
        big: 'https://placehold.co/600x400.jpg'
      }]
    });
    editor.value = new (_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default())({
      holder: 'editorjs',
      // readOnly: true,
      tools: {
        header: {
          "class": (_editorjs_header__WEBPACK_IMPORTED_MODULE_1___default()),
          inlineToolbar: true,
          config: {
            placeholder: 'Заголовок',
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3
          }
        },
        paragraph: {
          config: {
            placeholder: 'Начните вводить текст здесь',
            preserveBlank: true
          },
          tunes: ['footnotes']
        },
        quote: {
          "class": _editorjs_quote_index__WEBPACK_IMPORTED_MODULE_3__["default"],
          inlineToolbar: true
        },
        list: {
          "class": (_editorjs_list__WEBPACK_IMPORTED_MODULE_2___default()),
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        table: {
          "class": (_editorjs_table__WEBPACK_IMPORTED_MODULE_4___default()),
          inlineToolbar: true
        },
        footnotes: {
          "class": (_editorjs_footnotes__WEBPACK_IMPORTED_MODULE_5___default()),
          inlineToolbar: true
        },
        gallery: {
          "class": _editorjs_editorjs_gallery_index__WEBPACK_IMPORTED_MODULE_6__["default"],
          config: {
            types: 'image/jpeg, image/png',
            maxElementCount: 50,
            images: images.value,
            methods: {
              updateBlock: function updateBlock(blockId, blockdata) {
                var wasDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                if (wasDeleted) {
                  delete images.value[blockId];
                } else {
                  images.value[blockId] = blockdata;
                }
              }
            }
          }
        }
      },
      data: getData(),
      defaultBlock: 'paragraph',
      minHeight: '100%',
      autofocus: true,
      onReady: function onReady() {
        return handleReady();
      },
      onChange: function onChange() {
        return saveChanges();
      }
      // i18n: locale
    });

    function handleReady(e) {
      // eslint-disable-next-line
      // const undo = new Undo({ editor: editor.value })
      // undo.initialize(editorData.value)
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_7__.watch)(editorData, function (data) {
      getFootnotes();
      localStorage.setItem('editorjs', JSON.stringify(data));
    }, {
      deep: true
    });
    function getData() {
      var data = JSON.parse(localStorage.getItem('editorjs') || null);
      editorData.value = data;
      getFootnotes();
      return data;
    }
    function saveChanges() {
      editor.value.save().then(function (outputData) {
        editorData.value = outputData;
      });
    }
    function getFootnotes() {
      var _editorData$value, _editorData$value$blo;
      var _footnotes = {};
      (_editorData$value = editorData.value) === null || _editorData$value === void 0 ? void 0 : (_editorData$value$blo = _editorData$value.blocks) === null || _editorData$value$blo === void 0 ? void 0 : _editorData$value$blo.forEach(function (block) {
        if (block.type === 'paragraph') {
          block.tunes.footnotes.forEach(function (footnote) {
            _footnotes[footnote.superscript] = footnote.content;
          });
        }
      });
      footnotes.value = _footnotes;
    }
    var __returned__ = {
      editor: editor,
      editorData: editorData,
      footnotes: footnotes,
      images: images,
      handleReady: handleReady,
      getData: getData,
      saveChanges: saveChanges,
      getFootnotes: getFootnotes,
      get Editor() {
        return (_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default());
      },
      get Header() {
        return (_editorjs_header__WEBPACK_IMPORTED_MODULE_1___default());
      },
      get List() {
        return (_editorjs_list__WEBPACK_IMPORTED_MODULE_2___default());
      },
      get Quote() {
        return _editorjs_quote_index__WEBPACK_IMPORTED_MODULE_3__["default"];
      },
      get Table() {
        return (_editorjs_table__WEBPACK_IMPORTED_MODULE_4___default());
      },
      get Footnotes() {
        return (_editorjs_footnotes__WEBPACK_IMPORTED_MODULE_5___default());
      },
      get Gallery() {
        return _editorjs_editorjs_gallery_index__WEBPACK_IMPORTED_MODULE_6__["default"];
      },
      ref: vue__WEBPACK_IMPORTED_MODULE_7__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_7__.watch
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/PDFViewer.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/PDFViewer.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist */ "./node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfjs-dist/build/pdf.worker.entry */ "./node_modules/pdfjs-dist/build/pdf.worker.entry.js");
/* harmony import */ var pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'PDFViewer',
  props: {
    pdfUrl: {
      type: String,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__.GlobalWorkerOptions.workerSrc = (pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_1___default());

    // const initialized = ref(false)
    var pagesCount = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(0);
    var currentPage = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(1);
    var scale = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(2);
    var pdf = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_2__.onBeforeMount)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var loadingTask;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!props.pdfUrl) {
              _context.next = 7;
              break;
            }
            loadingTask = pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__.getDocument(props.pdfUrl);
            _context.next = 4;
            return loadingTask.promise;
          case 4:
            pdf = _context.sent;
            pagesCount.value = pdf.numPages;
            getPage();
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    (0,vue__WEBPACK_IMPORTED_MODULE_2__.watch)(currentPage, function (newValue) {
      getPage();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_2__.watch)(scale, function (newValue) {
      getPage();
    });
    function getPage() {
      return _getPage.apply(this, arguments);
    }
    function _getPage() {
      _getPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var page, viewport, outputScale, canvas, context, transform, renderContext;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return pdf.getPage(currentPage.value);
            case 2:
              page = _context2.sent;
              viewport = page.getViewport({
                scale: scale.value
              }); // Support HiDPI-screens.
              outputScale = window.devicePixelRatio || 1; //
              // Prepare canvas using PDF page dimensions
              //
              canvas = document.getElementById('pdf-canvas');
              context = canvas.getContext('2d');
              canvas.width = Math.floor(viewport.width * outputScale);
              canvas.height = Math.floor(viewport.height * outputScale);
              canvas.style.width = Math.floor(viewport.width) + 'px';
              canvas.style.height = Math.floor(viewport.height) + 'px';
              transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null; //
              // Render PDF page into canvas context
              //
              renderContext = {
                canvasContext: context,
                transform: transform,
                viewport: viewport
              };
              page.render(renderContext);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return _getPage.apply(this, arguments);
    }
    var __returned__ = {
      props: props,
      pagesCount: pagesCount,
      currentPage: currentPage,
      scale: scale,
      get pdf() {
        return pdf;
      },
      set pdf(v) {
        pdf = v;
      },
      getPage: getPage,
      get pdfjs() {
        return pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__;
      },
      get pdfjsWorker() {
        return (pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_1___default());
      },
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_2__.onBeforeMount,
      ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_2__.watch
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/QuillEditor.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/QuillEditor.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vueup_vue_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueup/vue-quill */ "./node_modules/@vueup/vue-quill/dist/vue-quill.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



// import '@vueup/vue-quill/dist/vue-quill.snow.css'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'QuillEditor',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var quill = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)();
    var editorSettings = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({
      globalOptions: {
        debug: 'error',
        // modules: {},
        // placeholder: 'Compose an epic...',
        readOnly: false,
        theme: 'snow'
      },
      // toolbar: '#my-toolbar',
      toolbar: [[{
        header: [1, 2, 3, 4, 5, 6, false]
      }], [{
        size: ['small', false, 'large', 'huge']
      }], ['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        script: 'sub'
      }, {
        script: 'super'
      }],
      // [{ indent: '-1' }, { indent: '+1' }],
      // [{ direction: 'rtl' }],
      [{
        color: []
      }, {
        background: []
      }],
      // [{ font: [] }],
      // [{ align: [] }],
      ['clean']],
      contentType: 'html'
    });
    var content = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)('');
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onBeforeMount)(function () {
      content.value = localStorage.getItem('quillEditor') || '';
    });
    function saveContent() {
      localStorage.setItem('quillEditor', content.value);
    }
    var __returned__ = {
      quill: quill,
      editorSettings: editorSettings,
      content: content,
      saveContent: saveContent,
      get QuillEditor() {
        return _vueup_vue_quill__WEBPACK_IMPORTED_MODULE_0__.QuillEditor;
      },
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_1__.onBeforeMount,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/SunEditor.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/SunEditor.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var suneditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! suneditor */ "./node_modules/suneditor/src/suneditor.js");
/* harmony import */ var suneditor_src_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! suneditor/src/plugins */ "./node_modules/suneditor/src/plugins/index.js");
/* harmony import */ var suneditor_src_lang_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! suneditor/src/lang/ru */ "./node_modules/suneditor/src/lang/ru.js");
/* harmony import */ var suneditor_src_lang_ru__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(suneditor_src_lang_ru__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'SunEditor',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      editor.value = suneditor__WEBPACK_IMPORTED_MODULE_1__["default"].create('suneditor', {
        plugins: suneditor_src_plugins__WEBPACK_IMPORTED_MODULE_2__["default"],
        buttonList: [['undo', 'redo'], ['formatBlock'], ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'], ['align', 'fontColor', 'hiliteColor'], ['list', 'blockquote', 'horizontalRule'], ['removeFormat'], ['table', 'link', 'image', 'video'], ['imageGallery'],
        // You must add the "imageGalleryUrl".
        ['codeView', 'fullScreen']],
        // Defining menu items
        // font: [],
        formats: ['p', {
          tag: 'p',
          // Tag name
          name: 'Лид' || 0,
          // default: tag name
          command: 'free',
          // default: "replace"
          "class": '__se__format__free_lead' // Class names must always begin with "__se__format__(replace, range, free)_"
        }, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        mode: 'classic',
        // 'classic', 'inline', 'balloon', 'balloon-always'
        lang: (suneditor_src_lang_ru__WEBPACK_IMPORTED_MODULE_3___default()),
        // Whitelist, Blacklist
        pasteTagsWhitelist: 'br|p|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|table|thead|tbody|tr|th|td|a|b|strong|i|em|u|s|span|strike|del|sub|sup|details|summary',
        attributesBlacklist: {
          all: '*'
        }
      });
    });
    var __returned__ = {
      editor: editor,
      get suneditor() {
        return suneditor__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      get plugins() {
        return suneditor_src_plugins__WEBPACK_IMPORTED_MODULE_2__["default"];
      },
      get ru() {
        return (suneditor_src_lang_ru__WEBPACK_IMPORTED_MODULE_3___default());
      },
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VModal.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VModal.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var __default__ = {
  inheritAttrs: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'VModal',
  props: {
    modelValue: Boolean,
    name: String,
    disableWrapperClose: Boolean,
    maxScreenWidth: Number,
    saveContent: Boolean
  },
  emits: ['update:modelValue', 'close'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emits = _ref.emit;
    expose();
    var props = __props;
    var $root = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy.$root;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('modalName', props.name);
    var modalData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return $root.modalsData[props.name] || null;
    });
    var zIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(10000);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.modelValue;
    }, function (isOpenned) {
      zIndex.value = isOpenned ? $root.opennedModals + 10000 : 10000;
    });
    var enabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var resizeObserver = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (props.maxScreenWidth > 0) {
        resizeObserver.value = new ResizeObserver(function (entries) {
          enabled.value = entries[0].target.offsetWidth < props.maxScreenWidth;
        });
        resizeObserver.value.observe(document.documentElement);
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      var _resizeObserver$value;
      (_resizeObserver$value = resizeObserver.value) === null || _resizeObserver$value === void 0 ? void 0 : _resizeObserver$value.unobserve(document.documentElement);
    });
    function close() {
      emits('update:modelValue', false);
      emits('close');
    }
    function afterTransitonLeave() {
      cleanData();
    }
    function cleanData() {
      delete $root.modalsData[props.name];
    }
    var __returned__ = {
      $root: $root,
      props: props,
      emits: emits,
      modalData: modalData,
      zIndex: zIndex,
      enabled: enabled,
      resizeObserver: resizeObserver,
      close: close,
      afterTransitonLeave: afterTransitonLeave,
      cleanData: cleanData,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      getCurrentInstance: vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      onUnmounted: vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted,
      provide: vue__WEBPACK_IMPORTED_MODULE_0__.provide,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VRecall.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VRecall.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_recall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/apis/recall */ "./resources/js/site/apis/recall.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _helpers_y_metrika__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/y.metrika */ "./resources/js/site/helpers/y.metrika.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'VRecall',
  props: {
    ymGoal: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var $root = (0,vue__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)().proxy.$root;
    var pending = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var errors = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({});
    var inModal = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)('modalName', false);
    function submit(event) {
      var formData = new FormData(event.target);
      errors.value = {};
      pending.value = true;
      _apis_recall__WEBPACK_IMPORTED_MODULE_0__["default"].submitRecall(formData).then(function (response) {
        pending.value = false;
        event.target.reset();

        // show notice
        var notice = response.notice || null;
        if (notice) {
          $root.closeModals();
          $root.openModal('recall-notice', {
            noticeContent: notice
          });
        }
        if (props.ymGoal) _helpers_y_metrika__WEBPACK_IMPORTED_MODULE_2__["default"].reachGoal(props.ymGoal);
      })["catch"](function (response) {
        pending.value = false;
        if (response.errors) {
          Object.entries(response.errors).forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];
            errors.value[key] = Array.isArray(value) ? value[0] : value;
          });
        }
      });
    }
    var __returned__ = {
      $root: $root,
      props: props,
      pending: pending,
      errors: errors,
      inModal: inModal,
      submit: submit,
      get recallApi() {
        return _apis_recall__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      getCurrentInstance: vue__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance,
      inject: vue__WEBPACK_IMPORTED_MODULE_1__.inject,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      get yMetrika() {
        return _helpers_y_metrika__WEBPACK_IMPORTED_MODULE_2__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _common_BlockWrapper_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/BlockWrapper.vue */ "./resources/js/site/components/editor/common/BlockWrapper.vue");
/* harmony import */ var _common_LoadingBlock_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/LoadingBlock.vue */ "./resources/js/site/components/editor/common/LoadingBlock.vue");
/* harmony import */ var _common_ErrorBlock_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/ErrorBlock.vue */ "./resources/js/site/components/editor/common/ErrorBlock.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Editor',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var blocks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      id: 1,
      type: 'images',
      data: {
        style: 'gallery',
        images: [{
          id: 1,
          small: 'https://placehold.co/300x200.jpg',
          big: 'https://placehold.co/600x400.jpg'
        }]
      }
    }, {
      id: 2,
      type: 'text',
      data: {
        content: ''
        // content: '<p>111<a href="#footnote-1" id="footnote-link-1" data-number="1" data-value="111" data-w-e-type="footnote">[1]</a></p><p>222</p><p>333<a href="#footnote-2" id="footnote-link-2" data-number="2" data-value="333" data-w-e-type="footnote">[2]</a></p><p>444</p><p>555</p><p>666<a href="#footnote-3" id="footnote-link-3" data-number="3" data-value="666" data-w-e-type="footnote">[3]</a></p>',
      }
    }]);

    function loadBlock(block) {
      var type = null;
      if (typeof block.type === 'string' && block.type.trim()) {
        type = block.type.toLowerCase();
        type = type.charAt(0).toUpperCase() + type.slice(1);
      }
      var component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)({
        loader: function loader() {
          return __webpack_require__("./resources/js/site/components/editor/blocks lazy recursive ^\\.\\/.*Block\\.vue$")("./".concat(type, "Block.vue"));
        },
        loadingComponent: _common_LoadingBlock_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        errorComponent: _common_ErrorBlock_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        timeout: 2000
      });
      return {
        id: block.id,
        data: block.data,
        component: component
      };
    }
    var __returned__ = {
      blocks: blocks,
      loadBlock: loadBlock,
      defineAsyncComponent: vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      BlockWrapper: _common_BlockWrapper_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      LoadingBlock: _common_LoadingBlock_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      ErrorBlock: _common_ErrorBlock_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'BlockWrapper',
  props: {
    block: {
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {};
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ErrorBlock',
  props: {
    error: Error
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {};
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabs.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabs.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'VTabs',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var selectedTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('tabs', tabs.value);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('selectedTab', function () {
      return selectedTab.value;
    });
    function selectTab(index) {
      selectedTab.value = index;
    }
    var __returned__ = {
      tabs: tabs,
      selectedTab: selectedTab,
      selectTab: selectTab,
      provide: vue__WEBPACK_IMPORTED_MODULE_0__.provide,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabsTab.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabsTab.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'VTabsTab',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var index = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('tabs', null);
    var selectedTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('selectedTab', null);
    var isActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return selectedTab && selectedTab() === index.value;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (tabs) {
        index.value = tabs.push({
          name: props.name
        }) - 1;
      }
    });
    var __returned__ = {
      props: props,
      index: index,
      tabs: tabs,
      selectedTab: selectedTab,
      isActive: isActive,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/Editorjs.vue?vue&type=template&id=526cb6a5":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/Editorjs.vue?vue&type=template&id=526cb6a5 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "background-color": "gainsboro"
  }
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "editorjs",
  onMouseOver: "() => {}"
}, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Сноски:", -1 /* HOISTED */);
var _hoisted_4 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_3, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.footnotes, function (footnote, footnoteNumber) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", {
      key: footnoteNumber
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "[" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(footnoteNumber) + "] - ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: footnote
    }, null, 8 /* PROPS */, _hoisted_4)]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"btn btn_primary\" @click=\"saveChanges\">save</button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.images), 1 /* TEXT */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/PDFViewer.vue?vue&type=template&id=2417d985":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/PDFViewer.vue?vue&type=template&id=2417d985 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", {
    id: "pdf-canvas",
    style: {
      "border": "1px solid black",
      "direction": "ltr"
    },
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"])),
    onContextmenu: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]))
  }, null, 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn_primary",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.currentPage++;
    })
  }, "+"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn_primary",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.currentPage--;
    })
  }, "-"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn_primary",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.scale += 0.5;
    })
  }, "scale+"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn_primary",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.scale -= 0.5;
    })
  }, "scale-")], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/QuillEditor.vue?vue&type=template&id=04543373":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/QuillEditor.vue?vue&type=template&id=04543373 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "background-color": "antiquewhite"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["QuillEditor"], {
    id: "editor",
    content: $setup.content,
    "onUpdate:content": [_cache[0] || (_cache[0] = function ($event) {
      return $setup.content = $event;
    }), _cache[1] || (_cache[1] = function ($event) {
      return $setup.saveContent();
    })],
    "global-options": $setup.editorSettings.globalOptions,
    "content-type": $setup.editorSettings.contentType,
    toolbar: $setup.editorSettings.toolbar,
    ref: "quill"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <template #toolbar>\n\t\t\t\t<div id=\"my-toolbar\">\n\t\t\t\t\t<span class=\"ql-formats\">\n\t\t\t\t\t\t<select class=\"ql-header\">\n\t\t\t\t\t\t\t<option value=\"1\"></option>\n\t\t\t\t\t\t\t<option value=\"2\"></option>\n\t\t\t\t\t\t\t<option value=\"3\"></option>\n\t\t\t\t\t\t\t<option value=\"4\"></option>\n\t\t\t\t\t\t\t<option value=\"5\"></option>\n\t\t\t\t\t\t\t<option value=\"6\"></option>\n\t\t\t\t\t\t\t<option selected></option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<select class=\"ql-size\">\n\t\t\t\t\t\t\t<option value=\"small\"></option>\n\t\t\t\t\t\t\t<option selected></option>\n\t\t\t\t\t\t\t<option value=\"large\"></option>\n\t\t\t\t\t\t\t<option value=\"huge\"></option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"ql-formats\">\n\t\t\t\t\t\t<button type=\"button\" class=\"ql-bold\"></button>\n\t\t\t\t\t\t<button type=\"button\" class=\"ql-italic\"></button>\n\t\t\t\t\t\t<button type=\"button\" class=\"ql-underline\"></button>\n\t\t\t\t\t\t<button type=\"button\" class=\"ql-strike\"></button>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"ql-formats\">\n\t\t\t\t\t\t<button id=\"custom-button\">Сноска</button>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</template> ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["content", "global-options", "content-type", "toolbar"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/SunEditor.vue?vue&type=template&id=bfed678c":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/SunEditor.vue?vue&type=template&id=bfed678c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "background-color": "azure"
  }
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "suneditor"
}, null, -1 /* HOISTED */);
var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VModal.vue?vue&type=template&id=f1081774":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VModal.vue?vue&type=template&id=f1081774 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "modal-mask"
};
var _hoisted_2 = {
  "class": "modal-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#app",
    disabled: !$setup.enabled
  }, [$setup.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    key: 0,
    name: "modal",
    appear: "",
    onAfterLeave: _cache[2] || (_cache[2] = function ($event) {
      return $setup.afterTransitonLeave();
    }),
    persisted: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        "class": ["modal", [!!$props.name && 'modal_' + $props.name, !$setup.enabled && 'modal_disabled']]
      }, _ctx.$attrs, {
        style: [{
          'z-index': $setup.zIndex
        }]
      }), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "modal-wrapper",
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return !$props.disableWrapperClose && $setup.close();
        }, ["self"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
        close: $setup.close,
        modalData: $setup.modalData
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "modal-close",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $setup.close();
        })
      })])])])], 16 /* FULL_PROPS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.enabled || $setup.enabled && $props.modelValue]])];
    }),
    _: 3 /* FORWARDED */
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8 /* PROPS */, ["disabled"])), !$setup.enabled || $props.saveContent ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    key: 0,
    modalData: $setup.modalData
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VRecall.vue?vue&type=template&id=03a57870":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VRecall.vue?vue&type=template&id=03a57870 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    submit: $setup.submit,
    errors: $setup.errors,
    pending: $setup.pending,
    inModal: $setup.inModal
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-82ff2b20"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "editor"
};
var _hoisted_2 = {
  "class": "editor__container"
};
var _hoisted_3 = {
  "class": "editor__blocks"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.blocks, function (block, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["BlockWrapper"], {
      key: index,
      block: $setup.loadBlock(block)
    }, null, 8 /* PROPS */, ["block"]);
  }), 128 /* KEYED_FRAGMENT */))])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=template&id=337967b7":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=template&id=337967b7 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.block.component), {
    id: $props.block.id,
    data: $props.block.data
  }, null, 8 /* PROPS */, ["id", "data"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=template&id=d3c9cad4&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=template&id=d3c9cad4&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-d3c9cad4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "editor__error"
};
var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Ошибка загрузки блока: ", -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.error), 1 /* TEXT */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/LoadingBlock.vue?vue&type=template&id=aabef8bc":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/LoadingBlock.vue?vue&type=template&id=aabef8bc ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "editor__block-loading"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Блок загружается...", -1 /* HOISTED */);
var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabs.vue?vue&type=template&id=96d0ac1c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabs.vue?vue&type=template&id=96d0ac1c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    tabs: $setup.tabs,
    selectedTab: $setup.selectedTab,
    selectTab: $setup.selectTab
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabsTab.vue?vue&type=template&id=727dc9f3":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabsTab.vue?vue&type=template&id=727dc9f3 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "tab",
    appear: "",
    persisted: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.isActive]])];
    }),
    _: 3 /* FORWARDED */
  });
}

/***/ }),

/***/ "./resources/js/site/apis/api.js":
/*!***************************************!*\
  !*** ./resources/js/site/apis/api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  request: function request(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var headers = {
      Accept: 'application/json'
    };
    var jsonHeaders = {
      'Content-Type': 'application/json'
    };
    if (!(data instanceof FormData)) {
      Object.assign(headers, jsonHeaders);
      data = JSON.stringify(data);
    }
    return fetch(url, {
      method: 'POST',
      body: data,
      headers: headers,
      credentials: 'same-origin'
    }).then(function (response) {
      var responseStatus = {
        ok: response.ok,
        code: response.status,
        statusText: response.statusText
      };
      return response.json().then(function (response) {
        return {
          responseStatus: responseStatus,
          responseData: response.data
        };
      })["catch"](function () {
        return {
          responseStatus: responseStatus
        };
      });
    }).then(function (_ref) {
      var responseStatus = _ref.responseStatus,
        responseData = _ref.responseData;
      if (responseStatus.ok && !(responseData !== null && responseData !== void 0 && responseData.errors)) {
        return responseData;
      }
      return Promise.reject({
        responseStatus: responseStatus,
        responseData: responseData
      });
    })["catch"](function (result) {
      // Обработка ошибки в JS
      if (result instanceof Error) {
        console.log(result.message); // eslint-disable-line no-console
      }

      // Обработка ошибки по статусу ответа
      // if (result.responseStatus?.code) { }

      // Обработка ошибки в ответе API
      // if (result.responseData?.errors) { }

      return Promise.reject(result.responseData || null);
    });
  }
});

/***/ }),

/***/ "./resources/js/site/apis/recall.js":
/*!******************************************!*\
  !*** ./resources/js/site/apis/recall.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/site/apis/api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  submitRecall: function submitRecall(form) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].request('api/recall', form);
  }
});

/***/ }),

/***/ "./resources/js/site/app.js":
/*!**********************************!*\
  !*** ./resources/js/site/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-js/header */ "./resources/js/site/static-js/header.js");
/* harmony import */ var _static_js_galleries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-js/galleries */ "./resources/js/site/static-js/galleries.js");
/* harmony import */ var _static_js_sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-js/sliders */ "./resources/js/site/static-js/sliders.js");
/* harmony import */ var _static_js_validate_tel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-js/validate-tel */ "./resources/js/site/static-js/validate-tel.js");
/* harmony import */ var _static_js_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-js/range */ "./resources/js/site/static-js/range.js");
/* harmony import */ var _services_y_metrika_y_metrika_goals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/y.metrika/y.metrika-goals */ "./resources/js/site/services/y.metrika/y.metrika-goals.js");
/* harmony import */ var _mixins_modals_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixins/modals.js */ "./resources/js/site/mixins/modals.js");
/* harmony import */ var _components_VModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/VModal */ "./resources/js/site/components/VModal.vue");
/* harmony import */ var _components_VRecall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/VRecall */ "./resources/js/site/components/VRecall.vue");
/* harmony import */ var _components_tabs_VTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs/VTabs */ "./resources/js/site/components/tabs/VTabs.vue");
/* harmony import */ var _components_tabs_VTabsTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tabs/VTabsTab */ "./resources/js/site/components/tabs/VTabsTab.vue");
/* harmony import */ var _components_Editorjs_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Editorjs.vue */ "./resources/js/site/components/Editorjs.vue");
/* harmony import */ var _components_QuillEditor_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/QuillEditor.vue */ "./resources/js/site/components/QuillEditor.vue");
/* harmony import */ var _components_SunEditor_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/SunEditor.vue */ "./resources/js/site/components/SunEditor.vue");
/* harmony import */ var _components_editor_Editor_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/editor/Editor.vue */ "./resources/js/site/components/editor/Editor.vue");
/* harmony import */ var _components_PDFViewer_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/PDFViewer.vue */ "./resources/js/site/components/PDFViewer.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
// static js







// vue mixins


// vue components










// vue init

var RootComponent = setup();
var app = (0,vue__WEBPACK_IMPORTED_MODULE_16__.createApp)(RootComponent);
app.mount('#app');
function setup() {
  return {
    name: 'Site',
    mixins: [_mixins_modals_js__WEBPACK_IMPORTED_MODULE_6__["default"]],
    components: {
      VModal: _components_VModal__WEBPACK_IMPORTED_MODULE_7__["default"],
      VRecall: _components_VRecall__WEBPACK_IMPORTED_MODULE_8__["default"],
      VTabs: _components_tabs_VTabs__WEBPACK_IMPORTED_MODULE_9__["default"],
      VTabsTab: _components_tabs_VTabsTab__WEBPACK_IMPORTED_MODULE_10__["default"],
      Editorjs: _components_Editorjs_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
      QuillEditor: _components_QuillEditor_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
      SunEditor: _components_SunEditor_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
      Editor: _components_editor_Editor_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
      pdfviewer: _components_PDFViewer_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
    },
    mounted: function mounted() {
      // load static js
      (0,_static_js_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_static_js_galleries__WEBPACK_IMPORTED_MODULE_1__["default"])();
      (0,_static_js_sliders__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_static_js_validate_tel__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_static_js_range__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_services_y_metrika_y_metrika_goals__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }
  };
}

/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./resources/js/site/components/editorjs/editorjs-gallery/index.scss");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./resources/js/site/components/editorjs/editorjs-gallery/ui.js");
/* harmony import */ var _tunes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tunes */ "./resources/js/site/components/editorjs/editorjs-gallery/tunes.js");
/* harmony import */ var _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/toolbox.svg */ "./resources/js/site/components/editorjs/editorjs-gallery/svg/toolbox.svg");
/* harmony import */ var _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uploader */ "./resources/js/site/components/editorjs/editorjs-gallery/uploader.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Image Gallery Tool for the Editor.js
 *
 * @author Igor Shuvalov «VolgaIgor»
 * @license MIT
 * @see {@link https://github.com/VolgaIgor/editorjs-gallery}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * gallery: {
 *   class: ImageGallery,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */

/**
 * @typedef {object} ImageGalleryDataFile
 * @description Image Gallery Tool's files data format
 * @property {string} url — image URL
 */

/**
 * @typedef {object} ImageGalleryData
 * @description Image Tool's input and output data format
 * @property {string} style - style of gallery
 * @property {ImageGalleryDataFile[]} files — Image file data returned from backend
 */







/**
 * @typedef {object} ImageConfig
 * @description Config supported by Tool
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} buttonContent - overrides for Select File button
 * @property {object} [uploader] - optional custom uploader
 * @property {function(File): Promise.<UploadResponseFormat>} [uploader.uploadByFile] - method that upload image by File
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */
var ImageGallery = /*#__PURE__*/function () {
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageGalleryData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */
  function ImageGallery(_ref) {
    var _this = this;
    var block = _ref.block,
      data = _ref.data,
      config = _ref.config,
      api = _ref.api,
      readOnly = _ref.readOnly;
    _classCallCheck(this, ImageGallery);
    this.api = api;
    this.block = block;
    this.readOnly = readOnly;

    /**
     * Tool's initial config
     */
    this.config = {
      endpoints: config.endpoints || '',
      field: config.field || 'image',
      types: config.types || 'image/*',
      buttonContent: config.buttonContent || '',
      methods: config.methods || undefined,
      actions: config.actions || [],
      maxElementCount: config.maxElementCount || undefined,
      images: config.images || []
    };

    /**
     * Module for file uploading
     */
    this.uploader = new _uploader__WEBPACK_IMPORTED_MODULE_4__["default"]({
      config: this.config
    });

    /**
     * Module for working with UI
     */
    this.ui = new _ui__WEBPACK_IMPORTED_MODULE_1__["default"]({
      api: api,
      config: this.config,
      onSelectFile: function onSelectFile() {
        var maxElementCount = _this.config.maxElementCount ? _this.config.maxElementCount - _this._data.files.length : null;
        _this.uploader.uploadSelectedFiles(maxElementCount, {
          onUpload: function onUpload(file) {
            _this.onUpload(file);
          }
        });
      },
      onDeleteFile: function onDeleteFile(index) {
        _this.deleteImage(index);
      },
      onMoveFile: function onMoveFile(oldId, newId) {
        _this.moveImage(oldId, newId);
      },
      readOnly: readOnly
    });

    /**
     * Module for working with tunes
     */
    this.tunes = new _tunes__WEBPACK_IMPORTED_MODULE_2__["default"]({
      api: api,
      actions: this.config.actions,
      onChange: function onChange(styleName) {
        return _this.styleToggled(styleName);
      }
    });

    /**
     * Set saved state
     */
    this._data = {};
    this.data = data;
  }

  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  _createClass(ImageGallery, [{
    key: "render",
    value: function render() {
      return this.ui.render(this.data);
    }
  }, {
    key: "rendered",
    value: function rendered() {
      this.checkMaxElemCount();
      return this.ui.onRendered();
    }
  }, {
    key: "removed",
    value: function removed() {
      this.callExternalUpdateBlock(true);
    }

    /**
     * Validate data: check if Image exists
     *
     * @param {ImageGalleryData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
  }, {
    key: "validate",
    value: function validate(savedData) {
      // if (!savedData.files || !savedData.files.length) {
      // 	return false
      // }

      return true;
    }

    /**
     * Return Block data
     *
     * @public
     *
     * @returns {ImageGalleryData}
     */
  }, {
    key: "save",
    value: function save() {
      this.callExternalUpdateBlock();
      return this.data;
    }

    /**
     * Makes buttons with tunes: add background, add border, stretch image
     *
     * @public
     *
     * @returns {Element}
     */
  }, {
    key: "renderSettings",
    value: function renderSettings() {
      return this.tunes.render(this.data);
    }

    /**
     * Set new image file
     *
     * @private
     *
     * @param {ImageGalleryDataFile} file - uploaded file data
     */
  }, {
    key: "appendImage",
    value: function appendImage(image) {
      if (image) {
        // if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount) {
        // 	return
        // }

        if (image.id === 'new') {
          this.images.push(image);
        }
        this.ui.appendImage(image);
        this.checkMaxElemCount();
      }
    }

    /**
     * Move image file
     *
     * @private
     *
     * @param {integer} from - target image old index
     * @param {integer} to - target image new index
     */
  }, {
    key: "moveImage",
    value: function moveImage(from, to) {
      // if (to >= this.images.length) {
      // 	to = this.images.length - 1
      // }
      // this.images.splice(to, 0, this.images.splice(from, 1)[0])

      // if (this.config.methods && typeof this.config.methods.positioning === 'function') {
      // 	const moved = this._data.files[to]?.id || null
      // 	const prev = this._data.files[to - 1]?.id || null
      // 	const next = this._data.files[to + 1]?.id || null

      // 	this.config.methods.positioning(moved, prev, next)
      // }
    }

    /**
     * Delete image file
     *
     * @private
     *
     * @param {integer} index - image index
     */
  }, {
    key: "deleteImage",
    value: function deleteImage(index) {
      this.images[index].deleted = !this.images[index].deleted;
      this.checkMaxElemCount();

      // const file = this._data.files[index]
      // if (file !== undefined) {
      // 	this._data.files.splice(id, 1)

      // 	this.checkMaxElemCount()
      // }
    }

    /**
     * Private methods
     * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
     */

    /**
     * Stores all Tool's data
     *
     * @private
     *
     * @param {ImageGalleryData} data - data in Image Tool format
     */
  }, {
    key: "data",
    get:
    /**
     * Return Tool data
     *
     * @private
     *
     * @returns {ImageGalleryData}
     */
    function get() {
      return this._data;
    }

    /**
     * File uploading callback
     *
     * @private
     *
     * @returns {void}
     */,
    set: function set(data) {
      var _this$config$images,
        _this2 = this;
      this._data.files = []; // временно необходимо. Иначе ошибка. Позже проверить и убрать
      this.images = ((_this$config$images = this.config.images) === null || _this$config$images === void 0 ? void 0 : _this$config$images[this.block.id]) || [];
      this.images.forEach(function (image) {
        _this2.appendImage(image);
      });
      this.callExternalUpdateBlock();
      var style = data.style || '';
      this.styleToggled(style);
    }
  }, {
    key: "onUpload",
    value: function onUpload(file) {
      this.appendImage(file);
    }
  }, {
    key: "callExternalUpdateBlock",
    value: function callExternalUpdateBlock() {
      var _this$config$methods;
      var wasDeleted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.block.id && typeof ((_this$config$methods = this.config.methods) === null || _this$config$methods === void 0 ? void 0 : _this$config$methods.updateBlock) === 'function') {
        this.config.methods.updateBlock(this.block.id, this.images, wasDeleted);
      }
    }

    /**
     * Callback fired when Block Tune is activated
     *
     * @private
     *
     * @param {string} tuneName - tune that has been clicked
     * @returns {void}
     */
  }, {
    key: "styleToggled",
    value: function styleToggled(tuneName) {
      if (tuneName === 'fit') {
        this._data.style = 'fit';
      } else {
        this._data.style = 'slider';
      }
    }
  }, {
    key: "checkMaxElemCount",
    value: function checkMaxElemCount() {
      this.ui.updateLimitCounter(this._data.files.length, this.config.maxElementCount);
      if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount) {
        this.ui.hideFileButton();
      } else {
        this.ui.showFileButton();
      }
    }
  }], [{
    key: "isReadOnlySupported",
    get:
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    function get() {
      return true;
    }

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
  }, {
    key: "toolbox",
    get: function get() {
      return {
        icon: (_svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_3___default()),
        title: 'Gallery'
      };
    }
  }]);
  return ImageGallery;
}();


/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/tunes.js":
/*!*************************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/tunes.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tunes)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./resources/js/site/components/editorjs/editorjs-gallery/ui.js");
/* harmony import */ var _svg_slider_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/slider.svg */ "./resources/js/site/components/editorjs/editorjs-gallery/svg/slider.svg");
/* harmony import */ var _svg_slider_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_slider_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_fit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/fit.svg */ "./resources/js/site/components/editorjs/editorjs-gallery/svg/fit.svg");
/* harmony import */ var _svg_fit_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_fit_svg__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/**
 * Working with Block Tunes
 */
var Tunes = /*#__PURE__*/function () {
  /**
   * @param {object} tune - image tool Tunes managers
   * @param {object} tune.api - Editor API
   * @param {object} tune.actions - list of user defined tunes
   * @param {Function} tune.onChange - tune toggling callback
   */
  function Tunes(_ref) {
    var api = _ref.api,
      actions = _ref.actions,
      onChange = _ref.onChange;
    _classCallCheck(this, Tunes);
    this.api = api;
    this.actions = actions;
    this.onChange = onChange;
    this.buttons = [];
  }

  /**
   * Available Image tunes
   *
   * @returns {{name: string, icon: string, title: string}[]}
   */
  _createClass(Tunes, [{
    key: "CSS",
    get:
    /**
     * Styles
     *
     * @returns {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}
     */
    function get() {
      return {
        wrapper: 'image-gallery__tune-wrapper',
        buttonBase: this.api.styles.button,
        button: 'image-gallery__tune',
        buttonActive: 'active'
      };
    }

    /**
     * Makes buttons with tunes: add background, add border, stretch image
     *
     * @param {ImageGalleryData} toolData - generate Elements of tunes
     * @returns {Element}
     */
  }, {
    key: "render",
    value: function render(toolData) {
      var _this = this;
      var wrapper = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.make)('div', this.CSS.wrapper);
      this.buttons = [];
      var tunes = Tunes.tunes.concat(this.actions);
      tunes.forEach(function (tune) {
        var title = _this.api.i18n.t(tune.title);
        var el = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.make)('div', [_this.CSS.buttonBase, _this.CSS.button], {
          innerHTML: tune.icon,
          title: title
        });
        el.addEventListener('click', function () {
          _this.tuneClicked(tune.name, tune.action);
        });
        el.dataset.tune = tune.name;
        el.classList.toggle(_this.CSS.buttonActive, toolData.style === tune.name);
        _this.buttons.push(el);
        _this.api.tooltip.onHover(el, title, {
          placement: 'top'
        });
        wrapper.appendChild(el);
      });
      return wrapper;
    }

    /**
     * Clicks to one of the tunes
     *
     * @param {string} tuneName - clicked tune name
     * @param {Function} customFunction - function to execute on click
     */
  }, {
    key: "tuneClicked",
    value: function tuneClicked(tuneName, customFunction) {
      var _this2 = this;
      if (typeof customFunction === 'function') {
        if (!customFunction(tuneName)) {
          return false;
        }
      }
      this.buttons.forEach(function (button) {
        button.classList.toggle(_this2.CSS.buttonActive, button.dataset.tune === tuneName);
      });
      this.onChange(tuneName);
    }
  }], [{
    key: "tunes",
    get: function get() {
      return [{
        name: 'slider',
        icon: (_svg_slider_svg__WEBPACK_IMPORTED_MODULE_1___default()),
        title: 'Slider'
      }, {
        name: 'fit',
        icon: (_svg_fit_svg__WEBPACK_IMPORTED_MODULE_2___default()),
        title: 'Fit'
      }];
    }
  }]);
  return Tunes;
}();


/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/ui.js":
/*!**********************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/ui.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ui),
/* harmony export */   "make": () => (/* binding */ make)
/* harmony export */ });
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _svg_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/trash.svg */ "./resources/js/site/components/editorjs/editorjs-gallery/svg/trash.svg");
/* harmony import */ var _svg_trash_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_trash_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codexteam_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codexteam/icons */ "./node_modules/@codexteam/icons/dist/index.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
var Ui = /*#__PURE__*/function () {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  function Ui(_ref) {
    var _this = this;
    var api = _ref.api,
      config = _ref.config,
      onSelectFile = _ref.onSelectFile,
      onDeleteFile = _ref.onDeleteFile,
      onMoveFile = _ref.onMoveFile,
      readOnly = _ref.readOnly;
    _classCallCheck(this, Ui);
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.onDeleteFile = onDeleteFile;
    this.onMoveFile = onMoveFile;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      fileButton: this.createFileButton(),
      container: make('div', this.CSS.container),
      itemsContainer: make('div', this.CSS.itemsContainer),
      controls: make('div', this.CSS.controls)
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <container>
     *      <items-container>
     *        <image-container />
     *      </items-container>
     *      <controls>
     *        <limit-counter />
     *        <select-file-button />
     *      </controls>
     *    </container>
     *  </wrapper>
     */
    if (this.config.maxElementCount) {
      this.nodes.limitCounter = make('div', this.CSS.limitCounter);
      this.nodes.controls.appendChild(this.nodes.limitCounter);
    }
    this.nodes.controls.appendChild(this.nodes.fileButton);
    this.nodes.container.appendChild(this.nodes.itemsContainer);
    this.nodes.container.appendChild(this.nodes.controls);
    this.nodes.wrapper.appendChild(this.nodes.container);
    var preventedEvents = ['dragenter', 'dragover', 'dragleave', 'drop'];
    preventedEvents.forEach(function (eventName) {
      _this.nodes.itemsContainer.addEventListener(eventName, function (e) {
        e.preventDefault();
        e.stopPropagation();
      }, false);
    });
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  _createClass(Ui, [{
    key: "CSS",
    get: function get() {
      return {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        button: this.api.styles.button,
        /**
         * Tool's classes
         */
        wrapper: 'image-gallery',
        container: 'image-gallery__container',
        controls: 'image-gallery__controls',
        limitCounter: 'image-gallery__counter',
        itemsContainer: 'image-gallery__items',
        imageContainer: 'image-gallery__image',
        imageEl: 'image-gallery__image-picture',
        trashButton: 'image-gallery__image-trash',
        newBadge: 'image-gallery__image-new'
      };
    }
  }, {
    key: "render",
    value:
    /**
     * Renders tool UI
     *
     * @param {ImageGalleryData} toolData - saved tool data
     * @returns {Element}
     */
    function render(toolData) {
      return this.nodes.wrapper;
    }
  }, {
    key: "onRendered",
    value: function onRendered() {
      var _this2 = this;
      if (!this.sortable) {
        this.sortable = new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](this.nodes.itemsContainer, {
          handle: ".".concat(this.CSS.imageContainer),
          filter: ".".concat(this.CSS.trashButton),
          onStart: function onStart() {
            _this2.nodes.itemsContainer.classList.add("".concat(_this2.CSS.itemsContainer, "--drag"));
          },
          onEnd: function onEnd(evt) {
            _this2.nodes.itemsContainer.classList.remove("".concat(_this2.CSS.itemsContainer, "--drag"));
            if (evt.oldIndex !== evt.newIndex) {
              _this2.onMoveFile(evt.oldIndex, evt.newIndex);
            }
          }
        });
      }
    }

    /**
     * Creates upload-file button
     *
     * @returns {Element}
     */
  }, {
    key: "createFileButton",
    value: function createFileButton() {
      var _this3 = this;
      var button = make('div', [this.CSS.button]);
      button.innerHTML = this.config.buttonContent || "".concat(this.api.i18n.t('Выбрать изображения'));
      button.addEventListener('click', function () {
        _this3.onSelectFile();
      });
      return button;
    }

    /**
     * Shows uploading button
     *
     * @returns {void}
     */
  }, {
    key: "showFileButton",
    value: function showFileButton() {
      this.nodes.fileButton.style.display = '';
    }

    /**
     * Hide uploading button
     *
     * @returns {void}
     */
  }, {
    key: "hideFileButton",
    value: function hideFileButton() {
      this.nodes.fileButton.style.display = 'none';
    }

    /**
     * Get file preview during upload
     *
     * @returns {void}
     */
  }, {
    key: "getPreview",
    value: function getPreview(image) {
      return new Promise(function (resolve) {
        if (image.file instanceof File) {
          var reader = new FileReader();
          reader.readAsDataURL(image.file);
          reader.onload = function (event) {
            resolve(event.target.result);
          };
        } else {
          resolve(null);
        }
      });
    }

    /**
     * Shows an image
     *
     * @param {ImageGalleryDataFile} image - image object
     * @returns {void}
     */
  }, {
    key: "appendImage",
    value: function appendImage(image) {
      var _this4 = this;
      var imageContainer = make('a', this.CSS.imageContainer);
      var imageEl = make('img', this.CSS.imageEl);
      this.nodes.itemsContainer.append(imageContainer);
      this.getPreview(image).then(function (preview) {
        if (preview) {
          _this4.toggleImageState(imageContainer, Ui.imageState.NEW);
          imageEl.src = preview;

          // new badge
          var newBadge = make('div', _this4.CSS.newBadge, {
            innerHTML: _codexteam_icons__WEBPACK_IMPORTED_MODULE_2__.IconPlus
          });
          _this4.api.tooltip.onHover(newBadge, 'Новое изображение', {
            placement: 'top'
          });
          imageContainer.appendChild(newBadge);
        } else {
          imageContainer.href = image.big || image.small;
          imageEl.src = image.small;
        }

        // append img el
        imageEl.addEventListener('load', function () {
          _this4.toggleImageState(imageContainer, Ui.imageState.FILLED);
        });
        imageContainer.appendChild(imageEl);

        // append trash btn
        var title = _this4.api.i18n.t('Удалить');
        var imageTrash = make('div', [_this4.CSS.trashButton], {
          innerHTML: (_svg_trash_svg__WEBPACK_IMPORTED_MODULE_1___default()),
          title: title
        });
        _this4.api.tooltip.onHover(imageTrash, title, {
          placement: 'top'
        });
        imageTrash.addEventListener('click', function (e) {
          e.preventDefault();
          _this4.api.tooltip.hide();
          var arrayChild = Array.prototype.slice.call(_this4.nodes.itemsContainer.children);
          var elIndex = arrayChild.indexOf(imageContainer);
          if (elIndex !== -1) {
            _this4.toggleImageState(imageContainer, Ui.imageState.DELETED);
            // this.nodes.itemsContainer.removeChild(imageContainer)

            // CREATE RESTORE BUTTON

            _this4.onDeleteFile(elIndex);
          }
        });
        imageContainer.appendChild(imageTrash);
      });
    }

    /**
     * Changes UI image state
     *
     * @param {Element} elem
     * @param {string} state - see {@link Ui.imageState} constants
     * @returns {void}
     */
  }, {
    key: "toggleImageState",
    value: function toggleImageState(elem, state) {
      elem.classList.toggle("".concat(this.CSS.imageContainer, "--").concat(state));
    }

    /**
     * @param {int} imageCount
     * @param {int|null} limitCounter
     * @returns {void}
     */
  }, {
    key: "updateLimitCounter",
    value: function updateLimitCounter(imageCount, limitCounter) {
      if (limitCounter && this.nodes.limitCounter) {
        this.nodes.limitCounter.innerText = "".concat(imageCount, " / ").concat(limitCounter);
      }
    }
  }], [{
    key: "imageState",
    get:
    /**
     * Ui image states:
     *
     * @returns {{NEW: string, FILLED: string}}
     */
    function get() {
      return {
        NEW: 'new',
        FILLED: 'filled',
        DELETED: 'deleted'
      };
    }
  }]);
  return Ui;
}();
/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */

var make = function make(tagName) {
  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var el = document.createElement(tagName);
  if (Array.isArray(classNames)) {
    var _el$classList;
    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
  } else if (classNames) {
    el.classList.add(classNames);
  }
  for (var attrName in attributes) {
    el[attrName] = attributes[attrName];
  }
  return el;
};

/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/uploader.js":
/*!****************************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/uploader.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Uploader)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Module for file uploading:
 */
var Uploader = /*#__PURE__*/function () {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   */
  function Uploader(_ref) {
    var config = _ref.config;
    _classCallCheck(this, Uploader);
    this.config = config;
  }

  /**
   * Handle clicks on the upload file button
   */
  _createClass(Uploader, [{
    key: "uploadSelectedFiles",
    value: function uploadSelectedFiles(maxElementCount, _ref2) {
      var onUpload = _ref2.onUpload;
      selectFiles({
        accept: this.config.types,
        multiple: true
      }).then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(files) {
          var loadedFiles, i, file;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                loadedFiles = 0;
                i = 0;
              case 2:
                if (!(i < files.length)) {
                  _context.next = 13;
                  break;
                }
                if (!(maxElementCount !== null && loadedFiles == maxElementCount)) {
                  _context.next = 7;
                  break;
                }
                return _context.abrupt("break", 13);
              case 7:
                loadedFiles++;
              case 8:
                file = files[i];
                onUpload({
                  id: 'new',
                  file: file
                });
              case 10:
                i++;
                _context.next = 2;
                break;
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }]);
  return Uploader;
}();
/**
 * Create an ephemeral input file field and return chosen files array
 *
 * @param {transportParams} config
 * @return {Promise<FileList>}
 */

function selectFiles() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    var inputElement = document.createElement('INPUT');
    inputElement.type = 'file';
    inputElement.style.display = 'none';
    if (config.multiple) {
      inputElement.setAttribute('multiple', 'multiple');
    }
    if (config.accept) {
      inputElement.setAttribute('accept', config.accept);
    }
    document.body.appendChild(inputElement);
    inputElement.addEventListener('change', function (event) {
      var files = event.target.files;

      // Return ready to be uploaded files array
      resolve(files);
      document.body.removeChild(inputElement);
    }, false);

    // Fire click event on «input file» field
    inputElement.click();
  });
}
;

/***/ }),

/***/ "./resources/js/site/components/editorjs/quote/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/site/components/editorjs/quote/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quote)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./resources/js/site/components/editorjs/quote/index.css");
/* harmony import */ var _codexteam_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codexteam/icons */ "./node_modules/@codexteam/icons/dist/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Build styles
 */



/**
 * @class Quote
 * @classdesc Quote Tool for Editor.js
 * @property {QuoteData} data - Tool`s input and output data
 * @propert {object} api - Editor.js API instance
 *
 * @typedef {object} QuoteData
 * @description Quote Tool`s input and output data
 * @property {string} text - quote`s text
 * @property {string} caption - quote`s caption
 * @property {'center'|'left'} alignment - quote`s alignment
 *
 * @typedef {object} QuoteConfig
 * @description Quote Tool`s initial configuration
 * @property {string} quotePlaceholder - placeholder to show in quote`s text input
 * @property {string} captionPlaceholder - placeholder to show in quote`s caption input
 * @property {'center'|'left'} defaultAlignment - alignment to use as default
 *
 * @typedef {object} TunesMenuConfig
 * @property {string} icon - menu item icon
 * @property {string} label - menu item label
 * @property {boolean} isActive - true if item should be in active state
 * @property {boolean} closeOnActivate - if true tunes menu should close once any item is selected
 * @property {() => void} onActivate - item activation callback
 */
var Quote = /*#__PURE__*/function () {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: QuoteData, config: QuoteConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  function Quote(_ref) {
    var data = _ref.data,
      config = _ref.config,
      api = _ref.api,
      readOnly = _ref.readOnly;
    _classCallCheck(this, Quote);
    var ALIGNMENTS = Quote.ALIGNMENTS,
      DEFAULT_ALIGNMENT = Quote.DEFAULT_ALIGNMENT;
    this.api = api;
    this.readOnly = readOnly;
    this.quotePlaceholder = config.quotePlaceholder || Quote.DEFAULT_QUOTE_PLACEHOLDER;
    this.captionPlaceholder = config.captionPlaceholder || Quote.DEFAULT_CAPTION_PLACEHOLDER;
    this.data = {
      text: data.text || '',
      caption: data.caption || '',
      alignment: Object.values(ALIGNMENTS).includes(data.alignment) && data.alignment || config.defaultAlignment || DEFAULT_ALIGNMENT
    };
  }

  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  _createClass(Quote, [{
    key: "CSS",
    get:
    /**
     * Tool`s styles
     *
     * @returns {{baseClass: string, wrapper: string, quote: string, input: string, caption: string}}
     */
    function get() {
      return {
        baseClass: this.api.styles.block,
        wrapper: 'cdx-quote',
        text: 'cdx-quote__text',
        input: this.api.styles.input,
        caption: 'cdx-quote__caption'
      };
    }

    /**
     * Tool`s settings properties
     *
     * @returns {*[]}
     */
  }, {
    key: "settings",
    get: function get() {
      return [{
        name: 'left',
        icon: _codexteam_icons__WEBPACK_IMPORTED_MODULE_1__.IconAlignLeft
      }, {
        name: 'center',
        icon: _codexteam_icons__WEBPACK_IMPORTED_MODULE_1__.IconAlignCenter
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var container = this._make('blockquote', [this.CSS.baseClass, this.CSS.wrapper]);
      var quote = this._make('div', [this.CSS.input, this.CSS.text], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.text
      });
      var caption = this._make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
        innerHTML: this.data.caption
      });
      quote.dataset.placeholder = this.quotePlaceholder;
      caption.dataset.placeholder = this.captionPlaceholder;
      container.appendChild(quote);
      container.appendChild(caption);
      return container;
    }

    /**
     * Extract Quote data from Quote Tool element
     *
     * @param {HTMLDivElement} quoteElement - element to save
     * @returns {QuoteData}
     */
  }, {
    key: "save",
    value: function save(quoteElement) {
      var text = quoteElement.querySelector(".".concat(this.CSS.text));
      var caption = quoteElement.querySelector(".".concat(this.CSS.caption));
      return Object.assign(this.data, {
        text: text.innerHTML,
        caption: caption.innerHTML
      });
    }

    /**
     * Sanitizer rules
     */
  }, {
    key: "renderSettings",
    value:
    /**
     * Create wrapper for Tool`s settings buttons:
     * 1. Left alignment
     * 2. Center alignment
     *
     * @returns {TunesMenuConfig}
     *
     */
    function renderSettings() {
      var _this = this;
      var capitalize = function capitalize(str) {
        return str[0].toUpperCase() + str.substr(1);
      };
      return this.settings.map(function (item) {
        return {
          icon: item.icon,
          label: _this.api.i18n.t("Align ".concat(capitalize(item.name))),
          onActivate: function onActivate() {
            return _this._toggleTune(item.name);
          },
          isActive: _this.data.alignment === item.name,
          closeOnActivate: true
        };
      });
    }
  }, {
    key: "_toggleTune",
    value:
    /**
     * Toggle quote`s alignment
     *
     * @param {string} tune - alignment
     * @private
     */
    function _toggleTune(tune) {
      this.data.alignment = tune;
    }

    /**
     * Helper for making Elements with attributes
     *
     * @param  {string} tagName           - new Element tag name
     * @param  {Array|string} classNames  - list or name of CSS classname(s)
     * @param  {object} attributes        - any attributes
     * @returns {Element}
     */
  }, {
    key: "_make",
    value: function _make(tagName) {
      var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var el = document.createElement(tagName);
      if (Array.isArray(classNames)) {
        var _el$classList;
        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
      } else if (classNames) {
        el.classList.add(classNames);
      }
      for (var attrName in attributes) {
        el[attrName] = attributes[attrName];
      }
      return el;
    }
  }], [{
    key: "isReadOnlySupported",
    get:
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    function get() {
      return true;
    }

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
  }, {
    key: "toolbox",
    get: function get() {
      return {
        icon: _codexteam_icons__WEBPACK_IMPORTED_MODULE_1__.IconQuote,
        title: 'Quote'
      };
    }

    /**
     * Empty Quote is not empty Block
     *
     * @public
     * @returns {boolean}
     */
  }, {
    key: "contentless",
    get: function get() {
      return true;
    }

    /**
     * Allow to press Enter inside the Quote
     *
     * @public
     * @returns {boolean}
     */
  }, {
    key: "enableLineBreaks",
    get: function get() {
      return true;
    }

    /**
     * Default placeholder for quote text
     *
     * @public
     * @returns {string}
     */
  }, {
    key: "DEFAULT_QUOTE_PLACEHOLDER",
    get: function get() {
      return 'Enter a quote';
    }

    /**
     * Default placeholder for quote caption
     *
     * @public
     * @returns {string}
     */
  }, {
    key: "DEFAULT_CAPTION_PLACEHOLDER",
    get: function get() {
      return 'Enter a caption';
    }

    /**
     * Allowed quote alignments
     *
     * @public
     * @returns {{left: string, center: string}}
     */
  }, {
    key: "ALIGNMENTS",
    get: function get() {
      return {
        left: 'left',
        center: 'center'
      };
    }

    /**
     * Default quote alignment
     *
     * @public
     * @returns {string}
     */
  }, {
    key: "DEFAULT_ALIGNMENT",
    get: function get() {
      return Quote.ALIGNMENTS.left;
    }

    /**
     * Allow Quote to be converted to/from other blocks
     */
  }, {
    key: "conversionConfig",
    get: function get() {
      return {
        /**
         * To create Quote data from string, simple fill 'text' property
         */
        "import": 'text',
        /**
         * To create string from Quote data, concatenate text and caption
         *
         * @param {QuoteData} quoteData
         * @returns {string}
         */
        "export": function _export(quoteData) {
          return quoteData.caption ? "".concat(quoteData.text, " \u2014 ").concat(quoteData.caption) : quoteData.text;
        }
      };
    }
  }, {
    key: "sanitize",
    get: function get() {
      return {
        text: {
          br: true
        },
        caption: {
          br: true
        },
        alignment: {}
      };
    }
  }]);
  return Quote;
}();


/***/ }),

/***/ "./resources/js/site/helpers/y.metrika.js":
/*!************************************************!*\
  !*** ./resources/js/site/helpers/y.metrika.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  reachGoal: function reachGoal(goalName) {
    if (goalName && window.yaid && window.ym) {
      window.ym(window.yaid, 'reachGoal', goalName);
    }
  }
});

/***/ }),

/***/ "./resources/js/site/mixins/modals.js":
/*!********************************************!*\
  !*** ./resources/js/site/mixins/modals.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      modals: {},
      modalsData: {}
    };
  },
  watch: {
    opennedModals: function opennedModals(count) {
      var htmlTag = document.documentElement;
      htmlTag.classList.toggle('no-scroll', count > 0);
    }
  },
  computed: {
    opennedModals: function opennedModals() {
      return Object.values(this.modals).reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  },
  mounted: function mounted() {
    this.initCloseOnAnchor();
  },
  methods: {
    openModal: function openModal(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.modals[name] = true;
      this.modalsData[name] = data;
    },
    closeModals: function closeModals() {
      this.modals = {};
    },
    // Закрытие модалок при клике на якоря
    initCloseOnAnchor: function initCloseOnAnchor() {
      var _this = this;
      var anchorsLinks = document.querySelectorAll('.modal a[href*="#"]');
      anchorsLinks.forEach(function (anchor) {
        var href = anchor.getAttribute('href');
        var id = href.substring(href.indexOf('#') + 1);
        if (id) anchor.addEventListener('click', function () {
          return _this.closeModals();
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/site/services/y.metrika/y.metrika-goals.js":
/*!*****************************************************************!*\
  !*** ./resources/js/site/services/y.metrika/y.metrika-goals.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initYaMetrikaGoalsJs)
/* harmony export */ });
function initYaMetrikaGoalsJs() {
  if (window.ym && window.yaid) {
    var counterId = window.yaid;
    document.querySelectorAll('[data-ym-goal]').forEach(function (item) {
      var goal = item.dataset.ymGoal;
      if (goal && goal.length) {
        item.addEventListener('click', function () {
          window.ym(counterId, 'reachGoal', goal);
        });
      }
    });
  }
}

/***/ }),

/***/ "./resources/js/site/static-js/galleries.js":
/*!**************************************************!*\
  !*** ./resources/js/site/static-js/galleries.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initGalleriesJs)
/* harmony export */ });
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baguettebox.js */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baguettebox_js__WEBPACK_IMPORTED_MODULE_0__);

function initGalleriesJs() {
  var htmlTag = document.documentElement;
  // !! Галерея не включится если в ссылках будут изображения без расширения
  baguettebox_js__WEBPACK_IMPORTED_MODULE_0___default().run('.gallery', {
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    afterShow: function afterShow() {
      htmlTag.classList.add('no-scroll');
    },
    afterHide: function afterHide() {
      htmlTag.classList.remove('no-scroll');
    }
  });
}

/***/ }),

/***/ "./resources/js/site/static-js/header.js":
/*!***********************************************!*\
  !*** ./resources/js/site/static-js/header.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initHeaderJs)
/* harmony export */ });
function initHeaderJs() {
  var header = document.querySelector('.header');
  if (header) {
    // Помещаем обложку под шапку. Закоментить, если не нужно
    setCoverIdent(header);

    // Устанавливаем класс шапки при скроле страницы
    setScrolledStyles(header);
  }
}
function setScrolledStyles(header) {
  window.addEventListener('load', bgHeader);
  window.addEventListener('scroll', bgHeader);
  function bgHeader() {
    var scroll = window.scrollY;
    header.classList.toggle('header_scrolled', scroll > 10);
  }
}
function setCoverIdent(header) {
  new ResizeObserver(function (entries) {
    var cover = document.querySelector('.layout__main > .cover:first-child');
    if (cover) {
      var entryHeight = entries[0].target.offsetHeight;
      cover.style.marginTop = entryHeight * -1 + 'px';
    }
  }).observe(header, {
    box: 'border-box'
  });
}

/***/ }),

/***/ "./resources/js/site/static-js/range.js":
/*!**********************************************!*\
  !*** ./resources/js/site/static-js/range.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initRangeJs)
/* harmony export */ });
function initRangeJs() {
  var fields = document.querySelectorAll('.range');
  fields.forEach(function (field) {
    var firstInputEl = field.querySelector('.range__field_first');
    var secondInputEl = field.querySelector('.range__field_second');
    var countFromEl = field.querySelector('.range__count_from .range-value');
    var countCurrentEl = field.querySelector('.range__count_current .range-value');
    var countToEl = field.querySelector('.range__count_to .range-value');
    var step = Number(firstInputEl.getAttribute('step')) || 1;
    var firstInputCount = Number(firstInputEl.value);
    var secontInputCount = secondInputEl ? Number(secondInputEl.value) : undefined;
    firstInputEl.addEventListener('input', function (event) {
      firstInputCount = Number(event.target.value);
      if (secondInputEl) {
        if (firstInputCount + step >= secontInputCount) {
          event.target.value = secontInputCount - step;
          firstInputEl.style.setProperty('--from', secontInputCount - step);
          return false;
        }
        firstInputEl.style.setProperty('--from', firstInputCount);
        countFromEl.innerHTML = firstInputCount;
      } else {
        countCurrentEl.innerHTML = firstInputCount;
      }
    });
    if (secondInputEl) {
      secondInputEl.addEventListener('input', function (event) {
        secontInputCount = Number(event.target.value);
        if (secontInputCount - step <= firstInputCount) {
          event.target.value = firstInputCount + step;
          firstInputEl.style.setProperty('--to', firstInputCount + step);
          return false;
        }
        firstInputEl.style.setProperty('--to', secontInputCount);
        countToEl.innerHTML = secontInputCount;
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/site/static-js/sliders.js":
/*!************************************************!*\
  !*** ./resources/js/site/static-js/sliders.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initSlidersJs)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
// import Swiper from 'swiper';

function initSlidersJs() {
  initSlider('.swiper-slider .swiper', defaultSliderOptions);
}
var defaultSliderOptions = {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
  loop: true,
  slidesPerView: 1,
  // autoHeight: true,

  // Пагинация
  pagination: {
    enabled: true,
    el: '.swiper-pagination',
    clickable: true
    // type: "fraction", // Нумерация
  },

  // Стрелки
  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};
function initSlider(selector, options) {
  var sliders = [];
  var slidersEls = document.querySelectorAll(selector);
  slidersEls.forEach(function (el, index) {
    var slides = el.querySelectorAll('.swiper-slide');

    // Если у слайдера 1 слайд. то не инициализируем
    if (slides.length > 1) {
      sliders[index] = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(el, options);
    }
  });
  return sliders;
}

/***/ }),

/***/ "./resources/js/site/static-js/validate-tel.js":
/*!*****************************************************!*\
  !*** ./resources/js/site/static-js/validate-tel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initValidateTelJs)
/* harmony export */ });
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ "./node_modules/cleave.js/dist/cleave-esm.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.ru */ "./node_modules/cleave.js/dist/addons/cleave-phone.ru.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_ru__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_ru__WEBPACK_IMPORTED_MODULE_1__);


function initValidateTelJs() {
  var inputs = document.querySelectorAll('input[type="tel"]');
  inputs.forEach(function (el) {
    var validation = new cleave_js__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
      // eslint-disable-line
      phone: true,
      phoneRegionCode: 'ru'
    });
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./resources/js/site/components/editorjs/editorjs-gallery/index.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./resources/js/site/components/editorjs/editorjs-gallery/index.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".image-gallery {\n  --bg-color: #cdd1e0;\n  --front-color: #388ae5;\n  --border-color: #e8e8eb;\n  --error-color: #e76868;\n  /**\n    * Tunes\n    * ----------------\n    */\n}\n.image-gallery__container {\n  background: black;\n  margin-bottom: 10px;\n  padding: 5px;\n}\n.image-gallery__controls {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 8px 2px 3px;\n}\n.image-gallery__items {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  padding: 10px;\n  background-color: #222222;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.image-gallery__items:empty {\n  display: none;\n}\n.image-gallery__preloaders {\n  display: flex;\n  flex-grow: 1;\n  flex-wrap: nowrap;\n  padding: 5px;\n  gap: 8px;\n  overflow: hidden;\n}\n.image-gallery__preloader {\n  min-width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: cover;\n  position: relative;\n  background-color: var(--bg-color);\n  background-position: center center;\n}\n.image-gallery__preloader::after {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid var(--bg-color);\n  border-top-color: var(--front-color);\n  left: 50%;\n  top: 50%;\n  margin-top: -15px;\n  margin-left: -15px;\n  animation: image-preloader-spin 2s infinite linear;\n  box-sizing: border-box;\n}\n.image-gallery__image {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 16/9;\n  cursor: move;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  background-color: black;\n  border-radius: 3px;\n  padding: 5px;\n}\n.image-gallery__image::after {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid var(--bg-color);\n  border-top-color: var(--front-color);\n  left: 50%;\n  top: 50%;\n  margin-top: -15px;\n  margin-left: -15px;\n  animation: image-preloader-spin 2s infinite linear;\n  box-sizing: border-box;\n}\n.image-gallery__image--filled .image-gallery__image-trash, .image-gallery__image--filled .image-gallery__image-picture {\n  display: block;\n}\n.image-gallery__image--filled::after {\n  content: none;\n}\n.image-gallery__image--new {\n  background-color: var(--front-color);\n}\n.image-gallery__image--deleted {\n  background-color: var(--error-color);\n}\n.image-gallery__image--empty, .image-gallery__image--loading {\n  display: none;\n}\n.image-gallery__image.sortable-ghost {\n  opacity: 0.75;\n}\n.image-gallery__image-picture {\n  border-radius: 3px;\n  max-width: 100%;\n  height: 100%;\n  display: none;\n  margin: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n  pointer-events: none;\n}\n.image-gallery__image-new {\n  position: absolute;\n  display: flex;\n  top: 5px;\n  left: 5px;\n  color: #fff;\n  background-color: var(--front-color);\n  line-height: 1;\n  border-radius: 0 0 3px 0;\n  transition: background-color 0.1s;\n}\n.image-gallery__image-trash {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  cursor: pointer;\n  color: #fff;\n  font-size: 18px;\n  background-color: rgba(0, 0, 0, 0.25);\n  line-height: 1;\n  padding: 6px 8px;\n  border-radius: 0 0 0 3px;\n  transition: background-color 0.1s;\n  display: none;\n}\n.image-gallery__image-trash:hover {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.image-gallery__counter {\n  display: flex;\n  align-items: center;\n  color: gray;\n  font-size: 14px;\n  margin-right: 6px;\n}\n.image-gallery__caption[contentEditable=true][data-placeholder]::before {\n  position: absolute !important;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n}\n.image-gallery__caption[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n.image-gallery__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n.image-gallery__caption {\n  margin-bottom: 10px;\n}\n.image-gallery .cdx-button {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  gap: 5px;\n  white-space: nowrap;\n}\n.image-gallery__tune-wrapper {\n  display: flex;\n  gap: 6px;\n  margin: 6px 0;\n}\n.image-gallery__tune-wrapper:first-child {\n  margin-top: 0;\n}\n.image-gallery__tune-wrapper:last-child {\n  margin-bottom: 0;\n}\n.image-gallery__tune {\n  flex-grow: 1;\n  padding: 6px;\n  color: var(--color-text-primary);\n}\n.image-gallery__tune.active {\n  background: var(--color-background-icon-active);\n  color: var(--color-text-icon-active);\n  border-color: var(--color-text-icon-active);\n}\n.image-gallery__tune svg {\n  width: 24px;\n  height: 24px;\n}\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".editor__blocks[data-v-82ff2b20] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 32px;\n  max-width: 640px;\n  margin: 0 auto;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".editor__error[data-v-d3c9cad4] {\n  color: #e76868;\n  padding: 8px 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/js/site/components/editorjs/quote/index.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/js/site/components/editorjs/quote/index.css ***!
  \***********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".cdx-quote-icon svg {\n\ttransform: rotate(180deg);\n}\n\n.cdx-quote {\n\tmargin: 0;\n}\n\n.cdx-quote__text {\n\tmin-height: 158px;\n\tmargin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before {\n\tposition: absolute;\n\tcontent: attr(data-placeholder);\n\tcolor: #707684;\n\tfont-weight: normal;\n\topacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n\topacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n\topacity: 0;\n}\n\n\n.cdx-quote-settings {\n\tdisplay: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n\twidth: 50%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/svg/fit.svg":
/*!****************************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/svg/fit.svg ***!
  \****************************************************************************/
/***/ ((module) => {

// Module
var code = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" width=\"24\" height=\"24\" viewBox=\"0 -960 960 960\"><path d=\"M142.309-220.001q-29.826 0-51.067-21.241-21.24-21.24-21.24-51.067v-375.382q0-29.827 21.24-51.067 21.241-21.241 51.067-21.241h375.383q29.827 0 51.067 21.241 21.24 21.24 21.24 51.067v375.382q0 29.827-21.24 51.067-21.24 21.241-51.067 21.241H142.309ZM706.343-520q-15.652 0-25.998-10.346-10.346-10.346-10.346-25.998v-147.311q0-15.651 10.346-25.997 10.346-10.347 25.998-10.347h147.311q15.652 0 25.998 10.347 10.346 10.346 10.346 25.997v147.311q0 15.652-10.346 25.998Q869.306-520 853.654-520H706.343Zm23.655-59.999h100.001V-680H729.998v100.001ZM142.309-280h375.383q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-375.382q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H142.309q-5.385 0-8.846 3.462-3.462 3.462-3.462 8.847v375.382q0 5.385 3.462 8.847 3.461 3.462 8.846 3.462Zm31.538-81.923h312.307l-101.153-135-75 100-55-73-81.154 108Zm532.496 141.922q-15.652 0-25.998-10.347-10.346-10.346-10.346-25.997v-147.311q0-15.652 10.346-25.998Q690.691-440 706.343-440h147.311q15.652 0 25.998 10.346 10.346 10.346 10.346 25.998v147.311q0 15.651-10.346 25.997-10.346 10.347-25.998 10.347H706.343ZM729.998-280h100.001v-100.001H729.998V-280Zm-599.997 0v-400 400Zm599.997-299.999V-680v100.001Zm0 299.999v-100.001V-280Z\"/></svg>";
// Exports
module.exports = code;

/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/svg/slider.svg":
/*!*******************************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/svg/slider.svg ***!
  \*******************************************************************************/
/***/ ((module) => {

// Module
var code = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M363.077-406.154h373.844L612.769-569.23l-95.078 121.539-62.769-77.693-91.845 119.23Zm-40.769 146.153q-30.308 0-51.307-21-21-21-21-51.308v-455.382q0-30.308 21-51.308 20.999-21 51.307-21h455.383q30.307 0 51.307 21 21 21 21 51.308v455.382q0 30.308-21 51.308t-51.307 21H322.308Zm0-59.999h455.383q4.615 0 8.462-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.462-3.846H322.308q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v455.382q0 4.616 3.847 8.463 3.846 3.846 8.462 3.846ZM182.309-120.003q-30.307 0-51.307-21-21-21-21-51.307v-515.381h59.999v515.381q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h515.382v59.998H182.309ZM309.999-800v480-480Z\"/></svg>";
// Exports
module.exports = code;

/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/svg/toolbox.svg":
/*!********************************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/svg/toolbox.svg ***!
  \********************************************************************************/
/***/ ((module) => {

// Module
var code = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" height=\"20\" viewBox=\"0 -960 960 960\" width=\"20\"><path d=\"M360-384h384L618-552l-90 120-66-88-102 136Zm-48 144q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z\"/></svg>";
// Exports
module.exports = code;

/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/svg/trash.svg":
/*!******************************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/svg/trash.svg ***!
  \******************************************************************************/
/***/ ((module) => {

// Module
var code = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n  <path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/>\n  <path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/>\n</svg>";
// Exports
module.exports = code;

/***/ }),

/***/ "./resources/sass/site/style.scss":
/*!****************************************!*\
  !*** ./resources/sass/site/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/site/components/editorjs/editorjs-gallery/index.scss":
/*!***************************************************************************!*\
  !*** ./resources/js/site/components/editorjs/editorjs-gallery/index.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./resources/js/site/components/editorjs/editorjs-gallery/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_style_index_0_id_82ff2b20_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_style_index_0_id_82ff2b20_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_style_index_0_id_82ff2b20_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorBlock_vue_vue_type_style_index_0_id_d3c9cad4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorBlock_vue_vue_type_style_index_0_id_d3c9cad4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorBlock_vue_vue_type_style_index_0_id_d3c9cad4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/site/components/editorjs/quote/index.css":
/*!***************************************************************!*\
  !*** ./resources/js/site/components/editorjs/quote/index.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./resources/js/site/components/editorjs/quote/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/site/components/Editorjs.vue":
/*!***************************************************!*\
  !*** ./resources/js/site/components/Editorjs.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editorjs_vue_vue_type_template_id_526cb6a5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editorjs.vue?vue&type=template&id=526cb6a5 */ "./resources/js/site/components/Editorjs.vue?vue&type=template&id=526cb6a5");
/* harmony import */ var _Editorjs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editorjs.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/Editorjs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editorjs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editorjs_vue_vue_type_template_id_526cb6a5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/Editorjs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/PDFViewer.vue":
/*!****************************************************!*\
  !*** ./resources/js/site/components/PDFViewer.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PDFViewer_vue_vue_type_template_id_2417d985__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PDFViewer.vue?vue&type=template&id=2417d985 */ "./resources/js/site/components/PDFViewer.vue?vue&type=template&id=2417d985");
/* harmony import */ var _PDFViewer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PDFViewer.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/PDFViewer.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PDFViewer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PDFViewer_vue_vue_type_template_id_2417d985__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/PDFViewer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/QuillEditor.vue":
/*!******************************************************!*\
  !*** ./resources/js/site/components/QuillEditor.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuillEditor_vue_vue_type_template_id_04543373__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuillEditor.vue?vue&type=template&id=04543373 */ "./resources/js/site/components/QuillEditor.vue?vue&type=template&id=04543373");
/* harmony import */ var _QuillEditor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditor.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/QuillEditor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_QuillEditor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuillEditor_vue_vue_type_template_id_04543373__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/QuillEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/SunEditor.vue":
/*!****************************************************!*\
  !*** ./resources/js/site/components/SunEditor.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SunEditor_vue_vue_type_template_id_bfed678c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SunEditor.vue?vue&type=template&id=bfed678c */ "./resources/js/site/components/SunEditor.vue?vue&type=template&id=bfed678c");
/* harmony import */ var _SunEditor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SunEditor.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/SunEditor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SunEditor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SunEditor_vue_vue_type_template_id_bfed678c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/SunEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/VModal.vue":
/*!*************************************************!*\
  !*** ./resources/js/site/components/VModal.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VModal_vue_vue_type_template_id_f1081774__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VModal.vue?vue&type=template&id=f1081774 */ "./resources/js/site/components/VModal.vue?vue&type=template&id=f1081774");
/* harmony import */ var _VModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VModal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/VModal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VModal_vue_vue_type_template_id_f1081774__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/VModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/VRecall.vue":
/*!**************************************************!*\
  !*** ./resources/js/site/components/VRecall.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VRecall_vue_vue_type_template_id_03a57870__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VRecall.vue?vue&type=template&id=03a57870 */ "./resources/js/site/components/VRecall.vue?vue&type=template&id=03a57870");
/* harmony import */ var _VRecall_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VRecall.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/VRecall.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VRecall_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VRecall_vue_vue_type_template_id_03a57870__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/VRecall.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/Editor.vue":
/*!********************************************************!*\
  !*** ./resources/js/site/components/editor/Editor.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_82ff2b20_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=82ff2b20&scoped=true */ "./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20&scoped=true");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Editor_vue_vue_type_style_index_0_id_82ff2b20_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true */ "./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_82ff2b20_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-82ff2b20"],['__file',"resources/js/site/components/editor/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/common/BlockWrapper.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/site/components/editor/common/BlockWrapper.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockWrapper_vue_vue_type_template_id_337967b7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockWrapper.vue?vue&type=template&id=337967b7 */ "./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=template&id=337967b7");
/* harmony import */ var _BlockWrapper_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockWrapper.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BlockWrapper_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BlockWrapper_vue_vue_type_template_id_337967b7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/editor/common/BlockWrapper.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/common/ErrorBlock.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/site/components/editor/common/ErrorBlock.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ErrorBlock_vue_vue_type_template_id_d3c9cad4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBlock.vue?vue&type=template&id=d3c9cad4&scoped=true */ "./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=template&id=d3c9cad4&scoped=true");
/* harmony import */ var _ErrorBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBlock.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _ErrorBlock_vue_vue_type_style_index_0_id_d3c9cad4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true */ "./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ErrorBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ErrorBlock_vue_vue_type_template_id_d3c9cad4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-d3c9cad4"],['__file',"resources/js/site/components/editor/common/ErrorBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/common/LoadingBlock.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/site/components/editor/common/LoadingBlock.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingBlock_vue_vue_type_template_id_aabef8bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingBlock.vue?vue&type=template&id=aabef8bc */ "./resources/js/site/components/editor/common/LoadingBlock.vue?vue&type=template&id=aabef8bc");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_LoadingBlock_vue_vue_type_template_id_aabef8bc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/editor/common/LoadingBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/tabs/VTabs.vue":
/*!*****************************************************!*\
  !*** ./resources/js/site/components/tabs/VTabs.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VTabs_vue_vue_type_template_id_96d0ac1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VTabs.vue?vue&type=template&id=96d0ac1c */ "./resources/js/site/components/tabs/VTabs.vue?vue&type=template&id=96d0ac1c");
/* harmony import */ var _VTabs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VTabs.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/tabs/VTabs.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VTabs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VTabs_vue_vue_type_template_id_96d0ac1c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/tabs/VTabs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/tabs/VTabsTab.vue":
/*!********************************************************!*\
  !*** ./resources/js/site/components/tabs/VTabsTab.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VTabsTab_vue_vue_type_template_id_727dc9f3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VTabsTab.vue?vue&type=template&id=727dc9f3 */ "./resources/js/site/components/tabs/VTabsTab.vue?vue&type=template&id=727dc9f3");
/* harmony import */ var _VTabsTab_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VTabsTab.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/tabs/VTabsTab.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VTabsTab_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VTabsTab_vue_vue_type_template_id_727dc9f3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/tabs/VTabsTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/Editorjs.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/site/components/Editorjs.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editorjs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editorjs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editorjs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/Editorjs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/PDFViewer.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/site/components/PDFViewer.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PDFViewer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PDFViewer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PDFViewer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/PDFViewer.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/QuillEditor.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/site/components/QuillEditor.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuillEditor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/QuillEditor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/SunEditor.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/site/components/SunEditor.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SunEditor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SunEditor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SunEditor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/SunEditor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/VModal.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/site/components/VModal.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VModal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VModal.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/VRecall.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/site/components/VRecall.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VRecall_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VRecall_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VRecall.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VRecall.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/editor/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/site/components/editor/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlockWrapper_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlockWrapper_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BlockWrapper.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ErrorBlock.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/tabs/VTabs.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/site/components/tabs/VTabs.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VTabs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VTabs_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VTabs.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabs.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/tabs/VTabsTab.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/site/components/tabs/VTabsTab.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VTabsTab_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VTabsTab_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VTabsTab.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabsTab.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/components/Editorjs.vue?vue&type=template&id=526cb6a5":
/*!*********************************************************************************!*\
  !*** ./resources/js/site/components/Editorjs.vue?vue&type=template&id=526cb6a5 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editorjs_vue_vue_type_template_id_526cb6a5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editorjs_vue_vue_type_template_id_526cb6a5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editorjs.vue?vue&type=template&id=526cb6a5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/Editorjs.vue?vue&type=template&id=526cb6a5");


/***/ }),

/***/ "./resources/js/site/components/PDFViewer.vue?vue&type=template&id=2417d985":
/*!**********************************************************************************!*\
  !*** ./resources/js/site/components/PDFViewer.vue?vue&type=template&id=2417d985 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PDFViewer_vue_vue_type_template_id_2417d985__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PDFViewer_vue_vue_type_template_id_2417d985__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PDFViewer.vue?vue&type=template&id=2417d985 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/PDFViewer.vue?vue&type=template&id=2417d985");


/***/ }),

/***/ "./resources/js/site/components/QuillEditor.vue?vue&type=template&id=04543373":
/*!************************************************************************************!*\
  !*** ./resources/js/site/components/QuillEditor.vue?vue&type=template&id=04543373 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditor_vue_vue_type_template_id_04543373__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuillEditor_vue_vue_type_template_id_04543373__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuillEditor.vue?vue&type=template&id=04543373 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/QuillEditor.vue?vue&type=template&id=04543373");


/***/ }),

/***/ "./resources/js/site/components/SunEditor.vue?vue&type=template&id=bfed678c":
/*!**********************************************************************************!*\
  !*** ./resources/js/site/components/SunEditor.vue?vue&type=template&id=bfed678c ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SunEditor_vue_vue_type_template_id_bfed678c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SunEditor_vue_vue_type_template_id_bfed678c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SunEditor.vue?vue&type=template&id=bfed678c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/SunEditor.vue?vue&type=template&id=bfed678c");


/***/ }),

/***/ "./resources/js/site/components/VModal.vue?vue&type=template&id=f1081774":
/*!*******************************************************************************!*\
  !*** ./resources/js/site/components/VModal.vue?vue&type=template&id=f1081774 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VModal_vue_vue_type_template_id_f1081774__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VModal_vue_vue_type_template_id_f1081774__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VModal.vue?vue&type=template&id=f1081774 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VModal.vue?vue&type=template&id=f1081774");


/***/ }),

/***/ "./resources/js/site/components/VRecall.vue?vue&type=template&id=03a57870":
/*!********************************************************************************!*\
  !*** ./resources/js/site/components/VRecall.vue?vue&type=template&id=03a57870 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VRecall_vue_vue_type_template_id_03a57870__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VRecall_vue_vue_type_template_id_03a57870__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VRecall.vue?vue&type=template&id=03a57870 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/VRecall.vue?vue&type=template&id=03a57870");


/***/ }),

/***/ "./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_template_id_82ff2b20_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_template_id_82ff2b20_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=template&id=82ff2b20&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20&scoped=true");


/***/ }),

/***/ "./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=template&id=337967b7":
/*!***************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=template&id=337967b7 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlockWrapper_vue_vue_type_template_id_337967b7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlockWrapper_vue_vue_type_template_id_337967b7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BlockWrapper.vue?vue&type=template&id=337967b7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockWrapper.vue?vue&type=template&id=337967b7");


/***/ }),

/***/ "./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=template&id=d3c9cad4&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=template&id=d3c9cad4&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorBlock_vue_vue_type_template_id_d3c9cad4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorBlock_vue_vue_type_template_id_d3c9cad4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ErrorBlock.vue?vue&type=template&id=d3c9cad4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=template&id=d3c9cad4&scoped=true");


/***/ }),

/***/ "./resources/js/site/components/editor/common/LoadingBlock.vue?vue&type=template&id=aabef8bc":
/*!***************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/common/LoadingBlock.vue?vue&type=template&id=aabef8bc ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingBlock_vue_vue_type_template_id_aabef8bc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingBlock_vue_vue_type_template_id_aabef8bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingBlock.vue?vue&type=template&id=aabef8bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/LoadingBlock.vue?vue&type=template&id=aabef8bc");


/***/ }),

/***/ "./resources/js/site/components/tabs/VTabs.vue?vue&type=template&id=96d0ac1c":
/*!***********************************************************************************!*\
  !*** ./resources/js/site/components/tabs/VTabs.vue?vue&type=template&id=96d0ac1c ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VTabs_vue_vue_type_template_id_96d0ac1c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VTabs_vue_vue_type_template_id_96d0ac1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VTabs.vue?vue&type=template&id=96d0ac1c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabs.vue?vue&type=template&id=96d0ac1c");


/***/ }),

/***/ "./resources/js/site/components/tabs/VTabsTab.vue?vue&type=template&id=727dc9f3":
/*!**************************************************************************************!*\
  !*** ./resources/js/site/components/tabs/VTabsTab.vue?vue&type=template&id=727dc9f3 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VTabsTab_vue_vue_type_template_id_727dc9f3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VTabsTab_vue_vue_type_template_id_727dc9f3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VTabsTab.vue?vue&type=template&id=727dc9f3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/tabs/VTabsTab.vue?vue&type=template&id=727dc9f3");


/***/ }),

/***/ "./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_style_index_0_id_82ff2b20_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=style&index=0&id=82ff2b20&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ErrorBlock_vue_vue_type_style_index_0_id_d3c9cad4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/ErrorBlock.vue?vue&type=style&index=0&id=d3c9cad4&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/site/components/editor/blocks lazy recursive ^\\.\\/.*Block\\.vue$":
/*!**********************************************************************************************!*\
  !*** ./resources/js/site/components/editor/blocks/ lazy ^\.\/.*Block\.vue$ namespace object ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ImagesBlock.vue": [
		"./resources/js/site/components/editor/blocks/ImagesBlock.vue",
		"/js/vendor",
		"resources_js_site_components_editor_blocks_ImagesBlock_vue"
	],
	"./TextBlock.vue": [
		"./resources/js/site/components/editor/blocks/TextBlock.vue",
		"/js/vendor",
		"resources_js_site_components_editor_blocks_TextBlock_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/site/components/editor/blocks lazy recursive ^\\.\\/.*Block\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?8412":
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f8c1":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c937":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a6fc":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a8ca":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f1a1":
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/style","/js/vendor"], () => (__webpack_exec__("./resources/js/site/app.js"), __webpack_exec__("./resources/sass/site/style.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);