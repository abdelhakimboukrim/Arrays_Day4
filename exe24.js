let arr=[10,30,1,10,7]
let min=arr[0]
let max =arr[0]
let sum=arr[0]
for (let i=1;i<arr.length;i++){
    sum=sum+arr[i]
    if(arr[i]>max)max=arr[i];
    if (arr[i]<min) min=arr[i];
    

}
console.log(sum)
console.log(sum/(arr.length))

console.log(min)
console.log(max)