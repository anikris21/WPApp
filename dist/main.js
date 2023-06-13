/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

module.exports = {
  log: (message) => {
    console.log(message);
  },
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const util = __webpack_require__(/*! ./util */ "./src/util.js");

const cart = [];

function addToCart(item) {
  cart.push(item);
  util.log("added item: " + item);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  util.log("removed: ", idx);
}

addToCart("Waterproof Boots");

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
const util = __webpack_require__(/*! ./util */ "./src/util.js");

function notificationRegister(email) {
  util.log("registering " + email);
  // send registration HTTP request
}

notificationRegister("joe@joe.com");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7QUN0QkEsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2RBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnZlZHJvY2tmaXRuZXNzLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2FydmVkcm9ja2ZpdG5lc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FydmVkcm9ja2ZpdG5lc3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FydmVkcm9ja2ZpdG5lc3MvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBsb2c6IChtZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICB9LFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcblxyXG5jb25zdCBjYXJ0ID0gW107XHJcblxyXG5mdW5jdGlvbiBhZGRUb0NhcnQoaXRlbSkge1xyXG4gIGNhcnQucHVzaChpdGVtKTtcclxuICB1dGlsLmxvZyhcImFkZGVkIGl0ZW06IFwiICsgaXRlbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21DYXJ0KGlkeCkge1xyXG4gIGNhcnQuc3BsaWNlKGlkeCwgMSk7XHJcbiAgdXRpbC5sb2coXCJyZW1vdmVkOiBcIiwgaWR4KTtcclxufVxyXG5cclxuYWRkVG9DYXJ0KFwiV2F0ZXJwcm9vZiBCb290c1wiKTtcclxuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcblxyXG5mdW5jdGlvbiBub3RpZmljYXRpb25SZWdpc3RlcihlbWFpbCkge1xyXG4gIHV0aWwubG9nKFwicmVnaXN0ZXJpbmcgXCIgKyBlbWFpbCk7XHJcbiAgLy8gc2VuZCByZWdpc3RyYXRpb24gSFRUUCByZXF1ZXN0XHJcbn1cclxuXHJcbm5vdGlmaWNhdGlvblJlZ2lzdGVyKFwiam9lQGpvZS5jb21cIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==