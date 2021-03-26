/*1. Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false */
let str =
    "My name is Mohamed Ali HaAgras hagras hagras number is +2-01005894953 and,,zip is..1234_ _ zip",
  num = 123,
  arr = [1, "2", 3],
  arrOfNums = [1, 2, 3, 4, 5],
  obj = { key1: "123", key2: "345", 232: 4545 },
  i = 0;

// Object.prototype.toString.call(input)
let is_string = (par) => {
  return Object.prototype.toString.call(par) === "[object String]"
    ? true
    : false;
  // return typeof par === 'string' ? true : false
};
// console.log(is_string(str));

/**2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false */

function isEmpty(str) {
  // (s) ? "false" : 'true'
  if (str) {
    return "false";
  } else {
    return "true";
  }
}

isEmpty2 = (str) => {
  !!str.trim();
};

is_Blank = function (input) {
  if (input.length === 0) return true;
  else return false;
};

String.prototype.isEmpty = function () {
  return this.length === 0 || !this.trim();
};

/*3. Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"] */

let string_to_array = (str) => {
  return str.trim().split(" ");
};

/*4. Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi */

truncate_string = function (str1, length) {
  if (str1.constructor === String && length > 0) {
    return str1.slice(0, length);
  }
};

let truncate_string1 = (value, length) => {
  return value.slice(0, length);
  // return value.substring(0, length)
  // return value.substr(0, length)
};

/*5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S." */

let abbrev_name = (str) => {
  let abbrev = str.trim().split(" ");
  abbrev =
    abbrev[0] +
    " " +
    abbrev[abbrev.length - 1].slice(0, 1).toUpperCase().concat(".");

  return abbrev;
};

abbrev_name1 = function (str1) {
  var split_names = str1.trim().split(" ");
  if (split_names.length > 1) {
    return (
      split_names[0] +
      " " +
      split_names[split_names.length - 1].charAt(0).toUpperCase() +
      "."
    );
  }
  return split_names[0];
};
// console.log(abbrev_name1(str));

/*6. Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com" */

protect_email = function (user_email) {
  var avg, splitted, part1, part2;
  splitted = user_email.split("@");
  part1 = splitted[0];
  avg = part1.length / 2;
  part1 = part1.substring(0, avg);
  part2 = splitted[1];
  return part1 + "...@" + part2;
};

// console.log(protect_email("robin_gsingh@example.com"));

/*7. Write a JavaScript function to parameterize a string. Go to the editor
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa" */

let string_parameterize = (param) => {
  return param
    .trim()
    .toLowerCase()
    .replace(/[^A-z0-9+]/g, "-");
};

string_parameterize1 = function (str1) {
  return str1
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/, "")
    .replace(/\s/g, "-");
};

/*8. Write a JavaScript function to capitalize the first letter of a string. Go to the editor
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises" */

let capitalize = function (param) {
  return `${param.charAt(0).toUpperCase()}${param.slice(1)}`;
  // return param.replace(param.charAt(0), param.charAt(0).toUpperCase());
};

capitalize1 = function (str1) {
  return str1.charAt(0).toUpperCase() + str1.slice(1);
};

/*9. Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
Test Data : console.log(capitalize_Words('js string exercises'));
"Js String Exercises" */

let capitalize_Words = (param) => {
  return param.toLowerCase().replace(/\b\w+/g, (each) => {
    return each.charAt(0).toUpperCase() + each.substr(1).toLowerCase();
  });
};

capitalize_Words1 = (param) => {
  let splitedWords = param.toLowerCase().split(" ");

  for (let i = 0; i < splitedWords.length; i++) {
    splitedWords[i] =
      splitedWords[i].charAt(0).toUpperCase() + splitedWords[i].slice(1);
  }
  return splitedWords.join(" ");
};

