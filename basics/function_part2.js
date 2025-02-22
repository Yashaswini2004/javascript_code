(function(){
    console.log("Hii, Im yashaswini c");
})();

const getSquare=function(x){
    return x*x;
}
console.log(getSquare(3));

const num1=12;
const num2=4;
const name="yashaswini";
function multiply(){
    return num1*num2;
}

console.log(multiply());

function getScored(){
   const num1=2;
   const num2=3;
   function addScore(){
    console.log(`${name} scored ${num1+num2}`);
   }
   addScore();
}
console.log(getScored());

function multiply(a,b){
    b= typeof b!=="undefined"?b:1;
    const result=a*b;
    return result;
}
// console.log(multiply(5));
function multiply(multiplier,...args){
    return args.map((x)=> multiplier*x);
}
const num=multiply(2,1,2,3,4);
console.log(num);

const a=["Hydrogen","lithium","oxygen","Nytrogen"];
const a1=a.map(function(s){
    return s.length;
})
console.log(a1);
const a2=a.map((x)=>x.length);
console.log(a2);