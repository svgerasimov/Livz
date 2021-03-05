export const primary = {
  base: 'Helvetica',
  get regular() {
    return `${this.base}-Regular`;
  },
  get bold() {
    return `${this.base}-Bold`;
  },
  get light() {
    return `${this.base}-Light`;
  },
  get medium() {
    return `${this.base}-Medium`;
  },
};

export const size = {
  get title() {
    return this.veryBig;
  },
  get subTitle() {
    return this.system;
  },
  get btnText() {
    return this.regular;
  },

  veryBig: 27,
  big: 20,
  regular: 15,
  system: 14,
  small: 12,
  verySmall: 9,

  navBarTitle: 18,

  button: 18,
  buttonModal: 16,

  get inputFieldLabel() {
    return this.system;
  },
};
