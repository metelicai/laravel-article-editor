(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/EditorBlock.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/EditorBlock.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_editor_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/editor/Editor */ "./resources/js/site/components/editor/Editor.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'EditorBlock',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var blocks = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([{
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
        content: '<p>23535555<a href="#footnote-1" id="footnote-link-1" data-number="1" data-value="1вццц" data-w-e-type="footnote">[1]</a></p><p>аыа</p><p>ыафыыы<a href="#footnote-2" id="footnote-link-2" data-number="2" data-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." data-w-e-type="footnote">[2]</a></p><p>123</p><p><br></p><p>33332<a href="#footnote-3" id="footnote-link-3" data-number="3" data-value="123551" data-w-e-type="footnote">[3]</a> 3212 222111<a href="#footnote-4" id="footnote-link-4" data-number="4" data-value="34555" data-w-e-type="footnote">[4]</a></p>',
        withFootnotes: true,
        footnotes: []
      }
    }]);
    var __returned__ = {
      blocks: blocks,
      get Editor() {
        return _components_editor_Editor__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ModalBlock',
  props: {
    modelValue: {
      type: [Boolean, Object],
      "default": false
    },
    dialog: {
      type: Boolean,
      "default": false
    }
  },
  emits: ['update:modelValue', 'closed'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emits = _ref.emit;
    expose();
    var props = __props;
    var slots = (0,vue__WEBPACK_IMPORTED_MODULE_0__.useSlots)();
    function closeModal() {
      emits('update:modelValue', false);
      emits('closed');
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.modelValue;
    }, function (value) {
      toggleMainContentScroll(value);
    }, {
      immediate: true
    });
    function toggleMainContentScroll(value) {
      var html = document.querySelector('html');
      var deviceType = window.screen.width < 1280 ? 'mobile' : 'desktop';
      var dataModals = Number(html.dataset.modals || 0);
      if (value) dataModals += 1;
      if (!value && dataModals !== 0) dataModals -= 1;
      html.dataset.modals = dataModals;

      // set no-scroll styles
      if (dataModals > 0) {
        html.style.overflow = 'hidden';
        if (deviceType === 'desktop') {
          html.style.marginRight = '17px';
        }
      } else {
        html.style.overflow = null;
        html.style.marginRight = null;
      }
    }
    var __returned__ = {
      slots: slots,
      props: props,
      emits: emits,
      closeModal: closeModal,
      toggleMainContentScroll: toggleMainContentScroll,
      useSlots: vue__WEBPACK_IMPORTED_MODULE_0__.useSlots,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch
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
    var initialized = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(false);
    var pagesCount = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(0);
    var currentPage = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(1);
    var scale = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(1);
    var pdf = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_2__.onBeforeMount)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var loadingTask;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!props.pdfUrl) {
              _context.next = 8;
              break;
            }
            loadingTask = pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__.getDocument({
              url: props.pdfUrl,
              httpHeaders: {
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
            _context.next = 4;
            return loadingTask.promise;
          case 4:
            pdf = _context.sent;
            initialized.value = true;
            pagesCount.value = pdf.numPages;
            getPage();
          case 8:
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
              outputScale = (window.devicePixelRatio || 1) * 2; //
              // Prepare canvas using PDF page dimensions
              //
              canvas = document.getElementById('pdf-canvas');
              context = canvas.getContext('2d');
              canvas.width = Math.floor(viewport.width * outputScale);
              canvas.height = Math.floor(viewport.height * outputScale);
              canvas.style.width = Math.floor(viewport.width) + 'px';
              canvas.style.height = Math.floor(viewport.height) + 'px';
              // canvas.style.width = '100%'
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
      initialized: initialized,
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
/* harmony import */ var _stores_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/stores/config */ "./resources/js/site/stores/config.js");
/* harmony import */ var _common_BlockContainer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/BlockContainer.vue */ "./resources/js/site/components/editor/common/BlockContainer.vue");
/* harmony import */ var _common_LoadingBlock_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/LoadingBlock.vue */ "./resources/js/site/components/editor/common/LoadingBlock.vue");
/* harmony import */ var _common_ErrorBlock_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/ErrorBlock.vue */ "./resources/js/site/components/editor/common/ErrorBlock.vue");
/* harmony import */ var _blocks_ModalBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/blocks/ModalBlock */ "./resources/js/site/blocks/ModalBlock.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Editor',
  props: {
    modelValue: {
      type: Array,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emit = _ref.emit;
    expose();
    var props = __props;
    var confirmDialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('confirmDialog');
    var configStore = (0,_stores_config__WEBPACK_IMPORTED_MODULE_1__.useConfigStore)();
    var _blocks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.modelValue;
    }, function () {
      _blocks.value = props.modelValue;
    }, {
      immediate: true,
      deep: true
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return _blocks.value;
    }, function () {
      emit('update:modelValue', _blocks.value);
    }, {
      deep: true
    });

    /**
     * Blocks
     *
     */

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
        loadingComponent: _common_LoadingBlock_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        errorComponent: _common_ErrorBlock_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        timeout: 2000
      });
      return {
        id: block.id,
        data: block.data,
        component: component
      };
    }
    function addBlock(type) {
      if (modalAddBlock.value.placement === 'down') {
        modalAddBlock.value.currentBlockIndex += 1;
      }
      _blocks.value.splice(modalAddBlock.value.currentBlockIndex, 0, {
        id: null,
        type: type,
        data: {}
      });
      modalAddBlockClose();
    }
    function moveBlock(direction, index) {
      if (direction === 'up') {
        var prevBlock = _blocks.value[index - 1];
        var currentBlock = _blocks.value[index];
        if (!prevBlock || !currentBlock) return 0;
        _blocks.value[index - 1] = currentBlock;
        _blocks.value[index] = prevBlock;
      } else {
        var _currentBlock = _blocks.value[index];
        var nextBlock = _blocks.value[index + 1];
        if (!_currentBlock || !nextBlock) return 0;
        _blocks.value[index] = nextBlock;
        _blocks.value[index + 1] = _currentBlock;
      }
    }
    function removeBlock(index) {
      confirmDialog.show({
        title: 'Вы действительно хотите удалить блок?',
        confirmButton: {
          text: 'Удалить',
          color: 'danger'
        }
      }).then(function () {
        _blocks.value.splice(index, 1);
      })["catch"](function () {});
    }

    /**
     * Modal add blocks
     *
     */

    var modalAddBlock = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      openned: false,
      currentBlockIndex: null,
      placement: 'down'
    });
    function modalAddBlockShow(placement, index) {
      modalAddBlock.value = {
        openned: true,
        currentBlockIndex: index,
        placement: placement
      };
    }
    function modalAddBlockClose() {
      modalAddBlock.value = {
        openned: false,
        currentBlockIndex: null,
        placement: 'down'
      };
    }
    var __returned__ = {
      confirmDialog: confirmDialog,
      configStore: configStore,
      props: props,
      emit: emit,
      _blocks: _blocks,
      loadBlock: loadBlock,
      addBlock: addBlock,
      moveBlock: moveBlock,
      removeBlock: removeBlock,
      modalAddBlock: modalAddBlock,
      modalAddBlockShow: modalAddBlockShow,
      modalAddBlockClose: modalAddBlockClose,
      defineAsyncComponent: vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent,
      inject: vue__WEBPACK_IMPORTED_MODULE_0__.inject,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      get useConfigStore() {
        return _stores_config__WEBPACK_IMPORTED_MODULE_1__.useConfigStore;
      },
      BlockContainer: _common_BlockContainer_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      LoadingBlock: _common_LoadingBlock_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      ErrorBlock: _common_ErrorBlock_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      get ModalBlock() {
        return _blocks_ModalBlock__WEBPACK_IMPORTED_MODULE_5__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'BlockContainer',
  props: {
    block: {
      required: true
    }
  },
  emits: ['addBlock', 'moveBlock', 'removeBlock'],
  setup: function setup(__props, _ref) {
    var expose = _ref.expose,
      emit = _ref.emit;
    expose();
    var __returned__ = {
      emit: emit
    };
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/EditorBlock.vue?vue&type=template&id=25c19a31":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/EditorBlock.vue?vue&type=template&id=25c19a31 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Editor"], {
    modelValue: $setup.blocks,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.blocks = $event;
    })
  }, null, 8 /* PROPS */, ["modelValue"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=template&id=20eae4df&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=template&id=20eae4df&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-20eae4df"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "modal-dialog modal-dialog-centered"
};
var _hoisted_2 = {
  "class": "modal-content"
};
var _hoisted_3 = {
  "class": "modal-header"
};
var _hoisted_4 = {
  key: 0,
  "class": "modal-title"
};
var _hoisted_5 = {
  key: 0,
  "class": "modal-body"
};
var _hoisted_6 = {
  key: 1,
  "class": "modal-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["modal fade", {
      'show': $setup.props.modelValue
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([$setup.props.modelValue ? {
      display: 'block'
    } : {
      display: 'none'
    }, {
      zIndex: 9999
    }, {
      backgroundColor: 'rgb(0 0 0 / 55%)'
    }]),
    tabindex: "-1",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return !$props.dialog && $setup.closeModal;
    }, ["self"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$setup.slots.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$props.dialog ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "button",
    "class": "btn-close",
    onClick: $setup.closeModal
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $setup.slots.body ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "body", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.slots.footer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer", {}, undefined, true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <teleport to=\"html\">\n\t\t\t<div\n\t\t\t\tclass=\"modal-backdrop fade\"\n\t\t\t\t:class=\"{ 'show': props.modelValue }\"\n\t\t\t\t:style=\"[\n\t\t\t\t\t\tprops.modelValue ? { pointerEvents: 'all' } : { pointerEvents: 'none' },\n\t\t\t\t\t\t{ zIndex: 9990 },\n\t\t\t\t\t]\">\n\t\t\t</div>\n\t\t</teleport> ")], 6 /* CLASS, STYLE */);
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