function capitalize_Words2(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/*10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC" */

let swapcase = (param) => {
  return param.replace(/([A-Z]+)|([a-z])/g, (match, g1, g2) => {
    // let toLower = txt.toLowerCase();
    return g2 ? match.toUpperCase() : match.toLowerCase();
  });
};

swapcase1 = function (str) {
  return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
};

/*11. Write a JavaScript function to convert a string into camel case.Go to the editor
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises" */

let camelize = (param) => {
  return param.replace(/\W+(.)/g, (match, g1) => {
    return g1.toUpperCase();
  });
};
// console.log(camelize(str));

/*12. Write a JavaScript function to uncamelize a string. Go to the editor
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world" */

uncamelize = function (str, separotor = " ") {
  return str.replace(/[\W+]?([A-Z])/g, (match, g1) => {
    return separotor + g1.toLowerCase();
  });
};
// console.log(uncamelize(str));

function uncamelize1(str, separator) {
  // Assume default separator is a single space.
  if (typeof separator == "undefined") {
    separator = " ";
  }
  // Replace all capital letters by separator followed by lowercase one
  var str = str.replace(/[A-Z]/g, function (letter) {
    return separator + letter.toLowerCase();
  });
  // Remove first separator
  return str.replace("/^" + separator + "/", "");
}
// console.log(uncamelize1(str));

/*13. Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!" */

let repeat = (param, count) => {
  count < 1 || typeof count !== "number" ? (count = 1) : count;
  return param.repeat(count);
};

/*14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));

"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."
Click me to see the solution. */

let insert = (fStr, Sstr, position) => {
  position < 1 || typeof position !== "number" ? (position = 0) : position;
  let fPart, sPart, result;

  fPart = fStr.slice(0, position);
  sPart = fStr.slice(position);
  result = Sstr ? fPart + Sstr + sPart : fStr;

  return result;
};

insert1 = function insert(main_string, ins_string, pos) {
  if (typeof pos == "undefined") {
    pos = 0;
  }
  if (typeof ins_string == "undefined") {
    ins_string = "";
  }
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
};

/*15. Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor
Test Data :
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
"1st"
"8th"
"301st"
"402nd" */

let humanize_format1 = (param) => {
  if (param === undefined) return "Not";

  param = param.toString();
  char = parseInt(param.charAt(param.length - 1));

  if (char === 1) return param + "st";
  if (char === 2) return param + "nd";
  if (char === 3) return param + "rd";
  return param + "th";
};

humanize_format = function humanize(num) {
  if (typeof num == "undefined") return "no";
  if (num % 100 >= 11 && num % 100 <= 13) return num + "th";

  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
  }
  return num + "th";
};

/** 16. Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. Go to the editor
Test Data :
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises."
"We are doing JS ..."
"We are doing !!" */

text_truncate = function (str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

/**17. Write a JavaScript function to chop a string into chunks of a given length. Go to the editor
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"] */

function string_chop1(string, count) {
  let data = "";
  let store = [];
  if (count === 0 || typeof count === "undefined") {
    return string;
  } else {
    for (let i = string.length; i >= 0; i--) {
      data = string.slice(0, count);
      store.push(data);
      string = string.replace(data, "");
      if (string.slice(-2) === store[store.length - 1]) {
        store.pop();
        break;
      }
    }
    return store;
  }
}

let string_chop2 = (a, b = 0) => {
  if (b === 0 || typeof b === "undefined") return a;
  return a.match(new RegExp("[a-zA-Z0-9]{" + b + "}", "gi"));
};

function string_chop(str, chars = str.length) {
  let arr = [];
  for (let start = 0; start < str.length; start += chars) {
    let elem = str.slice(start, start + chars);
    arr.push(elem);
  }
  return arr;
}

/*18. Write a JavaScript function to count the occurrence of a substring in a string.
 Go to the editor Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); Output :2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false)); Output :1 */

count = (str, sub) => {
  let reg = new RegExp(sub, "gi");
  return str.match(reg).length;
};

/*19. Write a JavaScript function to escape a HTML string. Go to the editor
Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;" */

function escape_HTML(html_str) {
  "use strict";
  return html_str.replace(/[&<>"]/g, function (tag) {
    var chars_to_replace = {
      "&": "&",
      "<": "<",
      ">": ">",
      '"': '"',
    };

    return chars_to_replace[tag] || tag;
  });
}
