const cart = ["apple", "mango", "banana"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// this is how we an attach catch to handle any errors
// as you can see now we an see the error message in the form of user messages in console and not as an error

// This was about consuming a promise

// Now lets move to creating a Promise

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    const validateCart = validateCartfunc(cart);
    if (!validateCart) {
      const err = new Error("error validation");
      reject(err);
    }

    const orderId = 12314;
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function validateCartfunc(cart) {}

// Now as you guys can see if we are rejecting our promise i.e returning the false value in validatecartfucn, we can see the error in console but its a very bad thing, you should handle a error using catch() function , its the same way of then() then is used to fetch the return resovled value and catch is used to fetch the return rejected errros
