let arr =[1, 2, 2, 3, 1, 4,4,4,7]
let test=[];

for(let i=0;i<arr.length;i++){
  let   temp=true
    for(let j=0;j<test.length;j++){
        if (arr[i]===test[j]) temp=false  ;
}
    if(temp){test.push(arr[i])}
}
console.log(test)