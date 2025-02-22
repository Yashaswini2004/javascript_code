function Person(){
    this.age=0;
    setInterval(function(){
     console.log(++age)
    },2000)
 }
 const Person=new Person();