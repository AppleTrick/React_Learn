// 객체 비구조화에서 속성명의 중요성

const obj = {age : 21 , name : 'park'}; //
const {age , name } =obj                // age : 21 , name : 'park;
const {name , age } = obj;              // age : 21 , name : 'park;
const {a ,b } =obj;                     // -> 결과갑 undefined

