'use strict'


const log = x => console.log(x);

const angelNumbersArray = [
222, 444, 1111, 1212, 222, 333, 222, 444, 111, 1111, 222, 333, 1111, 444,1111, 1616, 555, 111, 444, 111, 1111, 111, 1111, 222, 555, 555, 1222, 222, 333, 222, 111, 1414, 555, 222, 333, 111, 1010, 111, 222, 333, 555, 1212, 1111, 1414, 5555, 1010, 111, 222, 1111, 1111
];

// Create AngelNumberClass blueprint

class AngelNumberClass {
  // Constructor
  constructor(angelNumbers, counterArray = []) {
    this.angelNumbers = angelNumbers;
    this.counterArray = counterArray;
  };

  // all array numbers pushed to arrauy of Objects: { key : value }
  //output {'numStr': '111', 'numInt': 111}
  // methods used: new Map() and Object.fromEntries.

  numbersToObjectArray2(arr = [], obj) {
    angelNumbersArray.forEach(number => {
     arr.push(Object.fromEntries(new Map([['numStr', String(number)], ['numInt', number]])));
     // arr.push(Object.fromEntries(new Map([['number', number]])));

    });
    return arr;
  };

  // All array numbers to numbers object, { key : value }
  // Output: { '1111': 1111 }

  numbersToKeyValObj(arr = []) {
    angelNumbersArray.forEach(number => {
      arr.push([number, number]);
    });
    return Object.fromEntries(arr);
  };

  // Count all angel Numbers

  countAllAngelNumbers() {
    return this.angelNumbers.length;
  };

  // Sort all numbers by low numbers

  sortByLowNumbers() {
    return this.angelNumbers.sort();
  };

  // Sort all numbers by high numbers

  sortByHighNumbers() {
    return (this.angelNumbers.sort()).reverse();
  };

  // Sort by number length

  sortByNumberLength(number) {
    return (this.angelNumbers
    .filter(e => e.toString().length === number)).sort();
  };

  // Show the amount that all numbers have seen

  timesSeenAll() {
    // Converts numbers in array to a js object with
    // key value pairs of { "1111" : 50 }
    const arrayToObject = {};
    this.angelNumbers.forEach((angelNumber) =>
      arrayToObject[angelNumber] = (
      arrayToObject[angelNumber] || 0 ) + 1
    );
    return arrayToObject;
  };

  /*
  Next block of codes will use timesSeenAll()
  method and filter thru it. All results will be pushed to
  counterArray then counted.
  */

  // count the times seen, by number length.

  timesSeenbyNumberLength(number) {
    for (const angelNumber in this.timesSeenAll()) {
      if(angelNumber.length === number)
      this.counterArray.push(angelNumber);
    };
    return this.counterArray.length
  };

  // Number of times a specific number has been seen

  timesSeenBySpecificNumber(number) {
    return (this.sortByLowNumbers()
    .filter(angNum => angNum === number)).length
  };

};

// Create 'myArray' Object from ArrayClass blueprint

let myArray = new AngelNumberClass( angelNumbersArray );

// test class and method

//for(let num in myArray.test()){
  //log(typeof myArray.test()[num].numInt)
//};

log(myArray.numbersToObjectArray2());
