const JsUser={
    name:"yashaswini",
    "full name":"yashaswini c",
    age:18,
    location:"tumkur",
    email:"yashaswini53@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// JsUser.email="Yashaswini@2004";
// console.log(JsUser["email"]);
// Object.freeze(JsUser);
// JsUser.email="yashaswinic31@gmail.com";
// console.log(JsUser["email"]);
 JsUser.greeting=function(){
    console.log("hii Javascript user");
 }
 JsUser.greetingTwo=function(){
    console.log(`Hii,${this.name}`);
 }
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());