var _hoisted_1 = {
  style: {
    "position": "relative",
    "width": "max-content"
  }
};
var _hoisted_2 = {
  style: {
    "width": "max-content"
  }
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 0,
  style: {
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "top": "0",
    "left": "0",
    "display": "flex",
    "align-items": "center",
    "justify-content": "center"
  }
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  style: {
    "color": "red"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "LOADING")], -1 /* HOISTED */);
var _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", {
    id: "pdf-canvas",
    style: {
      "border": "1px solid black",
      "direction": "ltr"
    },
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"])),
    onContextmenu: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]))
  }, null, 32 /* HYDRATE_EVENTS */), $setup.initialized ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn_primary",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.currentPage--;
    })
  }, "-"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("".concat($setup.currentPage, "/").concat($setup.pagesCount)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn_primary",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.currentPage++;
    })
  }, "+"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn_primary",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.scale -= 0.5;
    })
  }, "scale-"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.scale), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn_primary",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.scale += 0.5;
    })
  }, "scale+")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), !$setup.initialized ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "editor pb-4"
};
var _hoisted_2 = {
  "class": "editor__blocks"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-add-fill"
}, null, -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Добавить блок", -1 /* HOISTED */);
var _hoisted_5 = [_hoisted_3, _hoisted_4];
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "fw-bold mb-2"
}, "Выберите тип блока:", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "d-grid gap-2"
};
var _hoisted_8 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup._blocks, function (block, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["BlockContainer"], {
      key: index,
      block: $setup.loadBlock(block),
      onAddBlock: function onAddBlock($event) {
        return $setup.modalAddBlockShow($event, index);
      },
      onMoveBlock: function onMoveBlock($event) {
        return $setup.moveBlock($event, index);
      },
      onRemoveBlock: function onRemoveBlock($event) {
        return $setup.removeBlock(index);
      }
    }, null, 8 /* PROPS */, ["block", "onAddBlock", "onMoveBlock", "onRemoveBlock"]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary justify-content-center mt-4 content-wrapper",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.modalAddBlockShow('down', $setup._blocks.length - 1);
    })
  }, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ModalBlock"], {
    modelValue: $setup.modalAddBlock.openned,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.modalAddBlock.openned = $event;
    }),
    dialog: ""
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавление блока")];
    }),
    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.configStore.editorBlocks, function (block, blockType) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          key: blockType,
          type: "button",
          "class": "btn btn-primary",
          onClick: function onClick($event) {
            return $setup.addBlock(blockType);
          }
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(block.label), 9 /* TEXT, PROPS */, _hoisted_8);
      }), 128 /* KEYED_FRAGMENT */))])];
    }),

    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-secondary",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.modalAddBlockClose();
        })
      }, " Отмена ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=template&id=5b9b35a5":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=template&id=5b9b35a5 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "editor-block-container"
};
var _hoisted_2 = {
  "class": "editor-block-controls editor-block-controls_left"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-add-fill"
}, null, -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  "class": "editor-block-controls__move"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-arrow-up-fill"
}, null, -1 /* HOISTED */);
var _hoisted_7 = [_hoisted_6];
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-arrow-down-fill"
}, null, -1 /* HOISTED */);
var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-add-fill"
}, null, -1 /* HOISTED */);
var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = {
  "class": "editor-block-controls editor-block-controls_right"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "ri-delete-bin-7-fill"
}, null, -1 /* HOISTED */);
var _hoisted_14 = [_hoisted_13];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" left controls "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary editor-block-controls__add-block",
    title: "Добавить блок выше",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.emit('addBlock', 'up');
    })
  }, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-light editor-block-controls__move-up",
    title: "Переместить блок выше",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.emit('moveBlock', 'up');
    })
  }, _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-light editor-block-controls__move-down",
    title: "Переместить блок ниже",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.emit('moveBlock', 'down');
    })
  }, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary editor-block-controls__add-new-block",
    title: "Добавить блок ниже",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.emit('addBlock', 'down');
    })
  }, _hoisted_11)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" block component "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.block.component), {
    id: $props.block.id,
    data: $props.block.data
  }, null, 8 /* PROPS */, ["id", "data"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" right controls "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger editor-block-controls__remove-block",
    title: "Удалить блок",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.emit('removeBlock');
    })
  }, _hoisted_14)])]);
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
/* harmony import */ var _blocks_EditorBlock_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/EditorBlock.vue */ "./resources/js/site/blocks/EditorBlock.vue");
/* harmony import */ var _components_PDFViewer_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/PDFViewer.vue */ "./resources/js/site/components/PDFViewer.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
// static js







