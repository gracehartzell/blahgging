# 7 October 2018
Today, I decided to backtrack in Codewars and do an 8kyu problem. The problem was pretty easy, but I 
did briefly get stuck on how to best put the pieces together. In doing so, I discovered the eval function 
which takes in a string and either evaluates an expression or executes statements (e.g. if given at least 
one JS statements). 
&nbsp;
Something that I never quite mastered (or practiced thoroughly, even) is pseudocode. 


# 8 October 2018, HTML/CSS
Today in the Frontend Masters course I'm doing I learned some interesting little bits:

* Monospace means that each letter is the same width
* Span takes a specific block of text that's within another tag (refresher)
* In CSS, you can make an ordered list appear as an unordered list (e.g. make numbers squares). 
This doesn't mean you should do it.
* You should almost never style something using its tag. If you're not sure, use a class. 
* **The Cascade**
When two things are considered equal in CSS, the one that comes last wins. For example:
```css
h1 {
    color: red;
}
h1 {
    color: green;
}
```
h1's color will be green. BUT, if one were to be more specific, that would win:
```css
.main-brand-3, .title-3 {
    color: red;
}

.title-3 {
    color: green;
}
```
h1 with the class of "title-3 main-brand-3" will be red. Must match everything in the selector.
Order matters: id > class > tag
* Not new, but avoid styling by id and especially by !important as much as possible. Sidenote, only 
one thing should have a specific id. 
* Pseudo-classes: 
```css
:hover
:focus
:first-child
:nth-child
```
[CSS tricks article](https://css-tricks.com/pseudo-class-selectors/).
* Wildcard selector: * selects everything. It's the easiest to overwrite.
* Not new, ./ means in the same directory. 
* If you want to h bave rigid corners meeting up (as in multiple divs), use fixed width and not flex. 

# 9 October, JavaScript
Don't write code that you don't plan on maintaining. Make it so that you can go back and read it and 
know exactly what it does. Code is communication.

Code is parsed into pieces and then threaded into the computer. 

# 10 October, Kyle Simpson's Intro to Programming

Terms: 
&nbsp;
* Source code (code) is a set of special instructions for what tasks the computer should/will perform. 
Needs a step to convert the readable code into the series of instructions (written in binary).
* Syntax & grammar: how to write a valid JS program, just like in English (or any language)
* Statement, typically ends with a semicolon (some do not, e.g. after if statements)
  * literal/intrinsic value - e.g. numbers
  * Don't always write a program that relies on the operator precedence. Make sure that the programmer 
  can easily understand it (add parenthesis!)
  * **Be kind to your future, elderly self**
* Executing a program: taking that source code and converting it into something that the next layer down 
knows what to do with
* **Compiled vs. Interpreted**: 
  * Compilation: more than one pass through the program
  * Interpretation: line by line from top to bottom
  * JS gets compiled for error checking (more of a compiled than interpreted)
* Errors: 
  * Static error: compiler calls out invalid syntax (you did something wrong)
  * Runtime error: syntax is correct but you tried to do something invalid with that (e.g. assign to 
  something that was read-only)
* Operators:
  * += add this to whatever the current value is 
* Types 
  * Strings - use for input and output AND how we deal with characters, e.g. "42"[0] = "4";
* Conversion v coercion:  
  * Explicit conversion: conversion that's obvious as to what you're trying to do (e.g. a to a string -> a = String(a);)
  * Implicit: not obvious. (e.g. a = a + "")

* **Variables do not have types; their value is what has the type**
* .toFixed - method available to all numbers in JS; formats as a string with a certain number of decimal places on it.
```js
let a = 3.5;
a.toFixed(2); // 3.50
```
* Argument v parameter:
  * Argument when you pass it in
  * Parameter when you declare it


# 11 October, From Fundamentals to Functional Programming (Bianca Gandalfo)
[**DAY 1 NOTES**](https://slides.com/bgando/f2f-final-day-1#/7/20)
[**DAY 2 NOTES**](https://slides.com/bgando/f2f-final-day-2#/)
On a non-JS note, I'm learning a lot about different styles of teaching and what methods I think are best. 
So far, I really like the styles on Frontend Masters and actually wish Galvanize would adopt more of the same 
approach that they have. That is, giving a lecture that explains the reasoning behind, use of, and alternatives 
to different topics and eventually giving an exercise to tie the pieces together. I appreciate what Galvanize 
does with simply turning the students loose on assignments; however, there aren't solutions presented afterwards 
and lectures are few and far between.

**A big part of being lost is figuring out what your question is. If you can't figure out your question, how are you to learn?** 
That is a huge struggle for me at Galvanize because when you're thrown into an assignment with minimal direction, 
it's difficult to figure out all of the bits of it in order to put it together and learn. 


* Destructuring: defining variables and then taking them outside of the object or array
```js
let obj = {first: "Dan", last: "Coelho"};
let first = obj.first;
let last = obj.last;
```
* Object.freeze won't throw an error if you try to reassign properties of the object but 
it won't let you reassign them.

* Spread operator (...): accumulates the rest of the values
* Things destructuring can do:
```js
//omit certain values
let [a, , b] = [1, 2, 3];
console.log(a, b) // 1 3 

// Combine with spread/rest operator
let [a, ...b] = [1, 2, 3];
console.log(a, b); // => 1 [2, 3]

// swap variables without temp
let a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b); // => 2 1
```

* ES6 feature: can add methods to objects (e.g. speak) does not require colons. 
* "Hydrating an object" taking a piece of data and turning it into a data structure
  * Take incoming data and turn it into an object or class

### forEach function

**Function does NOT return anything.**
Takes two arguments: a **list** and a **callback function (iterator function)**.
Calls the function on each item in the list. For example, switching a for loop to a _.each:

```js
for (let i = 0; i < suspects.length; i++) {
    suspectsList.push(CreateSuspectObjects(suspects[i]));
};

//vs. 
_.each(suspects, (name) => {
    suspectsList.push(CreateSuspectObjects(name));
});

```
(*Refer to the second section of the introPractice.js file (starting at line 57)*)


**_.each v. .forEach**
Using a function instead of a loop increases readability and helps to prevent errors. 

```js
// forEach is called on an array, after the array (method on the array): 
['observatory', 'ballroom', 'library']
  .forEach((value, index, list) => {...});

// _.each allows you to pass the arguments (take the array as an argument):
_.each(
    ['observatory', 'ballroom', 'library'],
    (value, index, list) => {...}
);

```

* each is useful for moving through a list. 
* _.each:
  * requires the **underscore library**. 
  * _ is an object 
  * works for arrays and objects
  * inside of callback function: **value, index, list** 


### map function

`_.map([1,2,3], function(v, i, list) {console.log(v)})`
  * Would return an array of length three (length of original array) of undefined values
* **Always returns an array. Take list and transform into new array.**
* Produces a new array of values by mapping each value in **list** through a transformation function (iterator)
* Each invocation of iterator is called with three argumentsL (element, index, list). If list is a JS object, 
iterator's arguments will be (value, key, list).


Example: 
```js
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const makeBroken = (item) => {
    return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);
console.log(brokenWeapons) // => 
```

### filter function
Function that takes an array in a callback and returns a new array that only contains the 
values that return true from the callback (**callback must return a Boolean**). 

Defined: 
```js 
_.filter = function(arr, cb) {
    // create new array
    const storage = [];
    // loop through arr
    _.each(arr, function(item, i, list) {
        if (cb(item, i, list) === true) {
            // if returns true, push into array
                storage.push(item);
            }
    })
    //return arr
    return storage;
}

// Using for loop:
_.filter = function(arr, cb) {
    // create new array
    const storage = [];
    // loop through arr
    for (let i = 0; i < arr.length; i++) {
        // check if cb returns true
        if (cb(arr[i], i, arr) === true) {
        // if returns true, push into array
            storage.push(arr[i]);
        }
    }
    //return arr
    return storage;
}

```



## Anatomy of a Function
* Function definition: says function, has parenthesis and brackets.
* console is an object, log is the function
* Expression v declaration
  * Declaration: when you're assigning it to a variable
  * Expression: named function
  * *Stylistic* choice based on scope
* return is a statement; $ is a function in jQuery
* body: inside of console.log's and in return statements.
* Invocation: when the function is being called (has the parenthesis)
* Arguments: names given value; Parameter: given upon definition of function
  * Function inside of forEach is an argument.

* Side Effects: anything that reaches beyond the curly brackets of a function
  * console.log is a side effect; reaches 
  * hide() will be a side effect because it's reaching into the DOM 

**Projecting**: When you take a value out of a data structure and turn it into another data structure

**Spread**

* Tuple: data structure that has a collection of arrays that have two values(?)

```js
const createTuple = (a, b, c, d) => {
    return [[a, c], [b,d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
// => ​​​​​[ [ 'It', 'could' ], [ 'be', 'anyone' ] ]​​​​​
```
* 'no one' wasn't picked up because there wasn't anything in the function to handle another item.

Implementing **spread operator**:
```js
const createTuple = (a, b, c, ...d) => {
    return [[a, c], [b,d]];
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
// => ​​​​​​​​​​​​​​​[ [ 'It', 'could' ], [ 'be', [ 'anyone', 'no one' ] ] ]​​​​​
```
* Spread operator gathers the extra arguments at the end and puts in an array.
* Pseudoarray - object that appears to be an array 

### Array-like Objects
Object that has numerical indices but doesn't have array methods on it. It does have a length 
but does not have push.
**ES5 Version**
```js
const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments); //** 
    arr.push('the billiards room?');
    return arr.join(' ');
};
constructArr('was', 'it', 'in');
```
** takes an array-like object and turns it into an array; referencing the slice method that comes 
with arrays and passing the argument pseudo-array as the content. 

**ES6 Version**
Array.from()
```js
const constructArr = function() {
    const arr = Array.from(arguments)
    arr.push('the billiards room?');
    return arr.join(' ');
};
constructArr('was', 'it', 'in');
```
('was', 'it', 'in') -> not an array, that's why this works and has to be used.

* .from -> can take iterables and gives them access to array methods

**Implementing from()**
```js
const from = arr => {
    return Array.prototype.slice.call(arr);
};
```

* Functions are objects!

## Scope
The area where a variable has access to some value.
  * Global - something that's available throughout the entire code base. Usually declared by not putting 
  var in front of it, or attach it directly to the window
  * Global variables and constants are somethings written in uppercase.
  * Function scope:  






# 22 October 2018, Getting Back on the Horse

Things I learned or refreshed today:
#### [Event Propagation](https://www.sitepoint.com/event-bubbling-javascript/)
* `event` is an object 
* the `event target` is the innermost element over which the click (or mouseover, etc.) originated
  * `event target` plus its ancestors (all the way back to the `window` object -- window is not a DOM 
  node but implements the `EventTarget` interface) form a branch in the DOM tree
* Branch determination is static -- established at the initial dispatch of the event -- and bidirectional: 
from the window to the event target and back. 

**Propagation Phases**:
1. **Capture Phase**: window to the event target parent
  * Only *capturer* listeners are called (i.e. listeners that were registered using a value `true` for 
  the third parameter of `addEventListener`, e.g. `el.addEventListener('click', listener, true`)). 
  * If true is omitted, default is false and listener is not a capturer
2. **Target Phase**: the event target itself
  * 
3. **Bubble Phase**: event target parent back to the window
* Differentiation between the phases is the type of listeners called

[**FormData**](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get):
function FormData that takes in an object -- new creates a new object 

**Understanding `new`**
* new instance of an object

Example:
```js
let louis = {
    name: "Louis",
    age: 28
};

let louis = new Person("Louis", 28);

// ES5:
function Person(name, age) {
    this.name: name,
    this.age: age
};

// ES6:
Class Person {
    constructor(name, age) {
        this.name: name,
        this.age: age
    };
};
```


# 23 October 2018, Creating a Framework

#### Questions I have: 
1. Why are some things in double objects? 
e.g. 
```js
<li class="user">
    <img class="user-photo" src="{{picture.thumbnail}}" alt="Photo of {{name.first}} {{name.last}}">
    <div class="user-name">{{name.first}} {{name.last}}</div>
    <div class="user-location">{{location.city}}, {{location.state}}</div>
    <div class="user-email">{{email}}</div>
</li>
```

2. Should you use innerHTML or innerText? Or is there a better option?
  * I've done some Googling 


#### Things I learned:
1. In my quest for finding the better option between `innerText` and `innerHTML`, I came across 
`insertAdjacentHTML(position, text)`. Pretty neat tool to use if you're just trying to add in information to an 
area without creating a different area for it.




# 24 October 2018, More Templating Practice
#### Word of the Day
* **Cantankerous**. Because that's how I'm feeling. This boil water mandate is a strong contributing 
factor to this. On the other hand, the weather is absolutely great-- dark grey skies, drizzly, and sub-65. 
A classmate likes to throw out their opinion on who's the most ahead, sometimes he's correct, most times 
he isn't quite there. A recurring theme today has been him calling out people who have gotten their work from me 
and for who knows what reason that has been irking me. 

#### Developments and Practice
* Today in developments, I've started being more aware of a line's character count. I typically use the word wrap, 
but the more I read on various websites (Github in particular) the more cantankerous I become since so many 
documents require you to scroll sideways in their block. 
* I found an article the other day that I really liked on template strings and want to save it for later. It's called [*Easy Creation of HTML with JavaScript’s Template Strings*](https://wesbos.com/template-strings-html/).


#### Learned Things:
1. **regex**: 
  * `?`: non-greedy match. Will match as little as possible-- stop at first possible match
  Practice example: 
  `{{ Missoula }} is a city in {{ Montana }} that is neat.`
  * `{{.*?}}`: Would match just `{{ Missoula }}`
  * `{{.*}}`: Would match `{{ Missoula }} is a city in {{ Montana }}`
  * `$1`: first thing that's captured 

2. Going over the `reduce()` method:
  * **Why it's used**: Used to apply a function to each element in an array in order to reduce it to a single value.
  Taken from a problem in class: 
  ```js
    function renderTemplate(templateString, data) {
        return templateString.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (match, p1) => 
            p1.split('.').reduce((acc, curr) => acc[curr], data)
        );
    }
  ```
* In this instance, reduce is used to apply the function to each element in the array to reduce it to a 
single value and return something new. This array will give the keys for the object to be applied to the 
returned data. If the desired data is nested, the function will be able to grab the second keys to get 
further into the object.
  * Passing data in as the starting point for the function. 
  * Example case if item were name.first -> 
    The split('.') would first break it into ['name', 'first'] next, reduce would take over and produce:

    | **acc**         | **curr**      |
    | --------------- |:-------------:|
    | data            | 'name'        |
    | data.name       | 'first'       |
    | data.name.first | --            |

#### Things I need to refresh (or go deeper with):
1. Fetch API and .then()/promises. 
2. Higher Order Functions. A nice article on [`reduce()`](https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc). 
    They also have similar articles on the other main ones (`map`, `filter`, `forEach`).


**Knowing WHEN to use something is easily as, if not more, important than knowing HOW**

# 25 October 2018, Components in Frameworks 
#### Word of the Day
* [**Framework**](https://skillcrush.com/2018/07/23/what-is-a-javascript-framework/): Probably should've 
started the week off with this word, but here goes: a JS framework is a tool for making JS coding faster 
and more efficient. The article I found breaks it down into much simpler terms: think of development as 
building a house. You could either make all of the materials from scratch (bricks, glass, countertops, toilet)
or you could purchase all of the pre-manufactured materials. While it would be pretty neat to build everything,
that's not exactly an efficient, safe, or wise thing to do. Frameworks are the store/supply company you go to
to get all of those materials that make your construction (and product) so much easier and better.

#### Developments and Practice
* Today, we jumped straight into components for a framework(/templating something?). Obviously, I'm still 
    not totally sure of what it is we're doing. I thought that I was somewhat engaged in it but as soon as 
    we switched to this components exercise, I got very lost again. As issue that I have with this is not 
    really knowing where to look or what exactly it is I'm looking for to learn about this so that I can 
    actually do and understand this exercise. The previous couple sentences kind of sums up my feelings 
    towards Galvanize's instruction. Yesterday, an instructor actually said that he realized 


#### Learned Things:
1. Used `npm install lite-server` today for the first time. I typically just go with 
`python -m SimpleHTTPServer` if I'm sticking to front-end but decided to switch it up.
Not entirely certain how I feel about it yet but it is nice to get some time with npm
and the package-locks.


#### Things I need to refresh:
1. Still not entirely sure what all to put as a parameter in a function. That's where a lot of confusion
    is coming from in the zinc framework exercise. 