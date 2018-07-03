'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Calculator for plans
// Author: Danila Ermolneko
// Telegram: @dlencode

function qs(selector) {
    return document.querySelector('' + selector);
}

function qsa(selector) {
    return document.querySelectorAll('' + selector);
}

// class Service {
//     constructor(element, price, extra, min, max, delivery, instagram) {
//         this.element = qs(`${element}`);
//         this.price = price;
//         this.extra = extra;
//         this.min = min;
//         this.max = max;
//         this.delivery = delivery;
//         this.instagram = instagram;
//         this.counterPrice = 0;
//     }

//     duration() {
//         let extra = qs(`.calculator-extra`);
//         let time = qs(`.calculator--time`);
//         time.innerHTML = this.min;

//         let total = qs(`.service-item__total span`);
//         total.innerHTML = this.price;

//         let minus = qs(`.calculator--control__minus`);
//         let plus = qs(`.calculator--control__plus`);

//         minus.classList.add(`calculator--control__non-active`);

//         minus.addEventListener('click', (event) => {
//             if (time.innerHTML > this.min) {
//                 --time.innerHTML;
//                 --this.counterPrice;
//                 extra.innerHTML = `+$${this.extra * this.counterPrice}`;
//                 total.innerHTML = `${this.price + (this.extra * this.counterPrice)}`;
//                 plus.classList.remove(`calculator--control__non-active`);
//                 minus.classList.remove(`calculator--control__non-active`);
//             }
//             if (time.innerHTML == this.min) {
//                 minus.classList.add(`calculator--control__non-active`);
//                 extra.innerHTML = ``;
//             }
//         });
//         plus.addEventListener('click', (event) => {
//             if (time.innerHTML < this.max) {
//                 ++time.innerHTML;
//                 ++this.counterPrice;
//                 extra.innerHTML = `+$${this.extra * this.counterPrice}`;
//                 total.innerHTML = `${this.price + (this.extra * this.counterPrice)}`;
//                 plus.classList.remove(`calculator--control__non-active`);
//                 minus.classList.remove(`calculator--control__non-active`);
//             }
//             if (time.innerHTML == this.max) {
//                 plus.classList.add(`calculator--control__non-active`);
//             }
//         });
//     }

//     delivery() {
//         let extra = qsa(`.calculator-extra`);
//         for (let i = 0; i < extra.length; i++) {
//             const test = extra[i];
//             console.log(test);

//         }
//     }

//     watchBook() {
//         let book = qs(`.booking`);
//         let total = qs(`.service-item__total span`);

//         book.addEventListener('click', () => {
//             let output = total.innerHTML;
//         });
//     }
// }

var Service = function () {
    function Service(element, price, extra, min, max, delivery, instagram) {
        _classCallCheck(this, Service);

        this.element = qs('' + element);
        this.price = price;
        this.extra = extra;
        this.min = min;
        this.max = max;
        this.delivery = delivery;
        this.instagram = instagram;
        this.counterPrice = 0;
    }

    _createClass(Service, [{
        key: 'deliveryDuration',
        value: function deliveryDuration(min, max) {
            var _this = this;

            var deliveryValues = qsa('.calculator--time');
            for (var i = 0; i < deliveryValues.length; i++) {
                var deliveryItem = deliveryValues[i];
                deliveryItem.innerHTML = min + 'h';
            }
            var minus = qs('.calculator--control__minus');
            var pluses = qsa('.calculator--control__plus');

            var _loop = function _loop(_i) {
                var plusItem = pluses[_i];
                var time = plusItem.parentNode.querySelector('.calculator--time').innerHTML;

                plusItem.addEventListener('click', function (event) {
                    console.log(min, max);
                    if (time.innerHTML < _this.max) {
                        time.innerHTML = max;
                        ++_this.counterPrice;
                        extra.innerHTML = '+$' + _this.extra * _this.counterPrice;
                        total.innerHTML = '' + (_this.price + _this.extra * _this.counterPrice);
                        plus.classList.remove('calculator--control__non-active');
                        minus.classList.remove('calculator--control__non-active');
                    }
                    if (time.innerHTML == _this.max) {
                        plus.classList.add('calculator--control__non-active');
                    }
                });
            };

            for (var _i = 0; _i < pluses.length; _i++) {
                _loop(_i);
            }
        }
    }]);

    return Service;
}();

var serviceItem1 = new Service('.service-item-1', 199, 90, 3, 5, 24, false);
serviceItem1.deliveryDuration(24, 72);
var serviceItem2 = new Service('.service-item-2', 199, 90, 3, 5, 24, false);
serviceItem2.deliveryDuration(24, 36);
// serviceItem1.duration();
// serviceItem1.watchBook();

// let serviceItem2 = new Service(`.service-item-1`, 199, 90, 3, 5, 24, false);
// serviceItem2.delivery();
// serviceItem2.watchBook();
