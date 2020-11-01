//객체 비구조화에서 별칭 사용하기
const obj = {age :21 , name : "lee"};
const {age : theAge , name } = obj;
console.log(theAge); // 21