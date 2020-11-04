function Somthing() {
    this.value =1;
    var that = this;
    setInterval(function increase(){
        that.value++;
        console.log(that.value);
    }, 1000);
}
const obj = new Somthing();

//es6 이전의 this 를 사용하기 위한 편법