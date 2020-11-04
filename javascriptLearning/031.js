const promise = new Promise((resolve, reject) => 
    resolve(10)
);
  
promise.then(function(value) {
    console.log(value);
    // 10
  }, function(reason) {
    console.log(reason);
  }).then(Undefined => {
      console.log(Undefined);
      // undefined
      return 2;
  }).then(two => {
      return two + 3;
  }).then(five => {
      console.log(five);
      // 5
  });
  
  promise.then(function(value) {
    console.log(value)
    // 10
  });