// vue mixins


// vue components







// vue init


var RootComponent = setup();
var pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_14__.createPinia)();
var app = (0,vue__WEBPACK_IMPORTED_MODULE_13__.createApp)(RootComponent);
app.use(pinia).mount('#app');
function setup() {
  return {
    name: 'Site',
    mixins: [_mixins_modals_js__WEBPACK_IMPORTED_MODULE_6__["default"]],
    components: {
      VModal: _components_VModal__WEBPACK_IMPORTED_MODULE_7__["default"],
      VRecall: _components_VRecall__WEBPACK_IMPORTED_MODULE_8__["default"],
      VTabs: _components_tabs_VTabs__WEBPACK_IMPORTED_MODULE_9__["default"],
      VTabsTab: _components_tabs_VTabsTab__WEBPACK_IMPORTED_MODULE_10__["default"],
      EditorBlock: _blocks_EditorBlock_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
      pdfviewer: _components_PDFViewer_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
    },
    mounted: function mounted() {
      // load static js
      // initHeaderJs()
      // initGalleriesJs()
      // initSlidersJs()
      // initValidateTelJs()
      // initRangeJs()
      // initYaMetrikaGoalsJs()
    }
  };
}

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

/***/ "./resources/js/site/stores/config.js":
/*!********************************************!*\
  !*** ./resources/js/site/stores/config.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConfigStore": () => (/* binding */ useConfigStore)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");


