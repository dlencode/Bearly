function q(selector) {
  return document.querySelector(selector);
}

function delay(f, ms) {
  return function () {
    let savedThis = this;
    let savedArgs = arguments;

    setTimeout(() => {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}

class Service {
  constructor(id, price, durationExtra, durationMin, durationMax, deliveryExtra, deliveryMin, deliveryMax, instagramOptimize, instagramOptimizeExtra) {
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

    this.total = this.id.querySelector(`.service-item__total span`);
    this.processingTotal = document.querySelector(`.processing-total span`);

    this.counter = 0;
  }

  setup() {
    let total = this.id.querySelector(`.service-item__total span`);
    total.innerHTML = this.price;
  }

  duration() {
    let text = this.id.querySelector(`.calculator-service-duration .calculator--time`);
    text.innerHTML = `${this.durationMin}`;

    let minus = this.id.querySelector(`.calculator-service-duration .calculator--control__minus`);
    let plus = this.id.querySelector(`.calculator-service-duration .calculator--control__plus`);
    let extraPay = this.id.querySelector(`.calculator-service-duration .calculator-extra`);

    let shooting = this.id.querySelector(`.calculator-shooting span`);

    minus.classList.add(`calculator--control__non-active`);

    let book = this.id.querySelector(`.booking`);

    plus.addEventListener(`click`, () => {
      if (text.innerHTML < this.durationMax) {
        ++this.counter;
        ++text.innerHTML;
        shooting.innerHTML = ++shooting.innerHTML;
        extraPay.innerHTML = `+$${this.durationExtra * this.counter}`;
        this.total.innerHTML = `${+this.total.innerHTML + this.durationExtra}`;
        plus.classList.remove(`calculator--control__non-active`);
        minus.classList.remove(`calculator--control__non-active`);
      } if (text.innerHTML == this.durationMax) {
        plus.classList.add(`calculator--control__non-active`);
      }
    });
    minus.addEventListener(`click`, () => {   
      if (text.innerHTML > this.durationMin) {
        --text.innerHTML;
        --this.counter;
        shooting.innerHTML = --shooting.innerHTML;
        extraPay.innerHTML = `+$${this.durationExtra * this.counter}`;
        this.total.innerHTML = `${+this.total.innerHTML - this.durationExtra}`;
        plus.classList.remove(`calculator--control__non-active`);
        minus.classList.remove(`calculator--control__non-active`);
      } 
      if (text.innerHTML == this.durationMin) {        
        minus.classList.add(`calculator--control__non-active`);
        extraPay.innerHTML = ``;
      }
    });
  }

  delivery() {
    let text = this.id.querySelector(`.calculator-service-delivery .calculator--time`);
    text.innerHTML = `${this.deliveryMax}`;

    let minus = this.id.querySelector(`.calculator-service-delivery .calculator--control__minus`);
    let plus = this.id.querySelector(`.calculator-service-delivery .calculator--control__plus`);
    let extraPay = this.id.querySelector(`.calculator-service-delivery .calculator-extra`);

    plus.classList.add(`calculator--control__non-active`);

    minus.addEventListener(`click`, () => {
      if (text.innerHTML > this.deliveryMin) {
        text.innerHTML = `${this.deliveryMin}`;
        extraPay.innerHTML = `+$${this.deliveryExtra}`;
        this.total.innerHTML = `${+this.total.innerHTML + this.deliveryExtra}`;
        plus.classList.remove(`calculator--control__non-active`);
        minus.classList.remove(`calculator--control__non-active`);
      } if (text.innerHTML == this.deliveryMin) {
        minus.classList.add(`calculator--control__non-active`);
      }
    });

    plus.addEventListener(`click`, () => {
      if (text.innerHTML < this.deliveryMax) {
        text.innerHTML = `${this.deliveryMax}`;
        extraPay.innerHTML = ``;
        this.total.innerHTML = `${+this.total.innerHTML - this.deliveryExtra}`;
        plus.classList.remove(`calculator--control__non-active`);
        minus.classList.remove(`calculator--control__non-active`);
      } if (text.innerHTML == this.deliveryMax) {
        plus.classList.add(`calculator--control__non-active`);
      }
    });
  }

  instagram() {
    let status = this.instagramOptimize;
    let toggle = this.id.querySelector(`.instagram-toggle`);
    let toggler = toggle.querySelector(`.instagram-toggle--status`);

    let extraPay = this.id.querySelector(`.instagram-toggle--extra`);

    toggle.addEventListener(`click`, () => {
      if (!status) {
        toggle.parentNode.classList.add(`toggle-active`);
        status = !status;
        // this.total.innerHTML = `${+this.total.innerHTML + this.instagramOptimizeExtra}`;
        // extraPay.innerHTML = `+$${this.instagramOptimizeExtra}`;
      } else {
        toggle.parentNode.classList.remove(`toggle-active`);
        status = !status;
        // this.total.innerHTML = `${+this.total.innerHTML - this.instagramOptimizeExtra}`;
      }
    });
  }

  book() {
    let selectedService = this.id;
    let booking = selectedService.querySelector(`.booking`);
    let selectedPlan = document.querySelector(`.selected-plan`);
    let pay = document.querySelector(`a.processing-actions--pay`);
    let paypalAddress = `https://paypal.me/dlencode/`;
    // let wrapper = document.querySelector(`.selected-plan .place-for-plan`);

    // let clone = selectedService.cloneNode(true);

    booking.addEventListener(`click`, () => {     
      this.processingTotal.innerHTML = ` $${this.total.innerHTML}`;
      // console.log(pay.getAttribute(href));
      
      pay.setAttribute(`href`, `${paypalAddress + this.total.innerHTML}usd/`)
      selectedPlan.classList.add(`selected-plan--active`);
      let closeButton = document.querySelector(`.processing-actions--close`);
      closeButton.addEventListener(`click`, () => {
        selectedPlan.classList.remove(`selected-plan--active`);
      });
      
      // selectedPlan.classList.add(`.selected-plan--active`);
      // let services = document.querySelectorAll(`.service-item`);
      // for (let i = 0; i < services.length; i++) {
      //   const service = services[i];
      //   service.classList.add(`service-item__fadeOut`);
      // }
    });

    //   setTimeout(function () {
    //     wrapper.appendChild(clone);
    //     clone.classList.add(`service-item__fadeIn`);
    //   }, 2000);      
  }
}

let nextStep = document.querySelector(`.processing-actions--next`);
let backStep = document.querySelector(`.processing-actions--back`);
let step2 = document.querySelector(`.step-2`);
let step3 = document.querySelector(`.step-3`);
backStep.addEventListener(`click`, () => {
  step2.classList.remove(`hide-step`);
  step3.classList.remove(`show-step`);
});
nextStep.addEventListener(`click`, () => {
  step2.classList.add(`hide-step`);
  step3.classList.add(`show-step`);
});


let service1 = new Service(`#service-item-1`, 199, 90, 3, 5, 100, 24, 72, false, null);
service1.setup();
service1.duration();
service1.delivery();
service1.book();

let service2 = new Service(`#service-item-2`, 299, null, null, null, 100, 24, 72, false, 100);
service2.setup();
service2.delivery();
service2.book();
service2.instagram();

let service3 = new Service(`#service-item-3`, 119, null, null, null, 100, 24, 72, false, 100);
service3.setup();
service3.delivery();
service3.book();
service3.instagram();