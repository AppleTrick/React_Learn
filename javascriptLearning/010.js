// 객체 비구조화에서의 기본값
const obj = {age : undefined , name : null , grade : 'a'};
const {age = 0 , name = 'noName', grade = 'F'} = obj;
console.log(age);
console.log(name);
console.log(grade);