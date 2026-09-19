let arr =[3, 9, 1, 7]
let min=arr[0]
for(let i=0;i<arr.length;i++){
    if (arr[i+1]<min){
        min=arr[i]; }
}
console.log(min)