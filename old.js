// Calculator for plans
// Author: Danila Ermolneko
// Telegram: @dlencode

// function qs(selector) {
//     return document.querySelector(`${selector}`);
// }

// function qsa(selector) {
//     return document.querySelectorAll(`${selector}`);
// }

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

// class Service {
//   constructor(element, price, extra, min, max, delivery, instagram) {
//       this.element = qs(`${element}`);
//       this.price = price;
//       this.extra = extra;
//       this.min = min;
//       this.max = max;
//       this.delivery = delivery;
//       this.instagram = instagram;
//       this.counterPrice = 0;
//   }

//   deliveryDuration(min, max) {
//     let deliveryValues = qsa(`.calculator--time`);
//     for (let i = 0; i < deliveryValues.length; i++) {
//         const deliveryItem = deliveryValues[i];
//         deliveryItem.innerHTML = `${min}h`;
//     }
//     let minus = qs(`.calculator--control__minus`);
//     let pluses = qsa(`.calculator--control__plus`);

//     for (let i = 0; i < pluses.length; i++) {        
//         const plusItem = pluses[i];
//         let time = plusItem.parentNode.querySelector(`.calculator--time`).innerHTML;
        
//         plusItem.addEventListener('click', (event) => {
//             console.log(min, max);
//             if (time.innerHTML < this.max) {
//                 time.innerHTML = max;
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
//   }
// }

// let serviceItem1 = new Service(`.service-item-1`, 199, 90, 3, 5, 24, false);
// serviceItem1.deliveryDuration(24, 72);
// let serviceItem2 = new Service(`.service-item-2`, 199, 90, 3, 5, 24, false);
// serviceItem2.deliveryDuration(24, 36);
// serviceItem1.duration();
// serviceItem1.watchBook();

// let serviceItem2 = new Service(`.service-item-1`, 199, 90, 3, 5, 24, false);
// serviceItem2.delivery();
// serviceItem2.watchBook();