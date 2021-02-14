module.exports = class UtilArray {
  /**
   * @param {string} label for show in console
   * @param {Array} list for use forEach
   * @method
   * @returns {void}
   */
  static printList(label, list) {
    list.forEach(item => console.log(`${label} ${item}`));
  }
}