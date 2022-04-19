/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  return (Math.random() > 0.5) ? "heads" : "tails"
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  let ret = []
  for (var i=0; i < flips; i++) {
    ret.push(coinFlip())
  }
  return ret
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  var tailcount = 0
  var headcount = 0
  for (let i=0; i<array.length; i++) {
    if (array[i] == "heads") {
      headcount += 1;
    }
    if (array[i] == "tails") {
      tailcount += 1;
    }
  }
  if (tailcount == 0) {
    return {heads:headcount}
  }
  if (headcount == 0) {
    return {tails:tailcount}
  }
  return { tails: tailcount, heads: headcount}
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
   var flip = coinFlip()
   var res = ""
  if (flip == call) {
    var res = 'win'
  }
  if (flip != call) {
    var res = 'lose'
  }
  return {call: call, flip: flip, result: res}
}


/** Export 

 * Export all of your named functions
*/
// export function coinFlip(){}
// export function coinFlips(){}
// export function countFlips(){}
// export function flipACoin(){}
