"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function q(selector) {
  return document.querySelector(selector);
}

var Service = function () {
  function Service(id, price, durationExtra, deliveryExtra, deliveryMin, deliveryMax, instagramOptimize, durationMin, durationMax) {
    _classCallCheck(this, Service);

    this.id = document.querySelector(id);
    this.price = price;
    this.durationExtra = durationExtra;
    this.deliveryExtra = deliveryExtra;
    this.deliveryMin = deliveryMin;
    this.deliveryMax = deliveryMax;
    this.instagramOptimize = instagramOptimize;
    this.durationMin = durationMin;
    this.durationMax = durationMax;

    this.total = this.id.querySelector(".service-item__total span");

    this.counter = 0;
  }

  _createClass(Service, [{
    key: "setup",
    value: function setup() {
      var total = this.id.querySelector(".service-item__total span");
      total.innerHTML = this.price;
    }

    // TODO:
    // Borders for right calculations

  }, {
    key: "duration",
    value: function duration() {
      var _this = this;

      var text = this.id.querySelector(".calculator-service-duration .calculator--time");
      text.innerHTML = "" + this.durationMin;

      var minus = this.id.querySelector(".calculator-service-duration .calculator--control__minus");
      var plus = this.id.querySelector(".calculator-service-duration .calculator--control__plus");
      var extraPay = this.id.querySelector(".calculator-service-duration .calculator-extra");

      minus.classList.add("calculator--control__non-active");

      plus.addEventListener("click", function () {
        if (text.innerHTML < _this.durationMax) {
          console.log(_this.counter);
          ++text.innerHTML;
          ++_this.counter;
          extraPay.innerHTML = "+$" + _this.durationExtra * _this.counter;
          _this.total.innerHTML = "" + (+_this.total.innerHTML + _this.durationExtra * _this.counter);
          plus.classList.remove("calculator--control__non-active");
          minus.classList.remove("calculator--control__non-active");
        }if (text.innerHTML == _this.durationMax) {
          plus.classList.add("calculator--control__non-active");
        }
      });
      // FIXME: fix not correctly calculations
      minus.addEventListener("click", function () {
        if (text.innerHTML > _this.durationMin) {
          console.log(_this.counter);
          --text.innerHTML;
          --_this.counter;
          _this.total.innerHTML = "" + (+_this.total.innerHTML - _this.durationExtra * _this.counter);
        }if (text.innerHTML == _this.durationMin) {
          minus.classList.add("calculator--control__non-active");
          extraPay.innerHTML = "";
        }
      });
    }
  }, {
    key: "delivery",
    value: function delivery() {
      var _this2 = this;

      var text = this.id.querySelector(".calculator-service-delivery .calculator--time");
      text.innerHTML = this.deliveryMax + "h";

      var minus = this.id.querySelector(".calculator-service-delivery .calculator--control__minus");
      var plus = this.id.querySelector(".calculator-service-delivery .calculator--control__plus");
      var extraPay = this.id.querySelector(".calculator-service-delivery .calculator-extra");

      minus.addEventListener("click", function () {
        text.innerHTML = _this2.deliveryMin + "h";
        extraPay.innerHTML = "+$" + _this2.deliveryExtra;
        _this2.total.innerHTML = "" + (+_this2.total.innerHTML + _this2.deliveryExtra);
      });

      plus.addEventListener("click", function () {
        text.innerHTML = _this2.deliveryMax + "h";
        extraPay.innerHTML = "";
        _this2.total.innerHTML = "" + (+_this2.total.innerHTML - _this2.deliveryExtra);
      });
    }
  }]);

  return Service;
}();

var service1 = new Service("#service-item-1", 199, 90, 100, 24, 72, false, 3, 5);
service1.setup();
service1.duration();
service1.delivery();

var service2 = new Service("#service-item-2", 299, null, 100, 24, 72, false);
service2.setup();
service2.delivery();
