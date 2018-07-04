function q(selector) {
  return document.querySelector(selector);
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
}

let service1 = new Service(`#service-item-1`, 199, 90, 3, 5, 100, 24, 72, false, null);
service1.setup();
service1.duration();
service1.delivery();

let service2 = new Service(`#service-item-2`, 299, null, null, null, 100, 24, 72, false, 100);
service2.setup();
service2.delivery();
service2.instagram();

let service3 = new Service(`#service-item-3`, 119, null, null, null, 100, 24, 72, false, 100);
service3.setup();
service3.delivery();
service3.instagram();