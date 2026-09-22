let index=0
arr=[4, 9, 2, 9, 1];
let max=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
        index=i
    }


}
console.log(index)
console.log(max)