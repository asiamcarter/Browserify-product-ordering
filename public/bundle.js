(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.createNav();

},{"./nav":2,"./productList":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const nav = {
  createNav() {
    // Create container for Navigation Bar
    let navContainer = document.createElement("nav");
    navContainer.classList.add("navContainer");
    let navUl = document.createElement("ul");
    navUl.classList.add("navUl");
    let navLiCompanyName = document.createElement("li");
    navLiCompanyName.classList.add("navLi");
    navLiCompanyName.textContent = "Betsy";
    let navLiCategories = document.createElement("li");
    navLiCategories.classList.add("navLi");
    navLiCategories.innerHTML = `<a href="#">Categories</a>`;
    let navLiOrders = document.createElement("li");
    navLiOrders.classList.add("navLi");
    navLiOrders.innerHTML = `<a href="#">Orders</a>`;
    let navLiLogout = document.createElement("li");
    navLiLogout.classList.add("navLi");
    navLiLogout.innerHTML = `<a href="#">Logout</a>`;
    navContainer.appendChild(navLiCompanyName);
    navContainer.appendChild(navLiCategories);
    navContainer.appendChild(navLiOrders);
    navContainer.appendChild(navLiLogout);
    let bodyContainer = document.querySelector(".output");
    bodyContainer.appendChild(navContainer);
  }

};
var _default = nav;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

const productList = {};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBSSxTQUFKOzs7Ozs7Ozs7QUNGQSxNQUFNLEdBQUcsR0FBRztBQUVSLEVBQUEsU0FBUyxHQUFHO0FBQ1I7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsY0FBM0I7QUFFQSxRQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFaO0FBQ0EsSUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixHQUFoQixDQUFvQixPQUFwQjtBQUVBLFFBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLE9BQS9CO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixHQUErQixPQUEvQjtBQUVBLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsT0FBOUI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0Qiw0QkFBNUI7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMEIsT0FBMUI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXlCLHdCQUF6QjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixDQUFzQixHQUF0QixDQUEwQixPQUExQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBdUIsd0JBQXZCO0FBRUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixnQkFBekI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLGVBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixXQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsV0FBekI7QUFFQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFDSDs7QUFqQ08sQ0FBWjtlQXFDZSxHOzs7Ozs7QUN0Q2YsTUFBTSxXQUFXLEdBQUcsRUFBcEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5uYXYuY3JlYXRlTmF2KCk7IiwiXG5jb25zdCBuYXYgPSB7XG5cbiAgICBjcmVhdGVOYXYoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIE5hdmlnYXRpb24gQmFyXG4gICAgICAgIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpXG4gICAgICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2Q29udGFpbmVyXCIpXG5cbiAgICAgICAgbGV0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICAgIG5hdlVsLmNsYXNzTGlzdC5hZGQoXCJuYXZVbFwiKVxuXG4gICAgICAgIGxldCBuYXZMaUNvbXBhbnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpQ29tcGFueU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIpXG4gICAgICAgIG5hdkxpQ29tcGFueU5hbWUudGV4dENvbnRlbnQgPSBcIkJldHN5XCJcblxuICAgICAgICBsZXQgbmF2TGlDYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpQ2F0ZWdvcmllcy5jbGFzc0xpc3QuYWRkKFwibmF2TGlcIilcbiAgICAgICAgbmF2TGlDYXRlZ29yaWVzLmlubmVySFRNTD0gYDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT5gXG5cbiAgICAgICAgbGV0IG5hdkxpT3JkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpT3JkZXJzLmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiKVxuICAgICAgICBuYXZMaU9yZGVycy5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiNcIj5PcmRlcnM8L2E+YFxuXG4gICAgICAgIGxldCBuYXZMaUxvZ291dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBuYXZMaUxvZ291dC5jbGFzc0xpc3QuYWRkKFwibmF2TGlcIilcbiAgICAgICAgbmF2TGlMb2dvdXQuaW5uZXJIVE1MPWA8YSBocmVmPVwiI1wiPkxvZ291dDwvYT5gXG5cbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpQ29tcGFueU5hbWUpXG4gICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaUNhdGVnb3JpZXMpXG4gICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaU9yZGVycylcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpTG9nb3V0KVxuXG4gICAgICAgIGxldCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIilcbiAgICAgICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuYXZcblxuXG4iLCJjb25zdCBwcm9kdWN0TGlzdCA9IHtcblxufSJdfQ==
