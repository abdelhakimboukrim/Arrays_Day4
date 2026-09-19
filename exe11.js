let arr=[1, 2, 4, 5];
let result=[];
for(let i=0;i<=arr.length-1;i++){
  result.push( arr[i]);
  if (arr[i]==2){
    result.push(3)
  }

}
console.log(result)