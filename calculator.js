/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = (function() {

  //Private Variables
  var memory = 0;
  var total = 0;
  function isNumber (x){
      if (Number.isInteger(x)){
        return true;
      } else {
      throw (new Error('Input must be a number.'));
      }
    }

  //Public Variables (Everything in return is public)
  return {

    /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  load: function (x) {
    if (isNumber(x)) {
    total = x;
    return total;
    }
  },

  /**
   * Return the value of `total`
   * @return { Number }
   */
  getTotal: function (){
    return total;
  },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  add: function (x) {
    if (isNumber(x)) {
      return total += x;
    }
  },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  subtract: function (x) {
    if (isNumber(x)) {
      return total -= x;
    }
  },

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  multiply: function (x) {
    if (isNumber(x)) {
      return total *= x;
    }
  },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  divide: function (x) {
    if (isNumber(x)) {
      return total /= x;
    }
  },

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  recallMemory: function () {
    return memory;
  },

  /**
   * Stores the value of `total` to `memory`
   */
  saveMemory: function () {
    memory = total;
    return memory;
  },

  /**
   * Clear the value stored at `memory`
   */
   clearMemory: function () {
     memory = 0;
   }
  /**
   * Validation
   */
 };

});





