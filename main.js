function q(selector) {
  return document.querySelector(selector);
}

class Service {
  constructor(id, price, durationExtra, durationMin, durationMax, deliveryExtra, deliveryMin, deliveryMax, instagramOptimize) {
    this.id = document.querySelector(id);
    this.price = price;
    this.durationExtra = durationExtra;
    this.deliveryExtra = deliveryExtra;
    this.deliveryMin = deliveryMin;
    this.deliveryMax = deliveryMax;
    this.instagramOptimize = instagramOptimize;
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
}

let service1 = new Service(`#service-item-1`, 199, 90, 3, 5, 100, 24, 72, false);
service1.setup();
service1.duration();
service1.delivery();

let service2 = new Service(`#service-item-2`, 299, null, null, null, 100, 24, 72, false);
service2.setup();
service2.delivery();

let service3 = new Service(`#service-item-3`, 119, null, null, null, 100, 24, 72, false);
service3.setup();
service3.delivery();