(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.createNav();

},{"./nav":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxhQUFJLFNBQUo7Ozs7Ozs7OztBQ0RBLE1BQU0sR0FBRyxHQUFHO0FBRVIsRUFBQSxTQUFTLEdBQUc7QUFDUjtBQUNBLFFBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0EsSUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixjQUEzQjtBQUVBLFFBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQVo7QUFDQSxJQUFBLEtBQUssQ0FBQyxTQUFOLENBQWdCLEdBQWhCLENBQW9CLE9BQXBCO0FBRUEsUUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF2QjtBQUNBLElBQUEsZ0JBQWdCLENBQUMsU0FBakIsQ0FBMkIsR0FBM0IsQ0FBK0IsT0FBL0I7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFdBQWpCLEdBQStCLE9BQS9CO0FBRUEsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixHQUExQixDQUE4QixPQUE5QjtBQUNBLElBQUEsZUFBZSxDQUFDLFNBQWhCLEdBQTRCLDRCQUE1QjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixDQUFzQixHQUF0QixDQUEwQixPQUExQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBeUIsd0JBQXpCO0FBRUEsUUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLENBQXNCLEdBQXRCLENBQTBCLE9BQTFCO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF1Qix3QkFBdkI7QUFFQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLGdCQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsZUFBekI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFdBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixXQUF6QjtBQUVBLFFBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsSUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixZQUExQjtBQUNIOztBQWpDTyxDQUFaO2VBcUNlLEciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5cbm5hdi5jcmVhdGVOYXYoKTsiLCJcbmNvbnN0IG5hdiA9IHtcblxuICAgIGNyZWF0ZU5hdigpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgTmF2aWdhdGlvbiBCYXJcbiAgICAgICAgbGV0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIilcbiAgICAgICAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXZDb250YWluZXJcIilcblxuICAgICAgICBsZXQgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgbmF2VWwuY2xhc3NMaXN0LmFkZChcIm5hdlVsXCIpXG5cbiAgICAgICAgbGV0IG5hdkxpQ29tcGFueU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlDb21wYW55TmFtZS5jbGFzc0xpc3QuYWRkKFwibmF2TGlcIilcbiAgICAgICAgbmF2TGlDb21wYW55TmFtZS50ZXh0Q29udGVudCA9IFwiQmV0c3lcIlxuXG4gICAgICAgIGxldCBuYXZMaUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlDYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiKVxuICAgICAgICBuYXZMaUNhdGVnb3JpZXMuaW5uZXJIVE1MPSBgPGEgaHJlZj1cIiNcIj5DYXRlZ29yaWVzPC9hPmBcblxuICAgICAgICBsZXQgbmF2TGlPcmRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlPcmRlcnMuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIpXG4gICAgICAgIG5hdkxpT3JkZXJzLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiPk9yZGVyczwvYT5gXG5cbiAgICAgICAgbGV0IG5hdkxpTG9nb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpTG9nb3V0LmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiKVxuICAgICAgICBuYXZMaUxvZ291dC5pbm5lckhUTUw9YDxhIGhyZWY9XCIjXCI+TG9nb3V0PC9hPmBcblxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlDb21wYW55TmFtZSlcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpQ2F0ZWdvcmllcylcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpT3JkZXJzKVxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlMb2dvdXQpXG5cbiAgICAgICAgbGV0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKVxuICAgICAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdlxuXG5cbiJdfQ==
