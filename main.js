function q(selector) {
  return document.querySelector(selector);
}

class Service {
  constructor(
    id,
    price,
    durationExtra,
    deliveryExtra,
    deliveryMin,
    deliveryMax,
    instagramOptimize,
    durationMin,
    durationMax
  ) {
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

  // TODO:
  // Borders for right calculations

  duration() {
    let text = this.id.querySelector(
      `.calculator-service-duration .calculator--time`
    );
    text.innerHTML = `${this.durationMin}`;

    let minus = this.id.querySelector(
      `.calculator-service-duration .calculator--control__minus`
    );
    let plus = this.id.querySelector(
      `.calculator-service-duration .calculator--control__plus`
    );
    let extraPay = this.id.querySelector(
      `.calculator-service-duration .calculator-extra`
    );

    minus.classList.add(`calculator--control__non-active`);

    plus.addEventListener(`click`, () => {
      if (text.innerHTML < this.durationMax) {
        console.log(this.counter);
        ++text.innerHTML;
        ++this.counter;
        extraPay.innerHTML = `+$${this.durationExtra * this.counter}`;
        this.total.innerHTML = `${+this.total.innerHTML + this.durationExtra * this.counter}`;
        plus.classList.remove(`calculator--control__non-active`);
        minus.classList.remove(`calculator--control__non-active`);
      } if (text.innerHTML == this.durationMax) {
        plus.classList.add(`calculator--control__non-active`);
      }
    });
    // FIXME: fix not correctly calculations
    minus.addEventListener(`click`, () => {      
      if (text.innerHTML > this.durationMin) {
        console.log(this.counter);
        --text.innerHTML;
        --this.counter;
        this.total.innerHTML = `${+this.total.innerHTML - this.durationExtra * this.counter}`;
      } if (text.innerHTML == this.durationMin) {
        minus.classList.add(`calculator--control__non-active`);
        extraPay.innerHTML = ``;
      }
    });
  }

  delivery() {
    let text = this.id.querySelector(
      `.calculator-service-delivery .calculator--time`
    );
    text.innerHTML = `${this.deliveryMax}h`;

    let minus = this.id.querySelector(
      `.calculator-service-delivery .calculator--control__minus`
    );
    let plus = this.id.querySelector(
      `.calculator-service-delivery .calculator--control__plus`
    );
    let extraPay = this.id.querySelector(
      `.calculator-service-delivery .calculator-extra`
    );

    minus.addEventListener(`click`, () => {
      text.innerHTML = `${this.deliveryMin}h`;
      extraPay.innerHTML = `+$${this.deliveryExtra}`;
      this.total.innerHTML = `${+this.total.innerHTML + this.deliveryExtra}`;
    });

    plus.addEventListener(`click`, () => {
      text.innerHTML = `${this.deliveryMax}h`;
      extraPay.innerHTML = ``;
      this.total.innerHTML = `${+this.total.innerHTML - this.deliveryExtra}`;
    });
  }
}

let service1 = new Service(`#service-item-1`, 199, 90, 100, 24, 72, false, 3, 5);
service1.setup();
service1.duration();
service1.delivery();

let service2 = new Service(`#service-item-2`, 299, null, 100, 24, 72, false);
service2.setup();
service2.delivery();