(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.createNav();

_productList.default.appendContact();

},{"./nav":2,"./productList":4}],2:[function(require,module,exports){
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const productData = {
  productHTML() {
    let productHTML = `
        <container class="productContainer">
            <div class="productPhotoDiv">
                <img src="productPhoto.jpg" alt="photo of girl wearing Betsy brand necklace">
            </div>
            <div class="productInfo">
                <h3 class="productTitle">Title</h3>
                <p class="productPrice">Price:</p>
                <p class="productDescription">blah blah blah blah blah blah blah</p>
                <p class="productQuantity">Quantity:</p>
            </div>
        </container>
        `;
    let productCard = document.createElement("article");
    productCard.innerHTML = productHTML;
    return productCard;
  }

};
var _default = productData;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productData = _interopRequireDefault(require("./productData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productList = {
  appendContact() {
    let contactDOM = _productData.default.productHTML();

    let bodyContainer = document.querySelector(".output");
    bodyContainer.appendChild(contactDOM);
  }

};
var _default = productList;
exports.default = _default;

},{"./productData":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUdBLGFBQUksU0FBSjs7QUFDQSxxQkFBWSxhQUFaOzs7Ozs7Ozs7QUNKQSxNQUFNLEdBQUcsR0FBRztBQUVSLEVBQUEsU0FBUyxHQUFHO0FBQ1I7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsS0FBM0I7QUFFQSxRQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFaO0FBQ0EsSUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixHQUFoQixDQUFvQixPQUFwQjtBQUVBLFFBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLE9BQS9CLEVBQXdDLFVBQXhDO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixHQUErQixPQUEvQjtBQUVBLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0Qiw0QkFBNUI7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMEIsT0FBMUIsRUFBbUMsU0FBbkM7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXlCLHdCQUF6QjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixDQUFzQixHQUF0QixDQUEwQixPQUExQixFQUFtQyxTQUFuQztBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBdUIsd0JBQXZCO0FBRUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixnQkFBekI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLGVBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixXQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsV0FBekI7QUFFQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFDSDs7QUFqQ08sQ0FBWjtlQXFDZSxHOzs7Ozs7Ozs7O0FDdENmLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsV0FBVyxHQUFHO0FBQ1YsUUFBSSxXQUFXLEdBQUk7Ozs7Ozs7Ozs7OztTQUFuQjtBQWFBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixXQUF4QjtBQUNBLFdBQU8sV0FBUDtBQUNIOztBQWxCZSxDQUFwQjtlQXFCZSxXOzs7Ozs7Ozs7OztBQ3JCZjs7OztBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsYUFBYSxHQUFHO0FBQ1osUUFBSSxVQUFVLEdBQUcscUJBQVksV0FBWixFQUFqQjs7QUFDQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsVUFBMUI7QUFDSDs7QUFMZSxDQUFwQjtlQVNlLFciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5cbm5hdi5jcmVhdGVOYXYoKTtcbnByb2R1Y3RMaXN0LmFwcGVuZENvbnRhY3QoKTtcblxuIiwiXG5jb25zdCBuYXYgPSB7XG5cbiAgICBjcmVhdGVOYXYoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIE5hdmlnYXRpb24gQmFyXG4gICAgICAgIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpXG4gICAgICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2XCIpXG5cbiAgICAgICAgbGV0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICAgIG5hdlVsLmNsYXNzTGlzdC5hZGQoXCJuYXZVbFwiKVxuXG4gICAgICAgIGxldCBuYXZMaUNvbXBhbnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpQ29tcGFueU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIsIFwibmF2VGl0bGVcIilcbiAgICAgICAgbmF2TGlDb21wYW55TmFtZS50ZXh0Q29udGVudCA9IFwiQmV0c3lcIlxuXG4gICAgICAgIGxldCBuYXZMaUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlDYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiLCBcIm5hdkxpbmtcIilcbiAgICAgICAgbmF2TGlDYXRlZ29yaWVzLmlubmVySFRNTD0gYDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT5gXG5cbiAgICAgICAgbGV0IG5hdkxpT3JkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpT3JkZXJzLmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiLCBcIm5hdkxpbmtcIilcbiAgICAgICAgbmF2TGlPcmRlcnMuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+T3JkZXJzPC9hPmBcblxuICAgICAgICBsZXQgbmF2TGlMb2dvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlMb2dvdXQuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIsIFwibmF2TGlua1wiKVxuICAgICAgICBuYXZMaUxvZ291dC5pbm5lckhUTUw9YDxhIGhyZWY9XCIjXCI+TG9nb3V0PC9hPmBcblxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlDb21wYW55TmFtZSlcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpQ2F0ZWdvcmllcylcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpT3JkZXJzKVxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlMb2dvdXQpXG5cbiAgICAgICAgbGV0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKVxuICAgICAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdlxuXG5cbiIsImNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgIHByb2R1Y3RIVE1MKCkge1xuICAgICAgICBsZXQgcHJvZHVjdEhUTUwgPSBgXG4gICAgICAgIDxjb250YWluZXIgY2xhc3M9XCJwcm9kdWN0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFBob3RvRGl2XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJwcm9kdWN0UGhvdG8uanBnXCIgYWx0PVwicGhvdG8gb2YgZ2lybCB3ZWFyaW5nIEJldHN5IGJyYW5kIG5lY2tsYWNlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0SW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2R1Y3RUaXRsZVwiPlRpdGxlPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RQcmljZVwiPlByaWNlOjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3REZXNjcmlwdGlvblwiPmJsYWggYmxhaCBibGFoIGJsYWggYmxhaCBibGFoIGJsYWg8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0UXVhbnRpdHlcIj5RdWFudGl0eTo8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jb250YWluZXI+XG4gICAgICAgIGBcbiAgICAgICAgbGV0IHByb2R1Y3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgcHJvZHVjdENhcmQuaW5uZXJIVE1MID0gcHJvZHVjdEhUTUxcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RDYXJkO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdERhdGEiLCJpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4vcHJvZHVjdERhdGFcIlxuXG5jb25zdCBwcm9kdWN0TGlzdCA9IHtcbiAgICBhcHBlbmRDb250YWN0KCkge1xuICAgICAgICBsZXQgY29udGFjdERPTSA9IHByb2R1Y3REYXRhLnByb2R1Y3RIVE1MKCk7XG4gICAgICAgIGxldCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIilcbiAgICAgICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RE9NKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdCJdfQ==
