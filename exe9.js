Given=[1, 2, 3, 4]
let x=Given[0];
Given[0]=Given[Given.length-1];
Given[Given.length-1]=x
console.log(Given)
