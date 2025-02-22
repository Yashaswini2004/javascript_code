const arr=[0,1,2,3];
arr.foo="hello";
for(let i in arr){
    console.log(i)
}
for(let i of arr){
    console.log(i);
}