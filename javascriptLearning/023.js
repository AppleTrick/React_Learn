function Somthing(){
    this.value = 1;
    this.increase = () => this.value++;
}

const obj = new Somthing();
obj.increase();
console.log(obj.value);
const increase = obj.increase;
increase();
console.log(obj.value);