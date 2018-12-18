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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const product = {
  productHTML(value) {
    let productHTML = `
        <container class="productContainer">
            <div class="productPhotoDiv">
                <img src="${value.photo}" alt="photo of girl wearing Betsy brand necklace" class="productPhoto">
            </div>
            <div class="productInfo">
                <h3 class="productTitle">${value.title}</h3>
                <p class="productPrice">${value.price}</p>
                <p class="productDescription">${value.description}</p>
                <p class="productQuantity">Quantity: ${value.quantity}</p>
            </div>
        </container>
        <container class="startReview">
            <h3>Reviews</h3>
        </container>
        `;

    _reviewList.default.appendReview();

    let productCard = document.createElement("article");
    productCard.innerHTML = productHTML;
    return productCard;
  }

};
var _default = product;
exports.default = _default;

},{"./reviewList":8}],4:[function(require,module,exports){
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
    _productData.default.getProductData().then(allProducts => {
      let productFragment = document.createDocumentFragment();
      allProducts.forEach(productIteration => {
        let product2 = _product.default.productHTML(productIteration);

        productFragment.appendChild(product2);
      });
      let outputArticle = document.querySelector(".output");
      outputArticle.appendChild(productFragment);
    });
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
const review = {
  reviewHTML(value) {
    console.log("reviewHTML", value);
    let reviewHTML = `
            <container class="reviewContainer">
                <img src="${value.profilePhoto}" alt="user profile photo" class="reviewPhoto">
                <h4>${value.username}</h4><p class="date">${value.date}</p>
                <p class="reviewP">${value.content}</p>
            </container>
            `;
    let reviewCard = document.createElement("article");
    reviewCard.innerHTML = reviewHTML;
    return reviewCard;
  }

};
var _default = review;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewData = {
  getReviewData() {
    return fetch("http://localhost:8088/review").then(response => response.json());
  }

};
var _default = reviewData;
exports.default = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewData = _interopRequireDefault(require("./reviewData"));

var _review = _interopRequireDefault(require("./review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reviewList = {
  appendReview() {
    _reviewData.default.getReviewData().then(allReviews => {
      let reviewFragment = document.createDocumentFragment();
      console.log("allReviews", allReviews);
      allReviews.forEach(reviewIteration => {
        let review2 = _review.default.reviewHTML(reviewIteration);

        reviewFragment.appendChild(review2);
        console.log("reviewI", reviewIteration);
      });
      let outputArticle = document.querySelector(".output");
      outputArticle.appendChild(reviewFragment);
    });
  }

};
var _default = reviewList;
exports.default = _default;

},{"./review":6,"./reviewData":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiLCIuLi9zY3JpcHRzL3Jldmlld0RhdGEuanMiLCIuLi9zY3JpcHRzL3Jldmlld0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBR0EsYUFBSSxTQUFKOztBQUNBLHFCQUFZLGFBQVo7Ozs7Ozs7OztBQ0pBLE1BQU0sR0FBRyxHQUFHO0FBRVIsRUFBQSxTQUFTLEdBQUc7QUFDUjtBQUNBLFFBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0EsSUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixLQUEzQjtBQUVBLFFBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQVo7QUFDQSxJQUFBLEtBQUssQ0FBQyxTQUFOLENBQWdCLEdBQWhCLENBQW9CLE9BQXBCO0FBRUEsUUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUF2QjtBQUNBLElBQUEsZ0JBQWdCLENBQUMsU0FBakIsQ0FBMkIsR0FBM0IsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBeEM7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFdBQWpCLEdBQStCLE9BQS9CO0FBRUEsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixHQUExQixDQUE4QixPQUE5QixFQUF1QyxTQUF2QztBQUNBLElBQUEsZUFBZSxDQUFDLFNBQWhCLEdBQTRC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QyxTQUFYLEdBQXVCLFVBQXZCO0FBQ0EsV0FBTyxVQUFQO0FBQ0g7O0FBYlcsQ0FBZjtlQWdCYyxNOzs7Ozs7Ozs7O0FDaEJmLE1BQU0sVUFBVSxHQUFHO0FBQ2YsRUFBQSxhQUFhLEdBQUc7QUFDWixXQUFPLEtBQUssQ0FBQyw4QkFBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLENBQVA7QUFFSDs7QUFKYyxDQUFuQjtlQU9lLFU7Ozs7Ozs7Ozs7O0FDTm5COztBQUNBOzs7O0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFDZixFQUFBLFlBQVksR0FBRztBQUNYLHdCQUFXLGFBQVgsR0FDQyxJQURELENBQ00sVUFBVSxJQUFJO0FBQ2hCLFVBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUFyQjtBQUNBLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLFVBQTFCO0FBRUEsTUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixlQUFlLElBQUk7QUFDbEMsWUFBSSxPQUFPLEdBQUcsZ0JBQU8sVUFBUCxDQUFrQixlQUFsQixDQUFkOztBQUNBLFFBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsT0FBM0I7QUFDQSxRQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUF1QixlQUF2QjtBQUNILE9BSkQ7QUFNQSxVQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtBQUNBLE1BQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsY0FBMUI7QUFDSCxLQWJEO0FBY0g7O0FBaEJjLENBQW5CO2VBb0JlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5cbm5hdi5jcmVhdGVOYXYoKTtcbnByb2R1Y3RMaXN0LmFwcGVuZFByb2R1Y3QoKTtcblxuIiwiXG5jb25zdCBuYXYgPSB7XG5cbiAgICBjcmVhdGVOYXYoKSB7XG4gICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIE5hdmlnYXRpb24gQmFyXG4gICAgICAgIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpXG4gICAgICAgIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2XCIpXG5cbiAgICAgICAgbGV0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICAgIG5hdlVsLmNsYXNzTGlzdC5hZGQoXCJuYXZVbFwiKVxuXG4gICAgICAgIGxldCBuYXZMaUNvbXBhbnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpQ29tcGFueU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIsIFwibmF2VGl0bGVcIilcbiAgICAgICAgbmF2TGlDb21wYW55TmFtZS50ZXh0Q29udGVudCA9IFwiQmV0c3lcIlxuXG4gICAgICAgIGxldCBuYXZMaUNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlDYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiLCBcIm5hdkxpbmtcIilcbiAgICAgICAgbmF2TGlDYXRlZ29yaWVzLmlubmVySFRNTD0gYDxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT5gXG5cbiAgICAgICAgbGV0IG5hdkxpT3JkZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIG5hdkxpT3JkZXJzLmNsYXNzTGlzdC5hZGQoXCJuYXZMaVwiLCBcIm5hdkxpbmtcIilcbiAgICAgICAgbmF2TGlPcmRlcnMuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCI+T3JkZXJzPC9hPmBcblxuICAgICAgICBsZXQgbmF2TGlMb2dvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbmF2TGlMb2dvdXQuY2xhc3NMaXN0LmFkZChcIm5hdkxpXCIsIFwibmF2TGlua1wiKVxuICAgICAgICBuYXZMaUxvZ291dC5pbm5lckhUTUw9YDxhIGhyZWY9XCIjXCI+TG9nb3V0PC9hPmBcblxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlDb21wYW55TmFtZSlcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpQ2F0ZWdvcmllcylcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpT3JkZXJzKVxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlMb2dvdXQpXG5cbiAgICAgICAgbGV0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKVxuICAgICAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdlxuXG5cbiIsImltcG9ydCByZXZpZXdMaXN0IGZyb20gXCIuL3Jldmlld0xpc3RcIlxuXG5cblxuY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcm9kdWN0SFRNTCh2YWx1ZSkge1xuICAgICAgICBsZXQgcHJvZHVjdEhUTUwgPSBgXG4gICAgICAgIDxjb250YWluZXIgY2xhc3M9XCJwcm9kdWN0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFBob3RvRGl2XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3ZhbHVlLnBob3RvfVwiIGFsdD1cInBob3RvIG9mIGdpcmwgd2VhcmluZyBCZXRzeSBicmFuZCBuZWNrbGFjZVwiIGNsYXNzPVwicHJvZHVjdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0SW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2R1Y3RUaXRsZVwiPiR7dmFsdWUudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RQcmljZVwiPiR7dmFsdWUucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdERlc2NyaXB0aW9uXCI+JHt2YWx1ZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0UXVhbnRpdHlcIj5RdWFudGl0eTogJHt2YWx1ZS5xdWFudGl0eX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jb250YWluZXI+XG4gICAgICAgIDxjb250YWluZXIgY2xhc3M9XCJzdGFydFJldmlld1wiPlxuICAgICAgICAgICAgPGgzPlJldmlld3M8L2gzPlxuICAgICAgICA8L2NvbnRhaW5lcj5cbiAgICAgICAgYFxuICAgICAgICByZXZpZXdMaXN0LmFwcGVuZFJldmlldygpO1xuICAgICAgICBsZXQgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICBwcm9kdWN0Q2FyZC5pbm5lckhUTUwgPSBwcm9kdWN0SFRNTFxuICAgICAgICByZXR1cm4gcHJvZHVjdENhcmQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0XG5cbiIsImNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgIGdldFByb2R1Y3REYXRhKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvcHJvZHVjdFwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0RGF0YSIsImltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCJcblxuY29uc3QgcHJvZHVjdExpc3QgPSB7XG4gICAgYXBwZW5kUHJvZHVjdCgpIHtcbiAgICAgICAgcHJvZHVjdERhdGEuZ2V0UHJvZHVjdERhdGEoKVxuICAgICAgICAudGhlbihhbGxQcm9kdWN0cyA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cbiAgICAgICAgICAgIGFsbFByb2R1Y3RzLmZvckVhY2gocHJvZHVjdEl0ZXJhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3QyID0gcHJvZHVjdC5wcm9kdWN0SFRNTChwcm9kdWN0SXRlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0RnJhZ21lbnQuYXBwZW5kQ2hpbGQocHJvZHVjdDIpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXG4gICAgICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RGcmFnbWVudClcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3QiLCIgICAgIGNvbnN0IHJldmlldyA9IHtcbiAgICAgICAgcmV2aWV3SFRNTCh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXZpZXdIVE1MXCIsdmFsdWUpXG4gICAgICAgICAgICBsZXQgcmV2aWV3SFRNTCA9IGBcbiAgICAgICAgICAgIDxjb250YWluZXIgY2xhc3M9XCJyZXZpZXdDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dmFsdWUucHJvZmlsZVBob3RvfVwiIGFsdD1cInVzZXIgcHJvZmlsZSBwaG90b1wiIGNsYXNzPVwicmV2aWV3UGhvdG9cIj5cbiAgICAgICAgICAgICAgICA8aDQ+JHt2YWx1ZS51c2VybmFtZX08L2g0PjxwIGNsYXNzPVwiZGF0ZVwiPiR7dmFsdWUuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZXZpZXdQXCI+JHt2YWx1ZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvY29udGFpbmVyPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgbGV0IHJldmlld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICAgICAgcmV2aWV3Q2FyZC5pbm5lckhUTUwgPSByZXZpZXdIVE1MXG4gICAgICAgICAgICByZXR1cm4gcmV2aWV3Q2FyZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBkZWZhdWx0IHJldmlldyIsIiAgICBjb25zdCByZXZpZXdEYXRhID0ge1xuICAgICAgICBnZXRSZXZpZXdEYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Jldmlld1wiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgcmV2aWV3RGF0YSIsIlxuaW1wb3J0IHJldmlld0RhdGEgZnJvbSBcIi4vcmV2aWV3RGF0YVwiXG5pbXBvcnQgcmV2aWV3IGZyb20gXCIuL3Jldmlld1wiXG5cbmNvbnN0IHJldmlld0xpc3QgPSB7XG4gICAgYXBwZW5kUmV2aWV3KCkge1xuICAgICAgICByZXZpZXdEYXRhLmdldFJldmlld0RhdGEoKVxuICAgICAgICAudGhlbihhbGxSZXZpZXdzID0+IHtcbiAgICAgICAgICAgIGxldCByZXZpZXdGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbGxSZXZpZXdzXCIsIGFsbFJldmlld3MpXG5cbiAgICAgICAgICAgIGFsbFJldmlld3MuZm9yRWFjaChyZXZpZXdJdGVyYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXZpZXcyID0gcmV2aWV3LnJldmlld0hUTUwocmV2aWV3SXRlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICByZXZpZXdGcmFnbWVudC5hcHBlbmRDaGlsZChyZXZpZXcyKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV2aWV3SVwiLCByZXZpZXdJdGVyYXRpb24pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXG4gICAgICAgICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKHJldmlld0ZyYWdtZW50KVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdMaXN0Il19
