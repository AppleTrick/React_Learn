function Somthing() {
    this.value =1;
    setInterval(function increase(){
        this.value++;
        console.log(this.value);
    }, 1000);
}
const obj = new Somthing();

//setInterval 함수 사용시 this 바인딩 문제