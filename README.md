# Instructions

## LinkedList
Create a class called `LinkedList` inside `linkedlist.js`. A LinkedList represents a collection of values. The LinkedList should be able to be instantiated with no parameters passed to its constructor i.e.:
```js
const linkedList = new LinkedList() // creates a new list with no values
```

LinkedList should contain the following instance methods/functions:
- `getLength()`: returns the length of the array. If the array is empty, it should return 0.
- `add(value)`: adds the value to the end of the list and returns nothing.
- `pop()`: removes the last element from the list and returns it. If the list is empty, `pop()` should return `null`.
- `print()`: returns the list as a string formatted as `"i -> i2 -> i3 -> ... -> null"`. If the list is empty `print()` should return the string "`null"`.

### Running the test suite
Run the follwing commands inside the `lessons` directory.
```bash
# install test framework packages
yarn install

# run the test script
yarn test
```

