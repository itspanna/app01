class ep {
    AInput?: HTMLInputElement | null;
    BInput?: HTMLInputElement | null;
    CInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml() {
        this.AInput = document.querySelector("#A");
        this.BInput = document.querySelector("#B");
        this.CInput = document.querySelector("#C");
        this.calcButton = document.querySelector("#calcButton");
    }

  getVolume(): number {
    return (4 / 3) * Math.PI * this.A * this.B * this.C;
  }

  getSurfaceArea(): number {
    const p = 1.6075; 
    return 4 * Math.PI * Math.pow(
      (Math.pow(this.A * this.B, p) + Math.pow(this.A * this.C, p) + Math.pow(this.B * this.C, p)) / 3,
      1 / p
    );
  }

}

new ep();