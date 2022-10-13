const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arrOfChains: [],
  getLength() {
    return this.arrOfChains.length;
  },
  addLink(value) {
    this.arrOfChains.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position <= this.arrOfChains.length &&
      typeof(position) === "number" &&
      position > 0 &&
      !isNaN(position)
    ) {
      this.arrOfChains.splice(position);
    } else {
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.arrOfChains.reverse();
    return this;
  },
  finishChain() {
    let resultStr = this.arrOfChains.map((chain) => {
      return (chain = `( ${chain} )~~`);
    });
    return resultStr.join("").slice(0, -2);
  },
};

module.exports = {
  chainMaker,
};
