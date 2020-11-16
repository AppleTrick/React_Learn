//태그된 템플릿 리터럴 
function taggedFunc(strings , ...expressions ){
    return 123;
}

const v1 = 10;
const v2 = 20;
const result = taggedFunc`a ${v1} b ${v2}`;
console.log(result);