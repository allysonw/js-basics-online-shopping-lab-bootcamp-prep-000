/*
  Function: find
  Parameters: 
    array - an array to search
    criteriaFn - a function whose return value we will search for
  Output:
    null if criteriaFn's return value is not found
    if it is found, returns the found value
*/

function find(array, criteriaFn) {
  // initialize two variables, `current`, and `next`
  // `current` keeps track of the element that we're
  // currently on
  // `next` is itself an array that keeps
  // track of the elements (arrays or objects) that 
  // we haven't looked at yet
  let current = array
  let next = []

  // Loop runs if current is either truthy, an object, or the number 0
  // If current === 0, 0 could be the match, so don't return null
  
  while (current || ((typeof current === "object") && (current !== null)) || current === 0) {
    // if `current` satisfies the `criteriaFn`, then return it
    console.log("starting loop.");
    console.log("At start of loop, typeof current is: " + (typeof current) + " and current is: "  + current);
    if (criteriaFn(current)) {
      console.log("match");
      return current;
    }

    // if `current` is an array, we want to push all of
    // its elements (which might be arrays) onto `next`
    if (Array.isArray(current)) {
      console.log("current is an array");
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
      console.log(`ARRAY - Next is: ${next} at end of if`);
      console.log(`ARRAY - Current is: ${current} at end of if`)
    }
    // if current is an object, push all its values onto `next` array
    else if ((typeof current === "object") && (current !== null)) {
      console.log("typeof current is: " + (typeof current) + " and current is: "  + current);
      console.log("Object.keys(current) is: " + (Object.keys(current)));
      console.log("and its length is: " + (Object.keys(current)).length);
      console.log("typeof length is: " + (typeof (Object.keys(current)).length));
      for (let i = 0; i < ((Object.keys(current)).length); i++) {
        console.log("i is " + i + " at beginning of loop");
        console.log("Object.keys(current) is: " + Object.keys(current))
        var keyName = Object.keys(current)[i]; // what if current[i] is an object?
        console.log("i: " + i + " keyName: " + keyName);
        var value = current[keyName];
        console.log("keyname is: " + keyName + " and value is: " + value);
        next.push(value);
      }
      console.log(`Next is: ${next} at end of elseif`);
      console.log(`LOOP RAN - Current is: ${current} at end of elseif`)
    }

    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
  }
  console.log("didn't find it");
  console.log("current is: " + current);
  return null
}
