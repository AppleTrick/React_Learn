Promise.resolve('foo')
  .then((string)=> {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        string += 'bar';
        console.log(string);
      }, 1000);
      console.log(string);
    });
  });

