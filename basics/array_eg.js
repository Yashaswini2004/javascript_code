const myArr=[10,1,2,3,4,5];
const myHeros=["shaktiman","spiderman","superman"];
const myArr2=new Array(1,2,3,4);
console.log(myArr[0]);
myArr.push(6);
myArr.unshift(98);
console.log(myArr.shift());
console.log(myArr.includes(3));
console.log(myArr.indexOf(10));
const newArr=myArr.join();
console.log(typeof newArr);
console.log(myArr.slice(1,4));
console.log(myArr.splice(1,4));
