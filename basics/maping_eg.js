const saying=new Map();
saying.set("yashaswini","student");
saying.set("nithin","student");
saying.set("chandan","student");
saying.set("manujula","student");
console.log(saying.size);
console.log(saying.has("yashaswini"));
saying.delete("yashaswini");
console.log(saying.has("yashaswini"));
for(const [key,value] of saying){
    console.log(`${key}:${value}`);
}
const arr=["yashu","nithi","yashu","nithi"];
const rpt=new Set(arr);
console.log(rpt);
const weak=new WeakMap();
const obj={name:"yashaswini"};
weak.set(obj,"use data");
console.log(weak.get(obj));