//명명된 매개변수의 사용 여부에 따른 가독성 비교
const numbers = [10,20,30,40];
const result1 = getValue(numbers , 5, 25);   // 매개변수의 의미가 보이지 않아 가독성이 떨어짐
const resutl2 = getValue({numbers, greaterThan :5, lessThan :25});  // 매개변수를 네이밍 하여 가독성 증가
