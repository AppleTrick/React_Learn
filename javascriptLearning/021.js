//일반 함수에서 this 바인딩 때문에 버그가 발생하는 경우
const obj = {
    value : 1,
    increase : function(){
        this.value++;
    }
};

obj.increase();
console.log(obj.value); // 2
// increase(); -> 오류 발생 window 객체를 가르키기 때문에 오류가 발생하게 됨
console.log(obj.value); //2

const aa = {
    name : '혁진',
    age : 26
}