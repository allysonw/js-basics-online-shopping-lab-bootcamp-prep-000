function find(array, criteriaFn) {
  // initialize two variables, `current`, and `next`
  // `current` keeps track of the element that we're
  // currently on, just like we did when unpacking the
  // array above; `next` is itself an array that keeps
  // track of the elements (which might be arrays!) that
  // we haven't looked at yet
  let current = array
  let next = []

  // hey, a `while` loop! this loop will only
  // trigger if `current` is truthy — so when
  // we exhaust `next` and, below, attempt to
  // `shift()` `undefined` (when `next` is empty)
  // onto `current`, we'll exit the loop
  while (current) {
    // if `current` satisfies the `criteriaFn`, then
    // return it — recall that `return` will exit the
    // entire function!
    if (criteriaFn(current)) {
      return current;
    }

    // if `current` is an array, we want to push all of
    // its elements (which might be arrays) onto `next`
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    // if current is an object, push all its values onto `next` array
    else if ((typeof current === "object") && (current !== null)) {
      console.log("typeof current is: " + (typeof current) + " and current is: "  + current);
      console.log("Object.keys(current) is: " + (Object.keys(current)));
      console.log("and its length is: " + (Object.keys(current)).length);
      console.log("typeof length is: " + (typeof (Object.keys(current)).length));
      for (let i = 0; i < ((Object.keys(current)).length); i++) {
        console.log("i is " + i " at beginnign of loop");
        console.log("Current[i] is: " + current[i] + " at beginnign of loop");
        var keyName = Object.keys(current)[i]; // what if current[i] is an object?
        console.log("i: " + i + " keyName: " + keyName);
        var value = current[keyName];
        console.log("keyname is: " + keyName + " and value is: " + value);
        next.push(value);
      }
    }

    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
  }

  return null
}