// import configApi from '@/apis/config'

var useConfigStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)('config', function () {
  var filesLimits = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
    maxFileSize: null,
    maxFileSizeString: null,
    maxFiles: null
  });
  var editorBlocks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
    images: {
      label: 'Изображения',
      mimeTypes: ['image/jpeg', 'image/png'],
      acceptExts: ['.jpg', '.png']
    },
    text: {
      label: 'Текст'
    },
    files: {
      label: 'Файлы'
    }
  });
  function getConfig() {
    // configApi.get().then(response => {
    // 	filesLimits.value = response.filesLimits
    // 	editorBlocks.value = response.editorBlocks
    // })
  }
  return {
    filesLimits: filesLimits,
    editorBlocks: editorBlocks,
    getConfig: getConfig
  };
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 1200px) {\n.modal-xl[data-v-20eae4df] {\n    --bs-modal-width: 1500px;\n}\n}", ""]);
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

/***/ "./resources/sass/site/style.scss":
/*!****************************************!*\
  !*** ./resources/sass/site/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalBlock_vue_vue_type_style_index_0_id_20eae4df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalBlock_vue_vue_type_style_index_0_id_20eae4df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalBlock_vue_vue_type_style_index_0_id_20eae4df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/site/blocks/EditorBlock.vue":
/*!**************************************************!*\
  !*** ./resources/js/site/blocks/EditorBlock.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditorBlock_vue_vue_type_template_id_25c19a31__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorBlock.vue?vue&type=template&id=25c19a31 */ "./resources/js/site/blocks/EditorBlock.vue?vue&type=template&id=25c19a31");
