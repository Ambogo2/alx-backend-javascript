// creating the instance of WeakMap
const weakMap = new WeakMap();

// function to simulate API Query
function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the call count
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // If the count reaches 5 or more, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
