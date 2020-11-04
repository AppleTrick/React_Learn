function Something(){
    this.value = 1;
    setInterval(()=>{
        this.value++;
    },1000);
}
const obj = new Something();