<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The output will be the empty object because the value of greeting is empty object! We are assgin the value of greeting is empty object and empty object is a strong assigable value for a variable! empty object is strong value is js because we initially assign a variable empty before the main value come. so the output will be "{}". The a variable name greeting and the then the variable is assign a value is empty object. then we are print the value and then the out is come as it is i assigned. But we have to know that the empty object is a value ! So that its print empty object as a value of greeting variable !</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here a is 1 (a number) and b is "2" and its a sting so here the function return the concatination value! not the sum because number and string cannot do summation and here we use + symbol, so js do concat because number and string cant do sum. so the output will be "12". Here is a funciton name sum and the funciton is take 2 value a and b. The value of a is 1 and the value of b is a string "2". the it return a value is a+b. here one is a number and one is string so, here the return value is concated and the final value will be string  "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Because the main array food is not change, its a default behavior of js, when i use the first index value as the the property of info object , then reassign the value of the info object key "favouriteFood" then its change the value of only info , not food, because the info is assigned already and then we assign the value of info.favourteFood. Thats why the value is not changed at food array. The default behaviour of the js is a miracle ! The main sentence is, we are just reassign the value of food.favouriteFood , its already assign one time and that is from food. then we assign it. the second time it affect the first assign, not he source. Thats why the value of food will be as it is!</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>First we have to know that when a variable is not assign or we are not set the value of a variable then the variable is undefined ! Because there is nothing! Its undefined ! So here is a function name "sayHi()". This function take a parameter called "name" and return the string litarels "Hi there, name". But here when we called the function, we are not pass the value thats why the funtion take it undefined value and it set the value of name is undefined and return it. Then the console.log print the value is "Hi there, undefined". Because the value of name it take undefined thats why its return undefinded and then print undefined!</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here is variable name count and its value is 0. and a array named nums and here have 4 index. we are use forEach and mapping the nums array, then one value come and if the value is true / have any value then the count is increase one and then it iterate . the loop is run 4 time then the value of count is iterate 0 then 1 then 2 then 3, then the final output are printed and the value will be 3. The main thing is here nums array is mapping 4 time by the forEach method and every time we increse the value of count is one. Then the final count value is come 3 because the the method is loop 4 time and the initial value of count is 3.</i>

</p>
</details>
