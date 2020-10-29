const name = 'park';
const obj = {
    age : 21,
    name,
    getName() { 
        console.log(this.name);
    },
}

obj.getName();

function makePerson1(age,name){
    return {age : age , name : name}
}
function makePerson2(age,name){
    return {age ,name}
}