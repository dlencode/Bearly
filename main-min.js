"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function q(selector) {
  return document.querySelector(selector);
}

function delay(f, ms) {
  return function () {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function () {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}

var Service = function () {
  function Service(id, price, durationExtra, durationMin, durationMax, deliveryExtra, deliveryMin, deliveryMax, instagramOptimize, instagramOptimizeExtra) {
    _classCallCheck(this, Service);

    this.id = document.querySelector(id);
    this.price = price;
    this.durationExtra = durationExtra;
    this.deliveryExtra = deliveryExtra;
    this.deliveryMin = deliveryMin;
    this.deliveryMax = deliveryMax;
    this.instagramOptimize = instagramOptimize;
    this.instagramOptimizeExtra = instagramOptimizeExtra;
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
  }, {
    key: "duration",
    value: function duration() {
      var _this = this;

      var text = this.id.querySelector(".calculator-service-duration .calculator--time");
      text.innerHTML = "" + this.durationMin;

      var minus = this.id.querySelector(".calculator-service-duration .calculator--control__minus");
      var plus = this.id.querySelector(".calculator-service-duration .calculator--control__plus");
      var extraPay = this.id.querySelector(".calculator-service-duration .calculator-extra");

      var shooting = this.id.querySelector(".calculator-shooting span");

      minus.classList.add("calculator--control__non-active");

      var book = this.id.querySelector(".booking");

      plus.addEventListener("click", function () {
        if (text.innerHTML < _this.durationMax) {
          ++_this.counter;
          ++text.innerHTML;
          shooting.innerHTML = ++shooting.innerHTML;
          extraPay.innerHTML = "+$" + _this.durationExtra * _this.counter;
          _this.total.innerHTML = "" + (+_this.total.innerHTML + _this.durationExtra);
          plus.classList.remove("calculator--control__non-active");
          minus.classList.remove("calculator--control__non-active");
        }if (text.innerHTML == _this.durationMax) {
          plus.classList.add("calculator--control__non-active");
        }
      });
      minus.addEventListener("click", function () {
        if (text.innerHTML > _this.durationMin) {
          --text.innerHTML;
          --_this.counter;
          shooting.innerHTML = --shooting.innerHTML;
          extraPay.innerHTML = "+$" + _this.durationExtra * _this.counter;
          _this.total.innerHTML = "" + (+_this.total.innerHTML - _this.durationExtra);
          plus.classList.remove("calculator--control__non-active");
          minus.classList.remove("calculator--control__non-active");
        }
        if (text.innerHTML == _this.durationMin) {
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
      text.innerHTML = "" + this.deliveryMax;

      var minus = this.id.querySelector(".calculator-service-delivery .calculator--control__minus");
      var plus = this.id.querySelector(".calculator-service-delivery .calculator--control__plus");
      var extraPay = this.id.querySelector(".calculator-service-delivery .calculator-extra");

      plus.classList.add("calculator--control__non-active");

      minus.addEventListener("click", function () {
        if (text.innerHTML > _this2.deliveryMin) {
          text.innerHTML = "" + _this2.deliveryMin;
          extraPay.innerHTML = "+$" + _this2.deliveryExtra;
          _this2.total.innerHTML = "" + (+_this2.total.innerHTML + _this2.deliveryExtra);
          plus.classList.remove("calculator--control__non-active");
          minus.classList.remove("calculator--control__non-active");
        }if (text.innerHTML == _this2.deliveryMin) {
          minus.classList.add("calculator--control__non-active");
        }
      });

      plus.addEventListener("click", function () {
        if (text.innerHTML < _this2.deliveryMax) {
          text.innerHTML = "" + _this2.deliveryMax;
          extraPay.innerHTML = "";
          _this2.total.innerHTML = "" + (+_this2.total.innerHTML - _this2.deliveryExtra);
          plus.classList.remove("calculator--control__non-active");
          minus.classList.remove("calculator--control__non-active");
        }if (text.innerHTML == _this2.deliveryMax) {
          plus.classList.add("calculator--control__non-active");
        }
      });
    }
  }, {
    key: "instagram",
    value: function instagram() {
      var status = this.instagramOptimize;
      var toggle = this.id.querySelector(".instagram-toggle");
      var toggler = toggle.querySelector(".instagram-toggle--status");

      var extraPay = this.id.querySelector(".instagram-toggle--extra");

      toggle.addEventListener("click", function () {
        if (!status) {
          toggle.parentNode.classList.add("toggle-active");
          status = !status;
          // this.total.innerHTML = `${+this.total.innerHTML + this.instagramOptimizeExtra}`;
          // extraPay.innerHTML = `+$${this.instagramOptimizeExtra}`;
        } else {
          toggle.parentNode.classList.remove("toggle-active");
          status = !status;
          // this.total.innerHTML = `${+this.total.innerHTML - this.instagramOptimizeExtra}`;
        }
      });
    }
  }, {
    key: "book",
    value: function book() {
      // let selectedService = this.id;
      // let booking = selectedService.querySelector(`.booking`);
      // let wrapper = document.querySelector(`.selected-plan .place-for-plan`);

      // let clone = selectedService.cloneNode(true);

      // booking.addEventListener(`click`, () => {
      //   let services = document.querySelectorAll(`.service-item`);
      //   for (let i = 0; i < services.length; i++) {
      //     const service = services[i];
      //     service.classList.add(`service-item__fadeOut`);
      //   }

      //   setTimeout(function () {
      //     wrapper.appendChild(clone);
      //     clone.classList.add(`service-item__fadeIn`);
      //   }, 2000);      
      // });
    }
  }]);

  return Service;
}();

var service1 = new Service("#service-item-1", 199, 90, 3, 5, 100, 24, 72, false, null);
service1.setup();
service1.duration();
service1.delivery();
service1.book();

var service2 = new Service("#service-item-2", 299, null, null, null, 100, 24, 72, false, 100);
service2.setup();
service2.delivery();
service2.book();
service2.instagram();

var service3 = new Service("#service-item-3", 119, null, null, null, 100, 24, 72, false, 100);
service3.setup();
service3.delivery();
service3.book();
service3.instagram();