/* harmony import */ var _EditorBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorBlock.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/blocks/EditorBlock.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_EditorBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditorBlock_vue_vue_type_template_id_25c19a31__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/blocks/EditorBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/blocks/ModalBlock.vue":
/*!*************************************************!*\
  !*** ./resources/js/site/blocks/ModalBlock.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalBlock_vue_vue_type_template_id_20eae4df_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBlock.vue?vue&type=template&id=20eae4df&scoped=true */ "./resources/js/site/blocks/ModalBlock.vue?vue&type=template&id=20eae4df&scoped=true");
/* harmony import */ var _ModalBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalBlock.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/blocks/ModalBlock.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _ModalBlock_vue_vue_type_style_index_0_id_20eae4df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true */ "./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ModalBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModalBlock_vue_vue_type_template_id_20eae4df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-20eae4df"],['__file',"resources/js/site/blocks/ModalBlock.vue"]])
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
/* harmony import */ var _Editor_vue_vue_type_template_id_82ff2b20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=82ff2b20 */ "./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_82ff2b20__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/editor/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/site/components/editor/common/BlockContainer.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/site/components/editor/common/BlockContainer.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockContainer_vue_vue_type_template_id_5b9b35a5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockContainer.vue?vue&type=template&id=5b9b35a5 */ "./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=template&id=5b9b35a5");
/* harmony import */ var _BlockContainer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockContainer.vue?vue&type=script&setup=true&lang=js */ "./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_laravel_article_editor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BlockContainer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BlockContainer_vue_vue_type_template_id_5b9b35a5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/site/components/editor/common/BlockContainer.vue"]])
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

/***/ "./resources/js/site/blocks/EditorBlock.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/site/blocks/EditorBlock.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditorBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditorBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditorBlock.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/EditorBlock.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/site/blocks/ModalBlock.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/site/blocks/ModalBlock.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalBlock_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalBlock.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlockContainer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlockContainer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BlockContainer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/site/blocks/EditorBlock.vue?vue&type=template&id=25c19a31":
/*!********************************************************************************!*\
  !*** ./resources/js/site/blocks/EditorBlock.vue?vue&type=template&id=25c19a31 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditorBlock_vue_vue_type_template_id_25c19a31__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_EditorBlock_vue_vue_type_template_id_25c19a31__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./EditorBlock.vue?vue&type=template&id=25c19a31 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/EditorBlock.vue?vue&type=template&id=25c19a31");


/***/ }),

/***/ "./resources/js/site/blocks/ModalBlock.vue?vue&type=template&id=20eae4df&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/site/blocks/ModalBlock.vue?vue&type=template&id=20eae4df&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalBlock_vue_vue_type_template_id_20eae4df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalBlock_vue_vue_type_template_id_20eae4df_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalBlock.vue?vue&type=template&id=20eae4df&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=template&id=20eae4df&scoped=true");


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

/***/ "./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20":
/*!**************************************************************************************!*\
  !*** ./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_template_id_82ff2b20__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Editor_vue_vue_type_template_id_82ff2b20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Editor.vue?vue&type=template&id=82ff2b20 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/Editor.vue?vue&type=template&id=82ff2b20");


/***/ }),

/***/ "./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=template&id=5b9b35a5":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=template&id=5b9b35a5 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlockContainer_vue_vue_type_template_id_5b9b35a5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BlockContainer_vue_vue_type_template_id_5b9b35a5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BlockContainer.vue?vue&type=template&id=5b9b35a5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/components/editor/common/BlockContainer.vue?vue&type=template&id=5b9b35a5");


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

/***/ "./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalBlock_vue_vue_type_style_index_0_id_20eae4df_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/site/blocks/ModalBlock.vue?vue&type=style&index=0&id=20eae4df&lang=scss&scoped=true");


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
	"./FilesBlock.vue": [
		"./resources/js/site/components/editor/blocks/FilesBlock.vue",
		"resources_js_site_components_editor_blocks_FilesBlock_vue"
	],
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