//일반 함수에서 this 바인딩 때문에 버그가 발생하는 경우
const obj = {
    value : 1,
    increase : () => {this.value++;}
};

obj.increase();
console.log(obj.value); // 2
const increase = obj.increase;
increase(); 
console.log(obj.value); //2