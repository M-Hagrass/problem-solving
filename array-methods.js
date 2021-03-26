/**1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true */

let is_array = function (param) {
  // return Array.isArray(param);
  // return param.constructor === Array ? true : false;
  return toString.call(param) === "[object Array]" ? true : false;
};

/**2. Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] */
let array_Clone = (param) => {
  // let nparam = param.map((i) => i);
  // let nparam = [...param];
  let nparam = param.slice(0);
  return nparam;
};

/**3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] */
let first = (param, n) => {
  if (!n) return param.slice(0, 1);
  if (n < 0) return [];

  return param.slice(0, n);
};

var first1 = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};

/**4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2] */

const last = (params, n) => {
  if (!n) return params[params.length - 1];
  return params.slice(-n);
};

var last1 = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

/**5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
console.log(myColor(["Red", "Green", "White", "Black"]));Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black" */

const myColor = (params) => {
  // return params.toString();
  // return params.join();
  return params.join("+");
};

/**6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.console.log(checkRemainder(0625468)); */

const checkRemainder = (n) => {
  // n = ("" + n).split("").map((i) => parseInt(i));
  n = n.toString();
  let i = 0,
    result = [];
  for (i; i < n.length; i++) {
    n[i] % 2 === 0 && n[i - 1] % 2 === 0
      ? result.push("-" + n[i])
      : result.push(n[i]);
  }
  return result.join("");
};

/**7. Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 311, 8, 7, 70, 6, 5, -4, -3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8 */

const sortArr = (params) => {
  return params.sort((a, b) => a - b);
};

/**8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
 var arr1 = ["a", "a", "a", 3, "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, 3, 3];
 Sample Output : a ( 5 times )
console.log(highest(arr1)); */

var arr1 = ["a", "a", "a", 3, "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, 3, 3];

const getFrequentItem = (params) => {
  let i = 0,
    ocurrences = {},
    biggestArrValue = params[0];
  for (i; i < params.length; i++) {
    let currentI = params[i];
    if (ocurrences[currentI]) ocurrences[currentI]++;
    else ocurrences[currentI] = 1;

    // if (ocurrences[currentI] > item) item = currentLI;
    if (ocurrences[biggestArrValue] < ocurrences[currentI])
      biggestArrValue = currentI;
  }
  return `The biggestArrValue is ${biggestArrValue} and the ocurrences are ${ocurrences[biggestArrValue]}`;
};

// from stck
function getMaxOcurrences(arr = []) {
  let item = arr[0];
  let ocurrencesMap = {};

  for (let i in arr) {
    const current = arr[i];

    if (ocurrencesMap[current]) ocurrencesMap[current]++;
    else ocurrencesMap[current] = 1;

    if (ocurrencesMap[item] < ocurrencesMap[current]) item = current;
  }

  return `The item is ${item} and the ocurrences are ${ocurrencesMap[item]}`;
  // return {
  //   item: item,
  //   ocurrences: ocurrencesMap[item],
  // };
}

// from W3
const highest1 = (arr1) => {
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
      if (arr1[i] == arr1[j]) m++;
      if (mf < m) {
        mf = m;
        item = arr1[i];
      }
    }
    m = 0;
  }
  // return item + " ( " + mf + " times ) ";
  return `The item is ${item} and the ocurrences are ${mf}`;
};

// let nested = [
//   ["arr0", 1, 2],
//   ["arr1", 3, 4],
//   ["arr2", 5, 6],
// ];
// for (let i = 0; i < nested.length; i++) {
//   for (let j = 0; j < nested[i].length; j++) {
//     console.log(nested[i][j]);
//   }
// }

/* function multiplyAll(arr) {
  var product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
        console.log(product);
      }
    } else {
      product *= arr[i];
    }
  }
  return product;
}

console.log("one", multiplyAll(arrOfNums));
console.log(
  "two",
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
); */

/**9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
console.log(swapChars("The Quick Brown Fox"));
console.log(swapChars1("The Quick Brown Fox"));
console.log(swapCase("The Quick Brown Fox"));
 */

const swapChars = (params) => {
  return params.replace(/([A-Z])|([a-z])/g, (match, g1) => {
    return g1 ? match.toLowerCase() : match.toUpperCase();
  });
};

function swapChars1(params) {
  let i = 0,
    arr = params.split(""),
    result = [];
  for (i; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase() && arr[i] !== " ")
      result.push(arr[i].toUpperCase());
    if (arr[i] === arr[i].toUpperCase()) result.push(arr[i].toLowerCase());
  }
  return result.join("");
}

const swapCase = ([...rest]) =>
  rest
    .map((item) =>
      item == item.toUpperCase() ? item.toLocaleLowerCase() : item.toUpperCase()
    )
    .join("");

/**10. Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1" */
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
const printNestedArr = (params = []) => {
  let i = 0;
  for (i; i < params.length; i++) {
    console.log("row " + i);
    for (let j = 0; j < params[i].length; j++) {
      console.log("" + params[i][j]);
    }
  }
};

// a sample 2-D array
/*for (let i in a) {
  console.log("row " + i);
  for (var j in a[i]) {
    console.log(" " + a[i][j]);
  }
}*/

/**11. Write a JavaScript program to find the sum of squares of a numeric vector. */

function sum_sq(array) {
  var sum = 0,
    i = array.length;
  while (i--) sum += Math.pow(array[i], 2);
  return sum;
}

console.log(sum_sq([0, 1, 2, 3, 4]));
