function Person(){
    this.age=0;
    setInterval(function(){
       let age=this.age++;
     console.log(age)
    },2000)
 }
 const p=new Person();