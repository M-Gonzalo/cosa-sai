# Sample Documentation

## Functions

### Array Operations

`map()` creates a new array populated with the results of calling a provided function on every element in the array.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
// doubled: [2, 4, 6]
```

`filter()` creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x => x % 2 === 0);
// evens: [2, 4]
```

`reduce()` executes a reducer function on each element of the array, resulting in a single output value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// sum: 10
```

## Best Practices

### Array Operations

1. Use `map()` when you want to transform each element in an array
2. Use `filter()` when you want to select elements that meet certain criteria
3. Use `reduce()` when you want to combine all elements into a single value
4. Prefer array methods over loops for better readability and maintainability
5. Chain array methods for complex operations instead of nesting them