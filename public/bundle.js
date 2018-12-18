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
    navContainer.classList.add("nav");
    let navUl = document.createElement("ul");
    navUl.classList.add("navUl");
    let navLiCompanyName = document.createElement("li");
    navLiCompanyName.classList.add("navLi", "navTitle");
    navLiCompanyName.textContent = "Betsy";
    let navLiCategories = document.createElement("li");
    navLiCategories.classList.add("navLi", "navLink");
    navLiCategories.innerHTML = `<a href="#">Categories</a>`;
    let navLiOrders = document.createElement("li");
    navLiOrders.classList.add("navLi", "navLink");
    navLiOrders.innerHTML = `<a href="#">Orders</a>`;
    let navLiLogout = document.createElement("li");
    navLiLogout.classList.add("navLi", "navLink");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBSSxTQUFKOzs7Ozs7Ozs7QUNGQSxNQUFNLEdBQUcsR0FBRztBQUVSLEVBQUEsU0FBUyxHQUFHO0FBQ1I7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsS0FBM0I7QUFFQSxRQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFaO0FBQ0EsSUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixHQUFoQixDQUFvQixPQUFwQjtBQUVBLFFBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLE9BQS9CLEVBQXdDLFVBQXhDO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixHQUErQixPQUEvQjtBQUVBLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0Qiw0QkFBNUI7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMEIsT0FBMUIsRUFBbUMsU0FBbkM7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXlCLHdCQUF6QjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixDQUFzQixHQUF0QixDQUEwQixPQUExQixFQUFtQyxTQUFuQztBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBdUIsd0JBQXZCO0FBRUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixnQkFBekI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLGVBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixXQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsV0FBekI7QUFFQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFDSDs7QUFqQ08sQ0FBWjtlQXFDZSxHOzs7Ozs7QUN0Q2YsTUFBTSxXQUFXLEdBQUcsRUFBcEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5uYXYuY3JlYXRlTmF2KCk7IiwiXG5jb25zdCBuYXYgPSB7XG5cbiAgICBjcmVhdGVOYXYoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIE5hdmlnYXRpb24gQmFyXG4gICAgICAgIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpXG4gICAgICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2XCIpXG5cbiAgICAgICAgbGV0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICAgIG5hdlVsLmNsYXNzTGlzdC5hZGQoXCJuYXZVbFwiKVxuXG4gICAgICAgIGxldCBuYXZMaUNvbXBhbnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpQ29tcGFueU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIsIFwibmF2VGl0bGVcIilcbiAgICAgICAgbmF2TGlDb21wYW55TmFtZS50ZXh0Q29udGVudCA9IFwiQmV0c3lcIlxuXG4gICAgICAgIGxldCBuYXZMaUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlDYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiLCBcIm5hdkxpbmtcIilcbiAgICAgICAgbmF2TGlDYXRlZ29yaWVzLmlubmVySFRNTD0gYDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT5gXG5cbiAgICAgICAgbGV0IG5hdkxpT3JkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpT3JkZXJzLmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiLCBcIm5hdkxpbmtcIilcbiAgICAgICAgbmF2TGlPcmRlcnMuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+T3JkZXJzPC9hPmBcblxuICAgICAgICBsZXQgbmF2TGlMb2dvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlMb2dvdXQuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIsIFwibmF2TGlua1wiKVxuICAgICAgICBuYXZMaUxvZ291dC5pbm5lckhUTUw9YDxhIGhyZWY9XCIjXCI+TG9nb3V0PC9hPmBcblxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlDb21wYW55TmFtZSlcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpQ2F0ZWdvcmllcylcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpT3JkZXJzKVxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlMb2dvdXQpXG5cbiAgICAgICAgbGV0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKVxuICAgICAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdlxuXG5cbiIsImNvbnN0IHByb2R1Y3RMaXN0ID0ge1xuXG59Il19
