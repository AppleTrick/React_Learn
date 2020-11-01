const obj = {age : 21 , name :'mike' , grade : 'a'};
const {age , ...rest} =obj;
console.log(rest);