(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/y.metrika-init"],{

/***/ "./resources/js/site/services/y.metrika/y.metrika-init.js":
/*!****************************************************************!*\
  !*** ./resources/js/site/services/y.metrika/y.metrika-init.js ***!
  \****************************************************************/
/***/ (() => {

var _scriptTag$dataset;
var scriptTag = document.getElementById('ya-metrika-init');
var counterId = Number((scriptTag === null || scriptTag === void 0 ? void 0 : (_scriptTag$dataset = scriptTag.dataset) === null || _scriptTag$dataset === void 0 ? void 0 : _scriptTag$dataset.counterId) || null);
if (counterId) {
  /* eslint-disable */
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  var id = window.yaid = counterId;
  window.ym(id, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });
  /* eslint-enable */
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/js/site/services/y.metrika/y.metrika-init.js"));
/******/ }
]);