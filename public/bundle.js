(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.createNav();

_productList.default.appendProduct();

},{"./nav":2,"./productList":5}],2:[function(require,module,exports){
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

var _reviewList = _interopRequireDefault(require("./reviewList"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const product = {
  productHTML(value) {
    let productHTML = `
        <container class="productContainer">
            <div class="productPhotoDiv">
                <img src="${value.photo}" alt="photo of girl wearing Betsy brand necklace">
            </div>
            <div class="productInfo">
                <h3 class="productTitle">${value.title}</h3>
                <p class="productPrice">Price:${value.price}</p>
                <p class="productDescription">${value.description}</p>
                <p class="productQuantity">Quantity:${value.quantity}</p>
            </div>
        </container>
        `;
    let productCard = document.createElement("article");
    productCard.innerHTML = productHTML;
    return productCard;
  }

};
var _default = product;
exports.default = _default;

},{"./productList":5,"./reviewList":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const productData = {
  getProductData() {
    return fetch("http://localhost:8088/product").then(response => response.json());
  }

};
var _default = productData;
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productData = _interopRequireDefault(require("./productData"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productList = {
  appendProduct() {
    _productData.default.getProductData().then(allProducts => {});
  }

};
var _default = productList;
exports.default = _default;

},{"./product":3,"./productData":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewData = {
  reviewHTML() {
    let reviewHTML = `
            <container class="reviewContainer">
                <h3>Reviews</h3>
                <div class="profile1">
                    <img src="profileImage1.jpg" alt="user profile photo" class="profile1">
                </div>
                <div class="review1">
                    <p> This product was the booooooooooooooooooooooooooomb.com seriously da best</p>
                </div>
            </container>
            `;
    let reviewCard = document.createElement("article");
    reviewCard.innerHTML = reviewHTML;
    return reviewCard;
  }

};
var _default = reviewData;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewData = _interopRequireDefault(require("./reviewData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reviewList = {
  appendReview() {
    let reviewDOM = _reviewData.default.reviewHTML();

    let bodyContainer = document.querySelector(".output");
    bodyContainer.appendChild(reviewDOM);
  }

};
var _default = reviewList;
exports.default = _default;

},{"./reviewData":6}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXdEYXRhLmpzIiwiLi4vc2NyaXB0cy9yZXZpZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUdBLGFBQUksU0FBSjs7QUFDQSxxQkFBWSxhQUFaOzs7Ozs7Ozs7QUNKQSxNQUFNLEdBQUcsR0FBRztBQUVSLEVBQUEsU0FBUyxHQUFHO0FBQ1I7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsS0FBM0I7QUFFQSxRQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFaO0FBQ0EsSUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixHQUFoQixDQUFvQixPQUFwQjtBQUVBLFFBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLE9BQS9CLEVBQXdDLFVBQXhDO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixHQUErQixPQUEvQjtBQUVBLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixHQUE0Qiw0QkFBNUI7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMEIsT0FBMUIsRUFBbUMsU0FBbkM7QUFDQSxJQUFBLFdBQVcsQ0FBQyxTQUFaLEdBQXlCLHdCQUF6QjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixDQUFzQixHQUF0QixDQUEwQixPQUExQixFQUFtQyxTQUFuQztBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBdUIsd0JBQXZCO0FBRUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixnQkFBekI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLGVBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixXQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsV0FBekI7QUFFQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsWUFBMUI7QUFDSDs7QUFqQ08sQ0FBWjtlQXFDZSxHOzs7Ozs7Ozs7OztBQ3RDZjs7QUFDQTs7OztBQUVBLE1BQU0sT0FBTyxHQUFHO0FBQ1osRUFBQSxXQUFXLENBQUMsS0FBRCxFQUFRO0FBQ2YsUUFBSSxXQUFXLEdBQUk7Ozs0QkFHQyxLQUFLLENBQUMsS0FBTTs7OzJDQUdHLEtBQUssQ0FBQyxLQUFNO2dEQUNQLEtBQUssQ0FBQyxLQUFNO2dEQUNaLEtBQUssQ0FBQyxXQUFZO3NEQUNaLEtBQUssQ0FBQyxRQUFTOzs7U0FUN0Q7QUFhQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBd0IsV0FBeEI7QUFDQSxXQUFPLFdBQVA7QUFDSDs7QUFsQlcsQ0FBaEI7ZUFxQmUsTzs7Ozs7Ozs7OztBQ3hCZixNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLGNBQWMsR0FBRztBQUNiLFdBQU8sS0FBSyxDQUFDLCtCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVIOztBQUplLENBQXBCO2VBT2UsVzs7Ozs7Ozs7Ozs7QUNQZjs7QUFDQTs7OztBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsYUFBYSxHQUFHO0FBQ1oseUJBQVksY0FBWixHQUNDLElBREQsQ0FDTSxXQUFXLElBQUksQ0FFcEIsQ0FIRDtBQUlIOztBQU5lLENBQXBCO2VBVWUsVzs7Ozs7Ozs7OztBQ2JWLE1BQU0sVUFBVSxHQUFHO0FBQ2hCLEVBQUEsVUFBVSxHQUFHO0FBQ1QsUUFBSSxVQUFVLEdBQUk7Ozs7Ozs7Ozs7YUFBbEI7QUFXQSxRQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLElBQUEsVUFBVSxDQUFDLFNBQVgsR0FBdUIsVUFBdkI7QUFDQSxXQUFPLFVBQVA7QUFDSDs7QUFoQmUsQ0FBbkI7ZUFtQmMsVTs7Ozs7Ozs7Ozs7QUNuQm5COzs7O0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFFWCxFQUFBLFlBQVksR0FBRztBQUNYLFFBQUksU0FBUyxHQUFHLG9CQUFXLFVBQVgsRUFBaEI7O0FBQ0EsUUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBcEI7QUFDQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLFNBQTFCO0FBQ0g7O0FBTlUsQ0FBbkI7ZUFVbUIsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCJcbmltcG9ydCBwcm9kdWN0TGlzdCBmcm9tIFwiLi9wcm9kdWN0TGlzdFwiXG5cblxubmF2LmNyZWF0ZU5hdigpO1xucHJvZHVjdExpc3QuYXBwZW5kUHJvZHVjdCgpO1xuXG4iLCJcbmNvbnN0IG5hdiA9IHtcblxuICAgIGNyZWF0ZU5hdigpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgTmF2aWdhdGlvbiBCYXJcbiAgICAgICAgbGV0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIilcbiAgICAgICAgbmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXZcIilcblxuICAgICAgICBsZXQgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgbmF2VWwuY2xhc3NMaXN0LmFkZChcIm5hdlVsXCIpXG5cbiAgICAgICAgbGV0IG5hdkxpQ29tcGFueU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlDb21wYW55TmFtZS5jbGFzc0xpc3QuYWRkKFwibmF2TGlcIiwgXCJuYXZUaXRsZVwiKVxuICAgICAgICBuYXZMaUNvbXBhbnlOYW1lLnRleHRDb250ZW50ID0gXCJCZXRzeVwiXG5cbiAgICAgICAgbGV0IG5hdkxpQ2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBuYXZMaUNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIsIFwibmF2TGlua1wiKVxuICAgICAgICBuYXZMaUNhdGVnb3JpZXMuaW5uZXJIVE1MPSBgPGEgaHJlZj1cIiNcIj5DYXRlZ29yaWVzPC9hPmBcblxuICAgICAgICBsZXQgbmF2TGlPcmRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlPcmRlcnMuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIsIFwibmF2TGlua1wiKVxuICAgICAgICBuYXZMaU9yZGVycy5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiNcIj5PcmRlcnM8L2E+YFxuXG4gICAgICAgIGxldCBuYXZMaUxvZ291dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICBuYXZMaUxvZ291dC5jbGFzc0xpc3QuYWRkKFwibmF2TGlcIiwgXCJuYXZMaW5rXCIpXG4gICAgICAgIG5hdkxpTG9nb3V0LmlubmVySFRNTD1gPGEgaHJlZj1cIiNcIj5Mb2dvdXQ8L2E+YFxuXG4gICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaUNvbXBhbnlOYW1lKVxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlDYXRlZ29yaWVzKVxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlPcmRlcnMpXG4gICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaUxvZ291dClcblxuICAgICAgICBsZXQgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXG4gICAgICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2Q29udGFpbmVyKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmF2XG5cblxuIiwiaW1wb3J0IHJldmlld0xpc3QgZnJvbSBcIi4vcmV2aWV3TGlzdFwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5jb25zdCBwcm9kdWN0ID0ge1xuICAgIHByb2R1Y3RIVE1MKHZhbHVlKSB7XG4gICAgICAgIGxldCBwcm9kdWN0SFRNTCA9IGBcbiAgICAgICAgPGNvbnRhaW5lciBjbGFzcz1cInByb2R1Y3RDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0UGhvdG9EaXZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dmFsdWUucGhvdG99XCIgYWx0PVwicGhvdG8gb2YgZ2lybCB3ZWFyaW5nIEJldHN5IGJyYW5kIG5lY2tsYWNlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0SW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2R1Y3RUaXRsZVwiPiR7dmFsdWUudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RQcmljZVwiPlByaWNlOiR7dmFsdWUucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdERlc2NyaXB0aW9uXCI+JHt2YWx1ZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0UXVhbnRpdHlcIj5RdWFudGl0eToke3ZhbHVlLnF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NvbnRhaW5lcj5cbiAgICAgICAgYFxuICAgICAgICBsZXQgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICBwcm9kdWN0Q2FyZC5pbm5lckhUTUwgPSBwcm9kdWN0SFRNTFxuICAgICAgICByZXR1cm4gcHJvZHVjdENhcmQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0XG5cbiIsImNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgIGdldFByb2R1Y3REYXRhKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvcHJvZHVjdFwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0RGF0YSIsImltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCJcblxuY29uc3QgcHJvZHVjdExpc3QgPSB7XG4gICAgYXBwZW5kUHJvZHVjdCgpIHtcbiAgICAgICAgcHJvZHVjdERhdGEuZ2V0UHJvZHVjdERhdGEoKVxuICAgICAgICAudGhlbihhbGxQcm9kdWN0cyA9PiB7XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3QiLCIgICAgIGNvbnN0IHJldmlld0RhdGEgPSB7XG4gICAgICAgIHJldmlld0hUTUwoKSB7XG4gICAgICAgICAgICBsZXQgcmV2aWV3SFRNTCA9IGBcbiAgICAgICAgICAgIDxjb250YWluZXIgY2xhc3M9XCJyZXZpZXdDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+UmV2aWV3czwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwicHJvZmlsZUltYWdlMS5qcGdcIiBhbHQ9XCJ1c2VyIHByb2ZpbGUgcGhvdG9cIiBjbGFzcz1cInByb2ZpbGUxXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJldmlldzFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+IFRoaXMgcHJvZHVjdCB3YXMgdGhlIGJvb29vb29vb29vb29vb29vb29vb29vb29vb29tYi5jb20gc2VyaW91c2x5IGRhIGJlc3Q8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2NvbnRhaW5lcj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGxldCByZXZpZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgICAgIHJldmlld0NhcmQuaW5uZXJIVE1MID0gcmV2aWV3SFRNTFxuICAgICAgICAgICAgcmV0dXJuIHJldmlld0NhcmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCByZXZpZXdEYXRhXG4iLCJpbXBvcnQgcmV2aWV3RGF0YSBmcm9tIFwiLi9yZXZpZXdEYXRhXCJcblxuY29uc3QgcmV2aWV3TGlzdCA9IHtcblxuICAgICAgICBhcHBlbmRSZXZpZXcoKSB7XG4gICAgICAgICAgICBsZXQgcmV2aWV3RE9NID0gcmV2aWV3RGF0YS5yZXZpZXdIVE1MKCk7XG4gICAgICAgICAgICBsZXQgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXG4gICAgICAgICAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0RPTSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgcmV2aWV3TGlzdFxuIl19
